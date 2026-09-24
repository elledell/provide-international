"use server";

export async function initiatePesapalPayment(amount: number, email: string, name: string) {
  const consumerKey = process.env.PESAPAL_CONSUMER_KEY?.trim();
  const consumerSecret = process.env.PESAPAL_CONSUMER_SECRET?.trim();

  if (!consumerKey || !consumerSecret) {
    console.error(
      "Pesapal credentials missing from environment. Check .env.local and restart the dev server."
    );
    return null;
  }

  try {
    // 1. Get the Authentication Token
    const authResponse = await fetch("https://cybqa.pesapal.com/pesapalv3/api/Auth/RequestToken", {
      method: "POST",
      headers: {
        "Accept": "application/json",
        "Content-Type": "application/json"
      },
      body: JSON.stringify({
        consumer_key: consumerKey,
        consumer_secret: consumerSecret
      })
    });

    const authData = await authResponse.json();
    console.log("Pesapal Auth Response:", authResponse.status, authData);

    const token = authData.token;

    if (!token) {
      console.error("Pesapal auth failed — no token returned:", authData);
      return null;
    }

    // 2. Register a dynamically unique IPN URL to bypass "Already Registered" errors
    const uniqueIpnUrl = `https://example.com/ipn/${Date.now()}`;
    const ipnResponse = await fetch("https://cybqa.pesapal.com/pesapalv3/api/URLSetup/RegisterIPN", {
      method: "POST",
      headers: {
        "Accept": "application/json",
        "Content-Type": "application/json",
        "Authorization": `Bearer ${token}`
      },
      body: JSON.stringify({
        url: uniqueIpnUrl,
        ipn_notification_type: "GET" // Specifies the HTTP method for IPN alerts
      })
    });

    const ipnData = await ipnResponse.json();
    console.log("Pesapal IPN Response:", ipnResponse.status, ipnData);

    if (ipnData.error) {
      console.error("Pesapal IPN Registration Failed:", ipnData.error);
      return null;
    }

    const notificationId = ipnData.ipn_id;

    if (!notificationId) {
      console.error("Pesapal IPN registration did not return an ipn_id:", ipnData);
      return null;
    }

    // 3. Submit the Order Request with complete billing details
    const orderResponse = await fetch("https://cybqa.pesapal.com/pesapalv3/api/Transactions/SubmitOrderRequest", {
      method: "POST",
      headers: {
        "Accept": "application/json",
        "Content-Type": "application/json",
        "Authorization": `Bearer ${token}`
      },
      body: JSON.stringify({
        id: `PROVIDE-${Date.now()}`,
        currency: "KES",
        amount: amount,
        description: "Donation for Korogocho Nutrition Program",
        callback_url: "http://localhost:3000/thank-you",
        notification_id: notificationId,
        billing_address: {
          email_address: email,
          phone_number: "0700000000",
          country_code: "KE",
          first_name: name,
          last_name: "Donor"
        }
      })
    });

    const orderData = await orderResponse.json();
    console.log("Pesapal Order Response:", orderResponse.status, orderData);

    if (orderData.error) {
      console.error("Pesapal Order Submission Failed:", orderData.error);
      return null;
    }

    // 4. Return the generated checkout link
    return orderData.redirect_url;

  } catch (error) {
    console.error("Server Action Exception:", error);
    return null;
  }
}
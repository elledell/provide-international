import type { Metadata } from "next";
import "./globals.css";
import { ConvexClientProvider } from "./ConvexClientProvider";
import AccessibilityWidget from "@/components/AccessibilityWidget";

export const metadata: Metadata = {
  title: "Provide International - Demo",
  description: "Demo site for Provide International charity organization.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="m-0 p-0 antialiased bg-white">
        {/* 
          The Bulletproof Mobile Wrapper: 
          This div acts as the true boundary of your app, completely blocking 
          horizontal scrolling caused by off-screen animations and widgets. 
        */}
        <div className="relative w-full max-w-[100vw] overflow-x-hidden min-h-screen flex flex-col">
          <AccessibilityWidget />
          <ConvexClientProvider>{children}</ConvexClientProvider>
        </div>
      </body>
    </html>
  );
}
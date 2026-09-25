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
  // Applied strict overflow and max-width to the HTML and Body tags
  return (
    <html lang="en" className="overflow-x-hidden max-w-[100vw]">
      <body className="overflow-x-hidden max-w-[100vw] w-full relative m-0 p-0">
        <AccessibilityWidget />
        <ConvexClientProvider>{children}</ConvexClientProvider>
      </body>
    </html>
  );
}
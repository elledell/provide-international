import type { Metadata } from "next";
import "./globals.css";
import { ConvexClientProvider } from "./ConvexClientProvider";
import AccessibilityWidget from "@/components/AccessibilityWidget"; // Adjust the import path if your components folder is located elsewhere

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
      <body>
        <AccessibilityWidget />
        <ConvexClientProvider>{children}</ConvexClientProvider>
      </body>
    </html>
  );
}
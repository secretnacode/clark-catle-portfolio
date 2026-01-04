import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Clark's Portfolio",
  description: "See Clark's previous personal projects in Clark's Portfolio",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}

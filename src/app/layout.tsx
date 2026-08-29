import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Muzamil Hassan — Full-Stack Developer",
  description:
    "The digital portfolio and developer experience of Muzamil Hassan.",
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
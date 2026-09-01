import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Muzamil Hassan — Full-Stack Web Developer",
  description:
    "Portfolio of Muzamil Hassan, a Software Engineering student and Full-Stack Web Developer.",
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
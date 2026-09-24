import type { Metadata, Viewport } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: {
    default: "Muzamil Hassan — Software Engineer & Web Developer",
    template: "%s | Muzamil Hassan",
  },

  description:
    "Muzamil Hassan is a Software Engineering student and web developer building modern, responsive and interactive digital experiences with Next.js, React, TypeScript and JavaScript.",

  applicationName: "Muzamil Hassan",

  authors: [
    {
      name: "Muzamil Hassan",
    },
  ],

  creator: "Muzamil Hassan",
  publisher: "Muzamil Hassan",

  keywords: [
    "Muzamil Hassan",
    "Software Engineering",
    "Web Developer",
    "Full-Stack Developer",
    "Next.js Developer",
    "React Developer",
    "TypeScript Developer",
    "JavaScript Developer",
    "Frontend Developer",
    "Web Development",
    "Three.js",
    "Pakistan Developer",
  ],

  referrer: "origin-when-cross-origin",

  robots: {
    index: true,
    follow: true,

    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
      "max-video-preview": -1,
    },
  },

  openGraph: {
    type: "website",
    locale: "en_US",
    siteName: "Muzamil Hassan",
    title: "Muzamil Hassan — Software Engineer & Web Developer",
    description:
      "Portfolio of Muzamil Hassan — Software Engineering student and web developer building modern digital experiences.",
  },

  twitter: {
    card: "summary_large_image",
    title: "Muzamil Hassan — Software Engineer & Web Developer",
    description:
      "Portfolio of Muzamil Hassan — Software Engineering student and web developer building modern digital experiences.",
  },
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  colorScheme: "dark",
  themeColor: "#030506",
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
import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "TrustValue Headless CMS — Editorial & Governance Core",
  description: "Enterprise Headless CMS and Subdomain Governance Platform for TrustValue.ai",
  robots: {
    index: false,
    follow: false,
    nocache: true,
    googleBot: {
      index: false,
      follow: false,
      noimageindex: true,
    },
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        <meta name="robots" content="noindex, nofollow" />
      </head>
      <body>{children}</body>
    </html>
  );
}

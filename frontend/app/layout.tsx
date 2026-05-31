import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "TraCro — Define Your Peak",
  description:
      "The intelligent fitness tracking platform. Analytics, performance insights, and peak training science — built for athletes who mean it.",
};

export default function RootLayout({
                                     children,
                                   }: {
  children: React.ReactNode;
}) {
  return (
      <html lang="en" className="scroll-smooth">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
            rel="preconnect"
            href="https://fonts.gstatic.com"
            crossOrigin="anonymous"
        />
        <link
            href="https://fonts.googleapis.com/css2?family=Bebas+Neue&family=Outfit:wght@300;400;500;600;700&display=swap"
            rel="stylesheet"
        />
      </head>
      <body className="antialiased">{children}</body>
      </html>
  );
}
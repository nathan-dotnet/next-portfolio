import type { Metadata, Viewport } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Nathaniel Lucero — Full Stack Developer",
  description:
    "Portfolio of Nathaniel Lucero, Full Stack Developer from Zambales, Philippines. Industrial IoT, PLC integration, real-time systems.",
  icons: {
    icon: "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 64 64'%3E%3Crect width='64' height='64' rx='12' fill='%230d0f12'/%3E%3Ctext x='32' y='42' font-family='monospace' font-size='26' font-weight='700' fill='%238fb6d9' text-anchor='middle'%3ENL%3C/text%3E%3C/svg%3E",
  },
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  themeColor: "#0d0f12",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Space+Grotesk:wght@400;500;600;700&family=JetBrains+Mono:wght@400;600&family=Caveat:wght@600;700&family=Lora:wght@500;600&display=swap"
          rel="stylesheet"
        />
      </head>
      <body className="loading" suppressHydrationWarning>
        {children}
      </body>
    </html>
  );
}

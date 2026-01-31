import { Inter } from "next/font/google";
import "./globals.css";
import { Analytics } from "@vercel/analytics/next";
import ThemeWrapper from "./components/ThemeWrapper";
import Header from "./components/Header";

const inter = Inter({
  subsets: ["latin"],
  display: 'swap',
  preload: true,
});

export const metadata = {
  title: "Neha Sharma - Frontend Developer",
  description: "Portfolio of Neha Sharma - Frontend Developer specializing in React, Next.js, and modern web technologies",
  keywords: ["Frontend Developer", "React", "Next.js", "Web Developer", "JavaScript", "Portfolio"],
  authors: [{ name: "Neha Sharma" }],
  openGraph: {
    title: "Neha Sharma - Frontend Developer",
    description: "Portfolio of Neha Sharma - Frontend Developer",
    type: "website",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  verification: {
    // Add your verification codes when ready
    // google: 'your-google-verification-code',
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className="scroll-smooth" suppressHydrationWarning={true}>
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link rel="dns-prefetch" href="https://fonts.googleapis.com" />
        <link rel="dns-prefetch" href="https://fonts.gstatic.com" />
        <link rel="manifest" href="/manifest.json" />
        <meta name="theme-color" content="#6366f1" />
        <meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=5" />
      </head>
      <body className={inter.className} suppressHydrationWarning={true}>
        <ThemeWrapper>
          <Header />
          {children}
        </ThemeWrapper>
        <Analytics />
      </body>
    </html>
  );
}

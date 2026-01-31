import { Inter } from "next/font/google";
import "./globals.css";
import { Analytics } from "@vercel/analytics/next";
import ThemeWrapper from "./components/ThemeWrapper";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Neha Sharma - Frontend Developer",
  description: "Portfolio of Neha Sharma - Frontend Developer specializing in React, Next.js, and modern web technologies",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className="scroll-smooth" suppressHydrationWarning={true}>
      <body className={inter.className} suppressHydrationWarning={true}>
        <ThemeWrapper>
          {children}
        </ThemeWrapper>
        <Analytics />
      </body>
    </html>
  );
}

import { Inter } from "next/font/google";
import "./globals.css";
import { Analytics } from "@vercel/analytics/next"

import Header from "./components/Header.jsx";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Neha Sharma",
  description: "Neha Sharma Portfolio",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className={inter.className} suppressHydrationWarning={true}>
        <Header />
        <Analytics />
        <div className="pt-20">
          {children}
        </div>
      </body>
    </html>
  );
}

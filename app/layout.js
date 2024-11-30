import { Inter } from "next/font/google";
import "./globals.css";

import Header from "./components/Header.jsx";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Neha Sharma",
  description: "Neha Sharma Portfolio",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className} suppressHydrationWarning={true}>
        <Header />
        {children}
      </body>
    </html>
  );
}

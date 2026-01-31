"use client";
import { ThemeProvider } from "../context/ThemeContext";
import Header from "./Header";

export default function ThemeWrapper({ children }) {
    return (
        <ThemeProvider>
            <Header />
            {children}
        </ThemeProvider>
    );
}

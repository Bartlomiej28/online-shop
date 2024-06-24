import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "@/Components/Navbar";
import Footer from "@/Components/Footer";
import ShoppingCart from "@/Components/ShoppingCart";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "BBShop",
  description: "Sklep internetowy z modnymi ubraniami dla mężczyzn. Odkryj najnowsze trendy, wysokiej jakości materiały i atrakcyjne ceny. Zakupy online nigdy nie były prostsze!",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className="min-h-screen flex flex-col justify-between">
        <Navbar />
        <ShoppingCart />
        <main className="flex-grow">{children}</main>
        <Footer />
      </body>
    </html>
  );
}

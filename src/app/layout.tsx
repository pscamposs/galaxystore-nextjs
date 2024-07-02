"use client";
import { Inter } from "next/font/google";
import "./globals.css";
import Header from "./components/Header";
import Footer from "./components/Footer";
import ModalContextProvider from "./context/use-modal-context";

const inter = Inter({ subsets: ["latin"] });

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-br">
      <body className={inter.className}>
        <ModalContextProvider>
          <Header />
          {children}
          <Footer />
        </ModalContextProvider>
      </body>
    </html>
  );
}

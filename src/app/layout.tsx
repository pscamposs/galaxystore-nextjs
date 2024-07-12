"use client";
import { Inter } from "next/font/google";
import "./globals.css";
import Header from "../components/Header";
import Footer from "../components/Footer";
import ModalContextProvider from "../context/use-modal-context";
import { QueryClientProvider } from "@tanstack/react-query";
import queryClient from "@/services/queryClient";
import { CartContexProvider } from "@/context/use-cart-context";
import { FilterProvider } from "@/context/use-filter-context";
import { SessionProvider } from "next-auth/react";

const inter = Inter({ subsets: ["latin"] });

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-br">
      <body className={inter.className}>
        <QueryClientProvider client={queryClient}>
          <SessionProvider>
            <FilterProvider>
              <CartContexProvider>
                <ModalContextProvider>
                  <Header />
                  {children}
                  {/*<Footer /> */}
                </ModalContextProvider>
              </CartContexProvider>
            </FilterProvider>
          </SessionProvider>
        </QueryClientProvider>
      </body>
    </html>
  );
}

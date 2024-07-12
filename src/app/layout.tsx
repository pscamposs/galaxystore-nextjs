"use client";
import { Inter } from "next/font/google";
import "./globals.css";
import Header from "../components/Header";
import Footer from "../components/Footer";
import ModalContextProvider from "../context/use-modal-context";
import { QueryClientProvider } from "@tanstack/react-query";
import queryClient from "@/services/queryClient";
import { FilterProvider } from "@/context/use-filter-context";
import { SessionProvider } from "next-auth/react";
import { ClientOnly } from "@/context/clientOnly";
import { CartContexProvider } from "@/context/use-cart-context";

const inter = Inter({ subsets: ["latin"] });

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-br">
      <body className={inter.className}>
        <ClientOnly>
          <CartContexProvider>
            <QueryClientProvider client={queryClient}>
              <SessionProvider>
                <FilterProvider>
                  <ModalContextProvider>
                    <Header />
                    {children}
                    {/*<Footer /> */}
                  </ModalContextProvider>
                </FilterProvider>
              </SessionProvider>
            </QueryClientProvider>
          </CartContexProvider>
        </ClientOnly>
      </body>
    </html>
  );
}

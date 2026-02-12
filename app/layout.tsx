import React from "react"
import type { Metadata, Viewport } from "next";
import { Inter, Oswald } from "next/font/google";

import "./globals.css";

const _inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

const _oswald = Oswald({
  subsets: ["latin"],
  variable: "--font-oswald",
});

export const metadata: Metadata = {
  title: "D'POLI Boutique",
  icons: {
    icon: "/placeholder-logo.svg",
  },
  description:
    "Moda urbana premium, tenis y streetwear para hombres. Compra lo ultimo en tenis, camisetas, jeans, gorras y mas en D'POLI Boutique. Envios a domicilio. Los Tres Brazos, Santo Domingo Norte, RD.",
};

export const viewport: Viewport = {
  themeColor: "#0d0d0d",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es" className={`${_inter.variable} ${_oswald.variable}`}>
      <body className="font-sans antialiased">{children}</body>
    </html>
  );
}

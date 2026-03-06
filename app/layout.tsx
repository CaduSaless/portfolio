import type { Metadata } from "next";
import { Inter, JetBrains_Mono } from 'next/font/google';
import "./globals.css";
import Link from "next/link"
import Header from '@/components/header/'

export const metadata: Metadata = {
  title: "Carlos Sales DEV Portfólio",
  description: "Next JS React JS Node JS Flask Python Programação WEB Design Desenvolvedor Full Stack Frontend Backend Portfólio Programador",
};

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-da-inter', // Define uma variável CSS
  display: 'swap',
});

const jetbrainsMono = JetBrains_Mono({
  subsets: ['latin'],
  variable: '--font-do-mono',
  display: 'swap',
});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${inter.variable} ${jetbrainsMono.variable} antialiased relative h-dvh`}
      >
        <Header/>
        <main>
          {children}
        </main>
      </body>
    </html>
  );
}

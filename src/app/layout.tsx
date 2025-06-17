import type { Metadata } from "next";
import localFont from 'next/font/local';
import "./globals.css";
import { LoadingWrapper } from "@/components/loadingWrapper/loadingWrapper";


const switzer = localFont({
  src: [
    {
      path: './fonts/switzer/fonts/Switzer-Variable.woff2',
      weight: '100 900',
      style: 'normal',
    },
    {
      path: './fonts/switzer/fonts/Switzer-Variable.woff2',
      weight: '100 900',
      style: 'italic',
    },
  ],
  variable: '--font-switzer',
});

export const metadata: Metadata = {
  title: "Salami Azeez's portfolio",
  description: "Welcome to my portfolio",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${switzer.variable} antialiased`}
      >
        <LoadingWrapper children={children} />
      </body>
    </html>
  );
}

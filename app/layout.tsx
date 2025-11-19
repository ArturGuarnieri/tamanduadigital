import type { Metadata } from "next";
import { Nunito, Madimi_One } from "next/font/google";
import "./globals.css";

const nunito = Nunito({
  variable: "--font-nunito",
  subsets: ["latin"],
  display: "swap",
});

const madimiOne = Madimi_One({
  variable: "--font-madimi-one",
  subsets: ["latin"],
  weight: "400",
});

export const metadata: Metadata = {
  title: "Tamanduá Digital",
  description: "Build your personalised website with a specialised team.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${nunito.variable} ${madimiOne.variable} antialiased dark`}
      >
        {children}
      </body>
    </html>
  );
}

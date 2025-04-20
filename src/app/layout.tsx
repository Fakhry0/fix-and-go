import type { Metadata } from "next";
import { Cairo } from "next/font/google";
import "./globals.css";

const cairo = Cairo({
  subsets: ['arabic'],
  weight: ['400', '600', '700', '900'],
  variable: '--font-cairo',
});

export const metadata: Metadata = {
  title: "FIX & GO - خدمات السيارات",
  description: "موقع فيكس أند جو لخدمات صيانة وإصلاح السيارات في مصر",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ar" dir="rtl">
      <body className={`${cairo.variable} font-cairo antialiased bg-light-gray`}>
        {children}
      </body>
    </html>
  );
}

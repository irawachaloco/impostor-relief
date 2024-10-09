import type { Metadata } from "next";
// import localFont from "next/font/local";
import "./globals.scss";
import NavBar from "./components/NavBar";
import BreadCrumb from "./components/BreadCrumb";

// const geistSans = localFont({
//   src: "./fonts/GeistVF.woff",
//   variable: "--font-geist-sans",
//   weight: "100 900",
// });
// const geistMono = localFont({
//   src: "./fonts/GeistMonoVF.woff",
//   variable: "--font-geist-mono",
//   weight: "100 900",
// });

export const metadata: Metadata = {
  title: "Impostor Relief",
  description: "Let's get impostorie",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
      // className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <NavBar />
        <div className="items-center justify-items-center min-h-screen_ p-8_ pb-20 gap-16 sm:px-20 sm:pt-4 sm:pb-20 font-[family-name:var(--font-geist-sans)]">
          <BreadCrumb />

          {children}
        </div>
      </body>
    </html>
  );
}

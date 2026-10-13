import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Toaster } from "react-hot-toast";
import SocialLoginToast from "@/components/SocialLoginToast";
import LoadingBar from "@/components/LoadingBar";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "বাজার দর | BazarDor",
  description:
    "বাজার দর - প্রয়োজনীয় পণ্যের বর্তমান বাজার মূল্য ও বিভিন্ন বাজারের দাম তুলনা করুন।",
};

export const instant = false;

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="bn"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">
        <LoadingBar />

        <Navbar />

        {children}

        <Footer />

        <Toaster position="top-center" />

        <SocialLoginToast />
      </body>
    </html>
  );
}

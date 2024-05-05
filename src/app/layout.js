import { Inter } from "next/font/google";
import "./globals.css";
import DashboardLayout from "@/layouts/dashboard";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Expense Tracker",
  description: "Track all your income and expenses in one place.",
  manifest: "/manifest.json",
  icons: {
    icon: [
      "/icons/favicon-16x16.png",
      "/icons/favicon-32x32.png",
      "/icons/android-chrome-512x512.png",
    ],
    shortcut: "/icons/favicon.ico",
    apple: "/icons/apple-touch-icon.png",
    other: {
      rel: "apple-touch-icon-precomposed",
      url: "/apple-touch-icon-precomposed.png",
    },
  },
};

export const viewport = {
  themeColor: "#38315D",
  width: "device-width",
  initialScale: 1.0,
  maximumScale: 1.0,
  userScalable: false,
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className="dark">
      <body
        className={`${inter.className} max-w-md mx-auto bg-gray-800 h-dvh flex flex-col relative`}
      >
        <DashboardLayout>{children}</DashboardLayout>
      </body>
    </html>
  );
}

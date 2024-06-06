import { Inter } from "next/font/google";
import "./globals.css";
import { UserProvider } from "@/context/user";

import { Toaster } from "@/components/ui/sonner";

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
  themeColor: "#101827",
  width: "device-width",
  initialScale: 1.0,
  maximumScale: 1.0,
  userScalable: false,
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className="dark">
      <body
        className={`${inter.className} bg-gray-900 h-dvh flex flex-col relative`}
      >
        <UserProvider>
          <Toaster />
          <div className="max-w-md mx-auto h-full w-full">{children}</div>
        </UserProvider>
      </body>
    </html>
  );
}

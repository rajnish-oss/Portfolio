import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { Analytics } from "@vercel/analytics/next"

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "Rajnish.xio",
  description: "My portfolio site",
  icons:{
    icon:"/miniMe.png"
  }
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className="">
      <body
        className={`${geistSans.variable} ${geistMono.variable} bg-[#010101] flex justify-center items-center antialiased`}
      >
        {children}
        <Analytics />
      </body>
    </html>
  );
}

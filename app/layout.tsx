import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Weekly Volunteer Deployment Schedule Dashboard",
  description: "Interactive dashboard for managing weekly volunteer deployments across multiple zones. Created by Ashrit Virmani.",
  authors: [{ name: "Ashrit Virmani" }],
  creator: "Ashrit Virmani",
  openGraph: {
    title: "Weekly Volunteer Deployment Schedule Dashboard",
    description: "Interactive dashboard for managing weekly volunteer deployments across multiple zones. Created by Ashrit Virmani.",
    type: "website",
  },
  twitter: {
    card: "summary",
    title: "Weekly Volunteer Deployment Schedule Dashboard",
    description: "Interactive dashboard for managing weekly volunteer deployments. Created by Ashrit Virmani.",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}

import type { Metadata } from "next";
import { Geist } from "next/font/google";
import "./globals.css";
import { Navbar } from "../components/Navbar";
import { Footer } from "../components/Footer";
import { ContactModalProvider } from "../components/ContactModalContext";
import { NavigationProgress } from "../components/NavigationProgress";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "TFA Studios — Creative Agency & Media Production",
  description:
    "TFA Studios is a creative agency and media production house built on vision, precision, and the belief that great work changes everything.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} antialiased`}
      >
        <ContactModalProvider>
          <NavigationProgress />
          <div className="app-gradient" />
          <Navbar />
          {children}
          <Footer />
        </ContactModalProvider>
      </body>
    </html>
  );
}

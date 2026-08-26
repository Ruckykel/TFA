import type { Metadata } from "next";
import { Jost, EB_Garamond } from "next/font/google";
import "./globals.css";
import { Navbar } from "../components/Navbar";
import { Footer } from "../components/Footer";
import { ContactModalProvider } from "../components/ContactModalContext";
import { NavigationProgress } from "../components/NavigationProgress";

/* Futura stand-in — geometric, single-storey 'a'. Swap for licensed Futura
   by replacing this with next/font/local; --font-jost is the only hook. */
const jost = Jost({
  variable: "--font-jost",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  display: "swap",
});

const garamond = EB_Garamond({
  variable: "--font-garamond",
  subsets: ["latin"],
  weight: ["400", "500"],
  style: ["normal", "italic"],
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
    <html lang="en" suppressHydrationWarning>
      <body className={`${jost.variable} ${garamond.variable} antialiased`}>
        <ContactModalProvider>
          <NavigationProgress />
          <Navbar />
          {children}
          <Footer />
        </ContactModalProvider>
      </body>
    </html>
  );
}

import "./globals.css";
import type { Metadata } from "next";
import { Manrope } from "next/font/google";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

// --------- Use MANROPE (same as screenshot) ----------
const manrope = Manrope({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700", "800"],
});

export const metadata: Metadata = {
  title: "Infranova IT Solutions",
  description:
    "We Build Innovative Digital Solutions, Branding, Web Development & IT Services — Infranova IT Solutions",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={manrope.className}>
        <Navbar />

        <main className="min-h-screen">
          {children}
        </main>

        <Footer />
      </body>
    </html>
  );
}

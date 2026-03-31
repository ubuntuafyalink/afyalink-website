import type { Metadata, Viewport } from "next";
import { Figtree } from "next/font/google";
import "./globals.css";
import TopNav from "./components/TopNav";
import { Footer } from "./components/Footer";

const figtree = Figtree({
  variable: "--font-figtree",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Ubuntu Afyalink",
  description: "Ubuntu Afyalink website",
  icons: {
    icon: [
      { url: "/favicon.ico", sizes: "any" },
      { url: "/images/logo new.png", type: "image/png", sizes: "403x403" }
    ],
    apple: [
      { url: "/apple-touch-icon.png", sizes: "180x180", type: "image/png" },
      { url: "/images/logo new.png", type: "image/png", sizes: "403x403" }
    ],
  },
};

export const viewport = {
  width: 'device-width',
  initialScale: 1,
} satisfies Viewport;

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" color-scheme="light">
      <body className={`${figtree.variable} font-sans antialiased`} suppressHydrationWarning>
        <TopNav />
        {children}
        <Footer />
      </body>
    </html>
  );
}

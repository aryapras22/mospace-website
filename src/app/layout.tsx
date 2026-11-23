import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import "./globals.css";

export const metadata: Metadata = {
  title: {
    default: "Mospace",
    template: "%s | Mospace",
  },
  description:
    "Mospace is a macOS app for planning bazaar layouts and running 3D crowd simulations on your Mac.",
  icons: {
    icon: "/mospace-website/mospace-icon.png",
    apple: "/mospace-website/mospace-icon.png",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <header className="site-header">
          <div className="container header-inner">
            <Link href="/" className="brand">
              <Image
                src="/mospace-website/mospace-icon.png"
                alt=""
                width={28}
                height={28}
                className="brand-icon"
              />
              <span>Mospace</span>
            </Link>
            <nav className="nav" aria-label="Main navigation">
              <Link href="/">Home</Link>
              <Link href="/privacy">Privacy</Link>
              <Link href="/support">Support</Link>
            </nav>
          </div>
        </header>

        <main className="main">
          <div className="container">{children}</div>
        </main>

        <footer className="site-footer">
          <div className="container footer-inner">
            <nav className="footer-links" aria-label="Footer navigation">
              <Link href="/">Home</Link>
              <Link href="/privacy">Privacy</Link>
              <Link href="/support">Support</Link>
            </nav>
            <div className="footer-meta">
              <span>© 2026 Arya</span>
              <a href="mailto:arya.pras17@gmail.com">arya.pras17@gmail.com</a>
            </div>
          </div>
        </footer>
      </body>
    </html>
  );
}

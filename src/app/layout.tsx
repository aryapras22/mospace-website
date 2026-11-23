import type { Metadata, Viewport } from "next";
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
    icon: "/mospace-icon.png",
    apple: "/mospace-icon.png",
  },
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  viewportFit: "cover",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <header>
          <nav className="nav-pill" aria-label="Primary navigation">
            <Link href="/" className="nav-pill__brand">
              <Image
                src="/mospace-icon.png"
                alt=""
                width={24}
                height={24}
                priority
                className="nav-pill__icon"
              />
              <span>Mospace</span>
            </Link>
            <ul className="nav-pill__links">
              <li>
                <Link href="/" className="nav-pill__link">
                  Home
                </Link>
              </li>
              <li>
                <Link href="/privacy" className="nav-pill__link">
                  Privacy
                </Link>
              </li>
              <li>
                <Link href="/support" className="nav-pill__link">
                  Support
                </Link>
              </li>
            </ul>
          </nav>
        </header>

        <main className="site-main">{children}</main>

        <footer className="foot-stmt">
          <p className="foot-stmt__line">Your floor plans stay on your Mac.</p>
          <div className="foot-stmt__meta">
            <span>© 2026 Wiraprasoneva Devs</span>
            <a href="mailto:arya.pras17@gmail.com" className="foot-stmt__email">
              arya.pras17@gmail.com
            </a>
          </div>
        </footer>
      </body>
    </html>
  );
}

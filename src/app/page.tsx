import type { Metadata } from "next";
import Link from "next/link";
import FloorPlanMap from "./FloorPlanMap";

export const metadata: Metadata = {
  title: "Mospace for macOS",
  description:
    "Plan. Simulate. Understand. Mospace is a macOS app for planning bazaar and market events.",
};

export default function HomePage() {
  return (
    <div className="map-page">
      <section className="map-intro" aria-labelledby="home-title">
        <h1 id="home-title" className="map-intro__title">
          Plan. Simulate. Understand.
        </h1>
        <p className="map-intro__lead">
          Mospace is a macOS app for planning bazaar and market events. You bring the floor plans of your venue, and the app helps you review each layout, describe who will visit, compare the layouts against each other, and watch one of them run in 3D before anything is built.
        </p>
      </section>

      <FloorPlanMap />

      <div className="map-actions">
        <Link href="/support" className="cta-secondary">
          Support and FAQ
        </Link>
        <p className="requirement-line">
          Requires macOS 27. Runs completely offline on your Mac with no account, no cloud upload, and no network connection. Your PDFs, projects, and saved analyses stay on your Mac.
        </p>
      </div>
    </div>
  );
}

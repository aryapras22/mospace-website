import type { Metadata } from "next";
import Link from "next/link";
import FloorPlanMap from "./FloorPlanMap";

export const metadata: Metadata = {
  title: "Mospace for macOS",
  description:
    "Import your venue legend and layout, edit booths and rooms, run 3D crowd simulations, and compare layouts locally on macOS 27.",
};

export default function HomePage() {
  return (
    <div className="map-page">
      <section className="map-intro" aria-labelledby="home-title">
        <h1 id="home-title" className="map-intro__title">
          From floor plan to crowd map.
        </h1>
        <p className="map-intro__lead">
          Import your venue legend and layout, edit booths and spaces, run 3D crowd simulations, and compare layouts locally on your Mac.
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

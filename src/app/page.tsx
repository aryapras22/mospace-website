import type { Metadata } from "next";
import Image from "next/image";

export const metadata: Metadata = {
  title: "Mospace for macOS",
  description:
    "Plan bazaar layouts from PDF floor plans, edit booths and rooms, and run 3D crowd simulations locally on macOS 27.",
};

const features = [
  {
    title: "Import PDF legends and floor plans",
    description:
      "Import a PDF legend and a PDF floor plan, one page per layout, to read booths, walls, doors, and facilities.",
  },
  {
    title: "Edit bazaar layouts",
    description:
      "Edit walls, rooms, booths singly or in rows, doors, seating, blocked areas, booth groups, open or closed booth sides, and booth popularity.",
  },
  {
    title: "Configure event parameters",
    description:
      "Set visitors per day, opening hours, bazaar type, and visitor type mix for your event.",
  },
  {
    title: "Run 3D crowd simulations",
    description:
      "Run a 3D crowd simulation over a full day to see how visitors move through your layout.",
  },
  {
    title: "Analyze crowd patterns",
    description:
      "Inspect congestion spots, crowd level through the day, and the busiest time, and compare layouts side by side.",
  },
  {
    title: "Runs locally on your Mac",
    description:
      "Mospace runs completely on your Mac with no account and no network connection. Requires macOS 27.",
  },
];

export default function HomePage() {
  return (
    <>
      <section className="hero">
        <div className="hero-top">
          <Image
            src="/mospace-icon.png"
            alt="Mospace app icon"
            width={88}
            height={88}
            priority
            className="hero-icon"
          />
          <div>
            <h1>Mospace</h1>
            <p className="hero-tagline">
              A macOS app for planning bazaar layouts and simulating daily crowd flow.
            </p>
          </div>
        </div>
        <p className="requirement-note">
          Requires macOS 27. Runs fully on your Mac with no account and no network.
        </p>
      </section>

      <section aria-labelledby="features-heading">
        <h2 id="features-heading" className="section-heading">
          What Mospace does
        </h2>
        <div className="feature-grid">
          {features.map((feature) => (
            <article key={feature.title} className="card">
              <h3>{feature.title}</h3>
              <p>{feature.description}</p>
            </article>
          ))}
        </div>
      </section>
    </>
  );
}

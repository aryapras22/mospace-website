import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import FloorPlanMap from "./FloorPlanMap";

interface AppStep {
  num: string;
  name: string;
  src: string;
  alt: string;
  caption: string;
}

const APP_STEPS: AppStep[] = [
  {
    num: "01",
    name: "Import",
    src: "/screens/upload-page.jpg",
    alt: "Project setup screen with a legend of three categories and two imported floor plans.",
    caption:
      "Add your legend and floor plan PDFs. Mospace reads each plan and counts its booths and doors.",
  },
  {
    num: "02",
    name: "Edit",
    src: "/screens/edit-page.jpg",
    alt: "Layout editor showing a floor plan with a selected booth and its settings panel.",
    caption:
      "Edit the plan in 2D or 3D. Set each booth's size, category, popularity and open sides.",
  },
  {
    num: "03",
    name: "Visitors",
    src: "/screens/set-parameters.jpg",
    alt: "Parameter sheet with visitor count, event hours, bazaar type and visitor type sliders.",
    caption:
      "Set total visitors, event hours, bazaar type and the mix of Socializers, Families, Explorers and Shoppers. The settings apply to every layout in the project.",
  },
  {
    num: "04",
    name: "Simulate",
    src: "/screens/simulation-page.jpg",
    alt: "3D simulation of a bazaar with visitors and graded congestion spots.",
    caption:
      "Watch visitors walk through the venue. Numbered spots show where people get stuck, graded A to F.",
  },
  {
    num: "05",
    name: "Analyze",
    src: "/screens/compare-page.jpg",
    alt: "Run results comparing two layouts with the best layout highlighted.",
    caption:
      "See which layout did best, with stuck spots, crowd level and time stuck, and both plans side by side.",
  },
  {
    num: "05",
    name: "Analyze",
    src: "/screens/insight.jpg",
    alt: "Insights sheet charting time stuck through the day for two layouts.",
    caption:
      "Insights compare two layouts on one result and show how it changes through the day.",
  },
];

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

      <section
        id="in-the-app"
        className="app-screens"
        aria-labelledby="in-the-app-title"
      >
        <h2 id="in-the-app-title" className="app-screens__title">
          See it in the app
        </h2>
        <div className="app-screens__list">
          {APP_STEPS.map((step) => (
            <figure key={step.src} className="app-step">
              <figcaption className="app-step__caption">
                <div className="app-step__head">
                  <span className="app-step__num">{step.num}</span>
                  <span className="app-step__name">{step.name}</span>
                </div>
                <p className="app-step__body">{step.caption}</p>
              </figcaption>
              <Image
                src={step.src}
                alt={step.alt}
                width={1600}
                height={1000}
                sizes="(min-width: 768px) 64vw, calc(100vw - 2rem)"
                loading="lazy"
                className="app-step__img"
              />
            </figure>
          ))}
        </div>
      </section>

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

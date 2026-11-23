import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Mospace for macOS",
  description:
    "Import your venue legend and layout, edit booths and rooms, run 3D crowd simulations, and compare layouts locally on macOS 27.",
};

export default function HomePage() {
  return (
    <>
      <section className="hero">
        <div className="hero-top">
          <Image
            src="/mospace-icon.png"
            alt="Mospace app icon"
            width={92}
            height={92}
            priority
            className="hero-icon"
          />
          <div className="hero-title-group">
            <span className="hero-eyebrow">
              <span className="eyebrow-dot" aria-hidden="true" />
              macOS 27 App
            </span>
            <h1>Mospace</h1>
            <p className="hero-tagline">
              Import your venue legend and layout, edit booths and spaces, and run 3D crowd simulations on your Mac.
            </p>
          </div>
        </div>

        <div className="hero-actions">
          <a href="#features" className="cta-button">
            Explore how it works
          </a>
          <Link href="/support" className="secondary-link">
            Support and FAQ
          </Link>
        </div>

        <p className="requirement-note">
          Requires macOS 27. Runs completely offline on your Mac with no account and no network connection.
        </p>
      </section>

      <section id="features" className="section-block" aria-labelledby="features-heading">
        <h2 id="features-heading" className="section-heading">
          From floor plan to crowd analysis
        </h2>
        <p className="section-subtitle">
          Bring in your venue PDFs, adjust the layout, set daily visitors, and compare how different layouts hold up over a full day.
        </p>

        <div className="feature-grid">
          <article className="card">
            <span className="card-tag">Import</span>
            <h3>Import your venue legend and layout.</h3>
            <p>
              Start from two PDF files, one page per layout, so Mospace reads your booths, walls, doors, and facilities.
            </p>
            <ul className="card-detail-list">
              <li>
                <span className="detail-term">Floor plan:</span> A 2D layout of your venue that shows the space, booths, and facilities.
              </li>
              <li>
                <span className="detail-term">Legend:</span> A reference that explains the symbols and colors used in your floor plan.
              </li>
            </ul>
          </article>

          <article className="card">
            <span className="card-tag">Edit</span>
            <h3>Edit your layout</h3>
            <p>
              Adjust walls, rooms, booths singly or in rows, doors, seating, and blocked areas directly on the floor plan.
            </p>
            <p>
              Organize booth groups, mark open or closed booth sides, and set booth popularity before running a simulation.
            </p>
          </article>

          <article className="card">
            <span className="card-tag">Visitors</span>
            <h3>Set visitors and opening hours</h3>
            <p>
              Change visitors, opening hours and visitor types to match your bazaar.
            </p>
            <p>
              Configure visitors per day, opening hours, bazaar type, and visitor type mix for each simulation run.
            </p>
          </article>

          <article className="card">
            <span className="card-tag">Simulate</span>
            <h3>3D crowd simulation</h3>
            <p>
              Run a 3D crowd simulation across the full opening day to see how people move between doors, aisles, seating, and booths.
            </p>
            <p>
              Colours show how packed each part of the floor gets as people walk in.
            </p>
          </article>

          <article className="card">
            <span className="card-tag">Analyze</span>
            <h3>Analysis and comparison</h3>
            <p>
              Review Congestion Spots, Crowd Level through the day, Flow Rate through the day, and the busiest time.
            </p>
            <p>
              Compare both layouts on stuck spots, crowd level and time stuck to pick the Best layout.
            </p>
          </article>

          <article className="card">
            <span className="card-tag">Local</span>
            <h3>Offline on macOS 27</h3>
            <p>
              Everything runs locally on your Mac with no account, no cloud upload, and no network connection.
            </p>
            <p>
              Your PDFs, projects, and saved analyses stay on your Mac. Requires macOS 27.
            </p>
          </article>
        </div>
      </section>

      <section className="section-block" aria-labelledby="analysis-heading">
        <div className="analysis-card">
          <div>
            <h2 id="analysis-heading" className="section-heading">
              Crowd level and layout grades
            </h2>
            <p className="section-subtitle">
              Colours show how packed each part of the floor gets as people walk in.
            </p>
          </div>

          <div className="heat-panel">
            <div className="heat-panel-header">
              <span className="heat-panel-title">Crowd Level heat scale</span>
              <span className="heat-panel-caption">Calm to stuck</span>
            </div>
            <div className="heat-bar" role="presentation" />
            <div className="heat-legend" aria-label="Crowd level color key">
              <span className="heat-key-item">
                <span className="heat-dot heat-dot-low" aria-hidden="true" />
                Low (Calm)
              </span>
              <span className="heat-key-item">
                <span className="heat-dot heat-dot-medium" aria-hidden="true" />
                Medium (Busy)
              </span>
              <span className="heat-key-item">
                <span className="heat-dot heat-dot-orange" aria-hidden="true" />
                High (Crowded)
              </span>
              <span className="heat-key-item">
                <span className="heat-dot heat-dot-high" aria-hidden="true" />
                Peak (Stuck)
              </span>
            </div>
            <p className="grade-note">
              Grade scale. A to B: calm. C to D: busy. E to F: people get stuck.
            </p>
          </div>

          <div className="analysis-metrics">
            <div className="metric-tile">
              <h3>Congestion Spots</h3>
              <p>A spot so crowded that people get stuck.</p>
            </div>
            <div className="metric-tile">
              <h3>Daily flow and crowd charts</h3>
              <p>
                Inspect Crowd Level through the day, Flow Rate through the day, and the busiest time.
              </p>
            </div>
            <div className="metric-tile">
              <h3>Best layout</h3>
              <p>
                Compare both layouts on stuck spots, crowd level and time stuck.
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Support",
  description:
    "Support contact and frequently asked questions for Mospace on macOS 27.",
};

export default function SupportPage() {
  return (
    <article className="doc-page">
      <header className="doc-header">
        <h1 className="doc-header__title">Support</h1>
        <p className="doc-header__meta">
          Help with importing your venue legend and layout, running 3D crowd simulations, reading layout grades, and managing data on your Mac.
        </p>
      </header>

      <div className="doc-prose">
        <section className="doc-section">
          <h2 className="doc-heading">Contact Wiraprasoneva Devs</h2>
          <p>
            For questions, bug reports, or privacy requests, email{" "}
            <a href="mailto:arya.pras17@gmail.com">arya.pras17@gmail.com</a>. Please allow time for a reply.
          </p>
        </section>

        <section className="faq-group" aria-labelledby="faq-heading">
          <h2 id="faq-heading" className="faq-group__title">
            Frequently asked questions
          </h2>

          <article className="faq-entry">
            <h3 className="faq-entry__question">
              What files do I need to import into Mospace?
            </h3>
            <p>
              Import your venue legend and layout as two PDF files, one page per layout. Mospace reads booths, walls, doors, and facilities from those files.
            </p>
            <p>
              Your floor plan is a 2D layout of your venue that shows the space, booths, and facilities. Your legend is a reference that explains the symbols and colors used in your floor plan.
            </p>
          </article>

          <article className="faq-entry">
            <h3 className="faq-entry__question">
              Why does Mospace ask for a PDF legend?
            </h3>
            <p>
              Every venue draws floor plans differently. A legend is a reference that explains the symbols and colors used in your floor plan, so Mospace can map each symbol to the right booths, walls, doors, and facilities before you edit the layout.
            </p>
          </article>

          <article className="faq-entry">
            <h3 className="faq-entry__question">
              How do Congestion Spots and layout grades work?
            </h3>
            <p>
              A Congestion Spot is a spot so crowded that people get stuck. After a simulation finishes, Mospace shows Crowd Level through the day, Flow Rate through the day, and grades for each layout.
            </p>
            <p>
              Grade scale. A to B: calm. C to D: busy. E to F: people get stuck. You can also compare both layouts on stuck spots, crowd level and time stuck to find the Best layout.
            </p>
          </article>

          <article className="faq-entry">
            <h3 className="faq-entry__question">
              What are the system requirements?
            </h3>
            <p>
              Mospace is a macOS app and requires macOS 27. It runs completely on your Mac with no account and no network connection.
            </p>
          </article>

          <article className="faq-entry">
            <h3 className="faq-entry__question">
              Where is my data stored?
            </h3>
            <p>
              Imported PDFs, projects, and saved analyses stay only on your Mac inside the app&apos;s macOS sandbox container. Preference settings stay in macOS user defaults. Nothing is sent to Wiraprasoneva Devs or any third party. Read the{" "}
              <Link href="/privacy">Privacy Policy</Link> for full details.
            </p>
          </article>

          <article className="faq-entry">
            <h3 className="faq-entry__question">
              How do I delete my data?
            </h3>
            <p>
              Delete individual projects inside Mospace, or delete the Mospace app from your Mac to remove its sandbox container and stored files. Because nothing reaches Wiraprasoneva Devs, there is nothing stored on our servers. If you have questions, email{" "}
              <a href="mailto:arya.pras17@gmail.com">arya.pras17@gmail.com</a>.
            </p>
          </article>
        </section>
      </div>
    </article>
  );
}

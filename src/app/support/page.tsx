import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Support",
  description: "Support contact and frequently asked questions for Mospace.",
};

export default function SupportPage() {
  return (
    <>
      <header className="page-header">
        <h1>Support</h1>
        <p className="page-meta">
          Help with importing layouts, running simulations, and managing your data in Mospace.
        </p>
      </header>

      <div className="prose-stack">
        <section className="prose-section">
          <h2>Contact</h2>
          <p>
            For questions, bug reports, or deletion requests, email{" "}
            <a href="mailto:arya.pras17@gmail.com">arya.pras17@gmail.com</a>. Please allow time for a reply.
          </p>
        </section>

        <section aria-labelledby="faq-heading">
          <h2 id="faq-heading" className="section-heading">
            Frequently asked questions
          </h2>
          <div className="faq-list">
            <article className="faq-item">
              <h3>What files can I import into Mospace?</h3>
              <p>
                You import a PDF legend and a PDF floor plan, with one page per layout. Mospace reads booths, walls, doors, and facilities from those files.
              </p>
            </article>

            <article className="faq-item">
              <h3>Why do I need a PDF legend?</h3>
              <p>
                A PDF legend is required so Mospace knows how to identify booths, walls, doors, and facilities on your floor plan PDF.
              </p>
            </article>

            <article className="faq-item">
              <h3>What are the system requirements?</h3>
              <p>
                Mospace requires macOS 27 and runs completely on your Mac without an account or network connection.
              </p>
            </article>

            <article className="faq-item">
              <h3>Where is my data stored?</h3>
              <p>
                Imported PDFs, projects, and saved analyses stay on your Mac inside the app&apos;s sandbox container. Preference settings stay in macOS user defaults.
              </p>
            </article>

            <article className="faq-item">
              <h3>How do I delete my data?</h3>
              <p>
                You can delete individual projects inside Mospace or delete the app and its sandbox container from your Mac. You can also send deletion requests to{" "}
                <a href="mailto:arya.pras17@gmail.com">arya.pras17@gmail.com</a>.
              </p>
            </article>
          </div>
        </section>
      </div>
    </>
  );
}

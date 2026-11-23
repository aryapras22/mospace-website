import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Privacy Policy",
  description:
    "Privacy policy for the Mospace macOS app and website by Wiraprasoneva Devs.",
};

export default function PrivacyPage() {
  return (
    <article className="doc-page">
      <header className="doc-header">
        <h1 className="doc-header__title">Privacy Policy</h1>
        <p className="doc-header__meta">
          Effective date: 23 November 2026. Published by Wiraprasoneva Devs.
        </p>
      </header>

      <div className="doc-prose">
        <section className="doc-section">
          <h2 className="doc-heading">Overview</h2>
          <p>
            Mospace is developed by Wiraprasoneva Devs (&ldquo;we&rdquo;). All data you create or import in Mospace lives only on your Mac. Mospace collects nothing and sends nothing over the network.
          </p>
        </section>

        <section className="doc-section">
          <h2 className="doc-heading">Data collection</h2>
          <p>
            We do not collect personal data, usage data, or diagnostic data. Mospace has no account system, no analytics, no ads, no tracking, and no third-party SDKs.
          </p>
        </section>

        <section className="doc-section">
          <h2 className="doc-heading">Data sharing</h2>
          <p>
            Nothing is shared with any third party. Because Mospace runs offline on your Mac with no network connection, your files and simulation results never leave your device.
          </p>
        </section>

        <section className="doc-section">
          <h2 className="doc-heading">Storage on your Mac</h2>
          <p>
            Imported PDFs, projects, saved analyses, and settings stay only on your Mac inside the app&apos;s macOS sandbox container. App preferences are stored in macOS user defaults.
          </p>
        </section>

        <section className="doc-section">
          <h2 className="doc-heading">Retention and deletion</h2>
          <p>
            Your projects and files remain on your Mac until you delete them. Deleting projects inside Mospace removes them, and deleting the Mospace app removes its sandbox container and stored data from your Mac.
          </p>
          <p>
            Because nothing reaches Wiraprasoneva Devs, we hold no user data and there is nothing on our servers for us to delete.
          </p>
        </section>

        <section className="doc-section">
          <h2 className="doc-heading">Contact and requests</h2>
          <p>
            If you have questions about this policy or want to send a privacy, consent, or deletion request to Wiraprasoneva Devs, email{" "}
            <a href="mailto:arya.pras17@gmail.com">arya.pras17@gmail.com</a>.
          </p>
        </section>

        <section className="doc-section">
          <h2 className="doc-heading">Website</h2>
          <p>
            This website sets no cookies and uses no analytics or tracking scripts.
          </p>
        </section>

        <section className="doc-section">
          <h2 className="doc-heading">Changes to this policy</h2>
          <p>
            Any changes to this privacy policy are posted on this page with an updated effective date.
          </p>
        </section>
      </div>
    </article>
  );
}

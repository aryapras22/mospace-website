import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Privacy Policy",
  description:
    "Privacy policy for the Mospace macOS app and website by Wiraprasoneva Devs.",
};

export default function PrivacyPage() {
  return (
    <>
      <header className="page-header">
        <h1>Privacy Policy</h1>
        <p className="page-meta">
          Effective date: 23 November 2026. Published by Wiraprasoneva Devs.
        </p>
      </header>

      <div className="prose-stack">
        <section className="prose-section">
          <h2>Overview</h2>
          <p>
            Mospace is developed by Wiraprasoneva Devs (&ldquo;we&rdquo;). All data you create or import in Mospace lives only on your Mac. Mospace collects nothing and sends nothing over the network.
          </p>
        </section>

        <section className="prose-section">
          <h2>Data collection</h2>
          <p>
            We do not collect personal data, usage data, or diagnostic data. Mospace has no account system, no analytics, no ads, no tracking, and no third-party SDKs.
          </p>
        </section>

        <section className="prose-section">
          <h2>Data sharing</h2>
          <p>
            Nothing is shared with any third party. Because Mospace runs offline on your Mac with no network connection, your files and simulation results never leave your device.
          </p>
        </section>

        <section className="prose-section">
          <h2>Storage on your Mac</h2>
          <p>
            Imported PDFs, projects, saved analyses, and settings stay only on your Mac inside the app&apos;s macOS sandbox container. App preferences are stored in macOS user defaults.
          </p>
        </section>

        <section className="prose-section">
          <h2>Retention and deletion</h2>
          <p>
            Your projects and files remain on your Mac until you delete them. Deleting projects inside Mospace removes them, and deleting the Mospace app removes its sandbox container and stored data from your Mac.
          </p>
          <p>
            Because nothing reaches Wiraprasoneva Devs, we hold no user data and there is nothing on our servers for us to delete.
          </p>
        </section>

        <section className="prose-section">
          <h2>Contact and requests</h2>
          <p>
            If you have questions about this policy or want to send a privacy, consent, or deletion request to Wiraprasoneva Devs, email{" "}
            <a href="mailto:arya.pras17@gmail.com">arya.pras17@gmail.com</a>.
          </p>
        </section>

        <section className="prose-section">
          <h2>Website</h2>
          <p>
            This website sets no cookies and uses no analytics or tracking scripts.
          </p>
        </section>

        <section className="prose-section">
          <h2>Changes to this policy</h2>
          <p>
            Any changes to this privacy policy are posted on this page with an updated effective date.
          </p>
        </section>
      </div>
    </>
  );
}

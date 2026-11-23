import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Privacy Policy",
  description:
    "Privacy policy for the Mospace macOS app and website.",
};

export default function PrivacyPage() {
  return (
    <>
      <header className="page-header">
        <h1>Privacy Policy</h1>
        <p className="page-meta">Effective date: 23 November 2026</p>
      </header>

      <div className="prose-stack">
        <section className="prose-section">
          <h2>Data collection</h2>
          <p>
            We do not collect personal data. Mospace has no analytics, ads, tracking, or third-party SDKs.
          </p>
        </section>

        <section className="prose-section">
          <h2>Data sharing</h2>
          <p>
            Your data is not shared with anyone, so no third party receives it. Mospace runs locally on your Mac with no account and no network connection.
          </p>
        </section>

        <section className="prose-section">
          <h2>On-device storage</h2>
          <p>
            Imported PDFs, projects, and saved analyses stay on your Mac inside the app&apos;s sandbox container. Preference settings stay in macOS user defaults.
          </p>
        </section>

        <section className="prose-section">
          <h2>Retention and deletion</h2>
          <p>
            Your data stays on your Mac until you delete projects inside the app or delete the app and its sandbox container.
          </p>
        </section>

        <section className="prose-section">
          <h2>Consent and deletion requests</h2>
          <p>
            Because Mospace stores everything locally on your Mac, you can remove data directly in the app or by removing the app. You can also send consent and deletion requests to{" "}
            <a href="mailto:arya.pras17@gmail.com">arya.pras17@gmail.com</a>.
          </p>
        </section>

        <section className="prose-section">
          <h2>Website</h2>
          <p>
            This website sets no cookies and uses no analytics.
          </p>
        </section>

        <section className="prose-section">
          <h2>Changes to this policy</h2>
          <p>
            Changes to this privacy policy are announced by updating this page and its effective date.
          </p>
        </section>
      </div>
    </>
  );
}

import Link from "next/link";

export const metadata = {
  title: { absolute: "Privacy Policy | TheMetricApp" },
  description:
    "TheMetricApp privacy policy — how we handle your data, cookies, Google AdSense, analytics, and your rights as a user.",
  alternates: {
    canonical: "https://www.themetricapp.com/privacy-policy",
  },
  openGraph: {
    title: "Privacy Policy | TheMetricApp",
    description:
      "TheMetricApp privacy policy — how we handle your data, cookies, Google AdSense, analytics, and your rights as a user.",
    url: "https://www.themetricapp.com/privacy-policy",
    siteName: "TheMetricApp",
    type: "website",
  },
  twitter: {
    title: "Privacy Policy | TheMetricApp",
    card: "summary_large_image",
  },
};

export default function PrivacyPolicy() {
  return (
    <div className="mx-auto max-w-4xl px-4 py-12 sm:px-6 lg:py-16">
      {/* Page Header */}
      <div className="text-center mb-10">
        <h1 className="text-3xl sm:text-4xl font-extrabold text-[#0F172A] tracking-tight mb-3">
          Privacy Policy
        </h1>
        <p className="text-lg text-[#64748B] max-w-2xl mx-auto">
          Last updated: May 21, 2026
        </p>
      </div>

      {/* Content */}
      <div className="rounded-2xl border border-[#E2E8F0] bg-white p-6 sm:p-10 shadow-sm">
        <article className="seo-content">
          <h2>Introduction</h2>
          <p>
            TheMetricApp (&quot;we,&quot; &quot;our,&quot; or &quot;us&quot;) is committed to protecting your privacy.
            This Privacy Policy explains how we collect, use, disclose, and safeguard your
            information when you visit our website at{" "}
            <strong>https://themetricapp.com</strong> (the &quot;Site&quot;). Please read this policy
            carefully. If you do not agree with the terms, do not access the Site.
          </p>
          <p>
            We operate a financial calculator website that provides free estimation tools for
            taxes, fees, profits, and savings. We do <strong>not</strong> require you to create an
            account, sign up, or provide personal information to use any of our calculators.
          </p>

          <h2>Information We Collect</h2>
          <h3>Automatically Collected Information</h3>
          <p>
            When you visit the Site, certain information is automatically collected by us and
            our third-party service providers, including:
          </p>
          <ul>
            <li>
              <strong>Device and browser information:</strong> IP address, browser type and
              version, operating system, device type, screen resolution, and language
              preferences.
            </li>
            <li>
              <strong>Usage data:</strong> Pages visited, time spent on pages, links clicked,
              referring URL, and other browsing behavior.
            </li>
            <li>
              <strong>Cookies and similar technologies:</strong> We and our advertising
              partners use cookies, web beacons, and similar tracking technologies to collect
              information as described in our Cookie Policy below.
            </li>
          </ul>
          <h3>Information You Voluntarily Provide</h3>
          <p>
            We do <strong>not</strong> collect personal information through our calculators.
            All calculations are performed entirely in your browser using client-side
            JavaScript. No numbers you enter into any calculator are sent to our servers or
            stored by us. If you contact us via email or a contact form, we will receive
            whatever information you choose to share in your message.
          </p>

          <h2>How We Use Your Information</h2>
          <p>We use the information we collect for the following purposes:</p>
          <ul>
            <li>To operate, maintain, and improve the Site and its functionality.</li>
            <li>To analyze usage trends and understand how visitors interact with our calculators.</li>
            <li>
              To serve relevant advertisements through Google AdSense (see the Advertising
              section below).
            </li>
            <li>To detect, prevent, and address technical issues or misuse of the Site.</li>
            <li>To comply with legal obligations and enforce our rights.</li>
          </ul>

          <h2>Cookies and Tracking Technologies</h2>
          <p>
            The Site uses cookies and similar tracking technologies. Cookies are small text
            files stored on your device by your web browser. We use the following types of
            cookies:
          </p>
          <ul>
            <li>
              <strong>Essential cookies:</strong> Required for the Site to function properly.
              These cannot be disabled.
            </li>
            <li>
              <strong>Analytics cookies:</strong> Used to understand how visitors interact
              with the Site (e.g., which calculators are most popular). We use Google
              Analytics for this purpose.
            </li>
            <li>
              <strong>Advertising cookies:</strong> Used by Google AdSense to personalize
              advertisements based on your interests and browsing history. These cookies
              enable Google and its partners to serve ads relevant to you.
            </li>
          </ul>
          <p>
            You can control cookies through your browser settings. Most browsers allow you
            to block or delete cookies. However, blocking essential cookies may affect the
            functionality of the Site. To learn more about managing cookies, visit{" "}
            <a
              href="https://www.aboutcookies.org"
              target="_blank"
              rel="noopener noreferrer"
              className="text-[#0D9488] hover:text-[#0F766E] underline"
            >
              aboutcookies.org
            </a>.
          </p>

          <h2>Advertising — Google AdSense</h2>
          <p>
            We use <strong>Google AdSense</strong> to display advertisements on our Site.
            Google AdSense uses cookies and web beacons to serve ads based on your prior
            visits to our Site and other websites across the internet.
          </p>
          <h3>How Google AdSense Uses Your Data</h3>
          <p>
            When you visit our Site, Google may collect information about your browsing
            activity, including:
          </p>
          <ul>
            <li>The pages you visit on our Site.</li>
            <li>Your IP address (which Google may use to approximate your location).</li>
            <li>
              Information about your device, browser, and operating system.
            </li>
            <li>
              Data from advertising cookies placed on your device during previous browsing
              sessions.
            </li>
          </ul>
          <h3>Personalized Advertising</h3>
          <p>
            Google AdSense may use the information it collects to serve personalized ads.
            You can opt out of personalized advertising by visiting Google&apos;s Ads Settings
            page at{" "}
            <a
              href="https://adssettings.google.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-[#0D9488] hover:text-[#0F766E] underline"
            >
              adssettings.google.com
            </a>.
            You can also opt out of third-party cookies used for interest-based advertising
            through the{" "}
            <a
              href="https://optout.networkadvertising.org"
              target="_blank"
              rel="noopener noreferrer"
              className="text-[#0D9488] hover:text-[#0F766E] underline"
            >
              Network Advertising Initiative opt-out page
            </a>.
          </p>
          <h3>Google&apos;s Third-Party Vendors</h3>
          <p>
            Google may use third-party vendors, including Google Analytics, to collect and
            report information about your interactions with ads and our Site. You can review
            Google&apos;s Privacy Policy at{" "}
            <a
              href="https://policies.google.com/privacy"
              target="_blank"
              rel="noopener noreferrer"
              className="text-[#0D9488] hover:text-[#0F766E] underline"
            >
              policies.google.com/privacy
            </a>.
          </p>

          <h2>Third-Party Services</h2>
          <p>We use the following third-party services on our Site:</p>
          <ul>
            <li>
              <strong>Google AdSense</strong> — For serving advertisements.{" "}
              <a
                href="https://policies.google.com/privacy"
                target="_blank"
                rel="noopener noreferrer"
                className="text-[#0D9488] hover:text-[#0F766E] underline"
              >
                Google Privacy Policy
              </a>
            </li>
            <li>
              <strong>Google Analytics</strong> — For understanding Site traffic and usage
              patterns.{" "}
              <a
                href="https://policies.google.com/privacy"
                target="_blank"
                rel="noopener noreferrer"
                className="text-[#0D9488] hover:text-[#0F766E] underline"
              >
                Google Privacy Policy
              </a>
            </li>
            <li>
              <strong>Vercel</strong> — Our hosting provider. Vercel may collect standard
              server logs (IP addresses, request timestamps, etc.) as part of their service.{" "}
              <a
                href="https://vercel.com/legal/privacy-policy"
                target="_blank"
                rel="noopener noreferrer"
                className="text-[#0D9488] hover:text-[#0F766E] underline"
              >
                Vercel Privacy Policy
              </a>
            </li>
          </ul>

          <h2>Data Retention</h2>
          <p>
            We retain automatically collected data (analytics and server logs) for a period
            of up to 26 months. After this period, the data is either deleted or aggregated
            and anonymized. We do not retain any personal information voluntarily provided
            to us (e.g., email inquiries) longer than necessary to address your request.
          </p>

          <h2>Your Rights</h2>
          <p>Depending on your location, you may have the following rights regarding your data:</p>
          <ul>
            <li>
              <strong>Right to access:</strong> Request a copy of the data we hold about you.
            </li>
            <li>
              <strong>Right to deletion:</strong> Request that we delete your data.
            </li>
            <li>
              <strong>Right to opt out of advertising cookies:</strong> Use the tools
              described in the Advertising section above.
            </li>
            <li>
              <strong>Right to withdraw consent:</strong> Where processing is based on
              consent, you may withdraw it at any time.
            </li>
          </ul>
          <p>
            To exercise any of these rights, please contact us using the information below.
          </p>

          <h2>California Privacy Rights (CCPA)</h2>
          <p>
            If you are a California resident, the California Consumer Privacy Act (CCPA)
            grants you additional rights. We do <strong>not</strong> sell your personal
            information as defined under the CCPA. For more information about your rights
            under the CCPA, please contact us.
          </p>

          <h2>UK &amp; EU Privacy Rights (GDPR)</h2>
          <p>
            If you are located in the United Kingdom or the European Economic Area, you
            have additional rights under the General Data Protection Regulation (GDPR),
            including:
          </p>
          <ul>
            <li>The right to be informed about the collection and use of your data.</li>
            <li>The right to request rectification of inaccurate data.</li>
            <li>The right to restrict or object to processing.</li>
            <li>The right to data portability.</li>
          </ul>
          <p>
            Our lawful basis for processing your data is your consent (for cookies and
            personalized ads) and our legitimate interest (for analytics and Site
            improvement).
          </p>

          <h2>Children&apos;s Privacy</h2>
          <p>
            Our Site is not intended for children under the age of 16. We do not knowingly
            collect personal information from children. If you believe a child has provided
            us with personal data, please contact us, and we will delete it.
          </p>

          <h2>Changes to This Privacy Policy</h2>
          <p>
            We may update this Privacy Policy from time to time. We will notify you of any
            changes by posting the new policy on this page and updating the &quot;Last
            updated&quot; date at the top. We encourage you to review this policy
            periodically.
          </p>

          <h2>Contact Us</h2>
          <p>
            If you have any questions, concerns, or requests regarding this Privacy Policy
            or our data practices, please contact us:
          </p>
          <ul>
            <li>
              <strong>Email:</strong>{" "}
              <a
                href="mailto:privacy@themetricapp.com"
                className="text-[#0D9488] hover:text-[#0F766E] underline"
              >
                privacy@themetricapp.com
              </a>
            </li>
            <li>
              <strong>Website:</strong>{" "}
              <Link
                href="/"
                className="text-[#0D9488] hover:text-[#0F766E] underline"
              >
                themetricapp.com
              </Link>
            </li>
          </ul>
        </article>
      </div>
    </div>
  );
}

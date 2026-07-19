import React from 'react';
import { Metadata, Viewport } from "next";

export const metadata: Metadata = {
  title: "FAQ | Rishvin Labs",
  description: "Frequently asked questions about my work, availability, and technical background.",
  applicationName: "Rishvin Reddy Portfolio",
  generator: "Next.js",
  referrer: "origin-when-cross-origin",
  keywords: [
    "faq page", "Rishvin Reddy faq", "Erolla Rishvin Reddy faq", 
    "Software Engineer faq", "Cybersecurity faq", "IoT faq", "Blockchain faq",
    "Woxsen University", "Rishvin Labs", "Tech Portfolio", "Engineering"
  ],
  authors: [{ name: "Erolla Rishvin Reddy", url: "https://rishvinreddy.github.io" }],
  creator: "Erolla Rishvin Reddy",
  publisher: "Rishvin Labs",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  alternates: {
    canonical: "https://rishvinreddy.github.io/faq",
    languages: {
      "en-US": "https://rishvinreddy.github.io/faq",
      "en-IN": "https://rishvinreddy.github.io/faq",
    },
  },
  openGraph: {
    title: "FAQ | Rishvin Labs",
    description: "Frequently asked questions about my work, availability, and technical background.",
    url: "https://rishvinreddy.github.io/faq",
    siteName: "Rishvin Reddy Engineering Portfolio",
    images: [
      {
        url: "https://rishvinreddy.github.io/icon.png",
        width: 1200,
        height: 630,
        alt: "FAQ | Rishvin Labs - Rishvin Reddy",
      },
      {
        url: "https://rishvinreddy.github.io/icon.png",
        width: 800,
        height: 600,
        alt: "FAQ | Rishvin Labs Alternate - Rishvin Reddy",
      }
    ],
    locale: "en_IN",
    type: "website",
    emails: ["rishvinreddy@gmail.com"],
    countryName: "India",
  },
  twitter: {
    card: "summary_large_image",
    title: "FAQ | Rishvin Labs",
    description: "Frequently asked questions about my work, availability, and technical background.",
    siteId: "1467726470533754880",
    creator: "@RishvinReddy",
    creatorId: "1467726470533754880",
    images: ["https://rishvinreddy.github.io/icon.png"],
  },
  robots: {
    index: true,
    follow: true,
    nocache: false,
    googleBot: {
      index: true,
      follow: true,
      noimageindex: false,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  icons: {
    icon: "/icon.png",
    shortcut: "/icon.png",
    apple: "/icon.png",
    other: {
      rel: "apple-touch-icon-precomposed",
      url: "/icon.png",
    },
  },
  manifest: "/manifest.json",
  category: "technology",
  archives: ["https://rishvinreddy.github.io/archives"],
  assets: ["https://rishvinreddy.github.io/assets"],
  bookmarks: ["https://rishvinreddy.github.io/bookmarks"],
};

export const viewport: Viewport = {
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "#ffffff" },
    { media: "(prefers-color-scheme: dark)", color: "#0f172a" }
  ],
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
  userScalable: true,
  colorScheme: "light dark",
};


export default function Faq() {
  return (
    <>

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(
        {
          "@context": "https://schema.org",
          "@graph": [
            {
              "@type": "Person",
              "@id": "https://rishvinreddy.github.io/#person",
              "name": "Erolla Rishvin Reddy",
              "url": "https://rishvinreddy.github.io/",
              "image": "https://rishvinreddy.github.io/icon.png",
              "sameAs": [
                "https://github.com/RishvinReddy",
                "https://www.linkedin.com/in/rishvin-reddy/"
              ],
              "jobTitle": "Software Engineer & Security Researcher",
              "worksFor": {
                "@type": "Organization",
                "name": "Rishvin Labs"
              },
              "alumniOf": {
                "@type": "CollegeOrUniversity",
                "name": "Woxsen University"
              }
            },
            {
              "@type": "WebSite",
              "@id": "https://rishvinreddy.github.io/#website",
              "url": "https://rishvinreddy.github.io/",
              "name": "Rishvin Reddy Portfolio",
              "description": "Software Engineering, Cybersecurity, IoT & Blockchain Portfolio",
              "publisher": {
                "@id": "https://rishvinreddy.github.io/#person"
              },
              "inLanguage": "en-US"
            },
            {
              "@type": "WebPage",
              "@id": "https://rishvinreddy.github.io/faq/#webpage",
              "url": "https://rishvinreddy.github.io/faq",
              "name": "Faq | Rishvin Labs",
              "isPartOf": {
                "@id": "https://rishvinreddy.github.io/#website"
              },
              "about": {
                "@id": "https://rishvinreddy.github.io/#person"
              }
            }
          ]
        }
) }}
      />

      {/*  ── Header v2 Scripts ──  */}
    

    {/*  ===== Header Spacer (since header is fixed) =====  */}
    <div className="h-12 shrink-0"></div>


        {/*  Quick help row  */}
        <div className="scroll-reveal mb-8 grid grid-cols-1 sm:grid-cols-3 gap-4" data-stagger-list>
          <div className="flex items-start gap-3 rounded-2xl bg-white p-4 shadow-sm border border-gray-100 scroll-reveal">
            <svg className="w-6 h-6 text-primary flex-shrink-0" viewBox="0 0 24 24" fill="none" stroke="currentColor"
              aria-hidden="true">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.6"
                d="M12 2v2M12 20v2M4.93 4.93l1.41 1.41M17.66 17.66l1.41 1.41M2 12h2M20 12h2M4.93 19.07l1.41-1.41M17.66 6.34l1.41-1.41" />
            </svg>
            <div>
              <div className="text-sm font-semibold text-gray-900">Specialisations</div>
              <div className="text-xs text-gray-500">IoT, Blockchain, Cyber Security & Product Engineering</div>
            </div>
          </div>

          <div className="flex items-start gap-3 rounded-2xl bg-white p-4 shadow-sm border border-gray-100 scroll-reveal">
            <svg className="w-6 h-6 text-primary flex-shrink-0" viewBox="0 0 24 24" fill="none" stroke="currentColor"
              aria-hidden="true">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.6"
                d="M12 8v4l3 3M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
            <div>
              <div className="text-sm font-semibold text-gray-900">Typical Response</div>
              <div className="text-xs text-gray-500">I reply to new inquiries within 1–2 business days.</div>
            </div>
          </div>

          <div className="flex items-start gap-3 rounded-2xl bg-white p-4 shadow-sm border border-gray-100 scroll-reveal">
            <svg className="w-6 h-6 text-primary flex-shrink-0" viewBox="0 0 24 24" fill="none" stroke="currentColor"
              aria-hidden="true">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.6" d="M3 7h18M3 12h18M3 17h18" />
            </svg>
            <div>
              <div className="text-sm font-semibold text-gray-900">Ready to start?</div>
              <div className="text-xs text-gray-500">Share a brief on the contact page and I’ll schedule a discovery call.
              </div>
            </div>
          </div>
        </div>

        {/*  Accordion  */}
        <div className="space-y-4">

          {/*  Q1  */}
          <details
            className="group rounded-3xl border border-gray-100 bg-white p-5 transition-shadow duration-200 scroll-reveal"
            open>
            <summary className="flex items-center justify-between cursor-pointer">
              <div className="flex items-center gap-3">
                <svg className="w-5 h-5 text-primary flex-shrink-0" viewBox="0 0 24 24" fill="none" stroke="currentColor"
                  aria-hidden="true">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.6"
                    d="M12 2a7 7 0 00-7 7c0 7 7 11 7 11s7-4 7-11a7 7 0 00-7-7z" />
                </svg>
                <h3 className="text-base font-medium text-gray-900">What services do you provide?</h3>
              </div>
              <svg className="w-5 h-5 text-gray-400 transition-transform duration-200 group-open:rotate-180"
                viewBox="0 0 24 24" fill="none" stroke="currentColor" aria-hidden="true">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" />
              </svg>
            </summary>

            <div className="mt-4 text-sm text-gray-700 leading-relaxed">
              I deliver end-to-end product work across design and engineering: user research, UX/UI design, interaction
              & visual design, prototyping, usability testing, and production handoff. I also build full-stack
              proofs-of-concept for IoT and embedded systems, implement secure authentication flows (biometric, OTP,
              TOTP) and design blockchain-backed transaction flows where needed. Projects are scoped to combine product
              thinking with engineering feasibility.
            </div>
          </details>

          {/*  Q2  */}
          <details
            className="group rounded-3xl border border-gray-100 bg-white p-5 transition-shadow duration-200 scroll-reveal">
            <summary className="flex items-center justify-between cursor-pointer">
              <div className="flex items-center gap-3">
                <svg className="w-5 h-5 text-primary flex-shrink-0" viewBox="0 0 24 24" fill="none" stroke="currentColor"
                  aria-hidden="true">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.6" d="M3 7h18M3 12h18M3 17h18" />
                </svg>
                <h3 className="text-base font-medium text-gray-900">How does your process work?</h3>
              </div>
              <svg className="w-5 h-5 text-gray-400 transition-transform duration-200 group-open:rotate-180"
                viewBox="0 0 24 24" fill="none" stroke="currentColor" aria-hidden="true">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" />
              </svg>
            </summary>

            <div className="mt-4 text-sm text-gray-700 leading-relaxed">
              My approach is collaborative and measurable:
              <ul className="mt-3 ml-4 list-disc space-y-2">
                <li><strong>Discover:</strong> Stakeholder alignment, problem framing and user research.</li>
                <li><strong>Prototype:</strong> Wireframes → interactive prototypes (Figma / HTML) to validate flows.
                </li>
                <li><strong>Validate:</strong> Usability tests, analytics tracking & iteration.</li>
                <li><strong>Deliver:</strong> Developer-ready assets, documentation, handoff & post-launch checks.</li>
              </ul>
            </div>
          </details>

          {/*  Q3  */}
          <details
            className="group rounded-3xl border border-gray-100 bg-white p-5 transition-shadow duration-200 scroll-reveal">
            <summary className="flex items-center justify-between cursor-pointer">
              <div className="flex items-center gap-3">
                <svg className="w-5 h-5 text-primary flex-shrink-0" viewBox="0 0 24 24" fill="none" stroke="currentColor"
                  aria-hidden="true">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.6" d="M12 4v4M12 16v4M4 12h16" />
                </svg>
                <h3 className="text-base font-medium text-gray-900">What does a typical engagement cost?</h3>
              </div>
              <svg className="w-5 h-5 text-gray-400 transition-transform duration-200 group-open:rotate-180"
                viewBox="0 0 24 24" fill="none" stroke="currentColor" aria-hidden="true">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" />
              </svg>
            </summary>

            <div className="mt-4 text-sm text-gray-700 leading-relaxed">
              Pricing depends on scope and deliverables. I offer:
              <ul className="mt-3 ml-4 list-disc space-y-2">
                <li>Small product work / audit — fixed fee.</li>
                <li>Feature / redesign work — milestone-based or fixed scope.</li>
                <li>Long-term collaborations — monthly retainer.</li>
              </ul>
              I’ll propose the best model after an initial discovery call and a brief scoping conversation.
            </div>
          </details>

          {/*  Q4  */}
          <details
            className="group rounded-3xl border border-gray-100 bg-white p-5 transition-shadow duration-200 scroll-reveal">
            <summary className="flex items-center justify-between cursor-pointer">
              <div className="flex items-center gap-3">
                <svg className="w-5 h-5 text-primary flex-shrink-0" viewBox="0 0 24 24" fill="none" stroke="currentColor"
                  aria-hidden="true">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.6"
                    d="M3 10h18M3 6h18M3 14h18M3 18h18" />
                </svg>
                <h3 className="text-base font-medium text-gray-900">How long will the project take?</h3>
              </div>
              <svg className="w-5 h-5 text-gray-400 transition-transform duration-200 group-open:rotate-180"
                viewBox="0 0 24 24" fill="none" stroke="currentColor" aria-hidden="true">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" />
              </svg>
            </summary>

            <div className="mt-4 text-sm text-gray-700 leading-relaxed">
              Timelines vary by complexity:
              <ul className="mt-3 ml-4 list-disc space-y-2">
                <li>Micro tasks (audit, small UI updates): 1–3 weeks.</li>
                <li>Feature designs & prototype validation: 4–8 weeks.</li>
                <li>End-to-end product design with research & testing: 2–4+ months.</li>
              </ul>
              Every proposal includes a timeline with milestones and review points.
            </div>
          </details>

          {/*  Q5  */}
          <details
            className="group rounded-3xl border border-gray-100 bg-white p-5 transition-shadow duration-200 scroll-reveal">
            <summary className="flex items-center justify-between cursor-pointer">
              <div className="flex items-center gap-3">
                <svg className="w-5 h-5 text-primary flex-shrink-0" viewBox="0 0 24 24" fill="none" stroke="currentColor"
                  aria-hidden="true">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.6"
                    d="M12 2l3 6 6 .5-5 4 1.5 6L12 16l-5.5 3.5L8 12 3 8.5 9 8z" />
                </svg>
                <h3 className="text-base font-medium text-gray-900">What deliverables will I receive?</h3>
              </div>
              <svg className="w-5 h-5 text-gray-400 transition-transform duration-200 group-open:rotate-180"
                viewBox="0 0 24 24" fill="none" stroke="currentColor" aria-hidden="true">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" />
              </svg>
            </summary>

            <div className="mt-4 text-sm text-gray-700 leading-relaxed">
              Deliverables are tailored to the engagement and commonly include:
              <ul className="mt-3 ml-4 list-disc space-y-2">
                <li>Research summaries & personas</li>
                <li>Wireframes, interactive prototypes (Figma/HTML) and design specs</li>
                <li>Accessibility checklist & usability test reports</li>
                <li>Developer handoff assets (components, tokens, documentation)</li>
                <li>Optional: Proof-of-concept code for IoT/embedded or blockchain flows</li>
              </ul>
            </div>
          </details>

          {/*  Q6  */}
          <details
            className="group rounded-3xl border border-gray-100 bg-white p-5 transition-shadow duration-200 scroll-reveal">
            <summary className="flex items-center justify-between cursor-pointer">
              <div className="flex items-center gap-3">
                <svg className="w-5 h-5 text-primary flex-shrink-0" viewBox="0 0 24 24" fill="none" stroke="currentColor"
                  aria-hidden="true">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.6" d="M12 1v22M1 12h22" />
                </svg>
                <h3 className="text-base font-medium text-gray-900">How do you handle security & privacy?</h3>
              </div>
              <svg className="w-5 h-5 text-gray-400 transition-transform duration-200 group-open:rotate-180"
                viewBox="0 0 24 24" fill="none" stroke="currentColor" aria-hidden="true">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" />
              </svg>
            </summary>

            <div className="mt-4 text-sm text-gray-700 leading-relaxed">
              Security is integral to my work. Depending on the project I follow secure-by-design principles, threat
              modeling, and best-practice authentication (e.g., AES/SHA, TOTP, secure biometric flows). I also advise on
              data minimization, encryption (in transit & at rest) and safe cloud configuration. For sensitive work we
              can sign an NDA prior to any data exchange.
            </div>
          </details>

          {/*  Q7  */}
          <details
            className="group rounded-3xl border border-gray-100 bg-white p-5 transition-shadow duration-200 scroll-reveal">
            <summary className="flex items-center justify-between cursor-pointer">
              <div className="flex items-center gap-3">
                <svg className="w-5 h-5 text-primary flex-shrink-0" viewBox="0 0 24 24" fill="none" stroke="currentColor"
                  aria-hidden="true">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.6"
                    d="M12 2a10 10 0 100 20 10 10 0 000-20zM8 12l2 2 4-4" />
                </svg>
                <h3 className="text-base font-medium text-gray-900">Can you build prototypes or hardware proofs-of-concept?
                </h3>
              </div>
              <svg className="w-5 h-5 text-gray-400 transition-transform duration-200 group-open:rotate-180"
                viewBox="0 0 24 24" fill="none" stroke="currentColor" aria-hidden="true">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" />
              </svg>
            </summary>

            <div className="mt-4 text-sm text-gray-700 leading-relaxed">
              Yes. I build interactive prototypes and simple embedded proofs-of-concept (e.g., Arduino / ESP8266/ESP32,
              RFID, load-cells, sensors) and integrate them with cloud backends for demos. For production hardware I
              collaborate with manufacturing/embedded partners and provide the system architecture and firmware handoff.
            </div>
          </details>

          {/*  Q8  */}
          <details
            className="group rounded-3xl border border-gray-100 bg-white p-5 transition-shadow duration-200 scroll-reveal">
            <summary className="flex items-center justify-between cursor-pointer">
              <div className="flex items-center gap-3">
                <svg className="w-5 h-5 text-primary flex-shrink-0" viewBox="0 0 24 24" fill="none" stroke="currentColor"
                  aria-hidden="true">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.6" d="M3 5h18M3 12h18M3 19h18" />
                </svg>
                <h3 className="text-base font-medium text-gray-900">What are the next steps to start a project?</h3>
              </div>
              <svg className="w-5 h-5 text-gray-400 transition-transform duration-200 group-open:rotate-180"
                viewBox="0 0 24 24" fill="none" stroke="currentColor" aria-hidden="true">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" />
              </svg>
            </summary>

            <div className="mt-4 text-sm text-gray-700 leading-relaxed">
              Send a short brief via the <a className="text-primary underline" href="Contact_page.html">Contact page</a>
              (project goals, timeline, budget range). I’ll review and propose a 15–30 minute discovery call to align
              expectations and scope. After that you’ll receive a written proposal with milestones and costs.
            </div>
          </details>

        </div>

        {/*  Footer CTA  */}
        <div className="mt-12 pt-8 border-t border-gray-100 text-center">
          <p className="text-sm text-gray-600">Still have a question that&apos;s not answered here?</p>
          <a href="Contact_page.html"
            className="mt-4 inline-flex items-center gap-3 px-6 py-3 rounded-full bg-primary text-white font-semibold hover:shadow-lg transition btn-shine">
            Contact Me
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3"></path>
            </svg>
          </a>
        </div>



    </>
  );
}

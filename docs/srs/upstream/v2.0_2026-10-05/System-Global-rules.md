# [System] - Global rules
Things that affect the whole product. Each is written once here; feature pages refer to it instead of repeating it.
| Item | What it covers | Not decided yet |
| Accessibility (A11Y) | Every screen of the app, the public site and hosted pages: keyboard use, contrast, labels for screen readers | Target level and effort (as a share of front-end work): Denys and Anatolii. New: not described in our documents before |
| All emails | Sent through Customer.io, in the user's language (English or French): email confirmation · password-reset code · welcome / first-code nudge · trial ending (proposed 3 days and 1 day before) · trial ended · payment receipt · payment failed · plan canceled · approaching a plan limit · code disabled by the QR.CA team · private feedback from a review code · account deleted | Final wording: design |
| English and Canadian French | Website, app, emails and hosted pages, from launch. All texts in translation files, managed in a translation platform (Crowdin or similar). Room in the layout for longer French text | — |
| Phone and desktop | Every screen works on both, with no horizontal scrolling on a phone; code styling is called out by the client | — |
| SEO basics | Indexable public pages, sitemap, structured data; owner pages indexable unless hidden | The client postpones SEO content (articles, industry pages) until after the MVP: how much of the marketing site is in V1 is with the client |
| Product analytics events | Funnel events to Amplitude (see [QR.CA business] - Product analytics and experiments) | — |
| Feature flags | Switchable onboarding, creation, paywall, upgrade prompts | — |
| Link safety service | Every link and file is checked at save and again on a schedule; uploads are also scanned for viruses | Re-check frequency: Denys |
| Security and operations | Encryption in transit and at rest, rate limits on sign-in, sign-up, creation, API and redirect, monitoring, logging, backups | Performance targets and session timeouts: Denys |
| Separate code domain | Codes are served from a dedicated domain, not qr.ca, so misuse cannot hurt the main brand | Domain name: with the client |
| Loading, empty and error states | Consistent across every screen | — |
▸ Traceability
  A11Y: new (Anatolii 2026-10-05) · emails: F-44, SRS §12.5 · languages: F-55, F-12, Slack 2026-10-05 (Oleksandra) · phone: F-56 · SEO: F-57, Slack 2026-10-05 · analytics: F-45 · flags: F-58 · link safety: F-46 · security: F-59 · domain: F-20 · ✅ brief §5

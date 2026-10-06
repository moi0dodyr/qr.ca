# 11–16. System requirements, scope, risks, open questions, glossary
## 11. System requirements
Constraints the system must meet. How it meets them is Denys Melnyk's design.
### 11.1 Integrations
| System | What it does for QR.CA | What QR.CA does not store |
| Stripe | Payment gateway | Card numbers |
| Recurly | Plans, trials, invoices, retries of failed payments, usage-based billing | Card numbers |
| Customer.io | All emails; segments by usage | — |
| Amplitude | Product funnel events | Anything that identifies a scanner |
| Link-reputation service (Google Safe Browsing or similar) | Checks links at save and on a schedule | — |
| Google sign-in | Sign-up and sign-in | Google password |
| Translation platform (Crowdin or similar) | English and Canadian French texts | — |
| Google Tag Manager, GA4, Meta Pixel | The customer's own tags on their hosted pages | — |
### 11.2 Business rules
- A code's short link is never given to another code, even after deletion.
- Edits to a dynamic code are never limited, on any plan. No plan limits scans.
- A plan limit blocks creating new codes; it never switches off live codes. This includes lowering a limit.
- The user sees two statuses: Active and Paused. Archive is a folder; a code in Archive is paused.
- Behind the statuses: paused by the owner, paused because archived, paused because the account has no plan, disabled by the QR.CA team, deleted. When several apply: disabled > deleted > paused > no plan > active.
- Static codes have no server state; their content is in the pattern.
- A duplicate gets a new short link and its own statistics.
- Sign-up is complete once the email is confirmed (Google sign-up is already confirmed).
- Plans, limits and feature gates are configuration, so pricing can change without a release.
- Time-based redirect: pause or archive wins over the schedule; outside every period the default link opens.
- Link-preview bots are redirected but not counted. A unique scan is one visitor per code per day, counted with an anonymous fingerprint that is never stored with anything identifying.
- Trial: 14 days, no card. Until the client decides, the estimate assumes codes pause after the trial and resume on payment without reprinting.
- Prices in CAD with GST / HST / QST by province; monthly and yearly on every paid plan.
- No anonymous downloads: downloading needs an account.
### 11.3 Security and privacy
- No health data anywhere; HIPAA does not apply. Personal data falls under PIPEDA; marketing email under CASL.
- Encryption in transit and at rest. Passwords stored only as strong salted hashes. Card data never reaches QR.CA.
- Admin console behind two-factor sign-in, with roles and an action log.
- Rate limits on sign-in, sign-up, creation, API and redirect traffic.
- Uploaded files are virus-scanned and served from a domain that cannot read app cookies.
- Scan statistics stop at the city and never identify a scanner.
- Canadian data hosting and the Quebec consent layer are deferred by the client; the design must allow both later. Consent for customer tags shown to Quebec visitors is still to be decided (Denys and legal).
### 11.4 API and platform events
- Customer API: per-account keys, JSON, scoped to the key's account, rate-limited, versioned, same plan limits as the web app. No data about scanners.
- UTM parameters on a scan are passed to the destination.
- QR.CA sends usage and lifecycle events to Recurly and Customer.io (account created, trial started / ending / ended, subscription changed, code created, first scan, scan thresholds). Sending retries and never slows the redirect.
- QR.CA receives Recurly events (payment failed, renewed, canceled, expired, new invoice) and updates accounts and codes.
- Webhooks for customers' own systems come after launch.
### 11.5 Notifications
All emails go through Customer.io in the user's language; the list is on the Global page. In the app: success and error messages, the trial banner, the failed-payment banner and the email-confirmation banner.
### 11.6 Performance and availability (proposed; Denys to confirm)
- Redirect under 150 ms for 95% of scans in Canada, including app-store and time-based routing.
- The redirect keeps working when the main app is down or being deployed.
- Counting a scan never delays the redirect or a page.
- Hosted pages show content within 2 seconds on a mid-range Android phone over mobile data.
- Statistics update within about 5 minutes of a scan. Bulk creation runs in the background with progress.
### 11.7 Sessions
- Email and password, and Google sign-in. No Apple sign-in in V1.
- Session length to be set by Denys (proposed: 30 days with "remember me", 24 hours without). Admin sessions 8 hours.
- Changing or resetting a password signs out other sessions.
## 12. Out of scope
| Not in V1 | Why |
| Canadian data hosting guarantee and the Quebec consent layer | Deferred by the client; the design keeps the door open |
| Routing by location or scan count | Later; time-based routing is in V1 |
| A general landing-page editor | V1 builds pages only for the links page and the business card |
| Scheduled publishing, password-protected codes | Later |
| More dynamic types (coupon, event, image, map, social page…) | The brief limits V1; to confirm with the client |
| A structured menu builder | Almost a separate product; V1 menu is a PDF |
| Anonymous download from the home page | Sign-up is required |
| Scan-summary emails, export, comparison with the previous period | Later |
| Webhooks for customers, Zapier / Make | Later; V1 has platform events for Recurly and Customer.io only |
| Teams, agencies, custom domains, white-label | Client's V2 list |
| Payments on hosted pages | A different product |
| AI-generated art codes | They break scannability |
| Native apps, SOC 2 | Client's V2 list |
| Advanced bot filtering | Later; V1 filters link-preview bots |
## 13. External services
QR.CA handles no health data, so no BAA is needed. What matters is a data-processing agreement under PIPEDA.
| Service | Purpose | Data agreement |
| Stripe | Payments | To confirm |
| Recurly | Subscriptions and invoices | To confirm |
| Customer.io | Email | To confirm |
| Amplitude | Product analytics | To confirm |
| Link-reputation service | Link safety | Commercial terms to confirm |
| Google sign-in, Google Tag Manager | Sign-in; customer tags | To confirm; consent for tags open |
| Crowdin or similar | Translations | Holds texts only |
| Cloud hosting, storage, cache | Platform | Denys's choice; Canadian region available |
| qr-code-styling (open source) | Draws the codes | Runs in our stack |
## 14. Risks
| # | Risk | Likelihood | Impact | Mitigation |
| 1 | What scanners see after the trial is not decided; onboarding, billing and scanner pages depend on it | High | High | Ask the client first; the code-state rules support either answer |
| 2 | The Figma file is wider than V1; design or estimate may promise more than is built | High | High | Mark every screen V1 or later with Oleg; this document is the V1 line |
| 3 | The pages people see after scanning are not drawn, yet most people see only them | High | High | Defined in the User section (scan a code, hosted pages, review page, code not available); add to Figma |
| 4 | A redirect outage breaks every printed code at once | Low | Critical | Separate redirect service with its own deployment and cache |
| 5 | Scam codes on a trusted national domain | Medium | High | Link checks, admin disable, separate code domain, rate limits |
| 6 | Customer tags fire for Quebec visitors without consent tooling | Medium | High | Decide tag consent early; tags load only on hosted pages |
| 7 | Two billing systems before pricing is set | Medium | Medium | Client's choice; plans configured in Recurly |
| 8 | Scope keeps growing through "table stakes" | High | Medium | Hold the V1 line in sections 9 and 12 |
## 15. Not decided yet
Collected from the feature pages. Client questions go through Anastasia, only with Christian's sign-off per question.
With the client
| Feature | Question |
| [User] - Home-page generator | Final list of landing sections and their content: with the client (the Figma landing page marks it "TBD"). |
| [User] - Home-page generator | How much of the marketing site is in V1 now that the client postpones SEO content: with the client. |
| [User] - Home-page generator | Oleg's idea of a small "download PNG preview" link without sign-up: waits for the client's reaction. |
| [User] - Template gallery (to confirm) | In V1 or later: with the client (the client postpones SEO content before the MVP). |
| [User] - Onboarding and trial | The wording about what happens to codes after the trial: depends on the client's decision about the end of the trial (see [User] - Plans and billing). |
| [User] - Onboarding and trial | The banner wording ("your codes will expire" or "will pause"): with the client. |
| [User] - Code creation | More dynamic types drawn in Figma (map location, social page, image, coupon, dynamic email / SMS / call): not in V1 unless the client asks. With the client. |
| [User] - Code creation | Whether static codes stay free after the trial: with the client. |
| [User] - Code creation | Allowed file types, maximum size and storage per plan: with the client and Denys. |
| [User] - Code creation | Warn or block publishing when French is missing: with the client (the estimate assumes warn, with block as a switch). |
| [User] - Code creation | Which 10 starter templates, by industry or by style: with design and the client. |
| [User] - Code management | What a static code does in Archive (it cannot be paused): with the client. |
| [User] - Bulk creation | The per-upload limit and the plan limits (numbers): with the client. |
| [User] - Plans and billing | Plans, prices and limits: with the client (the client's proposal: $120 a year or $20 a month, about $180 a year, $50 a month). |
| [User] - Plans and billing | What scanners see after the trial ends (a paused page naming the business, or "expired"): with the client. The estimate assumes the paused page. |
| [User] - Plans and billing | Whether there is a free "basic" level where static codes keep working: with the client; built as a switchable setting. |
| [User] - Plans and billing | Proration rules when changing plans: with the client. |
| [User] - Plans and billing | Length of the retry period: Recurly settings, with the client. |
| [User] - API | Which plans include the API: with the client. |
| [User] - Scan a code | The name of the redirect domain: with the client. |
| [User] - Code not available | What scanners see after the owner's trial ends: with the client. |
| [Admin] - Subscriptions | The refund policy, and whether refunds are done from the console or directly in Recurly: with the client. |
Denys
| Feature | Question |
| [User] - Authorization | Password rules (length, characters): Denys's call. |
| [User] - Authorization | The threshold for slowing down attempts and the session length: Denys's call. |
| [User] - Authorization | How long the code is valid (proposed 10 minutes) and how many attempts (proposed 5): Denys's call. |
| [User] - Code creation | Review: whether the user pastes a link or picks the business by Google Place ID: Denys's call. |
| [User] - Code management | Whether two identical, unchanged copies need a safeguard, and how statistics and the safety check treat them: Denys's call. |
| [User] - Code management | Whether the scans of a deleted code stay in the account totals: Denys's call. |
| [User] - Statistics | Whether the map is in the MVP at all: Christian and Denys (it is in Denys's estimate, not in the scope documents). |
| [User] - Plans and billing | Checkout as a Recurly-hosted page or our own form: Denys's call (it changes the size of this work). |
| [User] - Integrations | Consent for these tags for visitors from Quebec: Denys and legal. |
| [User] - Scan a code | Speed target (proposed: under 150 ms for 95% of scans in Canada): Denys's call. |
| [Admin] - Subscriptions | Whether this is a screen in the console or a configuration file managed by the team: Denys's call (no hours yet). |
| [Admin] - Codes and moderation | How often live links are re-checked: Denys's call. |
Design
| Feature | Question |
| [User] - Template gallery (to confirm) | Which templates (the same starter set as in code creation): design. |
| [User] - Code creation | Maximum number of links on a multi-link page: design. |
| [User] - Code management | Renaming and deleting folders are not drawn yet: design. |
| [User] - Review feedback | The exact screen is not designed yet: design. |
| [User] - Account settings | What a user who signed up with Google sees here (set a password, or a note that sign-in is through Google): design. |
| [User] - Integrations | The Figma screen has only the GTM field; GA4 and Meta Pixel fields are to be added: design. |
Team
| Feature | Question |
| [User] - Authorization | Whether confirmation is also a legal requirement: with Christian and Oleksandra. |
| [User] - Onboarding and trial | An optional "type of business" question in onboarding: proposed, not decided. |
| [User] - Code management | Whether the user can write the message shown on the paused page: proposed, nice to have. |
| [User] - Code management | Whether a final "archived" status is needed later: decided from usage. |
| [User] - Bulk creation | Which bulk use cases V1 supports beyond the basic one: Christian. |
| [User] - Plans and billing | Showing prices in the visitor's local currency: proposed; the estimate assumes display only, charging stays in CAD. |
### Assumptions in the estimate
Until the client answers, the estimate assumes the following. Each is built so that the other answer is a setting, not a rebuild.
| Open question | Assumption |
| What happens after the trial; is there a free level | Codes pause and show a friendly page; a free level can be switched on |
| Plans, prices, limits | Three paid plans; limits in configuration |
| French content rule | Warn when French is missing; blocking can be switched on |
| Currency | Show the visitor's currency; charge in CAD |
| Templates | Ten style templates; content from design |
| Code domain name, refunds, file limits | Placeholders; no effect on size |
## 16. Glossary
| Term | Meaning |
| Dynamic code | Points at a QR.CA short link that redirects to a destination the user can change |
| Static code | Content is in the pattern; cannot be changed or tracked |
| Hosted page | A simple phone-first page QR.CA hosts behind a code (links page, business card) |
| Code domain | The separate domain codes are served from, not qr.ca |
| Scan / unique scan | One read of a code / the first read per visitor per code per day |
| Scannability check | Test before download that a styled code still reads |
| Trial | 14 days free, no card |
| Archive | A folder for codes no longer used; archived codes are paused |
| Admin console | The internal QR.CA tool; never the customer's app |
| Recurly / Stripe | Subscription management / payment gateway |
| Customer.io / Amplitude | Email platform / product analytics |
| GTM / GA4 / Meta Pixel | Google Tag Manager / Google Analytics 4 / Meta's ad tracking tag |
| PIPEDA / CASL | Canadian privacy law / anti-spam law |
| Law 25 / Bill 96 | Quebec privacy law / French-language law |
| MoSCoW | Priority: Must, Should, Could, Won't |

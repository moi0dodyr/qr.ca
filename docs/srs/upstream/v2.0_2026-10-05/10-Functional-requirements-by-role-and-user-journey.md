# 10. Functional requirements, by role and user journey
Each feature below is a page in the Notion Product Backlog with its user stories, acceptance criteria and open questions. All stories are Must for V1 unless marked to confirm.
### 10.1 User
Anyone who meets QR.CA: the visitor, the signed-in customer from trial to paid plan, and the person who scans a printed code (not signed in).
[User] - Home-page generator
| Story | User story |
| see the landing page | As a visitor I want to understand what QR.CA does and start making a code straight away |
| create a QR code without an account | As a visitor I want to make a QR code on the home page without signing up so that I see the product work before I commit |
| sign up to download the code | As a visitor I want to get the code I just made, after a quick sign-up, so that I can use it |
[User] - Template gallery (to confirm)
| Story | User story |
| browse templates and open one in the generator | As a visitor I want to see ready-made designs and start from one so that my first code looks good without effort |
[User] - Authorization
| Story | User story |
| sign up with email and password | As a visitor I want to create an account with my email so that I can keep and manage my codes |
| confirm the email | As a new user I want to confirm my email so that my account can always be recovered |
| sign up or sign in with Google | As a visitor I want to use my Google account so that I skip the password |
| sign in with email and password | As a user I want to sign in so that I get to my codes |
| reset the password | As a user I want to reset a forgotten password so that I can get back into my account |
| sign out | As a user I want to sign out so that nobody else uses my account on this device |
[User] - Onboarding and trial
| Story | User story |
| see the welcome window | As a new user I want to understand my trial and my next step straight away so that I get value before it ends |
| see how many trial days are left | As a trial user I want to always see how long my trial has left so that nothing surprises me |
[User] - Navigation
| Story | User story |
| see the sidebar and the account menu | As a user I want one workspace with a clear menu so that I find everything in one place |
[User] - Dashboard
| Story | User story |
| see the list of codes | As a user I want to see all my codes in one list so that I can manage them |
| search, filter and sort the codes | As a user I want to find a code quickly so that I do not scroll through all of them |
[User] - Code creation
| Story | User story |
| step 1: choose the code type | As a user I want to choose what my code does, and whether it is dynamic or static, so that I get the right form |
| step 2: enter the content | As a user I want to fill in what my code opens so that the people who scan it reach the right thing |
| step 2: set up a time-based redirect | As a user I want one code to open different links at different times so that I print one code instead of several |
| step 2: get told when a link is unsafe | As a user I want to know at once if a link is unsafe so that I understand why my code cannot be saved |
| step 3: build the page behind the code | As a user I want to style the page my code opens so that it looks like my business |
| step 4: style the code | As a user I want to style the code itself so that it matches my brand |
| step 5: check that the code will scan | As a user I want to be warned if my design may not scan so that I do not print a broken code |
| step 6: name and file the code | As a user I want to name and file a code as I create it so that I can find it later |
| step 7: save and download | As a user I want to save my code and download it in the right format so that it prints sharply |
| cancel creation | As a user I want to leave creation without saving so that I do not create codes by accident |
[User] - Code management
| Story | User story |
| edit a code without reprinting | As a user I want to change what my code opens so that printed material stays up to date |
| pause and reactivate a code | As a user I want to switch a code off and on so that I control when it works |
| duplicate a code | As a user I want to copy a code's set-up so that I do not rebuild similar codes from scratch |
| delete a code | As a user I want to remove codes I no longer need so that my list stays tidy |
| move a code to Archive and restore it | As a user I want to put codes I no longer use into an Archive so that my working list stays short |
| organise codes in folders | As a user I want folders and tags so that I group codes by location, campaign or client |
[User] - Bulk creation
| Story | User story |
| upload a spreadsheet of codes | As a user I want to create many codes from one spreadsheet so that I do not make them one by one |
| check the rows before anything is created | As a user I want to see which rows are wrong before codes are created so that I fix the file first |
| style the batch and download all codes | As a user I want one design for the whole batch and all files in one download so that bulk is as easy as one code |
[User] - Scan a code
The user who is not signed in and points a phone camera at a printed code: usually a member of the public, the customer of the business that made the code. They never sign in and never see the app. Static codes do not involve QR.CA at all: the phone reads the content directly. Everything below is about dynamic codes, which go through the QR.CA redirect.
| Story | User story |
| land on the destination | As someone scanning the code I want the code to open the right thing instantly so that I get what the sign promised |
| go to the right app store | As someone scanning the code I want an app code to open the right store for my phone so that I install the app in one step |
| land on the link for the current time | As someone scanning the code I want a time-based code to open what is valid right now |
[User] - Hosted pages
| Story | User story |
| open a links page or a business card | As someone scanning the code I want the page behind the code to open quickly on my phone so that I get what I came for |
| open a PDF or a menu | As someone scanning the code I want the PDF or menu to open directly so that I read it without an app |
| read the page in English or French | As a French-speaking person scanning the code I want the page in French so that I understand it |
[User] - Review page
| Story | User story |
| rate the business and go to its Google reviews | As a customer I want to leave a review quickly so that I can share my experience |
[User] - Code not available
| Story | User story |
| see a clear page when a code does not open | As someone scanning the code I want a clear message when a code is not working so that I know it is not broken or a scam |
[User] - Statistics
| Story | User story |
| see the statistics of one code | As a user I want to see how one code is scanned so that I know whether it works |
| see the statistics across all codes | As a user I want totals across all my codes so that I see the whole picture |
| see guidance while a code has few scans | As a new user I want to be told what will appear here so that analytics never look broken |
| see a live map of scans (to confirm) | As a user I want a map of where my codes are scanned so that I see activity as it comes in |
Not in V1: scan-summary emails; export and comparison with the previous period.
[User] - Review feedback
| Story | User story |
| read private feedback and ratings | As a business owner I want to read what unhappy customers tell me privately so that I can fix problems |
[User] - Plans and billing
The client chose Recurly for subscriptions (plans, trials, invoices, retries of failed payments) and Stripe as the payment gateway. A new user gets a 14-day trial without a card. They can pay at any time from the upgrade window. When the trial ends without payment, or a plan lapses, the account moves to "no active plan": the user still sees everything but cannot create or edit, and their codes are paused (exact behaviour for scanners still with the client). Plans, limits and which features each plan unlocks are configuration, not code, so they can change without a release. A limit change never switches off live codes; it only blocks creating new ones over the limit.
| Story | User story |
| see the plans and prices | As a user I want to compare plans so that I choose the right one |
| upgrade and pay | As a user I want to upgrade wherever I hit a limit so that I keep working |
| work without an active plan | As a user without a plan I want to know what still works so that I am never stuck |
| manage the plan, card and invoices | As a user I want one place for my plan and invoices so that billing is never a mystery |
| cancel the plan | As a user I want to cancel in the app so that I stay in control of what I pay |
| fix a failed payment | As a user I want to know when a payment fails so that my codes do not stop without warning |
[User] - Account settings
| Story | User story |
| edit the name | As a user I want to keep my name current |
| change the email | As a user I want to change my email so that I can always get into my account |
| change the password | As a user I want to change my password so that my account stays safe |
| delete the account | As a user I want to delete my account and data so that I can leave completely |
[User] - API
QR.CA opens its own API so that a customer's systems (an online shop, a CRM, a print workflow) can create and manage their QR codes automatically, without anyone using the web app. Example: a shop with 500 products creates a code for each new product the moment it is added to the catalogue. The client asked for it for the largest customers. It is the same as the web app, for programs instead of people.
| Story | User story |
| create and revoke API keys | As a user with my own systems I want an API key so that my developer can connect them to QR.CA |
| let own systems manage codes through the API | As a developer I want to create and manage codes by API so that our system does it automatically |
[User] - Integrations
| Story | User story |
| add Google Tag Manager, GA4 and Meta Pixel to hosted pages | As a marketer I want my own tags on my hosted pages so that scans reach my own analytics and ads |
Not in V1: webhooks to the user's own systems.
### 10.2 Admin
The QR.CA team in the internal console.
[Admin] - Authorization
The QR.CA team, in the internal admin console (not the customer's app). Two roles: support admin (helps customers, moderates codes) and super admin (everything a support admin does, plus admin users and platform statistics).
| Story | User story |
| sign in with two-factor | As a QR.CA admin I want a secure sign-in so that the console stays safe |
| sign out | As a QR.CA admin I want to sign out so that nobody uses my session |
[Admin] - Navigation
| Story | User story |
| see the console navigation | As a QR.CA admin I want a clear menu so that I reach each tool quickly |
[Admin] - Accounts
| Story | User story |
| find an account | As a support admin I want to look up any customer so that I can answer their question |
| see an account | As a support admin I want to see what the customer sees so that I can help them |
| suspend or reactivate an account | As a support admin I want to suspend an abusive account so that it stops causing harm |
[Admin] - Subscriptions
| Story | User story |
| see a customer's subscription | As a support admin I want to see a customer's subscription so that I can explain their bill |
| extend a trial | As a support admin I want to give a customer more trial days so that a customer with a problem is looked after |
| grant a goodwill code | As a support admin I want to keep one code live for a customer without a plan so that I can help someone with a problem |
| issue a refund or credit | As a support admin I want to refund or credit a customer so that billing mistakes are fixed |
| see and adjust plans and limits (new) | As a super admin I want to see and adjust what each plan includes so that pricing can change without a release |
[Admin] - Codes and moderation
| Story | User story |
| disable a harmful code | As a support admin I want to switch off a harmful code at once so that people who scan it are protected |
| review flagged links | As a support admin I want doubtful links queued for a person to check so that scams are caught without slowing honest users |
[Admin] - Platform statistics
| Story | User story |
| see how the platform is doing | As the founder I want platform-wide numbers so that I understand what customers make and who they are |
[Admin] - Admin users
| Story | User story |
| invite and remove admins | As a super admin I want to control who has admin access so that internal tools stay safe |
| see the log of admin actions | As a super admin I want to see what every admin did so that we know who changed what |
### 10.3 QR.CA business
The client's own product analytics and experiments.
[QR.CA business] - Product analytics and experiments
| Story | User story |
| track the funnel in Amplitude | As the founder I want to see where visitors drop off on the way to paying so that I can improve the product |
| change key steps with feature flags | As the founder I want to change onboarding and paywall steps without a release so that I can test what converts |
Not in V1: the A/B testing framework itself.
### 10.4 System
Background behaviour with no screen, and the rules that apply to the whole product.
[System] - Subscriptions engine (Recurly + Stripe)
| Story | User story |
| keep plans, trials and invoices in Recurly | As QR.CA we want subscriptions handled by a billing system so that nobody manages them by hand |
| update accounts and codes from billing events | As QR.CA we want accounts to follow payments automatically so that codes pause and resume at the right time |
| send usage and segments to Recurly and Customer.io | As QR.CA we want billing and emails to react to what customers do |
[System] - Code states
| Story | User story |
| one state model for every code | As QR.CA we want one clear rule for what a code does in each situation so that a printed code never breaks |
[System] - Global rules
Rules for the whole product, written once.
| Item | What it covers |
| Accessibility (A11Y) | Every screen of the app, the public site and hosted pages: keyboard use, contrast, labels for screen readers |
| All emails | Sent through Customer.io, in the user's language (English or French): email confirmation · password-reset code · welcome / first-code nudge · trial ending (proposed 3 days and 1 day before) · trial ended · payment receipt · payment failed · plan canceled · approaching a plan limit · code disabled by the QR.CA team · private feedback from a review code · account deleted |
| English and Canadian French | Website, app, emails and hosted pages, from launch. All texts in translation files, managed in a translation platform (Crowdin or similar). Room in the layout for longer French text |
| Phone and desktop | Every screen works on both, with no horizontal scrolling on a phone; code styling is called out by the client |
| SEO basics | Indexable public pages, sitemap, structured data; owner pages indexable unless hidden |
| Product analytics events | Funnel events to Amplitude (see [QR.CA business] - Product analytics and experiments) |
| Feature flags | Switchable onboarding, creation, paywall, upgrade prompts |
| Link safety service | Every link and file is checked at save and again on a schedule; uploads are also scanned for viruses |
| Security and operations | Encryption in transit and at rest, rate limits on sign-in, sign-up, creation, API and redirect, monitoring, logging, backups |
| Separate code domain | Codes are served from a dedicated domain, not qr.ca, so misuse cannot hurt the main brand |
| Loading, empty and error states | Consistent across every screen |

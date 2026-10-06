# 0004 — Account-state banners sit on the Dashboard; only the trial banner stays in the sidebar

**Date:** 2026-10-05 · **Status:** Accepted · **Decided by:** Oleg

## Context

QR-U-42 AC2 says the sidebar shows the banner that matches the account state: the trial countdown (QR-U-30) or *codes paused*. Other stories ask for more banners without saying where they go: failed payment (QR-U-35), waiting for email confirmation (QR-U-36 AC2) and canceled until period end (QR-U-34 AC3). §12.2 also has a suspended state. QR-U-42 AC1 lists *Upgrade* in the account menu without saying for which state.

The audit asked for all of these banners in the Sidebar (#25) and for an Upgrade item in the subscribed account menu (#28). Oleg drew it differently in Figma: the note `8256:11547` on the Dashboard (no-subscription, no-trial branch) lists the four extra banners, and the subscribed account menu `8193:24139` has no Upgrade item.

## Decision

1. The **trial countdown and trial banner** stay in the bottom-left of the sidebar (QR-U-30, the client's "bottom left" ask in C-1.3).
2. Every **other account-state banner** sits at the top of the Dashboard:
   - codes paused (no active subscription),
   - waiting for email confirmation, with *Resend*,
   - canceled until period end, with *Choose a plan*,
   - payment failed and retrying, with *Update card*,
   - suspended by an admin, with *Contact support*.
3. The **Upgrade** item in the account menu is shown on trial and without a subscription. Subscribed owners don't see it. If SRS-Q-08 brings higher paid plans, they move up through *Plans & Billing*.

**Why:** these banners carry a message and an action, and they read better in the main area than in a narrow sidebar. A subscribed owner has nothing to upgrade to while there's one paid plan.

## Consequences

- Upstream is read-only, so this goes to the SRS owner as change request **DR-05** ([audit](../design/figma-audit-2026-10-01.md#requests-to-change-the-docs)). Until it's recorded upstream, QR-U-42 still puts the banner in the sidebar (A-15). This record is the prototype's basis for building it on the Dashboard.
- `domain-model.md` places the banners as above.
- Audit #25 and #28 are accepted. Their open rows are gone from `figma-audit-open-items.md`.
- Prototype screens with an owner-app frame (briefs 04 and 05) show only the trial banner in the sidebar. The failed-payment and canceled banners go on the Dashboard, plus the *Plans & Billing* states from audit #59.

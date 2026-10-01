# 0002 — The home page is demo-only; scanner pages wait for a later design stage

**Date:** 2026-10-01 · **Status:** Accepted · **Decided by:** Oleg

## Context

The audit in task 01 found that the prototype's home page differs from SRS v1.0 in several places (PG-01…PG-13, PG-15): the type list, static vs dynamic, the vCard mode, download copy and the sign-up flow. Separately, task 01 suggested the scanner-side pages (FL-12, QR-U-38/39) as the next task, because they aren't drawn in Figma.

## Decision

1. The current home page is **for demonstration only**. Its gaps against the SRS are **deferred**. Don't open tasks for them, and don't align the home page with the SRS type list, until Oleg reopens it.
2. The **scanner-side pages** (FL-12) need design work first. They are **deferred to a later stage** and are not the next task.
3. The next tasks come from the owner-side stages (owner web app, creation, management and so on), in the order Oleg chooses.

## Consequences

- `prototype-gaps.md` marks the home-page gaps as *Deferred (0002)*. PG-14 (EN/FR, no hard-coded text) stays open, because it applies to every new screen.
- `prototype-scope.md` marks E1 and E8 as deferred.
- New screens still follow the SRS. This decision covers only the existing home page.

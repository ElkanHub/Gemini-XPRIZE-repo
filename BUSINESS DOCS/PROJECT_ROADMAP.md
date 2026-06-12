# Hackathon Roadmap — 90-Day Build, Ship, Sell

**Deadline:** Aug 17, 2026 @ 8:00pm UTC
**Goal:** Real product, real AI agents in production, real revenue, real customers.

---

## 0. Before Anything Else — Lock the Idea (Days 1–3)

- [ ] Finalize the chosen idea and category (Education, Entrepreneurship, Small Business, Money & Financial Access, or Professional Services)
- [ ] Write a one-paragraph problem statement: who has this problem, how painful is it, how do they solve it today
- [ ] Identify 10–15 real prospective customers you can contact in week 1 (names, phone numbers, WhatsApp contacts)
- [ ] Confirm at least one Google Cloud product to integrate (Gemini API, Vertex AI, Cloud Run, Firebase, etc.)
- [ ] Assign roles: who builds, who sells, who handles ops/admin, who owns documentation

---

## 1. Team & Repo Setup (Days 1–5)

- [ ] GitHub repo structure: `/app`, `/agents`, `/docs`, `/evidence`
- [ ] Add `testing@devpost.com` and `judging@hacker.fund` as collaborators (do this early, not at deadline)
- [ ] Set up project board (GitHub Projects or similar) with columns: Backlog, In Progress, Testing, Shipped
- [ ] Create shared docs folder for: pitch deck, narrative draft, expense tracker, customer list
- [ ] Decide communication channel and weekly check-in schedule (e.g., 2x/week sync calls)
- [ ] Set up a shared Google Drive/Notion for non-code assets

---

## 2. Define the AI Agent Architecture (Days 3–10)

- [ ] Map out what humans do vs what AI agents do — this is core to the judging narrative
- [ ] Define each agent's role (e.g., bookkeeping agent, customer support agent, lead-gen agent)
- [ ] Choose Gemini model + Google Cloud integration points
- [ ] Decide how agent actions will be logged (this becomes your "product evidence")
- [ ] Design data flow: input (WhatsApp/SMS/web) → agent processing → output/action → logging

---

## 3. MVP Build (Days 5–30)

- [ ] Build the thinnest possible version that solves the core pain point
- [ ] Integrate Gemini API for the primary AI task
- [ ] Implement logging/analytics from day one (you'll need this as evidence later)
- [ ] Set up basic auth, database, and core user flow
- [ ] Deploy to a live environment (Cloud Run, Vercel, etc.) — must be a working product, not a local demo
- [ ] Internal testing with the team acting as users

---

## 4. First Real Customers (Days 20–40)

- [ ] Reach out to your initial 10–15 contacts — get them onboarded as actual users
- [ ] Set up a way to collect payments (Stripe, Paystack, Mobile Money)
- [ ] Start a simple CRM/spreadsheet: customer name, contact, signup date, payment status, feedback
- [ ] Get first paying customer — document this moment (screenshot, receipt, testimonial)
- [ ] Begin collecting testimonials and feedback as you go (don't wait until the end)

---

## 5. Iterate Based on Real Usage (Days 30–55)

- [ ] Weekly review of what's working / what users are confused by
- [ ] Improve agent accuracy and reliability based on real interactions
- [ ] Expand to additional features only if customers are asking for them
- [ ] Track AI usage metrics: how many tasks the agent handled vs humans
- [ ] Start drafting the written narrative (500–1000 words) early — update it weekly rather than writing it all at the end

---

## 6. Marketing & Growth Push (Days 40–70)

- [ ] Define a marketing channel strategy (WhatsApp groups, social media, referrals, local partnerships)
- [ ] Track every cedi/dollar spent on marketing — this must be disclosed even if zero
- [ ] Set growth targets (e.g., 50 paying users by Day 60)
- [ ] Collect more customer testimonials and case studies
- [ ] Document everything visually — screenshots, dashboards, before/after stories

---

## 7. Evidence Collection (Ongoing, intensify Days 60–80)

Build a running `/evidence` folder in the repo with:

- [ ] Revenue evidence: Stripe/Paystack dashboard exports, bank statements, simple P&L
- [ ] Expense tracker: all marketing/customer acquisition spend, dated and itemized
- [ ] Agent execution logs: exported logs showing AI making real decisions
- [ ] API usage records (Google Cloud / Gemini usage dashboards)
- [ ] Customer evidence: names, emails, phone numbers, signed consent if needed for sharing
- [ ] Screenshots of the product in active use
- [ ] Corporate registration ID (if your business is registered)

---

## 8. Video & Narrative Production (Days 75–85)

- [ ] Script the 3-minute demo video — focus on AI running live, not just slides
- [ ] Show: real agent in action, real dashboard, real customer (if they'll appear)
- [ ] Record screen captures of agent execution logs and decisions
- [ ] Edit video — keep it tight, demo-first, minimal narration filler
- [ ] Finalize written narrative covering:
  - How AI is used day-to-day
  - What humans do vs what AI does
  - Jobs/economic opportunities created
  - The story of building this way

---

## 9. Final Submission Prep (Days 85–90)

- [ ] Confirm GitHub repo is shared correctly with both required emails
- [ ] Final check: all evidence files organized and clearly labeled
- [ ] Proofread narrative document
- [ ] Submit video, ensure it's under 3 minutes and accessible
- [ ] Double-check Devpost submission form for all required fields
- [ ] Submit early — don't wait until the last hours (server issues, link errors happen)

---

## Weekly Cadence (Suggested)

| Day | Activity |
|---|---|
| Monday | Team sync — review last week, set this week's goals |
| Wed/Thu | Build/dev work, customer outreach |
| Friday | Update evidence folder, log metrics, customer check-ins |

---

## Key Reminders

- **Revenue and real customers matter more than polish.** A rough product with 10 paying users beats a beautiful demo with none.
- **Start collecting evidence from Day 1** — don't try to reconstruct it at the end.
- **Keep the narrative updated weekly** so it reflects the real journey, not a rushed summary.
- **Disclose all expenses honestly, including zero spend** — this is a viability check, not a penalty for low budgets.

import Image from "next/image";
import type { CSSProperties } from "react";
import { MotionLayer } from "./team-motion";

type RevenueMilestone = {
  label: string;
  amount: number;
};

const workstreams = [
  {
    number: "01",
    title: "Research",
    meta: "Problem framing / Evidence review",
    description:
      "Turns broad challenge prompts into testable assumptions, user groups, and submission-ready impact logic.",
  },
  {
    number: "02",
    title: "Product",
    meta: "Prototype / User journeys",
    description:
      "Designs lightweight workflows that show how Gemini can move from insight to action for real communities.",
  },
  {
    number: "03",
    title: "Engineering",
    meta: "AI systems / Demos",
    description:
      "Builds the working surface: model orchestration, retrieval, evaluation loops, and polished demos.",
  },
  {
    number: "04",
    title: "Submission",
    meta: "Story / Metrics / Pitch",
    description:
      "Packages the proof, narrative, and operating plan into a clear XPRIZE submission with measurable outcomes.",
  },
];

const team = [
  ["Lead", "Challenge owner", "Direction, decisions, and partner alignment"],
  ["Builder", "Full-stack AI", "Prototype, model integration, and deployment"],
  ["Designer", "Product systems", "Experience design, visual language, and demo flow"],
  ["Analyst", "Impact evidence", "Research synthesis, metrics, and validation"],
];

function parseNumber(value: string | undefined, fallback: number) {
  const parsed = Number(value);

  return Number.isFinite(parsed) ? parsed : fallback;
}

function parseMilestones(value: string | undefined): RevenueMilestone[] {
  if (!value) {
    return [];
  }

  try {
    const parsed = JSON.parse(value) as RevenueMilestone[];

    if (!Array.isArray(parsed)) {
      return [];
    }

    return parsed
      .map((milestone) => ({
        label: String(milestone.label ?? ""),
        amount: Number(milestone.amount),
      }))
      .filter((milestone) => milestone.label && Number.isFinite(milestone.amount))
      .sort((a, b) => a.amount - b.amount);
  } catch {
    return [];
  }
}

function formatMoney(amount: number, currency: string) {
  return `${amount.toLocaleString("en-US", {
    maximumFractionDigits: amount % 1 === 0 ? 0 : 2,
  })} ${currency}`;
}

function RevenueTube() {
  const currentRevenue = parseNumber(process.env.REVENUE_CURRENT_AMOUNT, 0);
  const targetRevenue = Math.max(
    parseNumber(process.env.REVENUE_TARGET_AMOUNT, 100000),
    1,
  );
  const currency = process.env.REVENUE_CURRENCY ?? "GHC";
  const milestones = parseMilestones(process.env.REVENUE_MILESTONES);
  const progress = Math.min(Math.max((currentRevenue / targetRevenue) * 100, 0), 100);

  return (
    <aside data-reveal className="revenue-panel hero-text">
      <div className="flex items-end justify-between gap-4">
        <div>
          <p className="text-xs uppercase leading-5 text-[#ffc857]">
            Revenue generated
          </p>
          <p className="mt-2 text-3xl font-black text-[#fffaf0] md:text-4xl">
            {formatMoney(currentRevenue, currency)}
          </p>
        </div>
        <p className="text-right text-xs uppercase leading-5 text-[#f4eadc]">
          Target
          <br />
          {formatMoney(targetRevenue, currency)}
        </p>
      </div>

      <div
        className="revenue-tube"
        style={{ "--revenue-progress": `${progress}%` } as CSSProperties}
      >
        <div className="revenue-fill" />
        <div className="revenue-shine" />
        {milestones.map((milestone) => {
          const position = Math.min(
            Math.max((milestone.amount / targetRevenue) * 100, 0),
            100,
          );
          const reached = currentRevenue >= milestone.amount;

          return (
            <div
              key={`${milestone.label}-${milestone.amount}`}
              className="revenue-milestone"
              style={{ bottom: `${position}%` }}
            >
              <span className={reached ? "is-reached" : ""} />
              <p>
                {milestone.label}
                <strong>{formatMoney(milestone.amount, currency)}</strong>
              </p>
            </div>
          );
        })}
      </div>

      <div className="mt-4 flex items-center justify-between text-xs uppercase text-[#f4eadc]">
        <span>0 {currency}</span>
        <span>{Math.round(progress)}% funded</span>
      </div>
    </aside>
  );
}

export default function Home() {
  return (
    <main className="min-h-screen overflow-hidden bg-[#0e0e0e] text-[#f4f1ea]">
      <MotionLayer />

      <nav className="fixed left-0 right-0 top-0 z-40 flex items-center justify-between border-b border-white/10 bg-[#0e0e0e]/82 px-5 py-5 text-xs uppercase text-[#f4f1ea] backdrop-blur-md md:px-10">
        <a href="#top" className="nav-link">
          Gemini XPRIZE
        </a>
        <div className="flex items-center gap-5 md:gap-8">
          <a href="#team" className="nav-link">
            Team
          </a>
          <a href="#work" className="nav-link">
            Work
          </a>
          <a href="#contact" className="nav-link">
            Join
          </a>
        </div>
      </nav>

      <section
        id="top"
        className="relative flex min-h-[100svh] flex-col justify-between gap-14 px-5 pb-8 pt-28 md:px-10 md:pb-10"
      >
        <div className="absolute inset-0 overflow-hidden">
          <Image
            data-hero-image
            src="/hero-bg.png"
            alt="Gemini XPRIZE team collaboration visual"
            fill
            preload
            sizes="100vw"
            className="object-cover opacity-55"
          />
          <div className="absolute inset-0 bg-[#0e0e0e]/56" />
          <div className="absolute inset-x-0 bottom-0 h-1/2 bg-gradient-to-t from-[#0e0e0e]/95 to-transparent" />
        </div>

        <div className="relative z-10 grid gap-10 lg:grid-cols-[1fr_0.42fr_0.34fr] lg:items-start">
          <div className="overflow-hidden">
            <p data-reveal className="mb-6 max-w-sm text-sm uppercase leading-6 text-[#efe6d7]">
              Hackathon team / Gemini-powered impact systems
            </p>
            <h1 className="display-title hero-text max-w-[10ch]">
              <span data-reveal className="block">
                Build the
              </span>
              <span data-reveal className="block">
                proof.
              </span>
              <span data-reveal className="block text-[#ffc857]">
                Win the
              </span>
              <span data-reveal className="block">
                prize.
              </span>
            </h1>
          </div>

          <div
            data-reveal
            className="hero-text max-w-md self-end border-l border-[#ffc857]/70 pl-5 text-lg leading-8 text-[#f4eadc] lg:pt-28"
          >
            We are assembling a focused team to turn Gemini into a practical,
            testable XPRIZE submission: research-backed, beautifully presented,
            and strong enough to survive judging.
          </div>

          <RevenueTube />
        </div>

        <div className="relative z-10 grid gap-6 border-t border-white/20 pt-5 text-sm uppercase leading-6 text-[#efe6d7] md:grid-cols-3">
          <p data-reveal>Remote-first / Ghana and global contributors</p>
          <p data-reveal>
            Current revenue tracked:{" "}
            {formatMoney(
              parseNumber(process.env.REVENUE_CURRENT_AMOUNT, 0),
              process.env.REVENUE_CURRENCY ?? "GHC",
            )}
          </p>
          <p data-reveal className="md:text-right">
            Scroll to meet the operating model
          </p>
        </div>
      </section>

      <section id="work" className="px-5 py-24 md:px-10 md:py-32">
        <div className="mb-16 flex flex-col gap-6 md:grid md:grid-cols-[0.28fr_1fr]">
          <p data-reveal className="text-sm uppercase text-[#ffc857]">
            Workstreams
          </p>
          <h2 data-reveal className="section-title max-w-5xl">
            A small team, organized like a studio: every role ships evidence,
            product, and story.
          </h2>
        </div>

        <div className="border-t border-white/15">
          {workstreams.map((item) => (
            <article
              data-reveal
              className="group grid gap-5 border-b border-white/15 py-8 md:grid-cols-[0.15fr_0.55fr_0.3fr] md:items-center"
              key={item.number}
            >
              <p className="text-sm text-[#a8a092]">{item.number}</p>
              <div>
                <h3 className="row-title transition duration-500 group-hover:text-[#ffc857]">
                  {item.title}
                </h3>
                <p className="mt-2 text-sm uppercase text-[#a8a092]">
                  {item.meta}
                </p>
              </div>
              <p className="max-w-xl text-base leading-7 text-[#ded7cb] md:justify-self-end">
                {item.description}
              </p>
            </article>
          ))}
        </div>
      </section>

      <section className="relative overflow-hidden py-20">
        <div
          data-marquee
          className="marquee-text flex w-max gap-10 whitespace-nowrap font-black uppercase leading-none text-[#f4f1ea]"
        >
          <span>Research</span>
          <span className="text-[#5dd39e]">Prototype</span>
          <span>Evaluate</span>
          <span className="text-[#ffc857]">Submit</span>
        </div>
      </section>

      <section
        id="team"
        className="grid gap-14 px-5 py-24 md:grid-cols-[0.45fr_1fr] md:px-10 md:py-32"
      >
        <div>
          <p data-reveal className="mb-6 text-sm uppercase text-[#5dd39e]">
            Team
          </p>
          <h2 data-reveal className="section-title">
            Clear ownership beats busy collaboration.
          </h2>
        </div>

        <div className="grid gap-4">
          {team.map(([role, label, detail]) => (
            <div
              data-reveal
              key={role}
              className="grid gap-3 border-t border-white/15 py-6 md:grid-cols-[0.3fr_0.32fr_1fr]"
            >
              <h3 className="text-3xl font-semibold md:text-5xl">{role}</h3>
              <p className="text-sm uppercase text-[#a8a092]">{label}</p>
              <p className="max-w-2xl text-base leading-7 text-[#ded7cb]">
                {detail}
              </p>
            </div>
          ))}
        </div>
      </section>

      <section className="px-5 py-24 md:px-10 md:py-32">
        <div className="grid gap-10 border-y border-white/15 py-12 md:grid-cols-[1fr_0.55fr] md:items-end">
          <h2 data-reveal className="section-title max-w-5xl">
            The page, prototype, and pitch should all feel like one argument.
          </h2>
          <p data-reveal className="text-lg leading-8 text-[#ded7cb]">
            The design direction is intentionally spare: near-black surfaces,
            oversized type, restrained color, strong image treatment, and
            motion that makes the team feel precise rather than decorative.
          </p>
        </div>
      </section>

      <footer id="contact" className="px-5 pb-8 pt-24 md:px-10">
        <p data-reveal className="mb-8 text-sm uppercase text-[#ffc857]">
          Open roles / Research, product, engineering, storytelling
        </p>
        <a
          data-reveal
          href="mailto:team@gemini-xprize.local"
          className="footer-cta block break-words transition duration-500 hover:text-[#5dd39e]"
        >
          Join the team
        </a>
        <div className="mt-14 flex flex-col gap-3 border-t border-white/15 pt-5 text-sm uppercase text-[#a8a092] md:flex-row md:items-center md:justify-between">
          <p>Gemini XPRIZE Hackathon</p>
          <p>Built for fast proof, clear judgment, and measurable impact.</p>
        </div>
      </footer>
    </main>
  );
}

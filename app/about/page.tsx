import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "About Us | Aura Media",
  description:
    "About Aura Media, a digital agency shaping the future of media through advanced AI integration and immersive design.",
};

const navItems = [
  { label: "Work", href: "/" },
  { label: "Services", href: "/services" },
  { label: "Agency", href: "/about", active: true },
  { label: "Journal", href: "#" },
  { label: "Contact", href: "mailto:hello@auramedia.com" },
];

const solutionCards = [
  {
    number: "01",
    title: "Predictive\nAnalytics",
    description:
      "Harness machine learning algorithms to anticipate market trends and consumer behavior with unprecedented accuracy.",
    icon: (
      <svg
        width="18"
        height="18"
        viewBox="0 0 24 24"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="text-[#10d7d1]"
        aria-hidden="true"
      >
        <path
          d="M12 3a7 7 0 1 0 7 7"
          stroke="currentColor"
          strokeWidth="1.4"
          strokeLinecap="round"
        />
        <path
          d="M12 7v5l3 2"
          stroke="currentColor"
          strokeWidth="1.4"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <circle cx="19" cy="5" r="2" stroke="currentColor" strokeWidth="1.4" />
      </svg>
    ),
  },
  {
    number: "02",
    title: "Generative\nCampaigns",
    description:
      "Automated, hyper-personalized creative generation scaling across all platforms simultaneously.",
    icon: (
      <svg
        width="18"
        height="18"
        viewBox="0 0 24 24"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="text-[#10d7d1]"
        aria-hidden="true"
      >
        <path
          d="M12 3l1.25 4.75L18 9l-4.75 1.25L12 15l-1.25-4.75L6 9l4.75-1.25L12 3Z"
          stroke="currentColor"
          strokeWidth="1.4"
          strokeLinejoin="round"
        />
        <path
          d="M19 15l.75 2.25L22 18l-2.25.75L19 21l-.75-2.25L16 18l2.25-.75L19 15Z"
          stroke="currentColor"
          strokeWidth="1.2"
          strokeLinejoin="round"
        />
      </svg>
    ),
  },
  {
    number: "03",
    title: "Neural Networks",
    description:
      "Deep learning models optimizing ad spend and audience targeting in real-time environments.",
    icon: (
      <svg
        width="18"
        height="18"
        viewBox="0 0 24 24"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="text-[#10d7d1]"
        aria-hidden="true"
      >
        <circle cx="7" cy="7" r="2.1" stroke="currentColor" strokeWidth="1.4" />
        <circle cx="17" cy="7" r="2.1" stroke="currentColor" strokeWidth="1.4" />
        <circle cx="12" cy="17" r="2.1" stroke="currentColor" strokeWidth="1.4" />
        <path
          d="M8.8 8.2 10.7 15M15.2 8.2 13.3 15M9.1 7h5.8"
          stroke="currentColor"
          strokeWidth="1.4"
          strokeLinecap="round"
        />
      </svg>
    ),
  },
];

const socialLinks = ["Instagram", "LinkedIn", "Vimeo", "Twitter"];

export default function AboutPage() {
  return (
    <div className="relative min-h-screen overflow-x-hidden bg-[#020202] text-[#f2f2f2]">
      <div
        className="pointer-events-none absolute inset-0 opacity-90"
        style={{
          backgroundImage:
            "linear-gradient(rgba(255,255,255,0.028) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.028) 1px, transparent 1px), radial-gradient(circle at 50% 16%, rgba(255,255,255,0.06), transparent 28%), linear-gradient(180deg, rgba(255,255,255,0.015), rgba(0,0,0,0) 25%), linear-gradient(180deg, #030303, #020202)",
          backgroundSize: "72px 72px, 72px 72px, 100% 100%, 100% 100%, 100% 100%",
        }}
      />

      <header className="relative z-10 border-b border-white/12">
        <div className="mx-auto flex max-w-[1600px] items-center justify-between gap-6 px-5 py-5 sm:px-8">
          <Link
            href="/"
            className="text-[20px] font-semibold uppercase tracking-[-0.04em] text-white"
          >
            AURA MEDIA
          </Link>

          <nav className="hidden items-center gap-8 md:flex">
            {navItems.map((item) => (
              <Link
                key={item.label}
                href={item.href}
                className={[
                  "text-[11px] uppercase tracking-[0.22em] text-white/72 transition-colors hover:text-white",
                  item.active ? "border-b border-white pb-1 text-white" : "",
                ].join(" ")}
              >
                {item.label}
              </Link>
            ))}
          </nav>

          <Link
            href="mailto:hello@auramedia.com"
            className="inline-flex h-11 items-center justify-center border border-white/90 bg-[#efefef] px-6 text-[11px] font-medium uppercase tracking-[0.24em] text-black transition-colors hover:bg-white"
          >
            Start a Project
          </Link>
        </div>
      </header>

      <main className="relative z-10">
        <section className="px-5 pb-32 pt-24 sm:px-8 sm:pb-44 sm:pt-32">
          <div className="mx-auto flex min-h-[720px] max-w-[1600px] flex-col items-center justify-center text-center">
            <p className="text-[11px] font-medium uppercase tracking-[0.38em] text-[#10d7d1]">
              Digital Experience
            </p>

            <h1 className="mt-10 max-w-[1280px] text-[70px] font-black uppercase leading-[0.84] tracking-[-0.07em] text-[#ededed] sm:text-[108px] md:text-[152px] lg:text-[186px]">
              THE
              <br />
              FUTURE
              <br />
              OF MEDIA
            </h1>

            <p className="mt-8 max-w-[760px] text-[18px] leading-[1.8] text-white/76 sm:text-[20px]">
              Pioneering next-generation digital experiences through advanced
              AI integration, immersive data visualization, and visionary
              aesthetic precision.
            </p>

            <div className="mt-12 flex flex-col items-center gap-4 sm:flex-row">
              <Link
                href="/services"
                className="inline-flex min-w-[198px] items-center justify-center border border-white/80 bg-[#efefef] px-8 py-4 text-[11px] font-medium uppercase tracking-[0.3em] text-black transition-colors hover:bg-white"
              >
                Explore Solutions
              </Link>
              <Link
                href="https://vimeo.com"
                className="inline-flex min-w-[176px] items-center justify-center border border-white/20 bg-transparent px-8 py-4 text-[11px] font-medium uppercase tracking-[0.3em] text-white transition-colors hover:bg-white/8"
              >
                Watch Reel
              </Link>
            </div>
          </div>
        </section>

        <section className="px-5 pb-28 sm:px-8 sm:pb-36">
          <div className="mx-auto max-w-[1600px]">
            <h2 className="text-[54px] font-black uppercase leading-none tracking-[-0.06em] text-[#ededed] sm:text-[74px]">
              AI Solutions
            </h2>
            <div className="mt-6 h-px w-full bg-white/16" />

            <div className="mt-16 grid gap-6 lg:grid-cols-3">
              {solutionCards.map((card) => (
                <article
                  key={card.number}
                  className="min-h-[430px] border border-white/8 bg-[rgba(255,255,255,0.015)] px-7 py-8 shadow-[0_0_0_1px_rgba(255,255,255,0.015)] backdrop-blur-[2px] sm:px-9 sm:py-9"
                >
                  <div className="flex items-start justify-between">
                    <span className="text-[54px] font-black tracking-[-0.08em] text-white/12">
                      {card.number}
                    </span>
                    {card.icon}
                  </div>

                  <h3 className="mt-16 whitespace-pre-line text-[38px] font-semibold leading-[1.02] tracking-[-0.05em] text-white sm:text-[44px]">
                    {card.title}
                  </h3>

                  <p className="mt-6 max-w-[320px] text-[17px] leading-[1.85] text-white/68">
                    {card.description}
                  </p>
                </article>
              ))}
            </div>
          </div>
        </section>
      </main>

      <footer className="relative z-10 border-t border-white/10 bg-[#09090b] px-5 py-20 sm:px-8 sm:py-24">
        <div className="mx-auto grid max-w-[1600px] gap-16 lg:grid-cols-[1.2fr_1fr] lg:items-end">
          <div>
            <p className="text-[72px] font-semibold uppercase leading-none tracking-[-0.07em] text-[#ededed] sm:text-[96px]">
              AURA MEDIA
            </p>
            <p className="mt-8 max-w-[520px] text-[19px] leading-[1.7] text-white/72">
              Shaping the future of digital experience through uncompromising
              design and technological innovation.
            </p>
          </div>

          <div className="flex flex-col items-start gap-10 lg:items-end">
            <div className="flex flex-wrap gap-x-8 gap-y-3 text-[11px] uppercase tracking-[0.24em] text-white/72">
              {socialLinks.map((item) => (
                <Link key={item} href="#" className="transition-colors hover:text-white">
                  {item}
                </Link>
              ))}
            </div>

            <p className="text-[11px] uppercase tracking-[0.28em] text-white/54">
              © 2024 Aura Media Agency. All rights reserved.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}

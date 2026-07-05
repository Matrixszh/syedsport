import type { Metadata } from "next";
import Link from "next/link";
import ShapeGrid from "@/components/ShapeGrid";
import SiteFooter from "@/components/SiteFooter";
import SiteNavbar from "@/components/SiteNavbar";
import SplitText from "@/components/SplitText";

export const metadata: Metadata = {
  title: "Services | Aura Media",
  description:
    "Full-stack engineering, performance marketing, automation, interactive media, and cloud infrastructure built to unlock scalable growth.",
};

type ServiceItem = {
  title: string;
  description: string;
  resourceLabel?: string;
};

type Pillar = {
  number: string;
  title: string;
  tagline: string;
  items: ServiceItem[];
};

const pillars: Pillar[] = [
  {
    number: "01",
    title: "Software Engineering & Digital Products",
    tagline: "High-performance code meets conversion psychology.",
    items: [
      {
        title: "Custom Web & Software",
        description:
          "Full-stack engineering of secure, high-performance websites, web applications, enterprise portals, and proprietary SaaS platforms built to scale without performance bottlenecks.",
        resourceLabel: "NEW",
      },
      {
        title: "UI/UX Design",
        description:
          "High-fidelity user interface and experience design combining premium aesthetics with conversion psychology to eliminate user friction.",
        resourceLabel: "NEW",
      },
      {
        title: "App Development",
        description:
          "iOS and Android mobile applications engineered for speed, intuitive navigation, and secure payment integrations.",
      },
    ],
  },
  {
    number: "02",
    title: "Advanced Automation & AI",
    tagline: "Streamline your operations and scale your touchpoints.",
    items: [
      {
        title: "Chatbot & AI Integrations",
        description:
          "Intelligent, natural-language AI layers deployed across WhatsApp, Web, and CRM, trained on your data for 24/7 automated lead qualification and support.",
        resourceLabel: "NEW",
      },
      {
        title: "Custom Workflows",
        description:
          "Bespoke automation workflows engineered to solve unique operational inefficiencies and save your team thousands of hours.",
      },
    ],
  },
  {
    number: "03",
    title: "Immersive Interactive Media",
    tagline: "Gamify your engagement to drive serious monetization.",
    items: [
      {
        title: "Game Development",
        description:
          "Cross-platform games and interactive 3D simulations built on Unity or Unreal Engine, optimized for high engagement and structured monetization.",
      },
    ],
  },
  {
    number: "04",
    title: "High-End Cinematography & Commercial Photography",
    tagline: "Immersive visual storytelling engineered to convert.",
    items: [
      {
        title: "Commercial & Brand Cinematography",
        description:
          "Premium, cinematic video production tailored for television, digital campaigns, and high-impact brand storytelling.",
          resourceLabel: "NEW",
      },
      {
        title: "High-Fidelity Photography",
        description:
          "Professional commercial, product, and asset photography designed to elevate brand authority and luxury positioning.",
      },
      {
        title: "Direct-Response Ad Creative",
        description:
          "High-velocity video and static creative assets engineered specifically for paid media, optimized with scroll-stopping hooks to capture immediate consumer demand.",
      },
    ],
  },
  {
    number: "05",
    title: "Elite Performance Marketing Engines",
    tagline: "Data-backed customer acquisition designed to scale revenue.",
    items: [
      {
        title: "Google Ads",
        description:
          "Search ecosystem management utilizing Creative Gap Analysis and Performance Max campaigns to capture high-intent traffic and maximize ROAS.",
        resourceLabel: "NEW",
      },
      {
        title: "Meta Ads",
        description:
          "Full-funnel paid social campaigns driven by aggressive creative testing and scroll-stopping hooks to capture immediate demand.",
        resourceLabel: "NEW",
      },
      {
        title: "Amazon Advertising",
        description:
          "Strategic management of Sponsored Ads and keyword harvesting to dominate the digital shelf and maximize marketplace revenue.",
        resourceLabel: "NEW",
      },
      {
        title: "Advanced Data Analytics",
        description:
          "Precision implementation of Google Analytics 4, custom tracking frameworks, and server-side tracking to ensure accurate data attribution and transparent ROI mapping.",
        resourceLabel: "NEW",
      },
    ],
  },
  {
    number: "06",
    title: "Cloud Engineering & Infrastructure",
    tagline: "Zero downtime. Infinite scale.",
    items: [
      {
        title: "Cloud Migration & Management",
        description:
          "Seamless transition of legacy systems to AWS, GCP, or Azure with automated backups, ensuring 99.9% global uptime even under heavy traffic spikes.",
      },
    ],
  },
  {
    number: "07",
    title: "Support & Long-Term Maintenance",
    tagline: "Continuous optimization to keep you flawless.",
    items: [
      {
        title: "Post-Launch Maintenance",
        description:
          "Ongoing software updates, security patching, bug fixes, and performance optimization to ensure your digital assets remain secure and flawless long after launch.",
      },
    ],
  },
];

function PillarCard({ pillar }: { pillar: Pillar }) {
  return (
    <article className="border border-white/10 bg-black/95 p-6 text-center backdrop-blur-[2px] sm:p-8">
      <div className="flex items-center justify-center gap-6">
        <span className="h-px w-full max-w-[180px] bg-white/10" />
        <SplitText
          tag="p"
          text={pillar.number}
          className="text-[15px] font-semibold tracking-[0.18em] text-[#10d7d1]/85"
          textAlign="center"
          splitType="chars"
          delay={8}
          duration={0.42}
          from={{ opacity: 0, y: 8 }}
          to={{ opacity: 1, y: 0 }}
        />
        <span className="h-px w-full max-w-[180px] bg-white/10" />
      </div>

      <SplitText
        tag="h3"
        text={pillar.title}
        className="mx-auto mt-6 max-w-[760px] text-[28px] font-black uppercase leading-[0.95] tracking-[-0.05em] text-white sm:text-[38px]"
        textAlign="center"
        splitType="words, chars"
        delay={10}
        duration={0.58}
        from={{ opacity: 0, y: 14 }}
        to={{ opacity: 1, y: 0 }}
      />
      <SplitText
        tag="p"
        text={pillar.tagline}
        className="mx-auto mt-4 max-w-[720px] text-[14px] font-medium uppercase tracking-[0.18em] text-white/55"
        textAlign="center"
        splitType="words"
        delay={8}
        duration={0.5}
        from={{ opacity: 0, y: 10 }}
        to={{ opacity: 1, y: 0 }}
      />

      <div className="mt-8 grid justify-items-center gap-4 md:grid-cols-2">
        {pillar.items.map((item, index) => (
          <div
            key={item.title}
            className={[
              "w-full border border-white/8 bg-white/[0.03] p-5 transition-colors duration-300 hover:border-[#10d7d1]/35",
              pillar.items.length === 1
                ? "md:col-span-2 md:max-w-[560px]"
                : pillar.items.length % 2 === 1 && index === pillar.items.length - 1
                  ? "md:col-span-2 md:max-w-[560px]"
                  : "max-w-none",
            ].join(" ")}
          >
            <div className="flex flex-col items-center justify-center gap-3">
              <SplitText
                tag="h4"
                text={item.title}
                className="text-center text-[20px] font-semibold tracking-[-0.03em] text-white"
                textAlign="center"
                splitType="words, chars"
                delay={8}
                duration={0.48}
                from={{ opacity: 0, y: 10 }}
                to={{ opacity: 1, y: 0 }}
              />
              {item.resourceLabel ? (
                <span className="inline-flex h-7 items-center justify-center border border-[#10d7d1]/30 px-3 text-[10px] font-semibold uppercase tracking-[0.25em] text-[#10d7d1]">
                  <SplitText
                    tag="span"
                    text={item.resourceLabel}
                    className="text-[10px] font-semibold uppercase tracking-[0.25em] text-[#10d7d1]"
                    textAlign="center"
                    splitType="chars"
                    delay={6}
                    duration={0.4}
                    from={{ opacity: 0, y: 6 }}
                    to={{ opacity: 1, y: 0 }}
                  />
                </span>
              ) : null}
            </div>
            <SplitText
              tag="p"
              text={item.description}
              className="mt-4 text-center text-[16px] leading-7 text-white/62"
              textAlign="center"
              splitType="words"
              delay={6}
              duration={0.46}
              from={{ opacity: 0, y: 8 }}
              to={{ opacity: 1, y: 0 }}
            />
          </div>
        ))}
      </div>
    </article>
  );
}

export default function ServicesPage() {
  return (
    <div className="relative flex min-h-screen w-full flex-col overflow-x-hidden bg-none text-white">
      <div
        className="pointer-events-none fixed inset-0 -z-10"
        style={{
          backgroundImage:
            "radial-gradient(circle at 50% 16%, rgba(255,255,255,0.06), transparent 28%), linear-gradient(180deg, rgba(255,255,255,0.015), rgba(0,0,0,0) 25%), linear-gradient(180deg, #030303, #020202)",
          backgroundSize: "100% 100%, 100% 100%, 100% 100%",
        }}
      />
      <div className="pointer-events-none fixed inset-0 -z-10 opacity-80">
        <ShapeGrid
          speed={0.5}
          squareSize={80}
          direction="diagonal"
          borderColor="#10d7d1"
          hoverFillColor="#222222"
          shape="square"
          hoverTrailAmount={0}
        />
      </div>
      <div className="pointer-events-none fixed inset-0 -z-10 bg-[radial-gradient(circle_at_50%_18%,rgba(141,184,169,0.08),transparent_26%)]" />

      <SiteNavbar />

      <main className="relative z-10">
        <section className="px-5 pb-20 pt-28 sm:px-8 sm:pb-24 sm:pt-32">
          <div className="mx-auto flex min-h-[78vh] max-w-[1600px] items-center justify-center text-center">
            <div className="flex flex-col items-center">
              <SplitText
                tag="p"
                text="FULL-STACK GROWTH ENGINEERING"
                className="block text-[11px] font-medium uppercase tracking-[0.38em] text-[#10d7d1]"
                textAlign="center"
                splitType="chars"
                delay={14}
                duration={0.55}
                from={{ opacity: 0, y: 10 }}
                to={{ opacity: 1, y: 0 }}
              />
              <SplitText
                tag="h1"
                text={"WE ENGINEER\nYOUR ENTIRE\nGROWTH."}
                className="mt-8 block max-w-[980px] text-[54px] font-black uppercase leading-[0.84] tracking-[-0.07em] text-[#ededed] sm:text-[86px] md:text-[112px] lg:text-[138px]"
                textAlign="center"
                splitType="lines"
                delay={16}
                duration={0.8}
                from={{ opacity: 0, y: 28 }}
                to={{ opacity: 1, y: 0 }}
              />
            </div>
          </div>
        </section>

        <section className="px-5 pb-10 sm:px-8">
          <div className="mx-auto flex max-w-[1600px] flex-col items-center border-t border-white/10 pt-10 text-center">
            <SplitText
              tag="p"
              text="OUR PILLARS"
              className="block text-[11px] font-medium uppercase tracking-[0.38em] text-[#10d7d1]"
              textAlign="center"
              splitType="chars"
              delay={14}
              duration={0.55}
              from={{ opacity: 0, y: 10 }}
              to={{ opacity: 1, y: 0 }}
            />
            <SplitText
              tag="h2"
              text="Integrated systems for engineering, acquisition, media, and scale."
              className="mt-5 block max-w-[900px] text-[38px] font-black uppercase leading-[0.92] tracking-[-0.05em] text-white sm:text-[62px]"
              textAlign="center"
              splitType="words, chars"
              delay={14}
              duration={0.7}
              from={{ opacity: 0, y: 18 }}
              to={{ opacity: 1, y: 0 }}
            />
            <SplitText
              tag="p"
              text="Each pillar is designed to connect technology, performance, and storytelling into one growth system instead of fragmented vendor work."
              className="mt-6 block max-w-[760px] text-[14px] leading-8 text-white/62 sm:text-[15px]"
              textAlign="center"
              splitType="words"
              delay={14}
              duration={0.6}
              from={{ opacity: 0, y: 16 }}
              to={{ opacity: 1, y: 0 }}
            />
          </div>
        </section>

        <section className="px-5 pb-24 sm:px-8 sm:pb-28">
          <div className="mx-auto max-w-[1600px]">
            <div className="grid gap-6">
              {pillars.map((pillar) => (
                <PillarCard key={pillar.number} pillar={pillar} />
              ))}
            </div>
          </div>
        </section>

        <section className="px-5 pb-24 sm:px-8 sm:pb-32">
          <div className="mx-auto flex max-w-[1600px] flex-col items-center border border-white/10 bg-gradient-to-br from-[#10d7d1]/20 via-black/60 to-black p-6 text-center sm:p-10">
            <SplitText
              tag="p"
              text="CONTACT & FOOTER"
              className="block text-[11px] font-medium uppercase tracking-[0.38em] text-[#10d7d1]"
              textAlign="center"
              splitType="chars"
              delay={12}
              duration={0.55}
              from={{ opacity: 0, y: 10 }}
              to={{ opacity: 1, y: 0 }}
            />
            <SplitText
              tag="h2"
              text="READY TO ENGINEER YOUR GROWTH?"
              className="mt-5 block max-w-[840px] text-[38px] font-black uppercase leading-[0.92] tracking-[-0.05em] text-white sm:text-[62px]"
              textAlign="center"
              splitType="words, chars"
              delay={14}
              duration={0.7}
              from={{ opacity: 0, y: 18 }}
              to={{ opacity: 1, y: 0 }}
            />
            <SplitText
              tag="p"
              text="Let's discuss your current tech and marketing goals."
              className="mt-6 block max-w-[620px] text-[14px] leading-8 text-white/68 sm:text-[15px]"
              textAlign="center"
              splitType="words"
              delay={12}
              duration={0.55}
              from={{ opacity: 0, y: 12 }}
              to={{ opacity: 1, y: 0 }}
            />

            <div className="mt-10 flex w-full justify-center">
              <div className="flex flex-col items-center justify-center gap-4 sm:flex-row">
                <Link
                  href="/contact"
                  className="inline-flex h-11 min-w-[220px] items-center justify-center border border-[#10d7d1] bg-[#10d7d1] px-6 text-[10px] font-medium uppercase tracking-[0.26em] text-black transition-colors hover:bg-[#10d7d1]/90"
                >
                  <SplitText
                    tag="span"
                    text="Schedule A Consultation"
                    className="text-[10px] font-medium uppercase tracking-[0.26em] text-black"
                    textAlign="center"
                    splitType="chars"
                    delay={5}
                    duration={0.38}
                    from={{ opacity: 0, y: 6 }}
                    to={{ opacity: 1, y: 0 }}
                  />
                </Link>
                <Link
                  href="mailto:syednouman@skyworldpartners.com"
                  className="inline-flex h-11 min-w-[220px] items-center justify-center border border-white/20 bg-transparent px-6 text-[10px] font-medium uppercase tracking-[0.26em] text-white transition-colors hover:bg-white/8"
                >
                  <SplitText
                    tag="span"
                    text="Get In Touch"
                    className="text-[10px] font-medium uppercase tracking-[0.26em] text-white"
                    textAlign="center"
                    splitType="chars"
                    delay={5}
                    duration={0.38}
                    from={{ opacity: 0, y: 6 }}
                    to={{ opacity: 1, y: 0 }}
                  />
                </Link>
              </div>
            </div>
          </div>
        </section>
      </main>

      <SiteFooter />
    </div>
  );
}

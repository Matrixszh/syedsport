import type { Metadata } from "next";
import Link from "next/link";
import ShapeGrid from "@/components/ShapeGrid";
import SiteFooter from "@/components/SiteFooter";
import SiteNavbar from "@/components/SiteNavbar";
import SplitText from "@/components/SplitText";

export const metadata: Metadata = {
  title: "About Us | Aura Media",
  description:
    "About Aura Media, a digital agency shaping the future of media through advanced AI integration and immersive design.",
};

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

export default function AboutPage() {
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
        <section className="px-5 pb-24 pt-24 sm:px-8 sm:pb-32 sm:pt-32">
          <div className="mx-auto flex min-h-[760px] max-w-[1600px] flex-col items-center justify-center text-center">
            <SplitText
              tag="p"
              text="DIGITAL EXPERIENCE"
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
              text={"THE\nFUTURE\nOF MEDIA"}
              className="mt-8 block max-w-[1280px] text-[70px] font-black uppercase leading-[0.84] tracking-[-0.07em] text-[#ededed] sm:text-[108px] md:text-[152px] lg:text-[186px]"
              textAlign="center"
              splitType="lines"
              delay={16}
              duration={0.8}
              from={{ opacity: 0, y: 28 }}
              to={{ opacity: 1, y: 0 }}
            />

            <SplitText
              tag="p"
              text="Pioneering next-generation digital experiences through advanced AI integration, immersive data visualization, and visionary aesthetic precision."
              className="block mt-8 max-w-[700px] text-[14px] leading-7 text-white/65 sm:text-[15px]"
              textAlign="center"
              splitType="words"
              delay={14}
              duration={0.6}
              from={{ opacity: 0, y: 16 }}
              to={{ opacity: 1, y: 0 }}
            />

            <div className="mt-10 flex flex-col items-center gap-4 sm:flex-row">
              <Link
                href="/services"
                className="inline-flex h-11 min-w-[170px] items-center justify-center border border-white bg-white px-6 text-[10px] font-medium uppercase tracking-[0.26em] text-black transition-colors hover:bg-white/90"
              >
                Explore Solutions
              </Link>
              <Link
                href="https://vimeo.com"
                className="inline-flex h-11 min-w-[170px] items-center justify-center border border-white/25 bg-transparent px-6 text-[10px] font-medium uppercase tracking-[0.26em] text-white transition-colors hover:bg-white/8"
              >
                Watch Reel
              </Link>
            </div>
          </div>
        </section>

        <section className="px-5 pb-28 sm:px-8 sm:pb-32">
          <div className="mx-auto max-w-[1600px]">
            <SplitText
              tag="h2"
              text="AI SOLUTIONS"
              className="block text-[36px] font-black uppercase tracking-[-0.05em] text-white sm:text-[56px]"
              textAlign="left"
              splitType="chars"
              delay={12}
              duration={0.65}
              from={{ opacity: 0, y: 14 }}
              to={{ opacity: 1, y: 0 }}
            />

            <div className="mt-6 h-px w-full bg-white/8" />

            <div className="mt-10 grid gap-5 md:grid-cols-3">
              {solutionCards.map((card) => (
                <article
                  key={card.number}
                  className="relative min-h-[270px] border border-white/8 bg-[#0a0a0d] p-6 sm:p-7"
                >
                  <div className="flex items-start justify-between">
                    <SplitText
                      tag="p"
                      text={card.number}
                      className="block text-[18px] font-semibold tracking-[-0.04em] text-white/18 sm:text-[20px]"
                      textAlign="left"
                      splitType="chars"
                      delay={10}
                      duration={0.45}
                      from={{ opacity: 0, y: 8 }}
                      to={{ opacity: 1, y: 0 }}
                    />
                    <div className="text-[#10d7d1]">{card.icon}</div>
                  </div>

                  <SplitText
                    tag="h3"
                    text={card.title}
                    className="mt-10 block text-[31px] font-semibold leading-[0.95] tracking-[-0.05em] text-white"
                    textAlign="left"
                    splitType="lines"
                    delay={12}
                    duration={0.6}
                    from={{ opacity: 0, y: 16 }}
                    to={{ opacity: 1, y: 0 }}
                  />

                  <SplitText
                    tag="p"
                    text={card.description}
                    className="mt-6 block max-w-[290px] text-[13px] leading-7 text-white/55"
                    textAlign="left"
                    splitType="words"
                    delay={10}
                    duration={0.5}
                    from={{ opacity: 0, y: 10 }}
                    to={{ opacity: 1, y: 0 }}
                  />
                </article>
              ))}
            </div>
          </div>
        </section>
      </main>

      <SiteFooter />
    </div>
  );
}

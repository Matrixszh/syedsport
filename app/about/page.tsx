import type { Metadata } from "next";
import Link from "next/link";
import SiteFooter from "@/components/SiteFooter";
import SiteNavbar from "@/components/SiteNavbar";

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
            "linear-gradient(rgba(255,255,255,0.028) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.028) 1px, transparent 1px), radial-gradient(circle at 50% 16%, rgba(255,255,255,0.06), transparent 28%), linear-gradient(180deg, rgba(255,255,255,0.015), rgba(0,0,0,0) 25%), linear-gradient(180deg, #030303, #020202)",
          backgroundSize: "72px 72px, 72px 72px, 100% 100%, 100% 100%, 100% 100%",
        }}
      />

      <SiteNavbar />

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

          <SplitText
            tag="p"
            text="Pushing the boundaries of digital creation. We do not just follow trends, we set them. This is design and code made bold, in noise and in silence."
            className="block mt-6 max-w-[540px] text-[13px] leading-6 text-white/58 sm:text-[14px]"
            textAlign="left"
            splitType="words"
            delay={20}
            duration={0.8}
            from={{ opacity: 0, y: 18 }}
            to={{ opacity: 1, y: 0 }}
          />
        </section>

        <section className="mt-10 sm:mt-12">
          <div className="overflow-hidden rounded-2xl border border-white/10 bg-white/[0.03] shadow-[0_50px_120px_rgba(0,0,0,0.65)]">
            <div className="relative h-[50vh] w-full">
              <div
                className="absolute inset-0"
                style={{
                  backgroundImage:
                    "radial-gradient(140px 140px at 26% 78%, rgba(255,255,255,0.12), rgba(0,0,0,0) 70%), radial-gradient(220px 180px at 58% 46%, rgba(255,255,255,0.08), rgba(0,0,0,0) 70%), linear-gradient(180deg, rgba(255,255,255,0.04), rgba(255,255,255,0) 40%), linear-gradient(135deg, rgba(20,20,28,0.9), rgba(6,6,12,0.92))",
                }}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/25 to-black/10" />

              <button
                type="button"
                aria-label="Play"
                className="absolute left-1/2 top-1/2 grid h-14 w-14 -translate-x-1/2 -translate-y-1/2 place-items-center rounded-full border border-white/20 bg-white/10 backdrop-blur-sm transition-colors hover:bg-white/15"
              >
                <span className="ml-0.5 block h-0 w-0 border-y-[9px] border-l-[14px] border-y-transparent border-l-white/85" />
              </button>
            </div>
          </div>
        </section>

        <section className="mt-20 pb-16 sm:mt-28 sm:pb-20">
          <div className="flex flex-col gap-6 sm:flex-row sm:items-end sm:justify-between">
            <h2 className="text-[34px] font-black uppercase leading-[0.9] tracking-[-0.03em] text-white sm:text-[40px]">
              <SplitText
                tag="span"
                text="The"
                className="block"
                textAlign="left"
                splitType="chars"
                delay={18}
                duration={0.75}
                from={{ opacity: 0, y: 14 }}
                to={{ opacity: 1, y: 0 }}
              />
              <SplitText
                tag="span"
                text="  Archive"
                className="block"
                textAlign="left"
                splitType="chars"
                delay={18}
                duration={0.75}
                from={{ opacity: 0, y: 14 }}
                to={{ opacity: 1, y: 0 }}
              />
            </h2>
            <SplitText
              tag="p"
              text="Selected works from the depths. No noise — only signal."
              className="block max-w-[320px] text-[12px] leading-5 text-white/55"
              textAlign="left"
              splitType="words"
              delay={16}
              duration={0.6}
              from={{ opacity: 0, y: 10 }}
              to={{ opacity: 1, y: 0 }}
            />
          </div>

          <div className="mt-10 grid gap-6 md:grid-cols-12 md:gap-7">
            <article className="group relative overflow-hidden rounded-2xl border border-white/10 bg-white/[0.03] md:col-span-7">
              <div
                className="absolute inset-0 opacity-90"
                style={{
                  backgroundImage:
                    "radial-gradient(520px 520px at 18% 52%, rgba(34,211,238,0.30), rgba(0,0,0,0) 55%), radial-gradient(520px 520px at 75% 30%, rgba(168,85,247,0.18), rgba(0,0,0,0) 55%), linear-gradient(135deg, rgba(8,8,14,1), rgba(18,18,26,1))",
                }}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/35 to-black/10" />

              <div className="relative h-[50vh] w-full p-6 sm:p-7">
                <SplitText
                  tag="p"
                  text="01 / PROJECT"
                  className="block text-sm font-light tracking-[0.32em] text-white/60"
                  textAlign="left"
                  splitType="chars"
                  delay={12}
                  duration={0.6}
                  from={{ opacity: 0, y: 10 }}
                  to={{ opacity: 1, y: 0 }}
                />

                <div>
                  <SplitText
                    tag="h3"
                    text="VOID WALKER"
                    className="block mt-auto pt-10 text-xl font-semibold tracking-[0.22em] text-white/90"
                    textAlign="left"
                    splitType="chars"
                    delay={14}
                    duration={0.7}
                    from={{ opacity: 0, y: 12 }}
                    to={{ opacity: 1, y: 0 }}
                  />
                </div>
              </div>
            </article>

            <article className="group relative overflow-hidden rounded-2xl border border-white/10 bg-white/[0.03] md:col-span-5">
              <div
                className="absolute inset-0 opacity-90"
                style={{
                  backgroundImage:
                    "radial-gradient(220px 180px at 78% 40%, rgba(244,63,94,0.28), rgba(0,0,0,0) 62%), radial-gradient(260px 220px at 42% 62%, rgba(168,85,247,0.20), rgba(0,0,0,0) 62%), repeating-linear-gradient(135deg, rgba(255,255,255,0.08) 0 1px, rgba(255,255,255,0) 1px 12px), linear-gradient(135deg, rgba(10,10,16,1), rgba(20,20,30,1))",
                }}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/88 via-black/35 to-black/10" />

              <div className="relative h-[50vh] w-full p-6 sm:p-7">
                <SplitText
                  tag="p"
                  text="02 / PROJECT"
                  className="block text-sm font-light tracking-[0.32em] text-white/60"
                  textAlign="left"
                  splitType="chars"
                  delay={12}
                  duration={0.6}
                  from={{ opacity: 0, y: 10 }}
                  to={{ opacity: 1, y: 0 }}
                />
                <div>
                  <SplitText
                    tag="h3"
                    text="NEURAL NET"
                    className="block mt-auto pt-10 text-xl font-semibold tracking-[0.22em] text-white/90"
                    textAlign="left"
                    splitType="chars"
                    delay={14}
                    duration={0.7}
                    from={{ opacity: 0, y: 12 }}
                    to={{ opacity: 1, y: 0 }}
                  />
                </div>
              </div>
            </article>

            <article className="group relative overflow-hidden rounded-2xl border border-white/10 bg-white/[0.03] md:col-span-12">
              <div
                className="absolute inset-0 opacity-90"
                style={{
                  backgroundImage:
                    "radial-gradient(600px 360px at 50% 55%, rgba(59,130,246,0.28), rgba(0,0,0,0) 62%), repeating-linear-gradient(90deg, rgba(255,255,255,0.06) 0 1px, rgba(255,255,255,0) 1px 24px), linear-gradient(180deg, rgba(4,10,18,1), rgba(5,5,10,1))",
                }}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/30 to-black/10" />

              <div className="relative h-[50vh] w-full p-6 sm:p-7">
                <SplitText
                  tag="p"
                  text="03 / PROJECT"
                  className="block text-sm font-light tracking-[0.32em] text-white/60"
                  textAlign="left"
                  splitType="chars"
                  delay={12}
                  duration={0.6}
                  from={{ opacity: 0, y: 10 }}
                  to={{ opacity: 1, y: 0 }}
                />
                <div>
                  <SplitText
                    tag="h3"
                    text="DEEP STATE"
                    className="block mt-auto pt-12 text-xl font-semibold tracking-[0.22em] text-white/90"
                    textAlign="left"
                    splitType="chars"
                    delay={14}
                    duration={0.7}
                    from={{ opacity: 0, y: 12 }}
                    to={{ opacity: 1, y: 0 }}
                  />
                </div>
              </div>
            </article>
          </div>
        </section>

        <section>
          <div className="overflow-hiddenbg-white/[0.03]">
            <div className="relative grid gap-10 px-7 py-10 sm:grid-cols-3 sm:gap-8  sm:py-12">
              <div
                className="absolute inset-0"
                style={{
                  backgroundImage:
                    "radial-gradient(560px 300px at 20% 60%, rgba(168,85,247,0.25), rgba(0,0,0,0) 60%), radial-gradient(560px 300px at 78% 40%, rgba(255,255,255,0.06), rgba(0,0,0,0) 62%), linear-gradient(180deg, rgba(255,255,255,0.03), rgba(0,0,0,0) 55%), linear-gradient(180deg, rgba(8,8,14,1), rgba(6,6,10,1))",
                }}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/65 via-black/25 to-black/10" />

              <div className="relative">
                <SplitText
                  tag="p"
                  text="4.2M"
                  className="block rb-gradient-text text-[44px] font-black tracking-[-0.04em] sm:text-[56px]"
                  textAlign="left"
                  splitType="chars"
                  delay={20}
                  duration={0.75}
                  from={{ opacity: 0, y: 16 }}
                  to={{ opacity: 1, y: 0 }}
                />
                <div>
                  <SplitText
                    tag="p"
                    text="REACH"
                    className="block mt-1 text-[10px] font-medium tracking-[0.32em] text-white/55"
                    textAlign="left"
                    splitType="chars"
                    delay={18}
                    duration={0.65}
                    from={{ opacity: 0, y: 10 }}
                    to={{ opacity: 1, y: 0 }}
                  />
                </div>
              </div>

              <div className="relative">
                <SplitText
                  tag="p"
                  text="120+"
                  className="block text-[44px] font-black tracking-[-0.04em] text-white sm:text-[56px]"
                  textAlign="left"
                  splitType="chars"
                  delay={20}
                  duration={0.75}
                  from={{ opacity: 0, y: 16 }}
                  to={{ opacity: 1, y: 0 }}
                />
                <div>
                  <SplitText
                    tag="p"
                    text="PROJECTS"
                    className="block mt-1 text-[10px] font-medium tracking-[0.32em] text-white/55"
                    textAlign="left"
                    splitType="chars"
                    delay={18}
                    duration={0.65}
                    from={{ opacity: 0, y: 10 }}
                    to={{ opacity: 1, y: 0 }}
                  />
                </div>
              </div>

              <div className="relative">
                <SplitText
                  tag="p"
                  text="90%"
                  className="block text-[44px] font-black tracking-[-0.04em] text-white sm:text-[56px]"
                  textAlign="left"
                  splitType="chars"
                  delay={20}
                  duration={0.75}
                  from={{ opacity: 0, y: 16 }}
                  to={{ opacity: 1, y: 0 }}
                />
                <div>
                  <SplitText
                    tag="p"
                    text="RETENTION"
                    className="block mt-1 text-[10px] font-medium tracking-[0.32em] text-white/55"
                    textAlign="left"
                    splitType="chars"
                    delay={18}
                    duration={0.65}
                    from={{ opacity: 0, y: 10 }}
                    to={{ opacity: 1, y: 0 }}
                  />
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>

      <SiteFooter />
    </div>
  );
}
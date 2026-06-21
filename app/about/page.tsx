import type { Metadata } from "next";
import Link from "next/link";
import Ferrofluid from "@/components/Ferrofluid";
import SiteFooter from "@/components/SiteFooter";
import SiteNavbar from "@/components/SiteNavbar";
import SplitText from "@/components/SplitText";

export const metadata: Metadata = {
  title: "About Us | Aura Media",
  description:
    "About Aura Media, a digital studio crafting cinematic digital experiences with bold visual systems and immersive storytelling.",
};

const archiveCards = [
  {
    id: "01",
    title: "VOID WALKER",
    subtitle: "AI / Fashion",
    imageSrc: "/img4.jpg",
    className: "md:col-span-7 md:row-span-2",
    heightClassName: "min-h-[420px] md:min-h-[520px]",
    imagePosition: "center",
  },
  {
    id: "02",
    title: "NEURAL NET",
    subtitle: "3D / System",
    imageSrc: "/img2.jpg",
    className: "md:col-span-5",
    heightClassName: "min-h-[420px] md:min-h-[520px]",
    imagePosition: "center",
  },
  {
    id: "03",
    title: "DEEP STATE",
    subtitle: "UI / Immersion",
    imageSrc: "/img3.jpg",
    className: "md:col-span-12",
    heightClassName: "min-h-[240px] md:min-h-[300px]",
    imagePosition: "center",
  },
];

const metrics = [
  { value: "4.2M", label: "REACH / SATURATION", accent: true },
  { value: "120+", label: "PROJECTS / 360" },
  { value: "90%", label: "RETENTION" },
];

export default function AboutPage() {
  return (
    <div className="relative min-h-screen overflow-x-hidden bg-[#040404] text-white">
      <div className="pointer-events-none fixed inset-0  opacity-100">
        <Ferrofluid
          colors={["#7C3AED", "#7C3AED", "#7C3AED"]}
          speed={0.1}
          scale={1.6}
          turbulence={1}
          fluidity={0.1}
          rimWidth={0.2}
          sharpness={2.5}
          shimmer={1.5}
          glow={2}
          flowDirection="down"
          opacity={1}
          mouseInteraction
          mouseStrength={1}
          mouseRadius={0.35}
          mixBlendMode="screen"
          className="h-full w-full"
        />
      </div>
      <div
        className="pointer-events-none fixed inset-0 -z-10 opacity-55"
        style={{
          backgroundImage:
            "linear-gradient(rgba(255,255,255,0.012) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.012) 1px, transparent 1px), radial-gradient(circle at 50% 16%, rgba(124,58,237,0.1), transparent 30%), linear-gradient(180deg, rgba(255,255,255,0.01), rgba(0,0,0,0) 24%), linear-gradient(180deg, rgba(4,4,4,0.76), rgba(2,2,2,0.88))",
          backgroundSize: "72px 72px, 72px 72px, 100% 100%, 100% 100%, 100% 100%",
        }}
      />

      <SiteNavbar />

      <main className="relative z-10">
        <section className="px-5 pb-20 pt-24 sm:px-8 sm:pb-24 sm:pt-32">
          <div className="mx-auto ">
            <SplitText
              tag="p"
              text="REBELLION / 01"
              className="block text-[10px] font-medium uppercase tracking-[0.34em] text-[#7C3AED]"
              textAlign="left"
              splitType="chars"
              delay={12}
              duration={0.55}
              from={{ opacity: 0, y: 8 }}
              to={{ opacity: 1, y: 0 }}
            />

            <div className="mt-8 max-w-[980px]">
              <SplitText
                tag="h1"
                text="CREATIVE"
                className="block text-[54px] font-black uppercase leading-[0.84] tracking-[-0.07em] text-[#e8e8e8] sm:text-[88px] md:text-[118px]"
                textAlign="left"
                splitType="chars"
                delay={12}
                duration={0.65}
                from={{ opacity: 0, y: 18 }}
                to={{ opacity: 1, y: 0 }}
              />
              <SplitText
                tag="h1"
                text="REBELLION"
                className="block text-[54px] font-black uppercase leading-[0.84] tracking-[-0.07em] text-[#e8e8e8] sm:text-[88px] md:text-[118px]"
                textAlign="left"
                splitType="chars"
                delay={12}
                duration={0.65}
                from={{ opacity: 0, y: 18 }}
                to={{ opacity: 1, y: 0 }}
              />
            </div>

            <SplitText
              tag="p"
              text="Pushing the boundaries of visual storytelling. We do not just build for trends, we tear the rules down and build them back in noise and signal."
              className="mt-5 block max-w-[520px] text-[13px] leading-6 text-white/62 sm:text-[14px]"
              textAlign="left"
              splitType="words"
              delay={12}
              duration={0.55}
              from={{ opacity: 0, y: 12 }}
              to={{ opacity: 1, y: 0 }}
            />

            <div className="mt-8 flex flex-col gap-4 sm:flex-row">
              <Link
                href="/services"
                className="inline-flex h-11 min-w-[170px] items-center justify-center border border-white bg-white px-6 text-[10px] font-medium uppercase tracking-[0.26em] text-black transition-colors hover:bg-white/90"
              >
                <SplitText
                  tag="span"
                  text="Explore Solutions"
                  className="block"
                  textAlign="center"
                  splitType="chars"
                  delay={8}
                  duration={0.45}
                  from={{ opacity: 0, y: 8 }}
                  to={{ opacity: 1, y: 0 }}
                />
              </Link>
              <Link
                href="https://vimeo.com"
                className="inline-flex h-11 min-w-[170px] items-center justify-center border border-white/20 bg-transparent px-6 text-[10px] font-medium uppercase tracking-[0.26em] text-white transition-colors hover:bg-white/8"
              >
                <SplitText
                  tag="span"
                  text="Watch Reel"
                  className="block"
                  textAlign="center"
                  splitType="chars"
                  delay={8}
                  duration={0.45}
                  from={{ opacity: 0, y: 8 }}
                  to={{ opacity: 1, y: 0 }}
                />
              </Link>
            </div>

            <div className="relative mt-12 overflow-hidden border border-white/10 bg-white/[0.03]">
              <div
                className="absolute inset-0 bg-cover bg-center opacity-100"
                style={{ backgroundImage: "url('/img3.jpg')" }}
              />
              <div className="absolute inset-0 bg-gradient-to-br from-black/55 via-black/35 to-black/80" />
              <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(255,255,255,0.1),transparent_38%)]" />
              <div className="relative flex h-[260px] items-center justify-center sm:h-[340px]">
                <button
                  type="button"
                  aria-label="Play showreel"
                  className="grid h-14 w-14 place-items-center rounded-full border border-white/20 bg-white/10 backdrop-blur-sm transition-colors hover:bg-white/15"
                >
                  <span className="ml-0.5 block h-0 w-0 border-y-[9px] border-l-[14px] border-y-transparent border-l-white/85" />
                </button>
              </div>
            </div>
          </div>
        </section>

        <section className="px-5 pb-24 sm:px-8 sm:pb-28">
          <div className="mx-auto ">
            <div className="flex flex-col gap-5 sm:flex-row sm:items-end sm:justify-between">
              <h2 className="text-[38px] font-black uppercase leading-[0.88] tracking-[-0.05em] text-white sm:text-[58px]">
                <SplitText
                  tag="span"
                  text="THE"
                  className="block"
                  textAlign="left"
                  splitType="chars"
                  delay={10}
                  duration={0.55}
                  from={{ opacity: 0, y: 12 }}
                  to={{ opacity: 1, y: 0 }}
                />
                <SplitText
                  tag="span"
                  text="ARCHIVE"
                  className="block"
                  textAlign="left"
                  splitType="chars"
                  delay={10}
                  duration={0.55}
                  from={{ opacity: 0, y: 12 }}
                  to={{ opacity: 1, y: 0 }}
                />
              </h2>

              <SplitText
                tag="p"
                text="Selected works from the future we made."
                className="block max-w-[260px] text-[11px] leading-5 text-[#7C3AED]"
                textAlign="left"
                splitType="words"
                delay={10}
                duration={0.5}
                from={{ opacity: 0, y: 10 }}
                to={{ opacity: 1, y: 0 }}
              />
            </div>

            <div className="mt-6 h-px w-full bg-white/8" />

            <div className="mt-8 grid gap-6 md:grid-cols-12">
              {archiveCards.map((card) => (
                <article
                  key={card.id}
                  className={`group relative overflow-hidden border border-white/8 bg-black ${card.className}`}
                >
                  <div
                    className={`absolute inset-0 bg-cover ${card.imagePosition === "center" ? "bg-center" : "bg-top"}`}
                    style={{ backgroundImage: `url('${card.imageSrc}')` }}
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black via-black/15 to-black/10" />
                  <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(0,0,0,0.12),rgba(0,0,0,0.55))]" />

                  <div className={`relative flex flex-col justify-end p-5 sm:p-6 ${card.heightClassName}`}>
                    <SplitText
                      tag="p"
                      text={`${card.id} / ${card.subtitle}`}
                      className="block text-[9px] font-medium uppercase tracking-[0.28em] text-[#7C3AED]"
                      textAlign="left"
                      splitType="chars"
                      delay={8}
                      duration={0.45}
                      from={{ opacity: 0, y: 8 }}
                      to={{ opacity: 1, y: 0 }}
                    />
                    <SplitText
                      tag="h3"
                      text={card.title}
                      className="mt-2 block text-[20px] font-semibold uppercase tracking-[-0.03em] text-white sm:text-[28px]"
                      textAlign="left"
                      splitType="chars"
                      delay={10}
                      duration={0.55}
                      from={{ opacity: 0, y: 10 }}
                      to={{ opacity: 1, y: 0 }}
                    />
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="px-5 sm:px-8 pb-10 ">
          <div className="mx-auto overflow-hidden border border-white/8 bg-white/[0.03]">
            <div className="relative grid gap-10 px-6 py-10 sm:grid-cols-3 sm:px-8 sm:py-12">
              <div
                className="absolute inset-0"
                style={{
                  backgroundImage:
                    "radial-gradient(460px 180px at 15% 55%, rgba(126,44,255,0.26), rgba(0,0,0,0) 60%), radial-gradient(320px 160px at 76% 52%, rgba(255,255,255,0.05), rgba(0,0,0,0) 65%), linear-gradient(180deg, rgba(255,255,255,0.02), rgba(0,0,0,0) 55%), linear-gradient(180deg, rgba(8,8,14,1), rgba(6,6,10,1))",
                }}
              />

              {metrics.map((metric) => (
                <div key={metric.label} className="relative">
                  <SplitText
                    tag="p"
                    text={metric.value}
                    className={`block text-[44px] font-black tracking-[-0.05em] sm:text-[58px] ${
                      metric.accent
                        ? "bg-[#7C3AED] bg-clip-text text-transparent"
                        : "text-white/90"
                    }`}
                    textAlign="center"
                    splitType="chars"
                    delay={10}
                    duration={0.55}
                    from={{ opacity: 0, y: 10 }}
                    to={{ opacity: 1, y: 0 }}
                  />
                  <SplitText
                    tag="p"
                    text={metric.label}
                    className="mt-1 block text-[9px] font-medium uppercase tracking-[0.3em] text-white/45"
                    textAlign="center"
                    splitType="chars"
                    delay={8}
                    duration={0.45}
                    from={{ opacity: 0, y: 8 }}
                    to={{ opacity: 1, y: 0 }}
                  />
                </div>
              ))}
            </div>
          </div>
        </section>
      </main>

      <SiteFooter />
    </div>
  );
}

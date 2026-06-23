"use client";

import { useRef } from "react";
import Link from "next/link";
import { motion, useScroll, useTransform } from "motion/react";
import Beams from "@/components/Beams";
import DotGrid from "@/components/DotGrid";
import Globe, { type GlobeLocation } from "@/components/Globe/Globe";
import SplitText from "@/components/SplitText";
import StaggeredMenu from "@/components/StaggeredMenu";

type SpotlightSectionProps = {
  eyebrow: string;
  title: string;
  description: string;
  imagePosition: "left" | "right";
  imageSrc: string;
};

function SpotlightSection({
  eyebrow,
  title,
  description,
  imagePosition,
  imageSrc,
}: SpotlightSectionProps) {
  const sectionRef = useRef<HTMLElement | null>(null);
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"],
  });

  const imageY = useTransform(scrollYProgress, [0, 1], ["-8%", "8%"]);
  const textY = useTransform(scrollYProgress, [0, 1], ["4%", "-4%"]);

  return (
    <section
      ref={sectionRef}
      className="border-t border-white/10 bg-black/70"
    >
      <div className="grid min-h-[640px] md:grid-cols-2">
        <motion.div
          style={{ y: textY }}
          className={[
            "flex items-center px-6 py-14 sm:px-10 md:px-14",
            imagePosition === "right" ? "md:order-1" : "md:order-2",
          ].join(" ")}
        >
          <div className="max-w-[520px]">
            <SplitText
              tag="p"
              text={eyebrow}
              className="text-[10px] font-semibold tracking-[0.28em] text-white/55"
              textAlign="left"
              splitType="chars"
              delay={10}
              duration={0.45}
              from={{ opacity: 0, y: 12 }}
              to={{ opacity: 1, y: 0 }}
            />
            <SplitText
              tag="h3"
              text={title}
              className="mt-6 text-[34px] font-black uppercase leading-[0.95] tracking-[-0.05em] text-white sm:text-[48px] md:text-[58px]"
              textAlign="left"
              splitType="words, chars"
              delay={12}
              duration={0.65}
              from={{ opacity: 0, y: 20 }}
              to={{ opacity: 1, y: 0 }}
            />
            <SplitText
              tag="p"
              text={description}
              className="mt-6 max-w-[440px] text-[14px] leading-8 text-white/68 sm:text-[15px]"
              textAlign="left"
              splitType="words"
              delay={10}
              duration={0.55}
              from={{ opacity: 0, y: 12 }}
              to={{ opacity: 1, y: 0 }}
            />
          </div>
        </motion.div>

        <div
          className={[
            "relative min-h-[360px] overflow-hidden",
            imagePosition === "right" ? "md:order-2" : "md:order-1",
          ].join(" ")}
        >
          <motion.div
            style={{ y: imageY }}
            className="absolute inset-x-0 -top-[12%] -bottom-[12%] bg-cover bg-center"
          >
            <div
              className="h-full w-full bg-cover bg-center"
              style={{ backgroundImage: `url('${imageSrc}')` }}
            />
          </motion.div>
          <div className="absolute inset-0 bg-gradient-to-br from-black/25 via-black/45 to-black/75" />
        </div>
      </div>
    </section>
  );
}

export default function ServicesPage() {
  const menuItems = [
    { label: "Home", ariaLabel: "Go to home page", link: "/" },
    { label: "About", ariaLabel: "Learn about us", link: "/about" },
    { label: "Services", ariaLabel: "View our services", link: "/services" },
    { label: "Contact", ariaLabel: "Get in touch", link: "/contact" },
  ];

  const socialItems = [
    { label: "Twitter", link: "https://twitter.com" },
    { label: "GitHub", link: "https://github.com" },
    { label: "LinkedIn", link: "https://linkedin.com" },
  ];

  const spotlightSections: SpotlightSectionProps[] = [
    {
      eyebrow: "// IMMERSIVE STORYTELLING",
      title: "Campaign visuals built to hold attention at first glance.",
      description:
        "We create art direction, motion, and launch assets that turn a brand moment into a visual event with lasting recall.",
      imagePosition: "right",
      imageSrc: "/img4.jpg",
    },
    {
      eyebrow: "// BRAND PRESENCE",
      title: "Digital experiences shaped with clarity, tension, and impact.",
      description:
        "From landing pages to identity systems, every touchpoint is composed to feel premium, direct, and unmistakably intentional.",
      imagePosition: "left",
      imageSrc: "/img2.jpg",
    },
    {
      eyebrow: "// IMMERSIVE STORYTELLING",
      title: "Campaign visuals to hold attention at first glance.",
      description:
        "We create art direction, motion, and launch assets that turn a brand moment into a visual event with lasting recall.",
      imagePosition: "right",
      imageSrc: "/img3.jpg",
    },
    {
      eyebrow: "// BRAND PRESENCE",
      title: "Digital experiences shaped with clarity and impact.",
      description:
        "From landing pages to identity systems, every touchpoint is composed to feel premium, direct, and unmistakably intentional.",
      imagePosition: "left",
      imageSrc: "/img4.jpg",
    },
  ];

  const globeLocations: GlobeLocation[] = [];

  return (
    <div className="relative flex min-h-screen w-full flex-col overflow-x-hidden bg-black text-white">
      <div
        className="pointer-events-none fixed inset-0 -z-10"
        style={{
          backgroundImage:
            "radial-gradient(900px 520px at 50% 0%, rgba(255,255,255,0.08), rgba(0,0,0,0) 60%), radial-gradient(900px 520px at 50% 20%, rgba(255,255,255,0.06), rgba(0,0,0,0) 65%), linear-gradient(180deg, #000, #000)",
        }}
      />

      <StaggeredMenu
        position="right"
        items={menuItems}
        socialItems={socialItems}
        displaySocials
        displayItemNumbering={true}
        menuButtonColor="#ffffff"
        openMenuButtonColor="#ffffff"
        changeMenuColorOnOpen={true}
        colors={["#3f3f40", "#FFD700"]}
        logoUrl="/tulip.png"
        accentColor="#FFD700"
        isFixed={true}
      />

      <main className="relative z-10 mx-auto w-full flex-1">
        <section >
          <div className="relative overflow-hidden h-[100vh]  bg-black px-4 py-12 sm:px-8 sm:py-16 md:px-10 md:py-20">
            <div className="pointer-events-none absolute inset-0">
              <Beams
                beamWidth={3}
                beamHeight={30}
                beamNumber={20}
                lightColor="#FFD700"
                speed={2}
                noiseIntensity={1.75}
                scale={0.2}
                rotation={30}
              />
            </div>
            <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_50%_12%,rgba(255,255,255,0.035),transparent_18%)]" />
            <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-black/5 via-black/25 to-black/55" />

            <div className="relative pt-40 md:pt-10">
              <SplitText
                tag="h1"
                text={"WE BUILD\nBRANDS\nTHAT\nDOMINATE\nATTENTION"}
                className="mx-auto block max-w-full text-center text-[56px] font-black uppercase leading-[0.82] tracking-[-0.06em] text-white sm:text-[86px] md:text-[100px] lg:text-[116px]"
                textAlign="center"
                splitType="lines"
                delay={16}
                duration={0.8}
                from={{ opacity: 0, y: 36 }}
                to={{ opacity: 1, y: 0 }}
              />

              <div className="mt-8 flex flex-col items-center justify-center gap-3 sm:mt-10 sm:flex-row sm:gap-4">
                <Link
                  href="/#work"
                  className="inline-flex h-[42px] min-w-[142px] items-center justify-center border border-white bg-transparent px-5 text-sm font-semibold tracking-[0.35em] text-white transition-colors hover:bg-white/30"
                >
                  VIEW OUR WORK
                    
                </Link>
                <Link
                  href="/services"
                  className="inline-flex h-[42px] min-w-[142px] items-center justify-center border border-white bg-transparent px-5 text-sm font-semibold tracking-[0.35em] text-white transition-colors hover:bg-white/30"
                >
                  
                  DISCOVER AURA
                </Link>
              </div>
            </div>
          </div>
        </section>

        <section className="mt-0 sm:mt-0">
          <div className="bg-white/[0.05] px-6 py-14 sm:px-10 sm:py-20 md:px-14 md:py-24">
            <div className="grid gap-10 md:grid-cols-12 md:gap-6">
              <div className="md:col-span-3">
                <SplitText
                  tag="p"
                  text="// THE AGENCY"
                  className="pt-2 text-[10px] font-semibold tracking-[0.28em] text-[white/70]"
                  textAlign="left"
                  splitType="chars"
                  delay={10}
                  duration={0.45}
                  from={{ opacity: 0, y: 10 }}
                  to={{ opacity: 1, y: 0 }}
                />
              </div>

              <div className="md:col-span-8 md:col-start-5">
                <SplitText
                  tag="p"
                  text="We are an avant-garde digital collective fusing cinematic aesthetics with hyper-focused marketing strategies."
                  className="max-w-[720px] text-[30px] font-semibold leading-[1.05] tracking-[-0.05em] text-white sm:text-[44px] md:text-[58px] lg:text-[66px]"
                  textAlign="left"
                  splitType="words, chars"
                  delay={12}
                  duration={0.65}
                  from={{ opacity: 0, y: 20 }}
                  to={{ opacity: 1, y: 0 }}
                />

                <SplitText
                  tag="p"
                  text="At Aura Media, we believe that in a saturated digital landscape, subtle does not survive. We engineer visual dominance through brutalist minimalism, glassmorphism, and editorial precision. Every pixel is calculated; every campaign is designed to be an event."
                  className="mt-8 max-w-[720px] text-[14px] leading-[1.85] tracking-[-0.01em] text-white/70 md:text-[15px]"
                  textAlign="left"
                  splitType="words"
                  delay={10}
                  duration={0.55}
                  from={{ opacity: 0, y: 12 }}
                  to={{ opacity: 1, y: 0 }}
                />
              </div>
            </div>
          </div>
        </section>

        <section className="border-y border-white/10 bg-white/[0.03] px-6 py-16 sm:px-10 sm:py-20 md:px-14 ">
          <div className="mx-auto grid max-w-[1400px] items-center gap-12 lg:grid-cols-[1.05fr_0.95fr] lg:gap-16">
            <div className="max-w-[640px]">
              <SplitText
                tag="p"
                text="// GLOBAL SIGNAL"
                className="text-[10px] font-semibold tracking-[0.3em] text-[#FFD700]/70"
                textAlign="left"
                splitType="chars"
                delay={10}
                duration={0.45}
                from={{ opacity: 0, y: 10 }}
                to={{ opacity: 1, y: 0 }}
              />
              <SplitText
                tag="h2"
                text="A WORLDWIDE NETWORK BUILT FOR CINEMATIC SCALE."
                className="mt-6 max-w-[320px] text-[26px] font-black uppercase leading-[0.94] tracking-[-0.05em] text-white sm:max-w-[520px] sm:text-[42px] md:max-w-none md:text-[64px]"
                textAlign="left"
                splitType="words, chars"
                delay={12}
                duration={0.65}
                from={{ opacity: 0, y: 18 }}
                to={{ opacity: 1, y: 0 }}
              />
              <SplitText
                tag="p"
                text="Every launch is mapped for reach, impact, and cultural precision. The globe visualizes how Aura Media turns distributed teams, markets, and audiences into one synchronized brand experience."
                className="mt-6 max-w-[330px] text-[14px] leading-7 text-white/68 sm:max-w-[560px] sm:text-[16px] sm:leading-8"
                textAlign="left"
                splitType="words"
                delay={10}
                duration={0.55}
                from={{ opacity: 0, y: 12 }}
                to={{ opacity: 1, y: 0 }}
              />
            </div>

            <div className="pb-15 relative mt-10 flex h-[20vh] w-full items-center justify-center overflow-visible px-4 sm:h-[45vh] sm:px-0 lg:mt-0 ">
              <div className="pt-10 relative mx-auto flex h-full h-[20vh] w-full items-center justify-center sm:min-h-[45vh] ">
                <Globe
                  locations={globeLocations}
                  autoRotate={true}
                  rotationSpeed={1.7}
                  showAtmosphere={false}
                  showStars={true}
                  enableZoom={false}
                  className="mx-auto justify-center sm:w-[40vw] w-[90vw] h-full h-[320px] px-4  lg:px-10"
                  />
              </div>
      </div>
        </div>
    </section>
    
      <section className="pb-20 bg-white/[0.03]">
          <SplitText
            tag="h2"
            text="Expertise"
            className="py-10 text-center text-[34px] font-black uppercase tracking-[-0.04em] text-white sm:text-[52px]"
            textAlign="center"
            splitType="chars"
            delay={12}
            duration={0.6}
            from={{ opacity: 0, y: 14 }}
            to={{ opacity: 1, y: 0 }}
          />

          <div className="mt-10 px-5 grid gap-6 md:grid-cols-3 md:gap-6">
              <article className="min-h-[275px] border border-white/8 bg-white/[0.05] p-7 sm:p-8 transition-all duration-500 ease-out hover:-translate-y-1 hover:border-white hover:shadow-amber-500 hover:shadow-lg">
                <div className="flex items-start justify-between">
                  <SplitText
                    tag="p"
                    text="01"
                    className="text-[18px] font-semibold tracking-[-0.04em] text-white/90"
                    textAlign="left"
                    splitType="chars"
                    delay={10}
                    duration={0.45}
                    from={{ opacity: 0, y: 8 }}
                    to={{ opacity: 1, y: 0 }}
                  />
                  <svg
                    width="19"
                    height="19"
                    viewBox="0 0 24 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                    className="text-[#FFD700]/70"
                  >
                    <path
                      d="M7 6H17M7 10H17M7 14H13M7 18H13M18 17V7M18 17L15.5 14.5"
                      stroke="currentColor"
                      strokeWidth="1.5"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </div>
                <SplitText
                  tag="h3"
                  text="Cinematic Production"
                  className="mt-14 text-[28px] font-semibold leading-[1.02] tracking-[-0.04em] text-white"
                  textAlign="left"
                  splitType="words, chars"
                  delay={10}
                  duration={0.6}
                  from={{ opacity: 0, y: 16 }}
                  to={{ opacity: 1, y: 0 }}
                />
                <SplitText
                  tag="p"
                  text="High-end video and motion design that commands screen presence."
                  className="mt-5 max-w-[250px] text-[13px] leading-7 text-white/62"
                  textAlign="left"
                  splitType="words"
                  delay={8}
                  duration={0.5}
                  from={{ opacity: 0, y: 10 }}
                  to={{ opacity: 1, y: 0 }}
                />
              </article>

              <article className="min-h-[275px] border border-white/8 bg-white/[0.05] p-7 sm:p-8 transition-all duration-500 ease-out hover:-translate-y-1 hover:border-white hover:shadow-amber-500 hover:shadow-lg">
                <div className="flex items-start justify-between">
                  <SplitText
                    tag="p"
                    text="02"
                    className="text-[18px] font-semibold tracking-[-0.04em] text-white/90"
                    textAlign="left"
                    splitType="chars"
                    delay={10}
                    duration={0.45}
                    from={{ opacity: 0, y: 8 }}
                    to={{ opacity: 1, y: 0 }}
                  />
                  <svg
                    width="19"
                    height="19"
                    viewBox="0 0 24 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                    className="text-[#FFD700]/70"
                  >
                    <path
                      d="M9 7L15 17M15 7L9 17M7 9L17 15M17 9L7 15"
                      stroke="currentColor"
                      strokeWidth="1.5"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </div>
                <SplitText
                  tag="h3"
                  text="Digital Identity"
                  className="mt-14 text-[28px] font-semibold leading-[1.02] tracking-[-0.04em] text-white"
                  textAlign="left"
                  splitType="words, chars"
                  delay={10}
                  duration={0.6}
                  from={{ opacity: 0, y: 16 }}
                  to={{ opacity: 1, y: 0 }}
                />
                <SplitText
                  tag="p"
                  text="Brutalist minimalist web experiences and editorial UI/UX."
                  className="mt-5 max-w-[250px] text-[13px] leading-7 text-white/62"
                  textAlign="left"
                  splitType="words"
                  delay={8}
                  duration={0.5}
                  from={{ opacity: 0, y: 10 }}
                  to={{ opacity: 1, y: 0 }}
                />
              </article>

              <article className="min-h-[275px] border border-white/8 bg-white/[0.05] p-7 sm:p-8 transition-all duration-500 ease-out hover:-translate-y-1 hover:border-white hover:shadow-amber-500 hover:shadow-lg">
                <div className="flex items-start justify-between">
                  <SplitText
                    tag="p"
                    text="03"
                    className="text-[18px] font-semibold tracking-[-0.04em] text-white/90"
                    textAlign="left"
                    splitType="chars"
                    delay={10}
                    duration={0.45}
                    from={{ opacity: 0, y: 8 }}
                    to={{ opacity: 1, y: 0 }}
                  />
                  <svg
                    width="19"
                    height="19"
                    viewBox="0 0 24 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                    className="text-[#FFD700]/70"
                  >
                    <path
                      d="M7 12H13M12 9L17 6M12 15L17 18M18 6V9M18 15V18"
                      stroke="currentColor"
                      strokeWidth="1.5"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </div>
                <SplitText
                  tag="h3"
                  text="Strategic Domination"
                  className="mt-14 text-[28px] font-semibold leading-[1.02] tracking-[-0.04em] text-white"
                  textAlign="left"
                  splitType="words, chars"
                  delay={10}
                  duration={0.6}
                  from={{ opacity: 0, y: 16 }}
                  to={{ opacity: 1, y: 0 }}
                />
                <SplitText
                  tag="p"
                  text="Aggressive, data-driven marketing campaigns designed for scale."
                  className="mt-5 max-w-[250px] text-[13px] leading-7 text-white/62"
                  textAlign="left"
                  splitType="words"
                  delay={8}
                  duration={0.5}
                  from={{ opacity: 0, y: 10 }}
                  to={{ opacity: 1, y: 0 }}
                />
              </article>
          </div>
        </section>

        {spotlightSections.map((section) => (
          <SpotlightSection key={section.title} {...section} />
        ))}

        <section >
          <div className="relative overflow-hidden px-6 py-14 sm:px-12 sm:py-16">
            <div className="pointer-events-none absolute inset-0">
              <DotGrid
                dotSize={5}
                gap={15}
                baseColor="#2F293A"
                activeColor="#FFD700"
                proximity={120}
                shockRadius={250}
                shockStrength={10}
                resistance={750}
                returnDuration={1.5}
                className="h-full w-full p-0"
              />
            </div>
            <div className="pointer-events-none absolute inset-0 bg-black/55" />

            <div className="relative">
              <SplitText
                tag="h2"
                text={"READY TO SHIFT THE\nCULTURE?"}
                className="block text-center text-[24px] font-black uppercase leading-[1.05] tracking-[-0.03em] sm:text-6xl"
                textAlign="center"
                splitType="lines"
                delay={14}
                duration={0.7}
                from={{ opacity: 0, y: 18 }}
                to={{ opacity: 1, y: 0 }}
              />
              <div className="mt-6 flex justify-center">
                <Link
                  href="/contact"
                  className="inline-flex h-10 items-center justify-center rounded-md border border-white/25 bg-white/5 px-5 text-[12px] font-semibold tracking-[0.22em] text-white backdrop-blur-sm transition-colors hover:bg-white/10"
                >
                  <SplitText
                    tag="span"
                    text="INITIATE CONTACT"
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
            </div>
          </div>
        </section>
      </main>

      <footer className="relative z-10 border-t border-white/10 bg-black/30">
        <div className="mx-auto w-full max-w-full px-5 py-14 sm:px-8 sm:py-16">
          <div className="grid gap-10 md:grid-cols-12 md:gap-8">
            <div className="md:col-span-6">
              <SplitText
                tag="p"
                text="AURA MEDIA"
                className="block text-[12px] font-semibold tracking-[0.35em] text-[#FFD700]/80"
                textAlign="left"
                splitType="chars"
                delay={18}
                duration={0.7}
                from={{ opacity: 0, y: 10 }}
                to={{ opacity: 1, y: 0 }}
              />
              <SplitText
                tag="p"
                text="Designing the future of visual experiences. Where technology and emotion collide — art becomes industry."
                className="block mt-4 max-w-[420px] text-[12px] leading-5 text-[white]/55"
                textAlign="left"
                splitType="words"
                delay={14}
                duration={0.6}
                from={{ opacity: 0, y: 10 }}
                to={{ opacity: 1, y: 0 }}
              />
            </div>

            <div className="grid gap-8 text-[12px] text-white/60 sm:grid-cols-3 md:col-span-6">
              <div>
                <SplitText
                  tag="p"
                  text="Sitemap"
                  className="block text-[10px] font-medium tracking-[0.32em] text-white/55"
                  textAlign="left"
                  splitType="chars"
                  delay={14}
                  duration={0.6}
                  from={{ opacity: 0, y: 10 }}
                  to={{ opacity: 1, y: 0 }}
                />
                <div className="mt-4 space-y-3">
                  <a href="#" className="block hover:text-white">
                    <SplitText
                      tag="span"
                      text="Work"
                      className="block"
                      textAlign="left"
                      splitType="chars"
                      delay={12}
                      duration={0.55}
                      from={{ opacity: 0, y: 8 }}
                      to={{ opacity: 1, y: 0 }}
                    />
                  </a>
                  <a href="#" className="block hover:text-white">
                    <SplitText
                      tag="span"
                      text="Services"
                      className="block"
                      textAlign="left"
                      splitType="chars"
                      delay={12}
                      duration={0.55}
                      from={{ opacity: 0, y: 8 }}
                      to={{ opacity: 1, y: 0 }}
                    />
                  </a>
                  <a href="#" className="block hover:text-white">
                    <SplitText
                      tag="span"
                      text="About"
                      className="block"
                      textAlign="left"
                      splitType="chars"
                      delay={12}
                      duration={0.55}
                      from={{ opacity: 0, y: 8 }}
                      to={{ opacity: 1, y: 0 }}
                    />
                  </a>
                </div>
              </div>
              <div>
                <SplitText
                  tag="p"
                  text="Social"
                  className="block text-[10px] font-medium tracking-[0.32em] text-white/55"
                  textAlign="left"
                  splitType="chars"
                  delay={14}
                  duration={0.6}
                  from={{ opacity: 0, y: 10 }}
                  to={{ opacity: 1, y: 0 }}
                />
                <div className="mt-4 space-y-3">
                  <a href="#" className="block hover:text-white">
                    <SplitText
                      tag="span"
                      text="Instagram"
                      className="block"
                      textAlign="left"
                      splitType="chars"
                      delay={12}
                      duration={0.55}
                      from={{ opacity: 0, y: 8 }}
                      to={{ opacity: 1, y: 0 }}
                    />
                  </a>
                  <a href="#" className="block hover:text-white">
                    <SplitText
                      tag="span"
                      text="X"
                      className="block"
                      textAlign="left"
                      splitType="chars"
                      delay={12}
                      duration={0.55}
                      from={{ opacity: 0, y: 8 }}
                      to={{ opacity: 1, y: 0 }}
                    />
                  </a>
                  <a href="#" className="block hover:text-white">
                    <SplitText
                      tag="span"
                      text="Behance"
                      className="block"
                      textAlign="left"
                      splitType="chars"
                      delay={12}
                      duration={0.55}
                      from={{ opacity: 0, y: 8 }}
                      to={{ opacity: 1, y: 0 }}
                    />
                  </a>
                </div>
              </div>
              <div>
                <SplitText
                  tag="p"
                  text="Contact"
                  className="block text-[10px] font-medium tracking-[0.32em] text-white/55"
                  textAlign="left"
                  splitType="chars"
                  delay={14}
                  duration={0.6}
                  from={{ opacity: 0, y: 10 }}
                  to={{ opacity: 1, y: 0 }}
                />
                <div className="mt-4 space-y-3">
                  <a href="#" className="block hover:text-white">
                    <SplitText
                      tag="span"
                      text="Email"
                      className="block"
                      textAlign="left"
                      splitType="chars"
                      delay={12}
                      duration={0.55}
                      from={{ opacity: 0, y: 8 }}
                      to={{ opacity: 1, y: 0 }}
                    />
                  </a>
                  <a href="#" className="block hover:text-white">
                    <SplitText
                      tag="span"
                      text="Start a Project"
                      className="block"
                      textAlign="left"
                      splitType="chars"
                      delay={12}
                      duration={0.55}
                      from={{ opacity: 0, y: 8 }}
                      to={{ opacity: 1, y: 0 }}
                    />
                  </a>
                </div>
              </div>
            </div>
          </div>

          <div className="mt-12 flex flex-col gap-3 border-t border-white/10 pt-6 text-[11px] text-white/45 sm:flex-row sm:items-center sm:justify-between">
            <div className="right-justify">© 2026 Aura Media. All rights reserved.
             </div>
            Designed in the dark.
          
          </div>
        </div>
      </footer>
    </div>
  );
}

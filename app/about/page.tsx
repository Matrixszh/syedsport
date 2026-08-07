"use client";

import { useCallback, useEffect, useState } from "react";
import Link from "next/link";
import { motion, useAnimate } from "motion/react";
import Ferrofluid from "@/components/Ferrofluid";
import SiteFooter from "@/components/SiteFooter";
import SiteNavbar from "@/components/SiteNavbar";
import SplitText from "@/components/SplitText";

const PAGE_TITLE = "About Us | SKYWORLD";
const PAGE_DESCRIPTION =
  "SKYWORLD is a full-stack engineering and marketing agency. We build digital products, AI automation, and performance marketing engines that translate into revenue growth.";

type PillarCard = {
  id: string;
  title: string;
  subtitle: string;
  description: string;
  imageSrc: string;
  className: string;
  heightClassName: string;
  imagePosition: "center" | "top";
};

const archiveCards: PillarCard[] = [
  {
    id: "01",
    title: "SOFTWARE & PRODUCT",
    subtitle: "Web / SaaS / Apps",
    description:
      "Full-stack engineering of secure, high-performance websites, web applications, enterprise portals, and proprietary SaaS platforms engineered to scale without performance bottlenecks.",
    imageSrc: "/img5.jpg",
    className: "md:col-span-7 md:row-span-2",
    heightClassName: "min-h-[420px] md:min-h-[520px]",
    imagePosition: "center",
  },
  {
    id: "02",
    title: "AUTOMATION & AI",
    subtitle: "Chatbots / Workflows",
    description:
      "Intelligent AI layers deployed across WhatsApp, Web, and CRM, trained on your data for 24/7 automated lead qualification, support, and bespoke workflow automation.",
    imageSrc: "/img6.png",
    className: "md:col-span-5",
    heightClassName: "min-h-[420px] md:min-h-[520px]",
    imagePosition: "center",
  },
  {
    id: "03",
    title: "PERFORMANCE MARKETING",
    subtitle: "Google / Meta / Amazon",
    description:
      "Data-backed customer acquisition across search, paid social, and marketplace advertising. Precision GA4, server-side tracking, and transparent ROI mapping built to scale revenue.",
    imageSrc: "/img7.jpg",
    className: "md:col-span-12",
    heightClassName: "min-h-[240px] md:min-h-[300px]",
    imagePosition: "center",
  },
];

const metrics = [
  { value: "7", label: "CORE PILLARS / FULL-STACK", accent: true },
  { value: "24/7", label: "AI-POWERED SUPPORT" },
  { value: "99.9%", label: "UPTIME GUARANTEED" },
];

export default function AboutPage() {
  const [activeCardId, setActiveCardId] = useState<string | null>(null);
  const [scope, animate] = useAnimate();

  useEffect(() => {
    if (typeof document !== "undefined") {
      document.title = PAGE_TITLE;
      let metaDesc = document.querySelector<HTMLMetaElement>('meta[name="description"]');
      if (!metaDesc) {
        metaDesc = document.createElement("meta");
        metaDesc.setAttribute("name", "description");
        document.head.appendChild(metaDesc);
      }
      metaDesc.setAttribute("content", PAGE_DESCRIPTION);
    }
  }, []);

  const toggleCard = useCallback((id: string) => {
    setActiveCardId((curr) => (curr === id ? null : id));
    animate("html", { opacity: [1, 1] }, { duration: 0 });
  }, [animate]);

  const revealCard = useCallback((id: string) => {
    setActiveCardId(id);
  }, []);

  const hideCard = useCallback((id: string) => {
    setActiveCardId((curr) => (curr === id ? null : curr));
  }, []);

  return (
    <div ref={scope} className="relative min-h-screen overflow-x-hidden bg-[#040404] text-white">
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
        <section className="px-5 pb-20 pt-38 sm:px-8 sm:pb-24 sm:pt-38">
          <div className="mx-auto flex flex-col items-center text-center">
            <SplitText
              tag="p"
              text="ABOUT SKYWORLD / 01"
              className="block text-[10px] font-medium uppercase tracking-[0.34em] text-[#7C3AED]"
              textAlign="center"
              splitType="chars"
              delay={12}
              duration={0.55}
              from={{ opacity: 0, y: 8 }}
              to={{ opacity: 1, y: 0 }}
            />

            <div className="mt-8 mx-auto max-w-[980px]">
              <SplitText
                tag="h1"
                text="ENGINEER"
                className="block text-[45px] font-black uppercase leading-[0.84] tracking-[-0.07em] text-[#e8e8e8] sm:text-[88px] md:text-[118px]"
                textAlign="center"
                splitType="chars"
                delay={12}
                duration={0.65}
                from={{ opacity: 0, y: 18 }}
                to={{ opacity: 1, y: 0 }}
              />
              <SplitText
                tag="h1"
                text="YOUR GROWTH"
                className="block text-[45px] font-black uppercase leading-[0.84] tracking-[-0.07em] text-[#e8e8e8] sm:text-[88px] md:text-[118px]"
                textAlign="center"
                splitType="chars"
                delay={12}
                duration={0.65}
                from={{ opacity: 0, y: 18 }}
                to={{ opacity: 1, y: 0 }}
              />
            </div>

            <SplitText
              tag="p"
              text="We engineer your entire growth. SKYWORLD is a full-stack engineering and marketing agency, we build digital products that translate directly into revenue growth streams."
              className="mt-5 block max-w-[520px] text-[13px] leading-6 text-white/62 sm:text-[14px]"
              textAlign="center"
              splitType="words"
              delay={12}
              duration={0.55}
              from={{ opacity: 0, y: 12 }}
              to={{ opacity: 1, y: 0 }}
            />

            <div className="mt-8 flex flex-col items-center gap-4 sm:flex-row sm:justify-center">
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
                href="/contact"
                className="inline-flex h-11 min-w-[170px] items-center justify-center border border-white/20 bg-transparent px-6 text-[10px] font-medium uppercase tracking-[0.26em] text-white transition-colors hover:bg-white/8"
              >
                <SplitText
                  tag="span"
                  text="Schedule a Consultation"
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
        </section>

        <section className="px-5 pb-24 sm:px-8 sm:pb-28">
          <div className="mx-auto ">
            <div className="flex flex-col items-center gap-5 text-center sm:flex-row sm:items-end sm:justify-between sm:text-left">
              <h2 className="text-[38px] font-black uppercase leading-[0.88] tracking-[-0.05em] text-white sm:text-[58px]">
                <SplitText
                  tag="span"
                  text="OUR"
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
                  text=" PILLARS"
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
                text="High-performance code meets conversion psychology, across every stack we touch."
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
              {archiveCards.map((card) => {
                const isActive = activeCardId === card.id;

                return (
                  <article
                    key={card.id}
                    onMouseEnter={() => revealCard(card.id)}
                    onMouseLeave={() => hideCard(card.id)}
                    onClick={() => toggleCard(card.id)}
                    onTouchStart={(e) => {
                      e.stopPropagation();
                    }}
                    className={`group relative cursor-pointer select-none overflow-hidden border border-white/8 bg-black ${card.className}`}
                    aria-expanded={isActive}
                    role="button"
                    tabIndex={0}
                    onKeyDown={(e) => {
                      if (e.key === "Enter" || e.key === " ") {
                        e.preventDefault();
                        toggleCard(card.id);
                      }
                    }}
                  >
                    <div
                      className={`absolute inset-0 bg-cover transition-transform duration-500 ease-out ${
                        card.imagePosition === "center" ? "bg-center" : "bg-top"
                      } group-hover:scale-105`}
                      style={{ backgroundImage: `url('${card.imageSrc}')` }}
                    />

                    <div
                      className={`absolute inset-0 transition-all duration-500 ease-out ${
                        isActive ? "opacity-100" : "opacity-95"
                      }`}
                      style={{
                        background: isActive
                          ? "linear-gradient(180deg, rgba(0,0,0,0.78) 0%, rgba(0,0,0,0.88) 48%, rgba(0,0,0,0.95) 100%)"
                          : "linear-gradient(180deg, rgba(0,0,0,0.10) 0%, rgba(0,0,0,0.34) 55%, rgba(0,0,0,0.74) 100%)",
                      }}
                    />

                    <div
                      className={`absolute inset-0 transition-opacity duration-500 ease-out ${
                        isActive ? "opacity-100" : "opacity-70"
                      }`}
                      style={{
                        backgroundImage:
                          "linear-gradient(180deg, rgba(0,0,0,0.20), rgba(0,0,0,0.72))",
                      }}
                    />

                    <div
                      className={`relative flex h-full flex-col justify-end p-5 pb-12 sm:p-6 sm:pb-16 md:pb-6 ${card.heightClassName}`}
                    >
                      <div className="flex items-start justify-between gap-1">
                        <div>
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

                        <span className="hidden select-none text-[9px] font-semibold uppercase tracking-[0.28em] text-white/55 md:block">
                          {isActive ? "Release to close" : "Hover to reveal"}
                        </span>
                      </div>

                      <motion.div
                        key={`${card.id}-desc-${isActive ? "on" : "off"}`}
                        initial={{ opacity: 0, y: 18 }}
                        animate={
                          isActive
                            ? { opacity: 1, y: 0 }
                            : { opacity: 0, y: 18 }
                        }
                        transition={{
                          duration: 0.45,
                          ease: [0.22, 1, 0.36, 1],
                          delay: isActive ? 0.02 : 0,
                        }}
                        className="pointer-events-none mt-0 overflow-hidden md:mt-0"
                      >
                        <p
                          className={`max-w-[640px] text-[11px] leading-[1.65] text-white/78 sm:text-[12px] sm:leading-[1.72] md:text-[13px] ${
                            isActive ? "pointer-events-auto" : ""
                          }`}
                        >
                          {card.description}
                        </p>
                      </motion.div>

                      <div className="pointer-events-none absolute inset-x-5 bottom-4 flex items-center justify-between gap-3 md:hidden sm:inset-x-6 sm:bottom-6">
                        <span className="select-none text-[9px] font-semibold uppercase tracking-[0.28em] text-white/55">
                          {isActive ? "Tap to close" : "Tap to reveal"}
                        </span>
                      </div>
                    </div>
                  </article>
                );
              })}
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
                        ? "text-[#7C3AED]"
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

        <section className="px-5 pb-24 sm:px-8 sm:pb-28">
          <div className="mx-auto overflow-hidden border border-white/8 bg-white/[0.03]">
            <div className="relative flex flex-col items-center gap-6 px-6 py-10 text-center sm:px-8 sm:py-12">
              <div
                className="absolute inset-0"
                style={{
                  backgroundImage:
                    "radial-gradient(460px 180px at 50% 20%, rgba(126,44,255,0.26), rgba(0,0,0,0) 60%), radial-gradient(320px 160px at 50% 80%, rgba(255,255,255,0.05), rgba(0,0,0,0) 65%), linear-gradient(180deg, rgba(255,255,255,0.02), rgba(0,0,0,0) 55%), linear-gradient(180deg, rgba(8,8,14,1), rgba(6,6,10,1))",
                }}
              />

              <SplitText
                tag="h2"
                text="READY TO ENGINEER YOUR GROWTH?"
                className="relative mx-auto block max-w-[800px] text-[28px] font-black uppercase leading-[0.95] tracking-[-0.04em] text-white sm:text-[42px]"
                textAlign="center"
                splitType="chars"
                delay={10}
                duration={0.55}
                from={{ opacity: 0, y: 12 }}
                to={{ opacity: 1, y: 0 }}
              />

              <SplitText
                tag="p"
                text="Let's discuss your current tech and marketing goals."
                className="relative mx-auto block max-w-[480px] text-[13px] leading-6 text-white/62 sm:text-[14px]"
                textAlign="center"
                splitType="words"
                delay={10}
                duration={0.5}
                from={{ opacity: 0, y: 10 }}
                to={{ opacity: 1, y: 0 }}
              />

              <div className="relative flex flex-col items-center gap-4 sm:flex-row sm:justify-center sm:items-center">
                <Link
                  href="/contact"
                  className="inline-flex h-11 min-w-[200px] items-center justify-center border border-white bg-white px-6 text-[10px] font-medium uppercase tracking-[0.26em] text-black transition-colors hover:bg-white/90"
                >
                  <SplitText
                    tag="span"
                    text="Schedule a Consultation"
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

              <div className="relative mt-2 flex flex-col items-center gap-1 text-[11px] uppercase tracking-[0.18em] text-white/45">
                <span>
                  Contact: <span className="text-white/75">Syed Nouman</span>
                </span>
                <a
                  href="mailto:syednouman@skyworldpartners.com"
                  className="text-[#7C3AED] normal-case tracking-normal hover:text-[#9b6ef0]"
                >
                  syednouman@skyworldpartners.com
                </a>
              </div>
            </div>
          </div>
        </section>
      </main>

      <SiteFooter />
    </div>
  );
}

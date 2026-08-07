import type { Metadata } from "next";
import ContactEmailForm from "@/components/ContactEmailForm";
import SideRays from "@/components/SideRays";
import SiteFooter from "@/components/SiteFooter";
import SiteNavbar from "@/components/SiteNavbar";
import SplitText from "@/components/SplitText";

export const metadata: Metadata = {
  title: "Contact Us | SKYWORLD",
  description:
    "Get in touch with SKYWORLD. Book a consultation, send a brief, or reach out for full-stack engineering, AI automation, and performance marketing projects.",
};

const contactChannels = [
  {
    title: "Direct Contact",
    subtitle: "Primary point of contact",
    label: "Syed Nouman",
    supporting: "Managing Partner — Business & Strategy",
    icon: (
      <svg
        width="22"
        height="22"
        viewBox="0 0 24 24"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="text-[#EF4444]"
        aria-hidden="true"
      >
        <path
          d="M12 12a4 4 0 1 0 0-8 4 4 0 0 0 0 8Z"
          stroke="currentColor"
          strokeWidth="1.5"
        />
        <path
          d="M4 20c0-4 3.6-6 8-6s8 2 8 6"
          stroke="currentColor"
          strokeWidth="1.5"
          strokeLinecap="round"
        />
      </svg>
    ),
    actions: [
      {
        type: "email" as const,
        label: "syednouman@skyworldpartners.com",
        href: "mailto:syednouman@skyworldpartners.com",
      },
      {
        type: "phone" as const,
        label: "+91 99637 58459",
        href: "tel:+919963758459",
      },
    ],
  },
  {
    title: "Explore Wildlife & Nature",
    subtitle: "Reach into the depth of wildlife and nature",
    label: "Alternate Businesses",
    supporting:
      "Join Syed for a transition from mere sightings to disciplined fieldcraft.",
    icon: (
      <svg
        width="22"
        height="22"
        viewBox="0 0 24 24"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="text-[#EF4444]"
        aria-hidden="true"
      >
        <path
          d="M4 10.5c0-1 3-6.2 8-6.2s8 5.2 8 6.2c0 .9-.5 2.4-2.5 4.4S12 21 12 21s-5.5-3.5-7.5-5.5S4 11.4 4 10.5Z"
          stroke="currentColor"
          strokeWidth="1.5"
        />
        <circle cx="12" cy="10.5" r="2" stroke="currentColor" strokeWidth="1.5" />
      </svg>
    ),
    actions: [
      {
        type: "website" as const,
        label: "www.syednouman.com",
        href: "https://www.syednouman.com/",
      },
      {
        type: "book" as const,
        label: "Book a consultation",
        href: "/contact/#form",
      },
    ],
  },
  
];

const channelReasons = [
  "Full-stack engineering / product build",
  "AI automation & chatbot integrations",
  "Performance marketing engines",
  "Cinematic production & photography",
  "Cloud infrastructure & migration",
  "General inquiry & partnership",
];

export default function ContactPage() {
  return (
    <div className="relative min-h-screen overflow-x-hidden bg-[#040404] text-[#f1f1f1]">
      <div
        className="pointer-events-none absolute inset-0 opacity-90"
        style={{
          backgroundImage:
            "radial-gradient(circle at 20% 10%, rgba(239,68,68,0.12), transparent 35%), linear-gradient(180deg, rgba(255,255,255,0.015), rgba(0,0,0,0))",
        }}
      />

      <SiteNavbar />

      <main className="relative z-10">
        <section className="relative border-b border-white/10 px-5 pb-24 pt-24 sm:px-8 sm:pb-32 sm:pt-28">
          <div className="pointer-events-none absolute inset-0 opacity-75">
            <SideRays
              speed={4.4}
              rayColor1="#EF4444"
              rayColor2="#ff3333"
              intensity={2.2}
              spread={0.6}
              origin="top-right"
              tilt={0}
              saturation={1.5}
              blend={0.75}
              falloff={1.2}
              opacity={1}
              className="h-full w-full"
            />
          </div>

          <div className="mx-auto flex min-h-[540px] max-w-[1480px] flex-col items-center justify-center text-center">
            <SplitText
              tag="p"
              text="Contact SKYWORLD / 04"
              className="text-[10px] font-medium uppercase tracking-[0.38em] text-[#EF4444]"
              textAlign="center"
              splitType="chars"
              delay={10}
              duration={0.5}
              from={{ opacity: 0, y: 10 }}
              to={{ opacity: 1, y: 0 }}
            />

            <SplitText
              tag="h1"
              text={"LET'S BUILD\nSOMETHING\nWORTH LAUNCHING."}
              className="mt-8 max-w-[1300px] text-[58px] font-black uppercase leading-[0.86] tracking-[-0.07em] text-white sm:text-[88px] md:text-[118px] lg:text-[148px]"
              textAlign="center"
              splitType="lines"
              delay={14}
              duration={0.7}
              from={{ opacity: 0, y: 18 }}
              to={{ opacity: 1, y: 0 }}
            />

            <SplitText
              tag="p"
              text="Tell us about your project, your timelines, and the outcomes you are engineering for. We respond to every serious inquiry within one business day."
              className="mt-8 max-w-[780px] text-[15px] leading-[1.85] text-white/72 sm:text-[17px]"
              textAlign="center"
              splitType="words"
              delay={12}
              duration={0.55}
              from={{ opacity: 0, y: 10 }}
              to={{ opacity: 1, y: 0 }}
            />

            <div className="mt-10 grid w-full max-w-[920px] grid-cols-1 gap-3 text-[10px] font-semibold uppercase tracking-[0.24em] text-white/60 sm:grid-cols-2 sm:text-[11px] lg:grid-cols-3 lg:text-[12px]">
              <div className="flex items-center justify-center border border-white/10 bg-white/[0.03] px-4 py-3 text-center">
                Response within 24h
              </div>
              <div className="flex items-center justify-center border border-white/10 bg-white/[0.03] px-4 py-3 text-center">
                Confidential NDAs on request
              </div>
              <div className="flex items-center justify-center border border-white/10 bg-white/[0.03] px-4 py-3 text-center sm:col-span-2 lg:col-span-1">
                Global client roster
              </div>
            </div>
          </div>
        </section>

        <section className="border-b border-white/10 px-5 py-20 sm:px-8 sm:py-28 lg:py-32">
          <div className="mx-auto grid max-w-[1280px] gap-10 lg:grid-cols-3 lg:gap-12">
            <div className="lg:col-span-3">
              <SplitText
                tag="p"
                text="Get in touch"
                className="text-[10px] font-medium uppercase tracking-[0.34em] text-[#EF4444]"
                textAlign="center"
                splitType="chars"
                delay={10}
                duration={0.5}
                from={{ opacity: 0, y: 8 }}
                to={{ opacity: 1, y: 0 }}
              />
              <SplitText
                tag="h2"
                text={"THREE WAYS TO\nSTART THE CONVERSATION."}
                className="mt-6 mx-auto max-w-[900px] text-[34px] font-black uppercase leading-[0.92] tracking-[-0.055em] text-[#ededed] sm:text-[46px] lg:text-center lg:text-[58px]"
                textAlign="center"
                splitType="lines"
                delay={12}
                duration={0.65}
                from={{ opacity: 0, y: 16 }}
                to={{ opacity: 1, y: 0 }}
              />
            </div>

            {contactChannels.map((channel) => (
              <article
                key={channel.title}
                className="flex flex-col border border-white/10 bg-white/[0.02] px-5 py-6 sm:px-6 sm:py-7"
              >
                <div className="mb-6 sm:mb-7">{channel.icon}</div>

                <SplitText
                  tag="p"
                  text={channel.subtitle}
                  className="text-[9px] font-medium uppercase tracking-[0.32em] text-[#EF4444]/85 sm:text-[10px]"
                  textAlign="left"
                  splitType="chars"
                  delay={8}
                  duration={0.45}
                  from={{ opacity: 0, y: 8 }}
                  to={{ opacity: 1, y: 0 }}
                />
                <SplitText
                  tag="h3"
                  text={channel.label}
                  className="mt-3 text-[18px] font-semibold uppercase tracking-[-0.025em] text-white sm:text-[20px] lg:text-[22px]"
                  textAlign="left"
                  splitType="chars"
                  delay={10}
                  duration={0.55}
                  from={{ opacity: 0, y: 10 }}
                  to={{ opacity: 1, y: 0 }}
                />
                <SplitText
                  tag="p"
                  text={channel.supporting}
                  className="mt-4 text-[12px] leading-[1.75] text-white/68 sm:text-[13px] lg:text-[14px]"
                  textAlign="left"
                  splitType="words"
                  delay={10}
                  duration={0.55}
                  from={{ opacity: 0, y: 10 }}
                  to={{ opacity: 1, y: 0 }}
                />

                <div className="mt-6 space-y-3 sm:mt-7">
                  {channel.actions.map((action) => {
                    const isExternal = /^https?:\/\//i.test(action.href);
                    const classes =
                      "flex items-center justify-between gap-3 border border-white/10 bg-black/40 px-4 py-3 text-[10px] font-semibold uppercase tracking-[0.2em] text-white/80 transition-colors hover:border-[#EF4444]/50 hover:text-white sm:text-[11px] sm:tracking-[0.22em]";

                    if (isExternal) {
                      return (
                        <a
                          key={action.label}
                          href={action.href}
                          target="_blank"
                          rel="noreferrer"
                          className={classes}
                        >
                          <span className="truncate">{action.label}</span>
                          <span aria-hidden="true">↗</span>
                        </a>
                      );
                    }

                    return (
                      <a
                        key={action.label}
                        href={action.href}
                        className={classes}
                      >
                        <span className="truncate">{action.label}</span>
                        <span aria-hidden="true">→</span>
                      </a>
                    );
                  })}
                </div>
              </article>
            ))}
          </div>
        </section>

        <section className="border-b border-white/10 px-5 py-20 sm:px-8 sm:py-28 lg:py-32" id="form">
          <div className="mx-auto grid max-w-[1280px] gap-10 lg:grid-cols-[0.95fr_1.15fr] lg:items-start lg:gap-16">
            <div className="mx-auto w-full max-w-[540px] lg:mx-0">
              <SplitText
                tag="p"
                text="Send a message"
                className="text-[10px] font-medium uppercase tracking-[0.34em] text-[#EF4444]"
                textAlign="left"
                splitType="chars"
                delay={10}
                duration={0.5}
                from={{ opacity: 0, y: 8 }}
                to={{ opacity: 1, y: 0 }}
              />
              <SplitText
                tag="h2"
                text={"TELL US ABOUT\nTHE BUILD."}
                className="mt-6 text-[36px] font-black uppercase leading-[0.92] tracking-[-0.055em] text-[#ededed] sm:text-[48px] lg:text-[60px]"
                textAlign="left"
                splitType="lines"
                delay={12}
                duration={0.65}
                from={{ opacity: 0, y: 16 }}
                to={{ opacity: 1, y: 0 }}
              />
              <SplitText
                tag="p"
                text="Share a few details about your timeline, budget range, and what success looks like. Every submission lands directly in the inbox of the partner who will run your engagement."
                className="mt-8 max-w-[480px] text-[14px] leading-[1.85] text-white/70 sm:text-[15px] lg:text-[16px]"
                textAlign="left"
                splitType="words"
                delay={12}
                duration={0.55}
                from={{ opacity: 0, y: 10 }}
                to={{ opacity: 1, y: 0 }}
              />

              <div className="mt-10 border border-white/10 bg-white/[0.02] px-5 py-6 sm:px-6 sm:py-7">
                <SplitText
                  tag="p"
                  text="Popular reasons to reach out"
                  className="text-[10px] font-medium uppercase tracking-[0.3em] text-[#EF4444]/80 sm:tracking-[0.32em]"
                  textAlign="left"
                  splitType="chars"
                  delay={8}
                  duration={0.45}
                  from={{ opacity: 0, y: 8 }}
                  to={{ opacity: 1, y: 0 }}
                />
                <ul className="mt-5 space-y-3 text-[11px] leading-[1.8] text-white/72 sm:text-[12px] lg:text-[13px]">
                  {channelReasons.map((reason) => (
                    <li
                      key={reason}
                      className="flex items-start gap-3 before:mt-[8px] before:block before:h-[5px] before:w-[5px] before:shrink-0 before:rounded-full before:bg-[#EF4444]"
                    >
                      <span>{reason}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            <div className="w-full border border-white/10 bg-white/[0.02] px-4 py-5 sm:px-6 sm:py-7 lg:p-8">
              <ContactEmailForm />
            </div>
          </div>
        </section>
      </main>

      <SiteFooter />
    </div>
  );
}

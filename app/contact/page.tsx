import type { Metadata } from "next";
import Link from "next/link";
import SideRays from "@/components/SideRays";
import SiteFooter from "@/components/SiteFooter";
import SiteNavbar from "@/components/SiteNavbar";

export const metadata: Metadata = {
  title: "Contact Us | Aura Media",
  description:
    "Contact Aura Media, a global production house engineering cinematic narratives for brands at scale.",
};

const studioLocations = [
  {
    city: "Los Angeles",
    description:
      "Soundstages, post-production suites, and executive production hub.",
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
          d="M4 7.5A1.5 1.5 0 0 1 5.5 6H14a1.5 1.5 0 0 1 1.5 1.5v9A1.5 1.5 0 0 1 14 18H5.5A1.5 1.5 0 0 1 4 16.5v-9Z"
          stroke="currentColor"
          strokeWidth="1.5"
        />
        <path
          d="m15.5 10.5 4-2.5v8l-4-2.5v-3Z"
          stroke="currentColor"
          strokeWidth="1.5"
          strokeLinejoin="round"
        />
      </svg>
    ),
  },
  {
    city: "London",
    description:
      "European distribution center and VFX specialized studios.",
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
          d="M4 8.5A1.5 1.5 0 0 1 5.5 7h13A1.5 1.5 0 0 1 20 8.5v7a1.5 1.5 0 0 1-1.5 1.5h-13A1.5 1.5 0 0 1 4 15.5v-7Z"
          stroke="currentColor"
          strokeWidth="1.5"
        />
        <path
          d="M7 7V4M12 7V4M17 7V4M7.5 11.5h9"
          stroke="currentColor"
          strokeWidth="1.5"
          strokeLinecap="round"
        />
      </svg>
    ),
  },
];

export default function ContactPage() {
  return (
    <div className="relative min-h-screen overflow-x-hidden bg-[#040404] text-[#f1f1f1]">
      <div
        className="pointer-events-none absolute inset-0 opacity-90"
       
      />

      <div
        className="pointer-events-none absolute right-0 top-0 h-[420px] w-[520px] opacity-90"

      />

      <SiteNavbar />

      <main className="relative z-10">
        <section className="relative border-b border-white/10 px-5 pb-28 pt-24 sm:px-8 sm:pb-36 sm:pt-32">
          <div className="pointer-events-none absolute inset-0 opacity-80">
            <SideRays
              speed={4.4}
              rayColor1="#EF4444"
              rayColor2="#ff0000"
              intensity={2.2}
              spread={0.}
              origin="top-right"
              tilt={0}
              saturation={1.5}
              blend={0.75}
              falloff={1.2}
              opacity={1}
              className="h-full w-full"
            />
          </div>
          <div className="mx-auto flex min-h-[700px] max-w-[1600px] flex-col items-center justify-center text-center">
            <p className="text-[11px] font-medium uppercase tracking-[0.42em] text-[#EF4444]">
              Global Production House
            </p>

            <h1 className="mt-8 max-w-[1460px] text-[68px] font-bold uppercase leading-[0.84] tracking-[-0.075em] text-white sm:text-[108px] md:text-[148px] lg:text-[178px]">
              CINEMATIC
              <br />
              AUTHORITY
            </h1>

            <p className="mt-8 max-w-[840px] text-[18px] leading-[1.85] text-white/72 sm:text-[20px]">
              We engineer high-impact visual narratives for global brands. From
              concept to global distribution, our production network operates at
              the intersection of art and scale.
            </p>

            <Link
              href="https://vimeo.com"
              className="mt-12 inline-flex items-center justify-center gap-4 rounded-full border border-white/20 bg-[#ededed] px-8 py-4 text-[11px] font-medium uppercase tracking-[0.28em] text-black transition-colors hover:bg-white"
            >
              <span>View the Reel</span>
              <span className="text-base leading-none">→</span>
            </Link>
          </div>
        </section>

        <section className="border-b border-white/10 px-5 py-24 sm:px-8 sm:py-32">
          <div className="mx-auto grid max-w-[1600px] gap-12 lg:grid-cols-[1.1fr_1.6fr] lg:gap-16">
            <div className="max-w-[500px]">
              <h2 className="text-[54px] font-black uppercase leading-[0.95] tracking-[-0.065em] text-[#ededed] sm:text-[74px]">
                GLOBAL
                <br />
                STUDIO
                <br />
                NETWORK
              </h2>

              <p className="mt-8 max-w-[420px] text-[18px] leading-[1.85] text-white/70">
                Operating across continents, our infrastructure is designed for
                high-end production at any scale. We maintain state-of-the-art
                facilities in key media capitals.
              </p>
            </div>

            <div className="grid gap-8 md:grid-cols-2">
              {studioLocations.map((location) => (
                <article
                  key={location.city}
                  className="min-h-[320px] border-t border-white/10 px-5 py-6 sm:px-6"
                >
                  <div className="mb-8">{location.icon}</div>
                  <p className="text-[11px] font-medium uppercase tracking-[0.34em] text-white/72">
                    {location.city}
                  </p>
                  <p className="mt-6 max-w-[260px] text-[17px] leading-[1.8] text-white/72">
                    {location.description}
                  </p>
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

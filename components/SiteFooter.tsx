"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import SplitText from "@/components/SplitText";

type SiteFooterProps = {
  brandClassName?: string;
};

const sitemapLinks = [
  { label: "Work", href: "/" },
  { label: "Services", href: "/services" },
  { label: "About", href: "/about" },
];

const socialLinks = [
  { label: "Instagram", href: "https://instagram.com" },
  { label: "X", href: "https://x.com" },
  { label: "Behance", href: "https://www.behance.net" },
];

const contactLinks = [
  { label: "Email", href: "mailto:syednouman@skyworldpartners.com" },
  { label: "Start a Project", href: "/contact" },
];

const footerBrandThemes = {
  "/": "text-[#ffd700]",
  "/about": "text-[#7C3AED]",
  "/services": "text-[#10d7d1]",
  "/contact": "text-[#EF4444]",
} as const;

export default function SiteFooter({
  brandClassName,
}: SiteFooterProps) {
  const pathname = usePathname();
  const resolvedBrandClassName =
    brandClassName ??
    footerBrandThemes[pathname as keyof typeof footerBrandThemes] ??
    "text-white/80";

  return (
    <footer className="relative z-10 border-t border-white/10 bg-black">
      <div className="mx-auto w-full max-w-full px-5 py-14 sm:px-8 sm:py-16">
        <div className="grid gap-10 md:grid-cols-12 md:gap-8">
          <div className="md:col-span-6">
            <SplitText
              tag="p"
              text="SKYWORLD"
              className={`block text-[12px] font-semibold tracking-[0.35em] ${resolvedBrandClassName}`}
              textAlign="left"
              splitType="chars"
              delay={18}
              duration={0.7}
              from={{ opacity: 0, y: 8 }}
              to={{ opacity: 1, y: 0 }}
            />
            <SplitText
              tag="p"
              text="Designing the future of visual experiences. Where technology and emotion collide — art becomes industry."
              className="mt-4 block max-w-[420px] text-[12px] leading-5 text-white/55"
              textAlign="left"
              splitType="words"
              delay={14}
              duration={0.6}
              from={{ opacity: 0, y: 8 }}
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
                from={{ opacity: 0, y: 8 }}
                to={{ opacity: 1, y: 0 }}
              />
              <div className="mt-4 space-y-3">
                {sitemapLinks.map((item) => (
                  <Link key={item.label} href={item.href} className="block hover:text-white">
                    <SplitText
                      tag="span"
                      text={item.label}
                      className="block"
                      textAlign="left"
                      splitType="chars"
                      delay={12}
                      duration={0.55}
                      from={{ opacity: 0, y: 8 }}
                      to={{ opacity: 1, y: 0 }}
                    />
                  </Link>
                ))}
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
                from={{ opacity: 0, y: 8 }}
                to={{ opacity: 1, y: 0 }}
              />
              <div className="mt-4 space-y-3">
                {socialLinks.map((item) => (
                  <Link key={item.label} href={item.href} className="block hover:text-white">
                    <SplitText
                      tag="span"
                      text={item.label}
                      className="block"
                      textAlign="left"
                      splitType="chars"
                      delay={12}
                      duration={0.55}
                      from={{ opacity: 0, y: 8 }}
                      to={{ opacity: 1, y: 0 }}
                    />
                  </Link>
                ))}
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
                from={{ opacity: 0, y: 8 }}
                to={{ opacity: 1, y: 0 }}
              />
              <div className="mt-4 space-y-3">
                {contactLinks.map((item) => (
                  <Link key={item.label} href={item.href} className="block hover:text-white">
                    <SplitText
                      tag="span"
                      text={item.label}
                      className="block"
                      textAlign="left"
                      splitType="chars"
                      delay={12}
                      duration={0.55}
                      from={{ opacity: 0, y: 8 }}
                      to={{ opacity: 1, y: 0 }}
                    />
                  </Link>
                ))}
              </div>
            </div>
          </div>
        </div>

        <div className="mt-12 flex flex-col gap-3 border-t border-white/10 pt-6 text-[11px] text-white/45 sm:flex-row sm:items-center sm:justify-between">
          <div className="right-justify">© 2026 SKYWORLD. All rights reserved.</div>
          Designed in the dark.
        </div>
      </div>
    </footer>
  );
}

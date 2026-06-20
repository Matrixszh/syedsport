"use client";

import StaggeredMenu from "@/components/StaggeredMenu";
import { usePathname } from "next/navigation";

type SiteNavbarProps = {
  colors?: string[];
  accentColor?: string;
  menuButtonColor?: string;
  openMenuButtonColor?: string;
  logoUrl?: string;
};

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

export default function SiteNavbar({
  colors,
  accentColor,
  menuButtonColor,
  openMenuButtonColor,
  logoUrl,
}: SiteNavbarProps) {
  const pathname = usePathname();

  const pageTheme = {
    "/about": {
      colors: ["#2a0d42", "#1877ff"],
      accentColor: "#7b2cff",
      menuButtonColor: "#ffffff",
      openMenuButtonColor: "#ffffff",
      logoUrl: "/tulip.png",
    },
    "/services": {
      colors: ["#3f3f40", "#FFD700"],
      accentColor: "#FFD700",
      menuButtonColor: "#ffffff",
      openMenuButtonColor: "#ffffff",
      logoUrl: "/tulip.png",
    },
    "/contact": {
      colors: ["#2b0c16", "#ff1f6f"],
      accentColor: "#ff1f6f",
      menuButtonColor: "#ffffff",
      openMenuButtonColor: "#ffffff",
      logoUrl: "/tulip.png",
    },
    default: {
      colors: ["#3f3f40", "#FFD700"],
      accentColor: "#FFD700",
      menuButtonColor: "#ffffff",
      openMenuButtonColor: "#ffffff",
      logoUrl: "/tulip.png",
    },
  } as const;

  const theme =
    pageTheme[pathname as keyof typeof pageTheme] ?? pageTheme.default;

  return (
    <StaggeredMenu
      position="right"
      items={menuItems}
      socialItems={socialItems}
      displaySocials
      displayItemNumbering={true}
      menuButtonColor={menuButtonColor ?? theme.menuButtonColor}
      openMenuButtonColor={openMenuButtonColor ?? theme.openMenuButtonColor}
      changeMenuColorOnOpen={true}
      colors={colors ?? [...theme.colors]}
      logoUrl={logoUrl ?? theme.logoUrl}
      accentColor={accentColor ?? theme.accentColor}
      isFixed={true}
    />
  );
}

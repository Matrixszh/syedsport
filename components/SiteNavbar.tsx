"use client";

import { usePathname } from "next/navigation";
import StaggeredMenu from "@/components/StaggeredMenu";

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

const navbarThemes = {
  "/about": {
    colors: ["#18181b", "#7C3AED"],
    accentColor: "#7C3AED",
    menuButtonColor: "#ffffff",
    openMenuButtonColor: "#7C3AED",
  },
  "/services": {
    colors: ["#1d2724", "#10d7d1"],
    accentColor: "#10d7d1",
    menuButtonColor: "#f5f5f5",
    openMenuButtonColor: "#10d7d1",
  },
  "/contact": {
    colors: ["#261117", "#EF4444"],
    accentColor: "#EF4444",
    menuButtonColor: "#ffffff",
    openMenuButtonColor: "#EF4444",
  },
  "/": {
    colors: ["#3f3f40", "#FFD700"],
    accentColor: "#FFD700",
    menuButtonColor: "#ffffff",
    openMenuButtonColor: "#FFD700",
  },
} as const;

export default function SiteNavbar({
  colors,
  accentColor,
  menuButtonColor,
  openMenuButtonColor,
  logoUrl = "/tulip.png",
}: SiteNavbarProps) {
  const pathname = usePathname();
  const theme = navbarThemes[pathname as keyof typeof navbarThemes] ?? navbarThemes["/"];

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
      logoUrl={logoUrl}
      accentColor={accentColor ?? theme.accentColor}
      isFixed={true}
    />
  );
}

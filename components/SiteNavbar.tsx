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
    colors: ["#18181b", "#10d7d1"],
    accentColor: "#10d7d1",
    menuButtonColor: "#ffffff",
    openMenuButtonColor: "#10d7d1",
  },
  "/services": {
    colors: ["#1d2724", "#8db8a9"],
    accentColor: "#8db8a9",
    menuButtonColor: "#f5f5f5",
    openMenuButtonColor: "#8db8a9",
  },
  "/contact": {
    colors: ["#261117", "#ff1f6f"],
    accentColor: "#ff1f6f",
    menuButtonColor: "#ffffff",
    openMenuButtonColor: "#ff1f6f",
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

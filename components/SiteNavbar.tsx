"use client";

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

export default function SiteNavbar({
  colors = ["#3f3f40", "#FFD700"],
  accentColor = "#FFD700",
  menuButtonColor = "#ffffff",
  openMenuButtonColor = "#ffffff",
  logoUrl = "/tulip.png",
}: SiteNavbarProps) {
  return (
    <StaggeredMenu
      position="right"
      items={menuItems}
      socialItems={socialItems}
      displaySocials
      displayItemNumbering={true}
      menuButtonColor={menuButtonColor}
      openMenuButtonColor={openMenuButtonColor}
      changeMenuColorOnOpen={true}
      colors={colors}
      logoUrl={logoUrl}
      accentColor={accentColor}
      isFixed={true}
    />
  );
}

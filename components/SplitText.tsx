"use client";

import React, { useEffect, useMemo, useRef, useState } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";

gsap.registerPlugin(ScrollTrigger, useGSAP);

export interface SplitTextProps {
  text: string;
  className?: string;
  delay?: number;
  duration?: number;
  ease?: string | ((t: number) => number);
  splitType?: "chars" | "words" | "lines" | "words, chars";
  from?: gsap.TweenVars;
  to?: gsap.TweenVars;
  threshold?: number;
  rootMargin?: string;
  tag?: "h1" | "h2" | "h3" | "h4" | "h5" | "h6" | "p" | "span";
  textAlign?: React.CSSProperties["textAlign"];
  onLetterAnimationComplete?: () => void;
}

type Token =
  | { type: "char"; value: string; key: string }
  | { type: "word"; value: string; key: string }
  | { type: "space"; value: string; key: string }
  | { type: "line"; tokens: Token[]; key: string };

function tokenize(text: string, splitType: SplitTextProps["splitType"]): Token[] {
  if (!text) return [];

  const normalized = text.replace(/\r\n/g, "\n");

  if (splitType === "lines") {
    const lines = normalized.split("\n");
    return lines.map((line, lineIndex) => ({
      type: "line",
      tokens: tokenize(line, "words, chars"),
      key: `l-${lineIndex}`,
    }));
  }

  if (splitType === "words") {
    const parts = normalized.split(/(\s+)/);
    return parts
      .filter((p) => p.length > 0)
      .map((part, index) =>
        /^\s+$/.test(part)
          ? { type: "space", value: part, key: `s-${index}` }
          : { type: "word", value: part, key: `w-${index}` },
      );
  }

  if (splitType === "words, chars") {
    return tokenize(normalized, "words");
  }

  const chars = Array.from(normalized);
  return chars.map((ch, index) =>
    ch === "\n"
      ? { type: "space", value: "\n", key: `n-${index}` }
      : { type: "char", value: ch, key: `c-${index}` },
  );
}

function parseRootMargin(rootMargin: string) {
  const match = /^(-?\d+(?:\.\d+)?)(px|em|rem|%)?$/.exec(rootMargin.trim());
  const value = match ? parseFloat(match[1]) : 0;
  const unit = match ? match[2] || "px" : "px";
  return { value, unit };
}

const SplitText: React.FC<SplitTextProps> = ({
  text,
  className = "",
  delay = 50,
  duration = 5.25,
  ease = "power3.out",
  splitType = "chars",
  from = { opacity: 0, y: 40 },
  to = { opacity: 1, y: 0 },
  threshold = 0.1,
  rootMargin = "-100px",
  tag = "p",
  textAlign = "center",
  onLetterAnimationComplete,
}) => {
  const ref = useRef<HTMLElement | null>(null);
  const animationCompletedRef = useRef(false);
  const onCompleteRef = useRef(onLetterAnimationComplete);
  const [fontsLoaded, setFontsLoaded] = useState<boolean>(() => {
    if (typeof document === "undefined") return false;
    const fonts = document.fonts;
    if (!fonts) return true;
    return fonts.status === "loaded";
  });

  useEffect(() => {
    onCompleteRef.current = onLetterAnimationComplete;
  }, [onLetterAnimationComplete]);

  useEffect(() => {
    if (fontsLoaded) return;
    const fonts = document.fonts;
    if (!fonts) return;
    fonts.ready.then(() => setFontsLoaded(true)).catch(() => setFontsLoaded(true));
  }, [fontsLoaded]);

  const tokens = useMemo(() => tokenize(text, splitType), [text, splitType]);

  useGSAP(
    () => {
      const el = ref.current;
      if (!el || !text || !fontsLoaded) return;
      if (animationCompletedRef.current) return;

      const startPct = (1 - threshold) * 100;
      const { value, unit } = parseRootMargin(rootMargin);
      const sign =
        value === 0 ? "" : value < 0 ? `-=${Math.abs(value)}${unit}` : `+=${value}${unit}`;
      const start = `top ${startPct}%${sign}`;

      const selectors =
        splitType === "words"
          ? [".split-word"]
          : splitType === "lines"
            ? [".split-line"]
            : splitType === "words, chars"
              ? [".split-char", ".split-word"]
              : [".split-char"];

      const nodes = selectors
        .flatMap((sel) => Array.from(el.querySelectorAll(sel)))
        .filter((n) => n instanceof HTMLElement) as HTMLElement[];

      const targets =
        splitType === "words, chars"
          ? (Array.from(el.querySelectorAll(".split-char")) as HTMLElement[])
          : nodes;

      if (targets.length === 0) return;

      const tween = gsap.fromTo(
        targets,
        { ...from },
        {
          ...to,
          duration,
          ease,
          stagger: delay / 400,
          scrollTrigger: {
            trigger: el,
            start,
            once: true,
            fastScrollEnd: true,
            anticipatePin: 0.4,
          },
          onComplete: () => {
            animationCompletedRef.current = true;
            onCompleteRef.current?.();
          },
          willChange: "transform, opacity",
          force3D: true,
        },
      );

      return () => {
        tween.kill();
        ScrollTrigger.getAll().forEach((st) => {
          if (st.trigger === el) st.kill();
        });
      };
    },
    {
      dependencies: [
        text,
        delay,
        duration,
        ease,
        splitType,
        JSON.stringify(from),
        JSON.stringify(to),
        threshold,
        rootMargin,
        fontsLoaded,
      ],
      scope: ref,
    },
  );

  const style: React.CSSProperties = {
    textAlign,
    wordWrap: "break-word",
    willChange: "transform, opacity",
  };

  const hasGradientText =
    className.includes("bg-clip-text") || className.includes("text-transparent");
  const gradientTextStyle: React.CSSProperties | undefined = hasGradientText
    ? {
        background: "inherit",
        backgroundClip: "text",
        WebkitBackgroundClip: "text",
        color: "transparent",
        WebkitTextFillColor: "transparent",
      }
    : undefined;

  const displayClass = tag === "span" ? "inline-block" : "block";
  const classes = `split-parent overflow-hidden whitespace-normal ${displayClass} ${className}`;
  const resolvedTag = (tag || "p") as keyof React.JSX.IntrinsicElements;

  const renderToken = (token: Token) => {
    if (token.type === "space") {
      if (token.value.includes("\n")) return <br key={token.key} />;
      return (
        <span key={token.key} aria-hidden="true">
          {token.value}
        </span>
      );
    }

    if (token.type === "char") {
      const value = token.value === " " ? "\u00A0" : token.value;
      return (
        <span
          key={token.key}
          className="split-char inline-block"
          style={gradientTextStyle}
        >
          {value}
        </span>
      );
    }

    if (token.type === "line") {
      return (
        <span key={token.key} className="split-line block">
          {token.tokens.map(renderToken)}
        </span>
      );
    }

    if (splitType === "words, chars" && token.type === "word") {
      const chars = Array.from(token.value).map((ch, i) => (
        <span
          key={`${token.key}-${i}`}
          className="split-char inline-block"
          style={gradientTextStyle}
        >
          {ch === " " ? "\u00A0" : ch}
        </span>
      ));
      return (
        <span
          key={token.key}
          className="split-word inline-block"
          style={gradientTextStyle}
        >
          {chars}
        </span>
      );
    }

    return (
      <span
        key={token.key}
        className="split-word inline-block"
        style={gradientTextStyle}
      >
        {token.value}
      </span>
    );
  };

  return React.createElement(
    resolvedTag,
    {
      ref: ref as React.Ref<HTMLElement>,
      style,
      className: classes,
    },
    tokens.map(renderToken),
  );
};

export default SplitText;

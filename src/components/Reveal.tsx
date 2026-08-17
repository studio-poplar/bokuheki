"use client";

import { createElement } from "react";
import type { CSSProperties, ReactNode } from "react";
import { useReveal } from "./useReveal";

type RevealProps = {
  as?: "div" | "section";
  className?: string;
  style?: CSSProperties;
  children: ReactNode;
};

export default function Reveal({
  as = "div",
  className = "",
  style,
  children,
}: RevealProps) {
  const [ref, inView] = useReveal<HTMLElement>();
  return createElement(
    as,
    {
      ref,
      className: `reveal${inView ? " in" : ""}${className ? ` ${className}` : ""}`,
      style,
    },
    children
  );
}

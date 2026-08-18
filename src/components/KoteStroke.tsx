import type { CSSProperties } from "react";

export default function KoteStroke({ style }: { style?: CSSProperties }) {
  return (
    <svg
      className="kote-stroke"
      width="480"
      height="220"
      viewBox="0 0 480 220"
      style={style}
      aria-hidden="true"
    >
      <path className="kote-stroke-line kote-stroke-line-main" d="M10,160 C130,40 280,200 470,60" />
      <path className="kote-stroke-line kote-stroke-line-accent" d="M60,200 C150,150 210,130 320,40" />
    </svg>
  );
}

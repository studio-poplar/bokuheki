import type { CSSProperties } from "react";

export default function KoteStroke({ style }: { style?: CSSProperties }) {
  return (
    <svg
      className="kote-stroke"
      width="420"
      height="200"
      viewBox="0 0 420 200"
      style={style}
      aria-hidden="true"
    >
      <path d="M10,150 C120,40 260,190 410,60" />
    </svg>
  );
}

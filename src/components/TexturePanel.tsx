import type { CSSProperties } from "react";

type TexturePanelProps = {
  variant: "a" | "b" | "c" | "d";
  className?: string;
  style?: CSSProperties;
};

export default function TexturePanel({
  variant,
  className = "",
  style,
}: TexturePanelProps) {
  return (
    <div className={`panel tex-${variant}${className ? ` ${className}` : ""}`} style={style} />
  );
}

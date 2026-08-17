import type { CSSProperties, ReactNode } from "react";
import Reveal from "./Reveal";

type SectionHeadProps = {
  num: string;
  eyebrow?: string;
  title: string;
  titleStyle?: CSSProperties;
  lead?: ReactNode;
};

export default function SectionHead({
  num,
  eyebrow,
  title,
  titleStyle,
  lead,
}: SectionHeadProps) {
  return (
    <Reveal as="div" className="section-head">
      <span className="section-num">{num}</span>
      <div>
        {eyebrow && <p className="section-eyebrow">{eyebrow}</p>}
        <h2 className="section-title" style={titleStyle}>
          {title}
        </h2>
        {lead && (
          <p className="section-lead" style={{ marginTop: 14 }}>
            {lead}
          </p>
        )}
      </div>
    </Reveal>
  );
}

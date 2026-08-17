import Link from "next/link";
import TexturePanel from "./TexturePanel";
import type { Work } from "@/data/works";

type WorkCardProps = {
  work: Work;
  href?: string;
  showTags?: boolean;
  style?: React.CSSProperties;
};

export default function WorkCard({
  work,
  href = "/works",
  showTags = false,
  style,
}: WorkCardProps) {
  return (
    <Link href={href} className="work-card" style={style}>
      <TexturePanel variant={work.texture} />
      {showTags && work.tags.length > 0 && (
        <div className="work-tags">
          {work.tags.map((tag) => (
            <span key={tag}>#{tag}</span>
          ))}
        </div>
      )}
      <span className="work-year">{work.year}</span>
      <h3 className="work-title">{work.title}</h3>
      <p className="work-loc">{work.location}</p>
    </Link>
  );
}

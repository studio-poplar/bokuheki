type PillarCardProps = {
  mark: string;
  title: string;
  en: string;
  description: string;
};

export default function PillarCard({ mark, title, en, description }: PillarCardProps) {
  return (
    <div className="pillar">
      <span className="pillar-mark">{mark}</span>
      <h3 className="pillar-title">{title}</h3>
      <span className="pillar-en">{en}</span>
      <p className="pillar-desc">{description}</p>
    </div>
  );
}

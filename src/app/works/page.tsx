import type { Metadata } from "next";
import Link from "next/link";
import Reveal from "@/components/Reveal";
import WorkCard from "@/components/WorkCard";
import { works } from "@/data/works";

export const metadata: Metadata = {
  title: "左官事例 | 灰谷左官店 墨壁 -BOKUHEKI-",
  description:
    "灰谷左官店がこれまでに手がけた左官事例。社寺・数寄屋・料亭・現代建築まで、黒漆喰・土壁・版築の施工実績をご紹介します。",
};

export default function WorksPage() {
  return (
    <>
      <section className="page-hero" style={{ minHeight: "44vh" }}>
        <div className="page-hero-inner">
          <p className="page-eyebrow">WORKS</p>
          <h1 className="page-title">左官事例</h1>
          <p className="page-lead">
            住宅、店舗、社寺まで。黒漆喰・土壁・版築、それぞれの現場でしか生まれない表情を記録しています。
          </p>
        </div>
      </section>

      <section className="wrap">
        <Reveal as="div" className="works-grid">
          {works.map((work) => (
            <WorkCard key={work.slug} work={work} href="#" showTags />
          ))}
        </Reveal>
      </section>

      <Reveal as="section" className="cta-band wrap">
        <h2 className="cta-title">似た事例のご相談は、お気軽に。</h2>
        <div className="cta-actions">
          <Link href="/contact" className="btn">
            お問い合わせ
          </Link>
          <Link href="/concept" className="btn ghost">
            コンセプトを見る
          </Link>
        </div>
      </Reveal>
    </>
  );
}

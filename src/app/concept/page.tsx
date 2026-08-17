import type { Metadata } from "next";
import Link from "next/link";
import Reveal from "@/components/Reveal";
import SectionHead from "@/components/SectionHead";
import TexturePanel from "@/components/TexturePanel";
import { materials } from "@/data/concept";

export const metadata: Metadata = {
  title: "コンセプト | 墨壁 -BOKUHEKI- 黒田左官店",
  description:
    "黒田左官店が黒漆喰と土壁にこだわる理由。三代目当主のことばと、独自の黒漆喰「黒聚楽」に込めた想いをご紹介します。",
};

export default function ConceptPage() {
  return (
    <>
      <section className="page-hero">
        <div className="page-hero-inner">
          <p className="page-eyebrow">CONCEPT</p>
          <h1 className="page-title">黒田の流儀</h1>
          <p className="page-lead">早く塗ることより、長く保つことを選ぶ。黒田左官店が三代にわたり守ってきた考え方です。</p>
        </div>
      </section>

      <section className="wrap">
        <SectionHead num="01" eyebrow="MESSAGE" title="三代目当主のことば" />
        <Reveal
          as="div"
          style={{ display: "grid", gridTemplateColumns: ".8fr 1.2fr", gap: 48, alignItems: "start" }}
        >
          <TexturePanel variant="d" style={{ aspectRatio: "3/4" }} />
          <div>
            <p className="statement-text" style={{ fontSize: "clamp(17px,2.1vw,22px)", marginBottom: 24 }}>
              「壁は、住む人より長生きします。
              <br />
              だから私たちは、今日の見た目より、<em>三十年後の表情</em>を考えて鏝を動かします。」
            </p>
            <p className="section-lead">
              祖父の代から数えて三代目。子どもの頃、土場で藁を混ぜる祖父の背中を見て育ちました。効率だけを考えるなら、既製の壁材はいくらでもあります。それでも私たちが土と漆喰にこだわるのは、年月とともに味わいを増す壁が、住む人の暮らしに寄り添うと信じているからです。黒田左官店　三代目　黒田
              誠一
            </p>
          </div>
        </Reveal>
      </section>

      <section className="wrap" style={{ paddingTop: 0 }}>
        <SectionHead
          num="02"
          eyebrow="SIGNATURE MATERIAL"
          title="黒聚楽 — 火と煤が生む黒"
          lead="当店の代名詞である黒漆喰「黒聚楽」は、京都に古くから伝わる聚楽土をベースに、独自配合の松煙と炭粉を練り込んだものです。"
        />

        <Reveal as="div" className="mat-list">
          {materials.map((material) => (
            <div className="mat-row" key={material.name}>
              <div className="mat-name">
                {material.name}
                <small>{material.en}</small>
              </div>
              <p className="mat-desc">{material.description}</p>
            </div>
          ))}
        </Reveal>
      </section>

      <Reveal as="section" className="statement wrap">
        <p className="statement-text">
          塗りたての黒は、漆黒。
          <br />
          十年経てば、墨色。
          <br />
          三十年経てば、その家だけの黒になる。
        </p>
      </Reveal>

      <Reveal as="section" className="cta-band wrap">
        <h2 className="cta-title">黒聚楽で仕上げた壁を、事例でご覧ください。</h2>
        <div className="cta-actions">
          <Link href="/works" className="btn">
            左官事例を見る
          </Link>
          <Link href="/contact" className="btn ghost">
            お問い合わせ
          </Link>
        </div>
      </Reveal>
    </>
  );
}

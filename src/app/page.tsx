import Link from "next/link";
import Reveal from "@/components/Reveal";
import SectionHead from "@/components/SectionHead";
import PillarCard from "@/components/PillarCard";
import WorkCard from "@/components/WorkCard";
import KoteStroke from "@/components/KoteStroke";
import { works } from "@/data/works";

export default function Home() {
  const featured = works.slice(0, 3);

  return (
    <>
      <section className="hero">
        <div className="hero-bars top" aria-hidden="true" />
        <div className="hero-bars bottom" aria-hidden="true" />
        <KoteStroke style={{ top: "14%", right: "4%" }} />
        <div className="hero-inner">
          <div>
            <p className="hero-eyebrow">KYOTO RAKUHOKU / SAKAN CRAFTSMEN SINCE 1958</p>
            <h1 className="hero-tategaki">黒は、静かに燃えている。</h1>
          </div>
          <div className="hero-right">
            <p className="hero-sub">
              京都・洛北。三代にわたり、黒漆喰と土壁を練り続けてきた左官の家。
              <br />
              火と煤が生んだ深い黒を、鏝ひとつで壁に留める仕事です。
            </p>
            <Link href="/works" className="hero-cta">
              左官事例を見る →
            </Link>
          </div>
        </div>
        <div className="hero-scroll">
          <span>SCROLL</span>
          <span className="hero-scroll-line" />
        </div>
      </section>

      <Reveal as="section" className="statement wrap">
        <p className="statement-text">
          壁は、完成した瞬間から呼吸をはじめる。
          <br />
          黒田左官店がつくるのは、<em>塗り終えた壁</em>ではなく、
          <br />
          十年、五十年とその場所の時間を吸い込みながら、
          <br />
          静かに表情を変え続ける壁です。
        </p>
      </Reveal>

      <section className="wrap">
        <SectionHead
          num="01"
          eyebrow="THREE MATERIALS / 三つの素材"
          title="黒と土、そして版築。"
          lead="古くから受け継がれてきた三つの技法を軸に、住宅から社寺・数寄屋、店舗まで、その場所にふさわしい壁を仕立てます。"
        />
      </section>

      <Reveal as="section" className="pillars">
        <PillarCard
          mark="壱"
          title="黒聚楽"
          en="KURO-JURAKU"
          description="洛北の聚楽土に、松煙と炭粉を独自の配合で練り込んだ、当店だけの黒漆喰。塗りたての漆黒は、年月とともに落ち着いた墨色へと変化していきます。"
        />
        <PillarCard
          mark="弐"
          title="土壁"
          en="TSUCHIKABE"
          description="藁を混ぜて寝かせた土を、荒壁・中塗り・上塗りと幾層にも重ねる伝統工法。呼吸する壁として、湿度と温度を穏やかに整えます。"
        />
        <PillarCard
          mark="参"
          title="版築"
          en="HANCHIKU"
          description="色の異なる土を層状に突き固め、地層のような表情をつくる技法。塀や外構、近年は店舗のシンボル壁としてのご依頼も増えています。"
        />
      </Reveal>

      <section className="wrap">
        <SectionHead num="02" eyebrow="SELECTED WORKS / 左官事例" title="最近の仕事から。" />

        <Reveal as="div" className="feat-grid">
          {featured.map((work) => (
            <WorkCard key={work.slug} work={work} href="/works" />
          ))}
        </Reveal>
      </section>

      <Reveal as="section" className="cta-band wrap">
        <h2 className="cta-title">壁のご相談は、鏝を持つ前から。</h2>
        <div className="cta-actions">
          <Link href="/contact" className="btn">
            お問い合わせ
          </Link>
          <Link href="/company" className="btn ghost">
            会社概要を見る
          </Link>
        </div>
      </Reveal>
    </>
  );
}

import type { Metadata } from "next";
import Link from "next/link";
import Reveal from "@/components/Reveal";
import SectionHead from "@/components/SectionHead";
import TexturePanel from "@/components/TexturePanel";
import { companyInfo, craftsmen, flowSteps, history } from "@/data/company";

export const metadata: Metadata = {
  title: "会社概要 | 墨壁 -BOKUHEKI- 黒田左官店",
  description: "黒田左官店の会社概要・沿革、職人紹介、施工の流れをご案内します。1958年創業、京都・洛北の左官工事店です。",
};

export default function CompanyPage() {
  return (
    <>
      <section className="page-hero" style={{ minHeight: "44vh" }}>
        <div className="page-hero-inner">
          <p className="page-eyebrow">COMPANY</p>
          <h1 className="page-title">会社概要</h1>
          <p className="page-lead">
            1958年、京都・洛北にて創業。三代にわたり、黒漆喰と土壁を専門とする左官工事店として歩んできました。
          </p>
        </div>
      </section>

      <section className="wrap tight">
        <Reveal as="div" style={{ borderTop: "1px solid var(--ink-line)" }}>
          {companyInfo.map((row) => (
            <div className="info-row" key={row.label}>
              <span className="info-label">{row.label}</span>
              <span className="info-value">{row.value}</span>
            </div>
          ))}
        </Reveal>
      </section>

      <section className="wrap tight">
        <SectionHead num="01" eyebrow="HISTORY" title="沿革" />
        <Reveal as="div" className="timeline">
          {history.map((entry) => (
            <div className="tl-row" key={entry.year}>
              <span className="tl-year">{entry.year}</span>
              <p className="tl-text">{entry.text}</p>
            </div>
          ))}
        </Reveal>
      </section>

      <section className="wrap tight">
        <SectionHead num="02" eyebrow="CRAFTSMEN" title="職人紹介" />
        <Reveal as="div" className="craft-grid">
          {craftsmen.map((person) => (
            <div className="craft-card" key={person.name}>
              <TexturePanel variant={person.texture} />
              <p className="craft-role">{person.role}</p>
              <h3 className="craft-name">{person.name}</h3>
              <p className="craft-desc">{person.description}</p>
            </div>
          ))}
        </Reveal>
      </section>

      <section className="wrap tight">
        <SectionHead
          num="03"
          eyebrow="FLOW"
          title="施工の流れ"
          lead="土壁・黒漆喰ともに、乾燥・養生の時間を挟みながら仕上げていく、時間のかかる仕事です。"
        />
        <Reveal as="div" className="flow">
          {flowSteps.map((step) => (
            <div className="flow-row" key={step.num}>
              <span className="flow-num">{step.num}</span>
              <div>
                <h3 className="flow-title">{step.title}</h3>
                <p className="flow-desc">{step.description}</p>
              </div>
            </div>
          ))}
        </Reveal>
      </section>

      <Reveal as="section" className="cta-band wrap">
        <h2 className="cta-title">まずはお気軽にご相談ください。</h2>
        <div className="cta-actions">
          <Link href="/contact" className="btn">
            お問い合わせ
          </Link>
          <Link href="/works" className="btn ghost">
            左官事例を見る
          </Link>
        </div>
      </Reveal>
    </>
  );
}

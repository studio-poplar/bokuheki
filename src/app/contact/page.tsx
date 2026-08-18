import type { Metadata } from "next";
import Reveal from "@/components/Reveal";
import ContactForm from "@/components/ContactForm";

export const metadata: Metadata = {
  title: "お問い合わせ | 灰谷左官店 墨壁 -BOKUHEKI-",
  description: "灰谷左官店へのお問い合わせ。新築・改修のご相談、左官素材のサンプルご希望など、お気軽にご連絡ください。",
};

export default function ContactPage() {
  return (
    <>
      <section className="page-hero" style={{ minHeight: "40vh" }}>
        <div className="page-hero-inner">
          <p className="page-eyebrow">CONTACT</p>
          <h1 className="page-title">お問い合わせ</h1>
          <p className="page-lead">新築・改修のご相談、素材サンプルのご希望など、どうぞお気軽にご連絡ください。</p>
        </div>
      </section>

      <section className="wrap tight">
        <Reveal as="div" className="contact-grid">
          <div>
            <div className="section-head" style={{ marginBottom: 30 }}>
              <span className="section-num">INFO</span>
              <div>
                <h2 className="section-title" style={{ fontSize: 22 }}>
                  連絡先
                </h2>
              </div>
            </div>
            <div style={{ borderTop: "1px solid var(--ink-line)" }}>
              <div className="info-row">
                <span className="info-label">電話</span>
                <span className="info-value">075-XXX-XXXX（9:00–18:00　土日祝休）</span>
              </div>
              <div className="info-row">
                <span className="info-label">FAX</span>
                <span className="info-value">075-XXX-XXXX</span>
              </div>
              <div className="info-row">
                <span className="info-label">所在地</span>
                <span className="info-value">
                  〒606-0025
                  <br />
                  京都府京都市左京区上高野 3-11
                </span>
              </div>
              <div className="info-row">
                <span className="info-label">対応</span>
                <span className="info-value">
                  京都府・滋賀県・大阪府・奈良県
                  <br />
                  （関西一円）
                </span>
              </div>
            </div>
            <p className="section-lead" style={{ marginTop: 30 }}>
              現地調査・お見積りは無料です。素材サンプルをご覧いただいたうえで、ご検討いただくことも可能です。
            </p>
          </div>

          <div>
            <div className="section-head" style={{ marginBottom: 30 }}>
              <span className="section-num">FORM</span>
              <div>
                <h2 className="section-title" style={{ fontSize: 22 }}>
                  お問い合わせフォーム
                </h2>
              </div>
            </div>
            <ContactForm />
          </div>
        </Reveal>
      </section>
    </>
  );
}

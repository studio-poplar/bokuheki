import Link from "next/link";

export default function SiteFooter() {
  return (
    <footer>
      <div className="foot-grid">
        <div>
          <div className="foot-brand">墨壁 — BOKUHEKI</div>
          <p className="foot-desc">
            有限会社 灰谷左官店
            <br />
            京都府京都市左京区上高野 3-11
            <br />
            1958年創業、三代続く左官工事店。
            <br />
            施工エリア：京都府・滋賀県・大阪府・奈良県（関西一円）
          </p>
        </div>
        <div>
          <p className="foot-head">SITEMAP</p>
          <ul className="foot-links">
            <li>
              <Link href="/concept">コンセプト</Link>
            </li>
            <li>
              <Link href="/works">左官事例</Link>
            </li>
            <li>
              <Link href="/company">会社概要</Link>
            </li>
            <li>
              <Link href="/contact">お問い合わせ</Link>
            </li>
          </ul>
        </div>
        <div>
          <p className="foot-head">CONTACT</p>
          <ul className="foot-links">
            <li>tel. 075-XXX-XXXX</li>
            <li>受付 9:00–18:00（土日祝休）</li>
          </ul>
        </div>
      </div>
      <div className="foot-bottom">
        <span>Copyright © 1958– Haitani Sakan-ten. All Rights Reserved.</span>
        <span>※本サイトはWEB制作事例として作成した架空の企業サイトです。</span>
      </div>
    </footer>
  );
}

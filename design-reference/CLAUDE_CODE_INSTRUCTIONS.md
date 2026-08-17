# 実装指示書：墨壁 -BOKUHEKI-（黒田左官店）コーポレートサイト

このドキュメントは、Claude Code に渡してそのまま実装を進めてもらうための指示書です。
`design-reference/` フォルダに、完成イメージとなる静的HTML/CSS/JSのプロトタイプが入っています。
**このプロトタイプの見た目・コピー・挙動を一切崩さずに、Next.jsプロジェクトへ移植してください。**
デザインの再解釈や簡略化はせず、忠実な移植を最優先とします。

---

## 0. 前提・ゴール

- 架空の左官店「墨壁 -BOKUHEKI-（有限会社黒田左官店）」のWEB制作事例サイト
- 本番公開ではなく**ポートフォリオ用の制作事例**という位置付け（フッターの断り書きは残す）
- 技術スタック：**Next.js（App Router）+ TypeScript**
- ホスティング前提：**Vercel**（GitHub連携でのデプロイ）
- リポジトリ：**GitHub**（新規作成し、mainブランチにpush）

---

## 1. 進め方（ステップ）

1. `design-reference/` の5ページ（index / concept / works / company / contact）と `style.css` / `main.js` を読み込み、デザイントークン・構成・コピーを把握する
2. Next.jsプロジェクトを新規作成する（下記「2. セットアップ」参照）
3. 「3. デザイントークン」を `globals.css` の CSS変数として移植する
4. 「4. コンポーネント設計」に従って共通パーツをReact化する
5. 「5. ページ実装」に従って各ページを `app/` 配下にルーティングする
6. 「6. 受け入れ基準（QAチェックリスト）」を満たしているか確認する
7. GitHubリポジトリを作成し、初回コミット・pushまで行う
8. 迷った場合は、独自解釈で仕様を変えず、必ず `design-reference/` の実装を正とする

作業中に発生した実装判断（例：フォントの読み込み方法、SVGアニメーションの実装方法など）は、
このドキュメントの指示を優先しつつ、Next.js/Reactの標準的なベストプラクティスに沿ってください。

---

## 2. セットアップ

```bash
npx create-next-app@latest bokuheki --typescript --eslint --app --src-dir --import-alias "@/*"
cd bokuheki
```

- CSS: Tailwindは使用しない（既存デザインが素のCSSで緻密に作り込まれているため、`globals.css` への移植を基本とする。セットアップ時にTailwindを選択した場合は除去してよい）
- フォント: `next/font/google` で以下を読み込み、`@import`によるGoogle Fonts読み込みは廃止する
  - Shippori Mincho（400, 500, 600, 800）
  - Noto Serif JP（400, 500）
  - Noto Sans JP（300, 400, 500, 700）
  - Cormorant Garamond（400, 500, italic）
- `package.json` の `name` は `bokuheki` とする

### GitHubリポジトリ

```bash
git init
git add .
git commit -m "chore: initial commit from Next.js scaffold"
gh repo create bokuheki-sakan --private --source=. --remote=origin
git push -u origin main
```

（`gh` CLIが使えない場合は、GitHub上で空リポジトリを作成し `git remote add origin` してpushする）

以降の作業は、意味のある単位でコミットを分けること（例：`feat: add shared layout and nav`, `feat: implement top page hero` など）。

---

## 3. デザイントークン

`design-reference/style.css` の `:root` にある値をそのまま `globals.css` に移植する。**色のトーンや数値を変更しない。**

```css
--sumi:      #121009;   /* 墨: near-black, warm charcoal */
--sumi-2:    #1c1812;   /* 黒漆喰: panel black */
--sumi-3:    #262019;   /* raised panel black */
--tsuchi:    #6f5a45;   /* 土: clay brown */
--tsuchi-l:  #8a7256;
--hai:       #c9beac;   /* 灰: warm ash text on dark */
--hai-dim:   #948872;
--ember:     #a04a2c;   /* 燠: ember accent, used sparingly */
--ember-l:   #c06a45;
--cream:     #ece5d6;
--cream-2:   #e2d9c6;
--ink-line:  rgba(201,190,172,0.18);

--serif-jp: "Shippori Mincho", "Noto Serif JP", serif;
--sans-jp:  "Noto Sans JP", sans-serif;
--serif-en: "Cormorant Garamond", serif;

--max: 1180px;
```

ember（燠）カラーはアクセントとして**節度を持って**使用されている点を崩さないこと（多用しない）。

その他、`.grain`（フィルムグレイン）、`.hero`（縦書き見出し・レターボックス）、`.kote-stroke`（鏝跡SVGの描画アニメーション）、`.reveal`（スクロール時のフェードイン）など、`style.css` に定義された演出はすべて踏襲する。

---

## 4. コンポーネント設計

`src/components/` に以下を切り出す：

| コンポーネント | 役割 | 備考 |
|---|---|---|
| `SiteHeader` | グローバルナビ（`.gnav`） | スクロールで背景がつく挙動、モバイルのハンバーガーメニュー開閉をReactの`useState`+スクロールイベントで実装（`main.js`のロジックを移植） |
| `SiteFooter` | フッター | 全ページ共通。会社情報・サイトマップ・注記文言をそのまま使用 |
| `FilmGrain` | 画面全体にかかる粒子オーバーレイ | `.grain` のSVGノイズをそのまま使用 |
| `RevealSection` | `.reveal` のスクロール表示アニメーション | `IntersectionObserver` をカスタムフック `useReveal()` にまとめ、`main.js` の実装を移植 |
| `TexturePanel` | 実写の代わりに使っている質感パネル（`.tex-a`〜`.tex-d`） | `variant` propで4種類を切り替えられるようにする |
| `WorkCard` | 事例カード（TOP・works共通） | 年度・タグ・タイトル・所在地をpropsで受け取る |
| `PillarCard` | TOPの技法3本柱 | 壱／弐／参、タイトル、英字、説明文 |
| `SectionHead` | 各セクション見出し（番号・英字ラベル・タイトル・リード文） | 全ページで繰り返し使われている構造 |
| `KoteStroke` | ヒーローの鏝跡SVGアニメーション | TOPページ専用。CSSアニメーション（`stroke-dashoffset`）はそのまま活用 |

### データの持ち方

事例データ（works）は、TOPページの「最近の仕事」とworksページの一覧で重複して使われているため、`src/data/works.ts` に配列として集約し、両ページから参照する形にする：

```ts
export type Work = {
  slug: string;
  year: string;
  title: string;
  location: string;
  tags: string[];
  texture: "a" | "b" | "c" | "d";
};

export const works: Work[] = [
  { slug: "ittou-2024", year: "2024", title: "数寄屋料亭「一灯」黒漆喰の茶室壁", location: "京都市左京区", tags: ["黒漆喰","茶室","新築"], texture: "a" },
  // ... design-reference/works.html の全8件をこの形式で移植
];
```

TOPページの「最近の仕事」は、この配列の先頭3件（または任意で選定した3件）を表示する形にする。

沿革（`company.html` のタイムライン）、職人紹介、施工の流れ、素材リスト（`concept.html`）についても、同様に `src/data/` 配下にデータ化しておくと保守しやすい（必須ではないが推奨）。

---

## 5. ページ実装

App Routerで以下のルーティングを作成する。**URLパスは `design-reference/` のファイル名と対応させる**（例：`concept.html` → `/concept`）。

| ルート | ソース | 内容 |
|---|---|---|
| `app/layout.tsx` | 全ページ共通 | `<SiteHeader>` `<FilmGrain>` `{children}` `<SiteFooter>` を配置。metadataのデフォルト値もここで設定 |
| `app/page.tsx` | `design-reference/index.html` | TOP：シネマティックヒーロー（縦書きコピー「黒は、静かに燃えている。」）、理念ステートメント、技法3本柱、最近の仕事3件、CTA |
| `app/concept/page.tsx` | `design-reference/concept.html` | コンセプト：当主メッセージ、素材「黒聚楽」の解説、素材リスト、CTA |
| `app/works/page.tsx` | `design-reference/works.html` | 左官事例一覧（8件のグリッド） |
| `app/company/page.tsx` | `design-reference/company.html` | 会社概要（基本情報テーブル）、沿革タイムライン、職人紹介、施工の流れ |
| `app/contact/page.tsx` | `design-reference/contact.html` | 連絡先情報、問い合わせフォーム（送信APIは実装しない。UIのみ。下記「7. スコープ外」参照） |

各ページの `metadata`（title / description）は、対応するHTMLの `<title>` `<meta name="description">` の内容をそのまま `export const metadata` に移す。

コピー文（見出し・本文・リード文）は `design-reference/` の日本語テキストを一字一句変更せずに使用すること。改行位置（`<br>`）も含めて再現する。

---

## 6. 受け入れ基準（QAチェックリスト）

実装完了時に、以下をすべて満たしていることを確認する。

- [ ] 5ページすべてが `design-reference/` と見た目・コピーともに一致している
- [ ] グローバルナビ：スクロールで背景がつく／モバイルでハンバーガーメニューが開閉する
- [ ] TOPページ：鏝跡SVGが読み込み時に一度だけ描画アニメーションする
- [ ] スクロール連動のフェードイン（`.reveal`）が全ページで機能する
- [ ] `prefers-reduced-motion: reduce` 環境でアニメーションが抑制される
- [ ] レスポンシブ：`design-reference/style.css` のブレークポイント（820px, 720px, 560px 等）を踏襲し、モバイルで崩れない
- [ ] フォーカスリング（`:focus-visible`）がキーボード操作で視認できる
- [ ] Lighthouseでパフォーマンス・アクセシビリティが著しく悪化していない（フォントはnext/fontで最適化されていること）
- [ ] フッターの「※本サイトはWEB制作事例として作成した架空の企業サイトです。」の注記が全ページに残っている
- [ ] `npm run build` がエラーなく通る
- [ ] GitHubリポジトリにpush済みで、Vercelでインポートすればそのままデプロイできる状態になっている

---

## 7. スコープ外（今回は実装しない）

- お問い合わせフォームの送信処理（バックエンドAPI、メール送信など）→ フォームUIのみ実装し、`onSubmit` は `preventDefault` してコンソールログ程度に留める
- CMS連携（事例の追加をノーコードで行えるようにする等）
- 実写真の差し込み（現状はCSSで質感を表現したパネルで代替している。将来的に `next/image` で差し替え可能な構造にしておくと良いが、今回はプレースホルダーのままでよい）
- 多言語対応（英語版など）
- お知らせ・ブログ機能

---

## 8. 備考

- 会社名・住所・電話番号・登場人物名などはすべて架空のものです（ポートフォリオ用の制作事例のため）
- デザインの元ネタとして、実在の左官会社「八幡工業（東京都葛飾区）」のサイト構成を参考にしていますが、本サイトの文言・ビジュアルはすべてオリジナルです

export type TimelineEntry = {
  year: string;
  text: string;
};

export const history: TimelineEntry[] = [
  { year: "1958", text: "初代・黒田 徳治、京都市左京区にて左官業を創業。社寺仏閣の土壁修繕を中心に手がける。" },
  { year: "1979", text: "二代目・黒田 修二が継承。数寄屋建築の需要増加にあわせ、茶室・料亭の内装左官を強化。" },
  { year: "1991", text: "有限会社 黒田左官店として法人化。職人数8名体制に。" },
  { year: "2004", text: "独自配合の黒漆喰「黒聚楽」を開発。以降、店舗・現代建築からの依頼が増加。" },
  { year: "2016", text: "三代目・黒田 誠一が代表就任。版築による外構・店舗施工を本格展開。" },
  { year: "2023", text: "職人14名体制。関西一円の新築・改修案件に加え、店舗デザイナーとの協働案件が増加。" },
];

export type Craftsman = {
  role: string;
  name: string;
  description: string;
  texture: "a" | "b" | "c" | "d";
};

export const craftsmen: Craftsman[] = [
  {
    role: "代表 / 三代目",
    name: "黒田 誠一",
    description:
      "18歳より父のもとで修業。黒漆喰「黒聚楽」の開発者。数寄屋・社寺案件を中心に、難易度の高い現場を担当。",
    texture: "a",
  },
  {
    role: "職人歴32年",
    name: "田村 幸雄",
    description: "版築を得意とする最古参の職人。層の色合わせに定評があり、外構・塀の案件を多く手がける。",
    texture: "b",
  },
  {
    role: "職人歴9年",
    name: "西尾 遥",
    description: "店舗・住宅の内装左官が専門。施主との打ち合わせから仕上げまで一貫して担当することが多い。",
    texture: "c",
  },
];

export type FlowStep = {
  num: string;
  title: string;
  description: string;
};

export const flowSteps: FlowStep[] = [
  {
    num: "01",
    title: "現地調査・打ち合わせ",
    description: "下地の状態、ご要望の質感や色味を確認し、素材と工程をご提案します。",
  },
  {
    num: "02",
    title: "見積・素材サンプル提示",
    description: "実際の土や漆喰のサンプルをご覧いただきながら、仕上がりのイメージをすり合わせます。",
  },
  {
    num: "03",
    title: "下地・荒壁施工",
    description: "下地を整え、土壁の場合は荒壁を塗って十分に乾燥させます（数週間〜数ヶ月）。",
  },
  {
    num: "04",
    title: "中塗り・上塗り",
    description: "中塗りで面を整えたのち、黒聚楽や漆喰で上塗り。鏝の運びで最終的な表情を決めます。",
  },
  {
    num: "05",
    title: "養生・お引き渡し",
    description: "十分な養生期間を経て完成。以降のお手入れ方法もあわせてご説明します。",
  },
];

export const companyInfo = [
  { label: "社名", value: "有限会社 黒田左官店（屋号：墨壁 -BOKUHEKI-）" },
  { label: "創業", value: "1958年（昭和33年）" },
  { label: "代表", value: "代表取締役　黒田 誠一（三代目）" },
  { label: "所在地", value: "〒606-0025　京都府京都市左京区上高野 3-11" },
  { label: "連絡先", value: "tel. 075-XXX-XXXX　／　fax. 075-XXX-XXXX" },
  { label: "職人数", value: "14名（左官職人11名／見習い3名）" },
  { label: "施工エリア", value: "京都府・滋賀県・大阪府・奈良県（関西一円）" },
  { label: "主な取引", value: "社寺仏閣、数寄屋建築設計事務所、工務店、飲食店内装業者、個人邸" },
];

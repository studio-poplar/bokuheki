export type Work = {
  slug: string;
  year: string;
  title: string;
  location: string;
  tags: string[];
  texture: "a" | "b" | "c" | "d";
};

export const works: Work[] = [
  {
    slug: "ittou-2024",
    year: "2024",
    title: "数寄屋料亭「一灯」黒漆喰の茶室壁",
    location: "京都市左京区",
    tags: ["黒漆喰", "茶室", "新築"],
    texture: "a",
  },
  {
    slug: "gallery-hanchiku-2023",
    year: "2023",
    title: "現代美術ギャラリー 版築の外構塀",
    location: "京都市中京区",
    tags: ["版築", "外構", "店舗"],
    texture: "b",
  },
  {
    slug: "kominka-2023",
    year: "2023",
    title: "築90年 古民家再生 荒壁からの土壁仕上げ",
    location: "滋賀県大津市",
    tags: ["土壁", "古民家再生"],
    texture: "c",
  },
  {
    slug: "jiin-kuri-2022",
    year: "2022",
    title: "寺院庫裏 黒聚楽による外壁修繕",
    location: "京都市北区",
    tags: ["黒漆喰", "寺院", "修繕"],
    texture: "d",
  },
  {
    slug: "machiya-2022",
    year: "2022",
    title: "町家風住宅 中塗り仕上げの土壁",
    location: "京都市東山区",
    tags: ["土壁", "住宅", "新築"],
    texture: "a",
  },
  {
    slug: "kappou-sumi-2021",
    year: "2021",
    title: "割烹「墨」カウンター背面の黒漆喰",
    location: "大阪市北区",
    tags: ["黒漆喰", "飲食店", "内装"],
    texture: "b",
  },
  {
    slug: "kougai-tei-2021",
    year: "2021",
    title: "郊外邸宅 版築塀と黒漆喰門構え",
    location: "奈良県奈良市",
    tags: ["版築", "住宅", "外構"],
    texture: "c",
  },
  {
    slug: "jinja-shamusho-2020",
    year: "2020",
    title: "神社社務所 伝統工法による土壁補修",
    location: "京都市左京区",
    tags: ["土壁", "社寺", "修繕"],
    texture: "d",
  },
];

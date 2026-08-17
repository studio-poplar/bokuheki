export type Material = {
  name: string;
  en: string;
  description: string;
};

export const materials: Material[] = [
  {
    name: "聚楽土",
    en: "JURAKU-DO",
    description:
      "京都・西陣周辺で採れた土を骨格に使用。茶室や数寄屋建築で古くから重宝されてきた、きめ細かく落ち着いた発色が特徴です。",
  },
  {
    name: "松煙",
    en: "SHOEN",
    description:
      "松を燻して採る煤。単なる黒色ではなく、青みを帯びた奥行きのある黒をつくります。配合量によって仕上がりの深度を変えています。",
  },
  {
    name: "炭粉",
    en: "TANPUN",
    description: "粒の粗さが異なる数種の炭粉をブレンドし、光の当たり方で表情が変わる、奥行きのある壁面をつくります。",
  },
  {
    name: "消石灰",
    en: "SHOSEKKAI",
    description: "漆喰の主原料。時間をかけて空気中の二酸化炭素と反応し、石灰岩へと戻っていく過程で壁が硬く育っていきます。",
  },
];

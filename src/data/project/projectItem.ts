export type ProjItem = {
  icon: string;
  title: {
    ko: string;
    jp: string;
    en: string;
  };
  simpledesc: {
    ko: string;
    jp: string;
    en: string;
  };
  platform: string;
  tech: string;
  period: string;
  link: Array<string>;
  content: {
    ko: string;
    jp: string;
    en: string;
  };
  dev: {
    ko: string;
    jp: string;
    en: string;
  };
  image: Array<string>;
};

export default ProjItem;

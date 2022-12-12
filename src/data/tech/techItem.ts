export type TechItem = {
  title: string;
  details: TechDetailsIntl;
};

export type TechDetailsIntl = {
  ko: TechDetails[];
  en: TechDetails[];
  jp: TechDetails[];
};

export type TechDetails = {
  name: string;
  icon: string;
  about: string[];
  exp: string[];
  etc: string[];
};

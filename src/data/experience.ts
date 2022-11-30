export type ExpDataType = {
  date: string;
  company: string;
  type: string;
  work: string;
  etc: string;
  tech: string;
};

export type ExpIntlType = {
  ko: Array<ExpDataType>;
  en: Array<ExpDataType>;
  jp: Array<ExpDataType>;
};

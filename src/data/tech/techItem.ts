export type TechItem = {
  title: string;
  details: TechDetails[];
};

export type TechDetails = {
  name: string;
  about: string[];
  exp: string[];
  etc: string[];
};

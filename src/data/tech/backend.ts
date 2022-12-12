import type { TechDetails, TechItem } from "./techItem";

const backSpringK: TechDetails = {
  name: "Spring/SpringBoot",
  icon: "/tech/spring.png",
  about: ["웹 백엔드 및 REST API 서버 제작 경험"],
  exp: ["업무 및 개인 프로젝트에서 사용"],
  etc: [],
};

const backNodeK: TechDetails = {
  name: "NodeJS",
  icon: "/tech/nodejs.png",
  about: ["개인 프로젝트의 서버리스 시스템에 사용 (AWS Lambda)"],
  exp: ["개인 프로젝트에서 사용"],
  etc: [],
};

const backSpringJ: TechDetails = {
  name: "Spring/SpringBoot",
  icon: "/tech/spring.png",
  about: ["バックエンド・REST APIの制作経験あり"],
  exp: ["業務・個人プロジェクトで利用"],
  etc: [],
};

const backNodeJ: TechDetails = {
  name: "NodeJS",
  icon: "/tech/nodejs.png",
  about: ["個人プロジェクトのサーバーレスシステムを作成 (AWS Lambda)"],
  exp: ["個人プロジェクトで利用"],
  etc: [],
};

const backSpringE: TechDetails = {
  name: "Spring/SpringBoot",
  icon: "/tech/spring.png",
  about: ["Experienced in web backend and REST API development"],
  exp: ["Used in both work and personal projects"],
  etc: [],
};

const backNodeE: TechDetails = {
  name: "NodeJS",
  icon: "/tech/nodejs.png",
  about: ["Used in personal project (AWS Lambda, serverless backend)"],
  exp: ["Used in personal project"],
  etc: [],
};

export const techBackend: TechItem = {
  title: "Backend",
  details: {
    ko: [backSpringK, backNodeK],
    en: [backSpringE, backNodeE],
    jp: [backSpringJ, backNodeJ],
  },
};

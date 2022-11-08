import type { TechDetails, TechItem } from "./techItem";

const backSpring: TechDetails = {
  name: "Spring/SpringBoot",
  about: ["웹 백엔드 및 REST API 서버 제작 경험"],
  exp: ["업무 및 개인 프로젝트에서 사용"],
  etc: [],
};

const backNode: TechDetails = {
  name: "NodeJS",
  about: ["개인 프로젝트의 서버리스 시스템에 사용 (AWS Lambda)"],
  exp: ["개인 프로젝트에서 사용"],
  etc: [],
};

export const techBackend: TechItem = {
  title: "Backend",
  details: [backSpring, backNode],
};

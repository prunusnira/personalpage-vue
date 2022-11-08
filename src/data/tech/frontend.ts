import type { TechDetails, TechItem } from "./techItem";

const frontReact: TechDetails = {
  name: "React",
  about: [
    "주 사용 라이브러리",
    "TypeScript를 대부분 사용",
    "Custom Hooks를 활용하여 비즈니스 로직을 작성하고 관리",
    "상태관리 라이브러리 활용 경험 있음",
    "NextJS로 SSR 웹앱 개발 경험 있음",
  ],
  exp: [
    "업무 및 개인 프로젝트 다수에서 사용",
    "상세한 내용은 Project 란을 참고해주세요",
  ],
  etc: [],
};

const frontVue: TechDetails = {
  name: "Vue",
  about: [
    "이 페이지가 vue로 만들어졌어요!",
    "아직 업무등에 사용해 본 적은 없지만 공부중입니다",
  ],
  exp: [],
  etc: [],
};

const frontMarkup: TechDetails = {
  name: "HTML and CSS",
  about: [
    "최근에는 CSS-in-JS를 자주 활용하여 개발합니다 (styled-components, emotion-js 등)",
  ],
  exp: [],
  etc: [],
};

export const techFront: TechItem = {
  title: "Frontend",
  details: [frontReact, frontVue, frontMarkup],
};

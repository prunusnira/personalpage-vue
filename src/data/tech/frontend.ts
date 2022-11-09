import type { TechDetails, TechItem } from "./techItem";

const frontReact: TechDetails = {
  name: "React",
  about: [
    "주로 사용 라이브러리입니다",
    "언어는 TypeScript를 대부분 사용합니다",
    "Custom Hooks를 활용하여 비즈니스 로직을 작성하고 관리합니다",
    "상태관리 라이브러리 활용할 수 있습니다 (redux 등)",
    "NextJS로 SSR이 적용된 홈페이지를 개발한 경험이 있습니다",
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
    "이 웹페이지가 vue3+pinia로 만들어졌어요!",
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

import type { TechDetails, TechItem } from "./techItem";

const frontReactK: TechDetails = {
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

const frontVueK: TechDetails = {
  name: "Vue",
  about: [
    "이 웹페이지가 vue3+pinia로 만들어졌어요!",
    "아직 업무등에 사용해 본 적은 없지만 공부중입니다",
  ],
  exp: [],
  etc: [],
};

const frontMarkupK: TechDetails = {
  name: "HTML and CSS",
  about: [
    "최근에는 CSS-in-JS를 자주 활용하여 개발합니다 (styled-components, emotion-js 등)",
  ],
  exp: [],
  etc: [],
};

const frontReactJ: TechDetails = {
  name: "React",
  about: [
    "主に利用しているライブラリです",
    "言語はTypeScriptを使っています",
    "Custom Hooksを活用しビスネスロジックを作成・管理します",
    "状態管理ライブラリを活用できます (reduxなど)",
    "NextJSを利用したSSRウェブサイトの作成経験があります",
  ],
  exp: [
    "業務・個人プロジェクト多数から利用",
    "詳細はProjectページを参考にしてください",
  ],
  etc: [],
};

const frontVueJ: TechDetails = {
  name: "Vue",
  about: [
    "このページがvue3+piniaでつくられました",
    "まだ業務で利用したことはありませんが、研究中です",
  ],
  exp: [],
  etc: [],
};

const frontMarkupJ: TechDetails = {
  name: "HTML and CSS",
  about: ["最近はCSS-in-JSをよく使っています (styled-components, emotion-js)"],
  exp: [],
  etc: [],
};

const frontReactE: TechDetails = {
  name: "React",
  about: [
    "Mostly used library",
    "Using TypeScript for development",
    "Using custom hooks to generate and manage business logic",
    "Experienced state management libraries (such as redux)",
    "Have experience for developing SSR web site using NextJS",
  ],
  exp: [
    "Used in several work and personal projects",
    "Check project page for details",
  ],
  etc: [],
};

const frontVueE: TechDetails = {
  name: "Vue",
  about: [
    "This web page is made of vue3+pinia",
    "Still not used in work, but still studying",
  ],
  exp: [],
  etc: [],
};

const frontMarkupE: TechDetails = {
  name: "HTML and CSS",
  about: ["Using CSS-in-JS recently (styled-components, emotion-js)"],
  exp: [],
  etc: [],
};

export const techFront: TechItem = {
  title: "Frontend",
  details: {
    ko: [frontReactK, frontVueK, frontMarkupK],
    en: [frontReactE, frontVueE, frontMarkupE],
    jp: [frontReactJ, frontVueJ, frontMarkupJ],
  },
};

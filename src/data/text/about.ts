import type { ExpDataType } from "../experience";

const expDataK: ExpDataType[] = [
  {
    date: "2021.09-2022.08",
    company: "주식회사 테라핀",
    type: "웹툰, 웹소설 제작 및 서비스",
    work: "웹툰 플랫폼 개발",
    etc: "",
    tech: "TypeScript, ReactJS, NextJS, Redux 등",
  },
  {
    date: "2015.05-2020.05",
    company: "한국전자인증 / AIBrain",
    type: "금융, 보안, AI",
    work: "R&D, 소프트웨어 개발",
    etc: "전문연구요원으로 대체복무 진행",
    tech: "JavaScript, TypeScript, ReactJS (Web Frontend) / Java, Kotlin (Server, Android) / Unity3D (Game, Tool)",
  },
  {
    date: "2013.03-2015.02",
    company: "부산대학교 전기전자컴퓨터공학부 소프트웨어공학 연구실",
    type: "대학원 연구실",
    work: "연구, R&D",
    etc: "석사학위 취득",
    tech: "JavaScript (web 개발), Java (R&D, Android)",
  },
];
const expDataE: ExpDataType[] = [
  {
    date: "2021.09-2022.08",
    company: "Terapin Studio",
    type: "Webtoon, Web novel service",
    work: "Webtoon platform development",
    etc: "",
    tech: "TypeScript, ReactJS, NextJS, Redux, etc.",
  },
  {
    date: "2015.05-2020.05",
    company: "CrossCert / AIBrain",
    type: "Finance, Security, AI",
    work: "R&D, Software Development",
    etc: "Alternative service for army",
    tech: "JavaScript, TypeScript, ReactJS (Web Frontend) / Java, Kotlin (Server, Android) / Unity3D (Game, Tool)",
  },
  {
    date: "2013.03-2015.02",
    company: "Pusan National University Software Engineering Lab",
    type: "Graduate School Lab",
    work: "Research and Development",
    etc: "Got Master degree",
    tech: "JavaScript (web dev), Java (R&D, Android)",
  },
];
const expDataJ: ExpDataType[] = [
  {
    date: "2021.09-2022.08",
    company: "テラピン・スタジオ",
    type: "ウェブ漫画・ウェブ小説の制作及びサービス",
    work: "ウェブ漫画プラットフォーム開発",
    etc: "",
    tech: "TypeScript, ReactJS, NextJS, Redux など",
  },
  {
    date: "2015.05-2020.05",
    company: "韓国電子認証 / AIBrain",
    type: "金融, セキュリティ, AI",
    work: "R&D, ソフトウェア開発",
    etc: "軍隊の代替服務として仕事をしました",
    tech: "JavaScript, TypeScript, ReactJS (Web Frontend) / Java, Kotlin (Server, Android) / Unity3D (Game, Tool)",
  },
  {
    date: "2013.03-2015.02",
    company: "釜山大学校ソフトウェア工学研究室",
    type: "大学院の研究室",
    work: "研究, R&D",
    etc: "修士学位取得",
    tech: "JavaScript (web開発), Java (R&D, Android)",
  },
];

export default {
  ko: {
    introTitle: "소개",
    introData: [
      "개발 그 자체에 흥미를 갖고 다양한 분야에 대해 공부하고 있는 개발자입니다",
      "현재는 웹 개발에 재미를 느끼고 웹에 집중하기 위한 공부를 하고 있습니다",
      "업무 및 개인 프로젝트로 웹 서비스를 만들어 서비스 하고 있습니다",
      "이전에는 업무에서 Java/Kotlin을 이용하여 서버, 사내 플랫폼, 게임 등 다양한 프로젝트를 경험했습니다",
      "Android 개발 및 앱 출시 경험도 있으며, Unity를 이용한 게임 제작 등에도 흥미가 있습니다",
    ],
    expTitle: "일 해본 경험",
    expData: expDataK,
  },
  en: {
    introTitle: "Introduction",
    introData: [
      "A developer who has interest in development itself, and studying in various category",
      "Currently stuyding web development",
      "I made several work / personal projects with web development",
      "Before web, I developed server, internal company platform, game and so on using Java/Kotlin",
      "Experienced Android dev and app release, and interested in Unity game dev too",
    ],
    expTitle: "Work experiences",
    expData: expDataE,
  },
  jp: {
    introTitle: "紹介",
    introData: [
      "開発そのものに興味を持って様々なカテゴリの勉強をしています",
      "現在はウェブ開発に面白さを感じて集中しています",
      "業務・個人プロジェクトでウェブサービスを作成・サービスしています",
      "以前は業務でJava/Kotlinを使ったサーバー、社内のプラットフォーム、ゲームなどの様々なプロジェクトを経験しました",
      "Android開発とアプリのリリース経験があり、Unityのゲーム開発にも興味があります",
    ],
    expTitle: "仕事の経験",
    expData: expDataJ,
  },
};

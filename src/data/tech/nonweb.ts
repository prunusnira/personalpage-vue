import type { TechDetails, TechItem } from "./techItem";

const techUnity: TechDetails = {
  name: "Unity 3D",
  about: ["이전 회사 및 개인 개발로 간단한 게임을 만들어 본 적이 있습니다"],
  exp: [
    "AI 라이브러리 활용 게임 개발 (업무)",
    "리듬게임 BMS Player 토이프로젝트 개발 진행 (Project 참고)",
  ],
  etc: [],
};

const techAndroid: TechDetails = {
  name: "Android",
  about: [
    "대학교 학부생 시절부터 안드로이드 앱을 만들어 마켓에 올리거나 한 경험이 있습니다",
  ],
  exp: [],
  etc: [],
};

const techUML: TechDetails = {
  name: "UML 설계",
  about: ["학부생/대학원 연구실에서 UML 설계를 배웠습니다"],
  exp: [],
  etc: [],
};

const techNonDev: TechDetails = {
  name: "개발 이외",
  about: [
    "MS Office 문서 작성 가능",
    "Photoshop 편집 가능",
    "DaVinci Resolve 영상편집 가능",
  ],
  exp: [],
  etc: ["YouTube에서 팬 영상 편집 채널 운영 중"],
};

const techEtc: TechDetails = {
  name: "기타",
  about: [
    "개발 중 데이터베이스가 필요한 경우 주로 RDB를 활용하였습니다",
    "버전관리는 GitLab, BitBucket, GitHub을 사용할 수 있습니다",
    "개발 테스트에는 Jest와 testing-library를 사용합니다",
  ],
  exp: [],
  etc: [],
};

export const techNonWeb: TechItem = {
  title: "Web 이외 개발",
  details: [techUnity, techAndroid, techUML, techEtc, techNonDev],
};

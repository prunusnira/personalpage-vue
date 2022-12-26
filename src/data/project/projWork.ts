import type { ProjItem } from "./projectItem";

const ProjWork: Array<ProjItem> = [
  {
    icon: "/project/copin200/logo.png",
    title: {
      ko: "Copin Comics 2.0",
      jp: "Copin Comics 2.0",
      en: "Copin Comics 2.0",
    },
    simpledesc: {
      ko: "레거시 포팅 이후 새 기능 등을 추가하여 새로운 코드베이스로 개발",
      jp: "レガシィポーティング以後新たな機能を追加して最初から再開発",
      en: "Created app from scratch with new functions added after porting legacy codes",
    },
    platform: "Web",
    tech: "ReactJS (TypeScript), NextJS, Redux, styled-components",
    period: "2022.02-2022.07",
    link: [],
    content: {
      ko: `<ul>
              <li>1.5 개발 완료 후 새로운 기능을 추가하는 확장 버전 개발을 초기에 계획</li>
              <li>점점 기획이 커지면서 새롭게 개편을 하자는 방향으로 변경</li>
              <li>그래서 모든 코드베이스를 처음부터 다시 개발하는 방향으로 진행됨</li>
          </ul>`,
      jp: `<ul>
            <li>1.5開発後新しい機能を追加する拡張バージョンを企画</li>
            <li>企画が大きくなて新しく改変することになってしまった！</li>
            <li>それで全てのコードを最初から再開発することになってプロジェクトを進行</li>
        </ul>`,
      en: `<ul>
            <li>After developing 1.5 version, there was new plan for adding new features to project</li>
            <li>But plan become bigger and bigger, and team decided to make a big upgrade for the project</li>
            <li>After all, all codes are re-written from the scratch</li>
        </ul>`,
    },
    dev: {
      ko: `
        <b>[ 담당파트: 프론트엔드 개발 파트장, 프론트엔드 설계, 기술 선택, 개발, 테스트 등 ]</b>
        <ul>
            <li>NextJS를 도입하면서 기존에 사용했던 redux를 활용할 수 없는 부분들이 여럿 발생하여 이를 해결하기 위해 cookie 활용 등에 대한 연구를 진행</li>
        </ul>`,
      jp: `
      <b>[ 担当: Frontendパート長、設計、技術選択、開発、テストなど ]</b>
      <ul>
          <li>NextJS投入によるreduxの一部を使えないことがあり、その解決のためcookieを活用したりなどの研究を行う</li>
      </ul>`,
      en: `
      <b>[ Participated as: Frontend dev leader, Project design, Tech stack design, Development, Test ]</b>
      <ul>
          <li>With introducing NextJS into our project, we had some difficulties on using redux in some respect, so we changed some part like using cookies</li>
      </ul>`,
    },
    image: [
      "/project/copin200/cc2001.png",
      "/project/copin200/cc2002.png",
      "/project/copin200/cc2003.png",
      "/project/copin200/cc2004.png",
    ],
  },
  {
    icon: "/project/copin150/logo.png",
    title: {
      ko: "Copin Comics 1.5 (레거시 포팅)",
      jp: "Copin Comics 1.5 (レガシィポーティング)",
      en: "Copin Comics 1.5 (Legacy port)",
    },
    simpledesc: {
      ko: "php로 개발되었던 기존 서비스를 React로 포팅",
      jp: "phpで開発されたサービスをReactにポーティング",
      en: "Ported legacy project into React which was developed using php",
    },
    platform: "Web",
    tech: "ReactJS (TypeScript), styled-components, Redux",
    period: "2021.12-2022.02",
    link: [],
    content: {
      ko: `<ul>
                    <li>php로 서버/클라이언트가 통합되어 개발되었던 초기의 서비스를 프론트와 백엔드로 분리</li>
                    <li>기존 서비스의 구조를 그대로 React로 옮기는 것을 중점으로 개발 진행</li>
                    <li>기존 홈페이지의 UI의 기조를 유지하여 새롭게 디자인 작업을 진행</li>
                    <li>백엔드는 Spring Boot로 백엔드팀에서 별도로 개발 진행</li>
                </ul>`,
      jp: `<ul>
      <li>php로 서버/클라이언트가 통합되어 개발되었던 초기의 서비스를 프론트와 백엔드로 분리</li>
      <li>기존 서비스의 구조를 그대로 React로 옮기는 것을 중점으로 개발 진행</li>
      <li>기존 홈페이지의 UI의 기조를 유지하여 새롭게 디자인 작업을 진행</li>
      <li>백엔드는 Spring Boot로 백엔드팀에서 별도로 개발 진행</li>
  </ul>`,
      en: `<ul>
      <li>Devided frontend and backend which was all-in-one developed with php</li>
      <li>Concentrated on moving legacy structures into React</li>
      <li>UI designs are changed but kept the design language</li>
      <li>Backend was developed with Spring Boot by separated backend team</li>
  </ul>`,
    },
    dev: {
      ko: `<b>[ 담당파트: 프론트엔드 개발 파트장, 프론트엔드 설계, 기술 선택, 개발, 테스트 등 ]</b>
                <ul>
                    <li>프론트엔드 팀원 2명이 개발을 진행</li>
                    <li>주어진 개발 기간이 짧아 기획/디자인 팀과 동시에 작업을 진행</li>
                    <li>이를 위해 시스템 기반을 먼저 작업하고 이후 기능별 별도 개발을 진행</li>
                    <li>특히 기존 레거시 페이지는 반응형에 대한 처리가 되어있지 않고 스크린 사이즈에 따라 별도로 페이지를 만드는 형태로 작업이 되어있어 이를 새롭게 정의하였음</li>
                </ul>`,
      jp: `<b>[ 담당파트: 프론트엔드 개발 파트장, 프론트엔드 설계, 기술 선택, 개발, 테스트 등 ]</b>
      <ul>
          <li>프론트엔드 팀원 2명이 개발을 진행</li>
          <li>주어진 개발 기간이 짧아 기획/디자인 팀과 동시에 작업을 진행</li>
          <li>이를 위해 시스템 기반을 먼저 작업하고 이후 기능별 별도 개발을 진행</li>
          <li>특히 기존 레거시 페이지는 반응형에 대한 처리가 되어있지 않고 스크린 사이즈에 따라 별도로 페이지를 만드는 형태로 작업이 되어있어 이를 새롭게 정의하였음</li>
      </ul>`,
      en: `<b>[ Participated as: Frontend dev leader, planning, tech stack selection, development, test ]</b>
      <ul>
          <li>There were 2 members in frontend team</li>
          <li>As we had short amount of time, planning and design team also worked almost at the same time</li>
          <li>To develop it in efficiency, we made common bases of system first, and then each functionalities are made</li>
          <li>As legacy page had no support for responsive page(it had seperated page for different screen size...), we made it from scratch to support it</li>
      </ul>`,
    },
    image: [
      "/project/copin150/cc1501.png",
      "/project/copin150/cc1502.png",
      "/project/copin150/cc1503.png",
      "/project/copin150/cc1504.png",
    ],
  },
  {
    icon: "/project/chatbot/icon.png",
    title: {
      ko: "UniBot (인증서 채팅봇)",
      jp: "",
      en: "UniBot (Chat bot for financial certificate)",
    },
    simpledesc: {
      ko: "인증서에 대한 사용자들의 질문에 대해 답변을 자동으로 수행해주는 채팅봇",
      jp: "",
      en: "An automated chat bot used for answering questions from users",
    },
    platform: "Web, Android",
    tech: "Android (Kotlin), ReactJS (TypeScript), Bootstrap, NGINX, Spring Boot, MariaDB",
    period: "2019.10-2020.02",
    link: [],
    //"https://chatapp.crosscert.com"
    //"https://play.google.com/store/apps/details?id=com.crosscert.aichat"],
    content: {
      ko: `<ul>
                    <li>인증서 서비스 사용자들에게 필요한 사용법, 질문에 대한 답변을 채팅봇으로 만든 서비스</li>
                    <li>사용자들은 안드로이드 앱 혹은 PC 브라우저로 채팅봇에 접속하여 앱을 사용할 수 있었음</li>
                </ul>`,
      jp: `<ul>
      <li>인증서 서비스 사용자들에게 필요한 사용법, 질문에 대한 답변을 채팅봇으로 만든 서비스</li>
      <li>사용자들은 안드로이드 앱 혹은 PC 브라우저로 채팅봇에 접속하여 앱을 사용할 수 있었음</li>
  </ul>`,
      en: `<ul>
      <li>An automated QnA chat bot service for users of financial certificates in Korea</li>
      <li>Users were able to connect through Web or Andoird App</li>
  </ul>`,
    },
    dev: {
      ko: `<b>[ 담당파트: 프론트엔드, ChatScript와 연결하는 중간서버, 안드로이드 앱, DB설계 ]</b>
                <ul>
                    <li>프론트엔드: ReactJS (TypeScript), Bootstrap (Reactstrap) 사용</li>
                    <li>안드로이드: Kotlin으로 개발, WebView를 사용한 하이브리드 앱</li>
                    <li>중간서버: SpringBoot(Kotlin)으로 개발, 백엔드 파트와 연동을 위해 구현. ChatScript와 통신을 위한 REST API 구축</li>
                    <li>시스템 구성: NGINX위에 Reversed Proxy를 사용해 백엔드와 프론트엔드를 모두 구동</li>
                </ul>`,
      jp: `<b>[ 담당파트: 프론트엔드, ChatScript와 연결하는 중간서버, 안드로이드 앱, DB설계 ]</b>
      <ul>
          <li>프론트엔드: ReactJS (TypeScript), Bootstrap (Reactstrap) 사용</li>
          <li>안드로이드: Kotlin으로 개발, WebView를 사용한 하이브리드 앱</li>
          <li>중간서버: SpringBoot(Kotlin)으로 개발, 백엔드 파트와 연동을 위해 구현. ChatScript와 통신을 위한 REST API 구축</li>
          <li>시스템 구성: NGINX위에 Reversed Proxy를 사용해 백엔드와 프론트엔드를 모두 구동</li>
      </ul>`,
      en: `<b>[ Participated in: Frontend, Intermediate server using ChatScript, Android app, DB ]</b>
      <ul>
          <li>Frontend: ReactJS (TypeScript), Bootstrap (Reactstrap)</li>
          <li>Android: Developed with Kotlin, Used WebView to simplify development process</li>
          <li>Intermediate server: Devloped with SpringBoot(Kotlin). Made REST API for communicating with Backend (ChatScript)</li>
          <li>System: Used reversed proxy with NGINX to run both frontend and backend</li>
      </ul>`,
    },
    image: [
      "/project/chatbot/01.jpg",
      "/project/chatbot/02.jpg",
      "/project/chatbot/03.jpg",
      "/project/chatbot/04.jpg",
    ],
  },
  {
    icon: "/project/backup/icon.png",
    title: {
      ko: "인증서 클라우드 백업 서비스",
      jp: "",
      en: "Financial certificate backup service with cloud",
    },
    simpledesc: {
      ko: "브라우저 내부 저장소의 인증서를 백업하여 다른 기기에서 쓸 수 있게 해주는 서비스",
      jp: "",
      en: "Backup certificate copied from browser internal storage to make it usable anywhere on the internet",
    },
    platform: "Web",
    tech: "Spring Boot 2 (Java), PostgreSQL",
    period: "2019.12-2020.05",
    link: [],
    content: {
      ko: `<ul>
                    <li>브라우저 내부 저장소에 저장되어있는 인증서를 서버에 백업하여 브라우저/기기에 상관없이 인증서를 사용할 수 있게 하는 서비스</li>
                    <li>클라이언트는 기존 개발되어있는 가입자 소프트웨어를 확장하여 클라이언트를 만듦</li>
                    <li>서버는 Spring Boot와 PostgreSQL을 사용하여 신규 제작</li>
                </ul>`,
      jp: `<ul>
      <li>브라우저 내부 저장소에 저장되어있는 인증서를 서버에 백업하여 브라우저/기기에 상관없이 인증서를 사용할 수 있게 하는 서비스</li>
      <li>클라이언트는 기존 개발되어있는 가입자 소프트웨어를 확장하여 클라이언트를 만듦</li>
      <li>서버는 Spring Boot와 PostgreSQL을 사용하여 신규 제작</li>
  </ul>`,
      en: `<ul>
      <li>An web service for backup certificated from web browser's internal storage to cloud server, to make it usable anywhere on the internet regardless device or browser</li>
      <li>Used existing web client (by modifying it)</li>
      <li>A whole new server system made with Spring Boot and PostgreSQL</li>
  </ul>`,
    },
    dev: {
      ko: `<b>[ 담당파트: 서버 및 DB ]</b>
                <ul>
                    <li>클라이언트와의 통신을 위해 RESTful API 형태로 개발</li>
                    <li>HSM을 연동하여 보안성을 높임 (PKCS11 Provider)</li>
                    <li>외부의 SMS 모듈을 사용한 SMS 인증 제공</li>
                </ul>`,
      jp: `<b>[ 담당파트: 서버 및 DB ]</b>
      <ul>
          <li>클라이언트와의 통신을 위해 RESTful API 형태로 개발</li>
          <li>HSM을 연동하여 보안성을 높임 (PKCS11 Provider)</li>
          <li>외부의 SMS 모듈을 사용한 SMS 인증 제공</li>
      </ul>`,
      en: `<b>[ Participated as: Server and DB ]</b>
      <ul>
          <li>Made RESTful API to easily usable by client</li>
          <li>Used HSM hardware to add more security (PKCS11 Provider)</li>
          <li>Used external SMS modules to support certificate user over SMS</li>
      </ul>`,
    },
    image: [
      "/project/backup/01.png",
      "/project/backup/02.jpg",
      "/project/backup/03.png",
    ],
  },
  {
    icon: "/project/aicore/icon.png",
    title: {
      ko: "AI 플랫폼 개발 및 채팅봇 개발",
      jp: "AIプラットフォーム",
      en: "AI Platform Development",
    },
    simpledesc: {
      ko: "AI Agent간 데이터 전송 개발, AI 플랫폼을 활용한 채팅봇 서비스 개발",
      jp: "",
      en: "Data transfer among AI Agents, AI platform based chatbot service",
    },
    platform: "Java, Web",
    tech: "Java, JavaScript, Tomcat 8, jQuery, HTML, Bootstrap",
    period: "2015.5~2016.8",
    link: [
      "https://aibrain.com/solutions/aicore-adaptive-interactive-cognitive-reasoning-engine/",
    ],
    content: {
      ko: `대화 가능한 AI를 만들기 위한 자연언어 처리 프로젝트에 통신 모듈 개발로 참가<br/><br/>
            (1) IAC(Inter-Agent Communication)
            <ul>
                <li>Planner에서 다른 에이전트로의 데이터 전송을 요청받음</li>
                <li>JADE Framework에서 FIPA-ACL 메시지 구조에 맞는 통신용 메시지를 작성 및 전송</li>
            </ul>
            (2) AI 플랫폼을 활용한 채팅봇 개발
            <ul>
                <li>상기 플랫폼을 사용하여 클라이언트와 서버가 자연어로 대화를 주고받을 수 있는 채팅봇 서비스를 개발</li>
                <li>TTS로 채팅 내용을 읽어주고 및 마이크를 사용해 말을 전달 할 수 있도록 개발</li>
                <li>Vanilla JS로 개발하였으며 1년간 회사 홈페이지에서 서비스</li>
            </ul>
            * JADE Framework: Java로 작성된 Multi-Agent System 개발을 위한 프레임워크<br/>
            * ACL: Agent Communication Language`,
      jp: `대화 가능한 AI를 만들기 위한 자연언어 처리 프로젝트에 통신 모듈 개발로 참가<br/><br/>
      (1) IAC(Inter-Agent Communication)
      <ul>
          <li>Planner에서 다른 에이전트로의 데이터 전송을 요청받음</li>
          <li>JADE Framework에서 FIPA-ACL 메시지 구조에 맞는 통신용 메시지를 작성 및 전송</li>
      </ul>
      (2) AI 플랫폼을 활용한 채팅봇 개발
      <ul>
          <li>상기 플랫폼을 사용하여 클라이언트와 서버가 자연어로 대화를 주고받을 수 있는 채팅봇 서비스를 개발</li>
          <li>TTS로 채팅 내용을 읽어주고 및 마이크를 사용해 말을 전달 할 수 있도록 개발</li>
          <li>Vanilla JS로 개발하였으며 1년간 회사 홈페이지에서 서비스</li>
      </ul>
      * JADE Framework: Java로 작성된 Multi-Agent System 개발을 위한 프레임워크<br/>
      * ACL: Agent Communication Language`,
      en: `Communication among AI agents - Natural language process AI project<br/><br/>
      (1) IAC(Inter-Agent Communication)
      <ul>
          <li>Get request from agent (Planner)</li>
          <li>Create a formatted message (FIPA-ACL typed msg) from JADE Framework, and transfer it</li>
      </ul>
      (2) AI platform based chat bot
      <ul>
          <li>A chat bot service which provides simple conversation by using the AI platform</li>
          <li>Additional service: reads chat with TTS, also supported using mic to get user's voice</li>
          <li>Developed with vanilla JS, and run from company's homepage for a year</li>
      </ul>
      * JADE Framework: A framework for developing multi-agent system made with Java<br/>
      * ACL: Agent Communication Language`,
    },
    dev: {
      ko: `[ 채팅봇 관련 ]
                <ul>
                    <li>Tomcat에 Natural Language Processing 엔진을 수정하여 구동</li>
                    <li>TTS에는 Speech Synthesis API를 사용하여 개발</li>
                </ul>`,
      jp: `[ 채팅봇 관련 ]
      <ul>
          <li>Tomcat에 Natural Language Processing 엔진을 수정하여 구동</li>
          <li>TTS에는 Speech Synthesis API를 사용하여 개발</li>
      </ul>`,
      en: `[ About chat bot ]
      <ul>
          <li>Run Natural Language Processing from Tomcat</li>
          <li>Used Speech Synthesis API for TTS</li>
      </ul>`,
    },
    image: [
      "/project/aicore/01.jpg",
      "/project/aicore/02.jpg",
      "/project/aicore/03.jpg",
      "/project/aicore/04.jpg",
      "/project/aicore/05.jpg",
    ],
  },
  {
    icon: "/project/aigame/icon.png",
    title: {
      ko: "AI 플랫폼을 활용한 데모 게임 개발",
      jp: "AIゲーム開発",
      en: "AI Game Development",
    },
    simpledesc: {
      ko: "NPC가 게임의 환경을 이해하고 다음 동작을 결정해 행동하는 데모 게임 개발",
      jp: "",
      en: "A demo game with AI-based NPC",
    },
    platform: "Unity",
    tech: "Java, C#, Spring Framework, Unity3D, MariaDB",
    period: "2016.8~2017.2",
    link: ["https://aibrain.com/products/futurable-true-ai-game/"],
    content: {
      ko: `<ul>
                    <li>회사가 보유한 AI 기술을 활용하여 데모 게임 개발을 진행</li>
                    <li>NPC는 게임의 환경을 확인하여 현재 자신의 상태와 조건을 확인</li>
                    <li>NPC의 다음 동작은 이러한 상태를 사용한 추론 결과에 따라 진행됨</li>
                </ul>`,
      jp: `<ul>
      <li>회사가 보유한 AI 기술을 활용하여 데모 게임 개발을 진행</li>
      <li>NPC는 게임의 환경을 확인하여 현재 자신의 상태와 조건을 확인</li>
      <li>NPC의 다음 동작은 이러한 상태를 사용한 추론 결과에 따라 진행됨</li>
  </ul>`,
      en: `<ul>
      <li>A tech demo game using company's AI technology</li>
      <li>NPC determines its next move by calculating current circumstances</li>
      <li>These reasoning process made NPC act differently on every trial</li>
  </ul>`,
    },
    dev: {
      ko: `(1) 클라이언트 (C#)
            <ul>
                <li>Google Play Service 연동, 서버 통신, UI, 디버깅</li>
            </ul>
            (2) 서버 (Java/Spring)
            <ul>
                <li>회사에서 제작한 AI 플랫폼을 서버에서 구동</li>
                <li>유저별 대화내용 보존 및 대화 시스템 구성 및 개발</li>
                <li>클라이언트와 서버간의 요청과 응답은 API 형태로 제작</li>
            </ul>`,
      jp: `(1) 클라이언트 (C#)
      <ul>
          <li>Google Play Service 연동, 서버 통신, UI, 디버깅</li>
      </ul>
      (2) 서버 (Java/Spring)
      <ul>
          <li>회사에서 제작한 AI 플랫폼을 서버에서 구동</li>
          <li>유저별 대화내용 보존 및 대화 시스템 구성 및 개발</li>
          <li>클라이언트와 서버간의 요청과 응답은 API 형태로 제작</li>
      </ul>`,
      en: `(1) Client (C#)
      <ul>
          <li>Google Play Service connection, Server communication, UI, Debugging</li>
      </ul>
      (2) Server (Java/Spring)
      <ul>
          <li>Run AI platform on the server</li>
          <li>Server stored conversation of each user to keep track of next AI's movement (made conversational system for AI)</li>
          <li>Each request-response are API based</li>
      </ul>`,
    },
    image: [
      "/project/aigame/01.jpg",
      "/project/aigame/02.jpg",
      "/project/aigame/03.jpg",
    ],
  },
  {
    icon: "/project/fautonomy/icon.png",
    title: {
      ko: "AI 게임 개발 플러그인",
      jp: "AIゲームプラグイン開発",
      en: "AI Game Plugin Development",
    },
    simpledesc: {
      ko: "",
      jp: "",
      en: "",
    },
    platform: "Unity",
    tech: "Java, C#, Spring Framework, Unity3D",
    period: "2017~2019",
    link: [
      "https://aibrain.com/products/futurable-true-ai-game/",
      "https://assetstore.unity.com/packages/tools/ai/fautonomy-105444",
    ],
    content: {
      ko: `<ul>
                    <li>AI 게임에 사용된 기술을 사용하여 Unity 개발자가 사용할 수 있는 플러그인을 제작</li>
                    <li>개발자는 게임내의 환경 상황, 캐릭터의 시야나 인지에 대한 설정, 캐릭터가 수행하는 동작에 대한 조건 등을 플러그인에 입력</li>
                    <li>사용자가 지정한 조건을 서버로 전송하여 Tensorflow로 학습</li>
                    <li>학습의 결과로 나온 ProtoBuf 파일을 다운로드하여 클라이언트에 적용</li>
                </ul>`,
      jp: `<ul>
      <li>AI 게임에 사용된 기술을 사용하여 Unity 개발자가 사용할 수 있는 플러그인을 제작</li>
      <li>개발자는 게임내의 환경 상황, 캐릭터의 시야나 인지에 대한 설정, 캐릭터가 수행하는 동작에 대한 조건 등을 플러그인에 입력</li>
      <li>사용자가 지정한 조건을 서버로 전송하여 Tensorflow로 학습</li>
      <li>학습의 결과로 나온 ProtoBuf 파일을 다운로드하여 클라이언트에 적용</li>
  </ul>`,
      en: `<ul>
      <li>AI game plguin for developers, using same AI platform above</li>
      <li>Devs input current circumstance of game, character's vision and recognition, condition for movement and so on</li>
      <li>Send these options to server and TensorFlow calculate it</li>
      <li>Apply ProtoBuf file to the game as a result of learning</li>
  </ul>`,
    },
    dev: {
      ko: `(1) 클라이언트 (C#)
            <ul>
                <li>UI, 서버 통신, 디버그</li>
            </ul>
            (2) 서버 (Java/Spring)
            <ul>
                <li>서버에서 전송한 게임 환경 정보 등을 Process로 Python 코드를 실행하는 방식으로 수행</li>
                <li>Python 코드는 Tensorflow를 실행하기 위한 코드가 들어있음</li>
                <li>다수의 클라이언트에서 동시에 요청이 들어오는 경우 Queue로 관리</li>
                <li>URL로 클라이언트에서 요청을 받고 처리함</li>
            </ul>`,
      jp: `(1) 클라이언트 (C#)
      <ul>
          <li>UI, 서버 통신, 디버그</li>
      </ul>
      (2) 서버 (Java/Spring)
      <ul>
          <li>서버에서 전송한 게임 환경 정보 등을 Process로 Python 코드를 실행하는 방식으로 수행</li>
          <li>Python 코드는 Tensorflow를 실행하기 위한 코드가 들어있음</li>
          <li>다수의 클라이언트에서 동시에 요청이 들어오는 경우 Queue로 관리</li>
          <li>URL로 클라이언트에서 요청을 받고 처리함</li>
      </ul>`,
      en: `(1) Client (C#)
      <ul>
          <li>UI, Server communication, Debug</li>
      </ul>
      (2) Server (Java/Spring)
      <ul>
          <li>Execute python code as a separated process</li>
          <li>Python code contains TensorFlow library</li>
          <li>Multiple request from clients are managed by queue</li>
      </ul>`,
    },
    image: [
      "/project/fautonomy/01.jpg",
      "/project/fautonomy/02.jpg",
      "/project/fautonomy/03.jpg",
    ],
  },
  {
    icon: "/project/situation/icon.png",
    title: {
      ko: "온톨로지 기반의 상황인지 모바일 프레임워크",
      jp: "",
      en: "Situation aware mobile framework based on ontology",
    },
    simpledesc: {
      ko: "논문 내용 증명 개발 지원으로 참여한 프로젝트",
      jp: "",
      en: "Project for the proof of a paper",
    },
    platform: "Java, Android",
    tech: "Java, OWL, SPARQL, Android, Protege, Apache Jena",
    period: "2013",
    link: [
      "https://www.researchgate.net/publication/264428214_Mobile_situation-aware_framework_for_developing_smart_mobile_software",
    ],
    content: {
      ko: `<ul>
                    <li>모바일 환경에서 사용자의 현재 조건에 맞는 콘텐츠를 제공하는 프레임워크</li>
                    <li>증명 지원을 위한 안드로이드 앱 개발과 이미 만들어진 프레임워크의 수정을 담당</li>
                    <li>SCI-E 논문의 제 2저자로 참가</li>
                    <li>* Mobile situation-aware framework for developing smart mobile software, Joonseok Park, Taejun Kang, Keunhyuk Yeom, Journal of Software: Evolution and Process, Vol. 26, Issue 12, 1 Dec 2014</li>
                </ul>`,
      jp: `<ul>
      <li>모바일 환경에서 사용자의 현재 조건에 맞는 콘텐츠를 제공하는 프레임워크</li>
      <li>증명 지원을 위한 안드로이드 앱 개발과 이미 만들어진 프레임워크의 수정을 담당</li>
      <li>SCI-E 논문의 제 2저자로 참가</li>
      <li>* Mobile situation-aware framework for developing smart mobile software, Joonseok Park, Taejun Kang, Keunhyuk Yeom, Journal of Software: Evolution and Process, Vol. 26, Issue 12, 1 Dec 2014</li>
  </ul>`,
      en: `<ul>
      <li>Situation-aware framework for mobile environment, checking current state and circumstance of mobile user</li>
      <li>Proof for paper - Made an android app and modify existing framework made with Java</li>
      <li>Also participated in 2nd author of SCI-E paper</li>
      <li>* Mobile situation-aware framework for developing smart mobile software, Joonseok Park, Taejun Kang, Keunhyuk Yeom, Journal of Software: Evolution and Process, Vol. 26, Issue 12, 1 Dec 2014</li>
  </ul>`,
    },
    dev: {
      ko: `[테스트용 음악 재생 어플]
                    <ul>
                        <li>스마트폰의 센서에서 데이터를 수집하고 온톨로지를 사용한 추론을 통해 결과값을 얻음</li>
                        <li>도출된 결과 값을 이용하여 사용자에게 적합한 음악을 추천 및 재생</li>
                    </ul>
                    [프레임워크 수정]
                    <ul>
                        <li>온톨로지를 분석하여 사용자가 설정한 값을 한 번에 확인할 수 있는 트리 구조 생성 및 제공</li>
                    </ul>`,
      jp: `[테스트용 음악 재생 어플]
      <ul>
          <li>스마트폰의 센서에서 데이터를 수집하고 온톨로지를 사용한 추론을 통해 결과값을 얻음</li>
          <li>도출된 결과 값을 이용하여 사용자에게 적합한 음악을 추천 및 재생</li>
      </ul>
      [프레임워크 수정]
      <ul>
          <li>온톨로지를 분석하여 사용자가 설정한 값을 한 번에 확인할 수 있는 트리 구조 생성 및 제공</li>
      </ul>`,
      en: `[Music player for test]
      <ul>
          <li>Get data from sensors of smartphone, and do inference with ontology to get the result</li>
          <li>Give recommended genre or music from calculated value</li>
      </ul>
      [Framework edit]
      <ul>
          <li>Analyze ontology to create tree structure of current settings and generate ontology viewer</li>
      </ul>`,
    },
    image: [
      "/project/situation/01.jpg",
      "/project/situation/02.jpg",
      "/project/situation/03.jpg",
      "/project/situation/04.jpg",
    ],
  },
  {
    icon: "/project/bigdata/icon.png",
    title: {
      ko: "Big Data 서비스 조합 프레임워크",
      jp: "",
      en: "Big data service composition framework",
    },
    simpledesc: {
      ko: "빅 데이터의 수집, 가공, 표현을 수행하는 서비스들을 조합하여 하나의 데이터 통계 처리 시스템으로 만들어 주는 프레임워크 개발",
      jp: "",
      en: "Composite several services (collection - calculate - visualization) to make a data process system using big data, merged into a framework",
    },
    platform: "Web",
    tech: "PHP, JavaScript, jQuery, Apache HTTP Server, JBoss",
    period: "2013~2014",
    link: [],
    content: {
      ko: `<ul>
              <li>Big Data의 사용을 수집, 처리, 표현의 3가지로 나누어 서비스들을 합쳐 하나의 시스템을 만들어내는 프레임워크</li>
              <li>사용자들이 다수의 서비스 중 필요한 것들만 선택하여 빅 데이터를 처리하기 위한 시스템을 만들 수 있게 함</li>
          </ul>`,
      jp: `<ul>
      <li>Big Data의 사용을 수집, 처리, 표현의 3가지로 나누어 서비스들을 합쳐 하나의 시스템을 만들어내는 프레임워크</li>
  </ul>`,
      en: `<ul>
      <li>Divide big data processes into 3 categories (collection / calculation / visualization)</li>
      <li>Users can select several service on demand to make one big data process system</li>
  </ul>`,
    },
    dev: {
      ko: `<ul>
                    <li>UML로 시스템 구조 설계에 참여</li>
                    <li>jQuery를 사용하여 UI 일부와 관련 동작을 개발</li>
                </ul>`,
      jp: `<ul>
      <li>UML로 시스템 구조 설계에 참여</li>
      <li>jQuery를 사용하여 UI 일부와 관련 동작을 개발</li>
  </ul>`,
      en: `<ul>
      <li>Participated in design system with UML</li>
      <li>Developed some UI components with jQuery</li>
  </ul>`,
    },
    image: ["/project/bigdata/01.jpg", "/project/bigdata/02.jpg"],
  },
];

export default ProjWork;

<script lang="ts">
import { useLangStore, Lang } from "@/stores/lang";
import { useThemeStore, Theme } from "@/stores/theme";

export default {
  data() {
    return {
      headerOuter: "headerOuter",
      headerMenuPC: "menuPC",
      headerMenuMO: "menuMO",
      menuText: "menuText",
      langFloat: "langFloat",
      mobileFloat: "mobileFloat",
      menuItem: "menuItem",
      menuItemDis: "menuItem disabled",
    };
  },
  methods: {
    openLangMenu: () => {
      document.getElementById("langMenu")!.style.display = "flex";
    },
    openMobileMenu: () => {
      document.getElementById("mobileMenu")!.style.display = "flex";
    },
    closeLangMenu: () => {
      document.getElementById("langMenu")!.style.display = "none";
    },
    closeMobileMenu: () => {
      document.getElementById("mobileMenu")!.style.display = "none";
    },
    changeLang: (type: number) => {
      const store = useLangStore();
      store.changeLang(type === 0 ? Lang.KO : type === 1 ? Lang.EN : Lang.JP);
      location.reload();
    },
    changeTheme: () => {
      const store = useThemeStore();
      const nextTheme = store.theme === Theme.LIGHT ? Theme.DARK : Theme.LIGHT;
      store.changeTheme(nextTheme);
      location.reload();
    },
    construction: () => {
      alert("Translation is under construction");
    },
  },
  created() {
    const store = useLangStore();
    if (!store.lang) {
      let lang = navigator.language;

      if (lang === "ko" || lang === "ko-kr" || lang === "ko-KR") {
        store.changeLang(Lang.KO);
        // } else if (lang === "ja" || lang === "ja-jp" || lang === "ja-JP") {
        //   store.changeLang(Lang.JP);
      } else {
        store.changeLang(Lang.EN);
      }
    }
  },
};
</script>

<template>
  <section :class="headerOuter">
    <div :class="headerMenuPC">
      <RouterLink to="/" :class="menuText">Home</RouterLink>
      <RouterLink to="/about" :class="menuText">About</RouterLink>
      <RouterLink to="/tech" :class="menuText">Tech Stack</RouterLink>
      <RouterLink to="/project" :class="menuText">Project</RouterLink>
      <RouterLink to="/link" :class="menuText">Link</RouterLink>
      <div :class="menuText" @click="openLangMenu">Lang</div>
      <div :class="menuText" @click="changeTheme">Theme</div>
    </div>
    <div :class="headerMenuMO">
      <div :class="menuText" @click="openMobileMenu">Menu</div>
      <div :class="menuText" @click="openLangMenu">Lang</div>
      <div :class="menuText" @click="changeTheme">Theme</div>
    </div>
  </section>

  <div :class="langFloat" id="langMenu">
    <div :class="menuItem" @click="changeLang(0)">한국어</div>
    <div :class="menuItem" @click="changeLang(1)">English</div>
    <div :class="menuItemDis" @click="construction()">日本語</div>
    <div :class="menuItem" @click="closeLangMenu">
      <font-awesome-icon icon="fa-solid fa-circle-xmark" />
    </div>
  </div>

  <div :class="mobileFloat" id="mobileMenu">
    <RouterLink :class="menuItem" to="/">Home</RouterLink>
    <RouterLink :class="menuItem" to="/#/about">About</RouterLink>
    <RouterLink :class="menuItem" to="/#/tech">Tech Stack</RouterLink>
    <RouterLink :class="menuItem" to="/#/project">Project</RouterLink>
    <RouterLink :class="menuItem" to="/#/link">Link</RouterLink>
    <div :class="menuItem" @click="closeMobileMenu">
      <font-awesome-icon icon="fa-solid fa-circle-xmark" />
    </div>
  </div>
</template>

<style scoped>
.headerOuter {
  width: 100%;
  display: flex;
  flex-direction: row;
  justify-content: flex-end;
  background-color: rgba(56, 56, 228, 0.5);
  padding: 20px 30px 20px 0;
  position: sticky;
  top: 0;
  box-sizing: border-box;
}

@media screen and (max-width: 500px) {
  .menuPC {
    display: none;
  }

  .menuMO {
    display: flex;
    flex-direction: row;
    gap: 20px;
  }
}

@media screen and (min-width: 501px) {
  .menuPC {
    display: flex;
    flex-direction: row;
    gap: 20px;
  }

  .menuMO {
    display: none;
  }
}

.langFloat,
.mobileFloat {
  display: none;
  flex-direction: column;
  position: fixed;
  top: 50px;
  border: solid 0.5px gray;
  background-color: white;
  padding: 20px;
  text-align: center;
  gap: 10px;
}

.mobileFloat a {
  color: black;
  text-decoration: none;
}

.langFloat {
  display: none;
  right: 80px;
}

.mobileFloat {
  right: 130px;
}

.menuText {
  color: white;
  text-decoration: none;
  cursor: pointer;
}

.disabled {
  color: lightgray !important;
  text-decoration: line-through;
}

.menuText:hover {
  text-decoration: underline;
}

.menuItem {
  color: black;
  cursor: pointer;
}
</style>

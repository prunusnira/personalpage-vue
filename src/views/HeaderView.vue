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
    },
    changeTheme: () => {
      const store = useThemeStore();
      const nextTheme = store.theme === Theme.LIGHT ? Theme.DARK : Theme.LIGHT;
      store.changeTheme(nextTheme);
    },
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
    <div @click="changeLang(0)">한국어</div>
    <div @click="changeLang(1)">English</div>
    <div @click="changeLang(2)">日本語</div>
    <div @click="closeLangMenu">close</div>
  </div>

  <div :class="mobileFloat" id="mobileMenu">
    <RouterLink to="/">Home</RouterLink>
    <RouterLink to="/about">About</RouterLink>
    <RouterLink to="/tech">Tech Stack</RouterLink>
    <RouterLink to="/project">Project</RouterLink>
    <RouterLink to="/link">Link</RouterLink>
    <div @click="closeMobileMenu">close</div>
  </div>
</template>

<style scoped>
.headerOuter {
  width: 100%;
  display: flex;
  flex-direction: row;
  justify-content: flex-end;
  background-color: rgba(56, 56, 228, 0.5);
  padding: 20px 10px 20px 0;
  position: sticky;
  top: 0;
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
}

.mobileFloat a {
  color: black;
  text-decoration: none;
}

.langFloat {
  display: none;
  right: 30px;
}

.mobileFloat {
  right: 80px;
}

.menuText {
  color: white;
  text-decoration: none;
  cursor: pointer;
}

.menuText:hover {
  text-decoration: underline;
}
</style>

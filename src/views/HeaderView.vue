<script lang="ts">
export default {
  data() {
    return {
      headerOuter: "headerOuter",
      headerTitle: "title",
      headerMenu: "menu",
      menuText: "menuText",
      langFloat: "langFloat",
    };
  },
};
</script>

<template>
  <section :class="headerOuter">
    <div :class="headerTitle">
      <img src="" />
    </div>
    <div :class="headerMenu">
      <RouterLink to="/" :class="menuText">Home</RouterLink>
      <RouterLink to="/about" :class="menuText">About</RouterLink>
      <RouterLink to="/tech" :class="menuText">Tech Stack</RouterLink>
      <RouterLink to="/project" :class="menuText">Project</RouterLink>
      <RouterLink to="/link" :class="menuText">Link</RouterLink>
      <div :class="menuText">Lang</div>
      <div :class="menuText">Theme</div>
    </div>
  </section>

  <div :class="langFloat">
    <div>한국어</div>
    <div>English</div>
    <div>日本語</div>
    <div>close</div>
  </div>
</template>

<style scoped>
.headerOuter {
  width: 100%;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  background-color: rgba(56, 56, 228, 0.5);
  padding: 20px 0;
  position: sticky;
  top: 0;
}

.title img {
  height: 50px;
}

.menu {
  display: flex;
  flex-direction: row;
  gap: 20px;
}

.langFloat {
  position: fixed;
  top: 50px;
  right: 30px;
  border: solid 0.5px gray;
  background-color: white;
  padding: 20px;
  text-align: center;
}

.menuText {
  color: white;
  text-decoration: none;
  cursor: pointer;
}

a:hover {
  color: lightyellow;
}
</style>

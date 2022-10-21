<script lang="ts">
export default {
  data() {
    return {
      headerOuter: "headerOuter",
      headerTitle: "title",
      headerMenu: "menu",
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
      <RouterLink to="/">Home</RouterLink>
      <RouterLink to="/about">About</RouterLink>
      <RouterLink to="/tech">Tech Stack</RouterLink>
      <RouterLink to="/project">Project</RouterLink>
      <RouterLink to="/link">Link</RouterLink>
    </div>
  </section>
</template>

<style scoped>
.headerOuter {
  width: 100%;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  background-color: rgba(56, 56, 228, 0.5);
  padding: 20px 0;
}

.title img {
  height: 50px;
}

.menu {
  display: flex;
  flex-direction: row;
  gap: 20px;
}

a {
  color: white;
  text-decoration: none;
}

a:hover {
  color: lightyellow;
}
</style>

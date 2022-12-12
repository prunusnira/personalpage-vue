<script lang="ts">
import { RouterView } from "vue-router";
import HeaderView from "./views/HeaderView.vue";
import { Theme, useThemeStore } from "@/stores/theme";
import FooterView from "./views/FooterView.vue";

export default {
  components: {
    HeaderView,
    FooterView,
  },
  data() {
    const theme = useThemeStore().theme;
    return {
      view: theme === Theme.LIGHT ? "view" : "view dark",
    };
  },
};
</script>

<template>
  <div :class="view">
    <HeaderView />
    <RouterView />
    <FooterView />
  </div>
</template>

<style scoped>
.view {
  height: 100vh;
  overflow-y: auto;
}

.dark {
  background-color: #292930;
  color: white;
}
</style>

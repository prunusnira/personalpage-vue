<script lang="ts">
import { RouterView } from "vue-router";
import HeaderView from "./views/HeaderView.vue";
import { Theme, useThemeStore } from "@/stores/theme";

export default {
  components: {
    HeaderView,
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
  </div>
</template>

<style scoped>
.view {
  height: 100vh;
  overflow-y: auto;
}

.dark {
  background-color: #030427;
  color: white;
}
</style>

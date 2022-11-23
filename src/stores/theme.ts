import { defineStore } from "pinia";
import { ref } from "vue";

export enum Theme {
  LIGHT,
  DARK,
}

export const useThemeStore = defineStore("theme", () => {
  const theme = ref(Theme.LIGHT);
  function changeTheme(_theme: Theme) {
    theme.value = _theme;
  }
  return { theme, changeTheme };
});

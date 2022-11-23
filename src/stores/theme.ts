import { defineStore } from "pinia";
import { ref } from "vue";

export const Theme = {
  LIGHT: "light",
  DARK: "dark",
};

export const useThemeStore = defineStore("theme", () => {
  const theme = ref(Theme.LIGHT);
  function changeTheme(_theme: string) {
    theme.value = _theme;
  }
  return { theme, changeTheme };
});

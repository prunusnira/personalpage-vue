import { ref } from "vue";
import { defineStore } from "pinia";

export const Lang = {
  KO: "ko",
  EN: "en",
  JP: "jp",
};

export const useLangStore = defineStore("lang", () => {
  const lang = ref(Lang.KO);
  function changeLang(_lang: string) {
    lang.value = _lang;
  }

  return { lang, changeLang };
});

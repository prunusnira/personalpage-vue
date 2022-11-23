import { ref } from "vue";
import { defineStore } from "pinia";

export enum Lang {
  KO,
  EN,
  JP,
}

export const useLangStore = defineStore("lang", () => {
  const lang = ref(Lang.KO);
  function changeLang(_lang: Lang) {
    lang.value = _lang;
  }

  return { lang, changeLang };
});

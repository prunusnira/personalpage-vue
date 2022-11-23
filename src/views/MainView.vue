<script lang="ts">
import MainButton from "@/components/main/MainButton.vue";
import MainTitle from "@/components/main/MainTitle.vue";
import TxtMain from "@/data/text";
import { useLangStore } from "@/stores/lang";

export default {
  name: "MainView",
  components: {
    MainButton,
    MainTitle,
  },
  data() {
    const lang = useLangStore().lang;
    return {
      view: "view",
      TxtMain:
        lang === "ko" ? TxtMain.ko : lang === "jp" ? TxtMain.jp : TxtMain.en,
    };
  },
};
</script>

<template>
  <MainTitle />
  <div :class="view">
    <MainButton
      iconUrl="/main/icon_about.png"
      text="About"
      :desc="TxtMain.btn.about"
      href="/about"
    />
    <MainButton
      iconUrl="/main/icon_tech.png"
      text="Tech Stack"
      :desc="TxtMain.btn.tech"
      href="/tech"
    />
    <MainButton
      iconUrl="/main/icon_proj.png"
      text="Project"
      :desc="TxtMain.btn.proj"
      href="/project"
    />
    <MainButton
      iconUrl="/main/icon_link.png"
      text="Link"
      :desc="TxtMain.btn.link"
      href="/link"
    />
  </div>
</template>

<style scoped>
.view {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 50px;
  padding: 50px 0;
}
</style>

<script lang="ts">
import TxtAbout from "@/data/text/about";
import WorkExp from "@/components/about/WorkExp.vue";
import { Lang, useLangStore } from "@/stores/lang";
import { useThemeStore } from "@/stores/theme";

export default {
  name: "About",
  components: { WorkExp },
  data() {
    const lang = useLangStore().lang;
    const theme = useThemeStore().theme;

    return {
      about: "about",
      title: "title",
      aboutWrapper: "aboutWrapper",
      aboutBox: theme === 'light' ? "aboutBox aboutLight" : "aboutBox aboutDark",
      subtitle: "subtitle",
      content: "content",
      contentWrap: "contentWrap",
      contentAbout: "contentAbout",
      TxtAbout:
        lang === Lang.KO
          ? TxtAbout.ko
          : lang === Lang.JP
          ? TxtAbout.jp
          : TxtAbout.en,
    };
  },
};
</script>

<template>
  <div :class="about">
    <div :class="title">
      <font-awesome-icon icon="fa-solid fa-angle-double-right" />
      About
      <font-awesome-icon icon="fa-solid fa-angle-double-left" />
    </div>
    <div :class="aboutWrapper">
      <div :class="aboutBox">
        <div :class="subtitle">
          <font-awesome-icon icon="fa-solid fa-angle-right" />
          {{ TxtAbout.introTitle }}
          <font-awesome-icon icon="fa-solid fa-angle-left" />
        </div>
        <div :class="contentAbout">
          <ul>
            <li>{{ TxtAbout.introData[0] }}</li>
            <li>{{ TxtAbout.introData[1] }}</li>
            <li>{{ TxtAbout.introData[2] }}</li>
            <li>{{ TxtAbout.introData[3] }}</li>
            <li>{{ TxtAbout.introData[4] }}</li>
          </ul>
        </div>
      </div>
      <div :class="aboutBox">
        <div :class="subtitle">
          <font-awesome-icon icon="fa-solid fa-angle-right" />
          {{ TxtAbout.expTitle }}
          <font-awesome-icon icon="fa-solid fa-angle-left" />
        </div>
        <div :class="contentWrap">
          <div :class="content" v-for="item in TxtAbout.expData">
            <WorkExp
              :dateStr="item.date"
              :companyStr="item.company"
              :workStr="item.work"
              :typeStr="item.type"
              :techStr="item.tech"
              :etcStr="item.etc"
            />
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
.about {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}

.title {
  font-size: 36px;
}

.aboutWrapper {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 16px;
  padding-top: 16px;
  width: 100%;
}

.aboutBox {
  width: 90%;
  max-width: 1024px;
  border-radius: 10px;
  padding: 10px;
}

.aboutLight {
  background-color: #dfdfdf;
}

.aboutDark {
  background-color: #121212;
}

.subtitle {
  font-size: 24px;
}

.contentAbout {
  font-size: 18px;
}

.content {
  font-size: 18px;
}

.contentWrap {
  display: flex;
  flex-direction: column;
  gap: 30px;
  padding: 10px;
}
</style>

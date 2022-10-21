<script lang="ts">
import MainButton from "@/components/main/MainButton.vue";
import MainTitle from "@/components/main/MainTitle.vue";
export default {
  name: "MainView",
  components: {
    MainButton,
    MainTitle,
  },
  data() {
    return {
      view: "view",
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
      desc="Nira를 소개합니다"
    />
    <MainButton
      iconUrl="/main/icon_tech.png"
      text="Tech Stack"
      desc="사용 가능한 기술 스택"
    />
    <MainButton
      iconUrl="/main/icon_proj.png"
      text="Project"
      desc="진행 프로젝트 목록"
    />
    <MainButton iconUrl="/main/icon_link.png" text="Link" desc="관련 링크" />
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

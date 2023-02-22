<script lang="ts">
import LinkItemVue from "@/components/link/LinkItem.vue";

export default {
  data() {
    return {
      link: "link",
      title: "title",
      wrapper: "wrapper",
    };
  },
  components: { LinkItemVue },
};
</script>

<template>
  <div :class="link">
    <div :class="title">
      <font-awesome-icon icon="fa-solid fa-angle-double-right" />
      Link
      <font-awesome-icon icon="fa-solid fa-angle-double-left" />
    </div>
    <div :class="wrapper">
      <LinkItemVue title="Blog (Notion)" src="https://blog.nira.one" />
      <LinkItemVue title="GitHub" src="https://github.com/prunusnira" />
      <LinkItemVue
        title="LinkedIn"
        src="https://www.linkedin.com/in/tjkang0207/"
      />
      <LinkItemVue title="Skill Navigator" src="https://sin.nira.one" />
      <LinkItemVue title="PIU Clear Manager" src="https://piu.nira.one" />
      <LinkItemVue title="Twitch BanPicker" src="https://banpick.nira.one" />
    </div>
  </div>
</template>

<style scoped>
.link {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}

.title {
  font-size: 36px;
}

.wrapper {
  display: flex;
  flex-direction: column;
  gap: 12px;
}
</style>

<script lang="ts">
import type { TechItem } from "@/data/tech/techItem";
import type { PropType } from "vue";
import TechItemVue from "./TechItem.vue";

export default {
  props: {
    item: Object as PropType<TechItem>,
  },
  data: () => {
    return {
      titleBox: "titleBox",
    };
  },
  components: { TechItemVue },
};
</script>

<template>
  <div>
    <div :id="titleBox">{{ item!.title }}</div>
    <div v-for="i in item!.details">
      <TechItemVue :data="i" />
    </div>
  </div>
</template>

<style scoped>
.titleBox {
  background-color: #0a0a0a;
}
</style>

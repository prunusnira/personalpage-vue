<script lang="ts">
import type ProjItem from "@/data/project/projectItem";
import type { PropType } from "vue";
import ProjItemVue from "./ProjItem.vue";

export default {
  props: {
    arr: Object as PropType<ProjItem[]>,
    type: String,
  },
  components: { ProjItemVue },
  data() {
    return {
      title: "title",
      projBox: "projBox",
    };
  },
};
</script>

<template>
  <div>
    <div :class="title">{{ type }}</div>
    <div :class="projBox">
      <ProjItemVue v-for="i in arr" :item="i" />
    </div>
  </div>
</template>

<style scoped>
.title {
  font-size: 24px;
  text-align: center;
}

.projBox {
  display: flex;
  flex-direction: column;
  gap: 16px;
  width: 100%;
}
</style>

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
};
</script>

<template>
  <div>
    <div>{{ type }}</div>
    <div v-for="i in arr">
      <ProjItemVue :item="i" />
    </div>
  </div>
</template>

<style scoped></style>

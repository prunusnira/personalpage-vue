<script lang="ts">
import type ProjItem from "@/data/project/projectItem";
import type { PropType } from "vue";

export default {
  props: {
    item: Object as PropType<ProjItem>,
  },
  data: () => {
    return {
      wrap: "wrap",
    };
  },
};
</script>

<template>
  <div :class="wrap"></div>
</template>

<style scoped>
.wrap {
  width: 100%;
  max-width: 1024px;
}
</style>

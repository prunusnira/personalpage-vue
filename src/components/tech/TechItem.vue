<script lang="ts">
import type { TechDetails } from "@/data/tech/techItem";
import type { PropType } from "vue";

export default {
  props: {
    data: Object as PropType<TechDetails>,
  },
  data: () => {
    return {
      itemBox: "itemBox",
      title: "title",
      itemTitle: "itemTitle",
    };
  },
};
</script>

<template>
  <div :class="itemBox">
    <div :class="title">{{ data!.name }}</div>
    <div v-if="data!.about.length > 0">
      <span :class="itemTitle">About</span>
      <ul>
        <li v-for="item in data!.about">{{ item }}</li>
      </ul>
    </div>
    <div v-if="data!.exp.length > 0">
      <span :class="itemTitle">Experience</span>
      <ul>
        <li v-for="item in data!.exp">{{ item }}</li>
      </ul>
    </div>
    <div v-if="data!.etc.length > 0">
      <span :class="itemTitle">Etc</span>
      <ul>
        <li v-for="item in data!.etc">{{ item }}</li>
      </ul>
    </div>
  </div>
</template>

<style scoped>
.itemBox {
  padding: 30px;
}

.title {
  line-height: 40px;
  font-size: 20px;
  font-weight: bold;
}

.itemTitle {
}
</style>

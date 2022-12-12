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
      titleBox: "titleBox",
      title: "title",
      titleIcon: "titleIcon",
      itemTitle: "itemTitle",
    };
  },
};
</script>

<template>
  <div :class="itemBox">
    <div :class="titleBox">
      <img :class="titleIcon" :src="data!.icon" />
      <div :class="title">{{ data!.name }}</div>
    </div>
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

.titleBox {
  display: flex;
  flex-direction: row;
  align-items: center;
  gap: 12px;
  padding-bottom: 20px;
}

.title {
  line-height: 40px;
  font-size: 20px;
  font-weight: bold;
}

.titleIcon {
  width: 40px;
  height: 40px;
  background-color: #efefef;
  border: solid 3px green;
  border-radius: 10px;
  padding: 3px;
}

.itemTitle {
}
</style>

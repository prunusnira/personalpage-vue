<script lang="ts">
import type { TechItem } from "@/data/tech/techItem";
import { useLangStore } from "@/stores/lang";
import type { PropType } from "vue";
import TechItemVue from "./TechItem.vue";

export default {
  props: {
    item: Object as PropType<TechItem>,
  },
  components: { TechItemVue },
  data: function () {
    const lang = useLangStore().lang;
    return {
      box: "box",
      titleBox: "titleBox",
      detailBox: "detailBox",
      techItemDetails:
        lang === "ko"
          ? this.$props.item!.details.ko
          : lang === "jp"
          ? this.$props.item!.details.jp
          : this.$props.item!.details.en,
    };
  },
};
</script>

<template>
  <div :class="box">
    <div :class="titleBox">{{ item!.title }}</div>
    <div :class="detailBox" v-for="i in techItemDetails">
      <TechItemVue :data="i" />
    </div>
  </div>
</template>

<style scoped>
.box {
  width: 100%;
  border-radius: 10px;
  border: solid 0.5px black;
}

.titleBox {
  background-color: #dfdfdf;
  border-radius: 10px 10px 0 0;
  padding: 20px;
  font-weight: bold;
  font-size: 20px;
  line-height: 24px;
}

.detailBox {
  background-color: #efefef;
  border-radius: 10px;
  margin: 10px;
}
</style>

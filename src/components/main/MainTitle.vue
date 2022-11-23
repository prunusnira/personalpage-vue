<script lang="ts">
import TxtMain from "@/data/text";
import { useLangStore } from "@/stores/lang";

export default {
  data() {
    const lang = useLangStore().lang;
    return {
      title: "title",
      titleName: "titleName",
      titleDesc: "titleDesc",
      TxtMain:
        lang === "ko" ? TxtMain.ko : lang === "jp" ? TxtMain.jp : TxtMain.en,
    };
  },
};
</script>

<template>
  <div :class="title">
    <div :class="titleName">Nira</div>
    <div :class="titleDesc">
      {{ TxtMain.desc }}
    </div>
  </div>
</template>

<style scoped>
.title {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}

.titleName {
  font-size: 35px;
}

.titleDesc {
  font-size: 20px;
}
</style>

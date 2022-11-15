<script lang="ts">
import ProjBox from "./ProjBox.vue";
import ProjPersonal from "@/data/project/projPer";
import ProjWork from "@/data/project/projWork";

export default {
  data() {
    return {
      tabBox: "tabBox",
      btnTab: "btnTab",
      contWrap: "contWrap",
      tabType: 0,
      ProjWork,
      ProjPersonal,
    };
  },
  methods: {
    changeTab: function (type: number) {
      this.tabType = type;
      this.changeColor(type);
    },
    changeColor: (type: number) => {
      const yel = "#fff7c2";
      if (type === 0) {
        document.getElementById("btn0")!.style.backgroundColor = yel;
        document.getElementById("btn1")!.style.backgroundColor = "black";
        document.getElementById("btn0")!.style.color = "black";
        document.getElementById("btn1")!.style.color = "white";
      } else if (type === 1) {
        document.getElementById("btn0")!.style.backgroundColor = "black";
        document.getElementById("btn1")!.style.backgroundColor = yel;
        document.getElementById("btn0")!.style.color = "white";
        document.getElementById("btn1")!.style.color = "black";
      }
    },
  },
  mounted() {
    this.changeColor(this.tabType);
  },
  components: { ProjBox },
};
</script>

<template>
  <div :class="tabBox">
    <button id="btn0" :class="btnTab" @click="changeTab(0)">Work</button>
    <button id="btn1" :class="btnTab" @click="changeTab(1)">Personal</button>
  </div>
  <div :class="contWrap">
    <ProjBox v-if="tabType === 0" :arr="ProjWork" type="Work" />
    <ProjBox v-if="tabType === 1" :arr="ProjPersonal" type="Personal" />
  </div>
</template>

<style scoped>
.tabBox {
  padding-bottom: 10px;
}

.btnTab {
  padding: 10px;
  width: 250px;
  background-color: black;
  color: white;
  cursor: pointer;
}

.contWrap {
  width: 100%;
  max-width: 1024px;
}
</style>

<script lang="ts">
import TechBox from "./TechBox.vue";
import { techFront } from "@/data/tech/frontend";
import { techBackend } from "@/data/tech/backend";
import { techNonWeb } from "@/data/tech/nonweb";
export default {
  data: () => {
    return {
      techFront,
      techBackend,
      techNonWeb,
      tabBox: "tabBox",
      techBox: "techBox",
      btnTab: "btnTab",
      tabType: 0,
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
        document.getElementById("btn2")!.style.backgroundColor = "black";
        document.getElementById("btn0")!.style.color = "black";
        document.getElementById("btn1")!.style.color = "white";
        document.getElementById("btn2")!.style.color = "white";
      } else if (type === 1) {
        document.getElementById("btn0")!.style.backgroundColor = "black";
        document.getElementById("btn1")!.style.backgroundColor = yel;
        document.getElementById("btn2")!.style.backgroundColor = "black";
        document.getElementById("btn0")!.style.color = "white";
        document.getElementById("btn1")!.style.color = "black";
        document.getElementById("btn2")!.style.color = "white";
      } else if (type === 2) {
        document.getElementById("btn0")!.style.backgroundColor = "black";
        document.getElementById("btn1")!.style.backgroundColor = "black";
        document.getElementById("btn2")!.style.backgroundColor = yel;
        document.getElementById("btn0")!.style.color = "white";
        document.getElementById("btn1")!.style.color = "white";
        document.getElementById("btn2")!.style.color = "black";
      }
    },
  },
  components: { TechBox },
  mounted() {
    this.changeColor(this.tabType);
  },
};
</script>

<template>
  <div :class="tabBox">
    <button id="btn0" :class="btnTab" @click="changeTab(0)">Frontend</button>
    <button id="btn1" :class="btnTab" @click="changeTab(1)">Backend</button>
    <button id="btn2" :class="btnTab" @click="changeTab(2)">Non-web</button>
  </div>
  <div :class="techBox">
    <TechBox v-if="tabType === 0" :item="techFront" />
    <TechBox v-if="tabType === 1" :item="techBackend" />
    <TechBox v-if="tabType === 2" :item="techNonWeb" />
  </div>
</template>

<style scoped>
.tabBox {
  padding-bottom: 10px;
}

.techBox {
  display: flex;
  flex-direction: column;
  gap: 20px;

  width: 100%;
  max-width: 1024px;
}

.btnTab {
  padding: 10px;
  background-color: black;
  color: white;
  cursor: pointer;
}
</style>

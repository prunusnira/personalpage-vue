<script lang="ts">
import ProjLayout from "@/components/project/ProjLayout.vue";

export default {
  data() {
    return {
      proj: "proj",
      title: "title",
    };
  },
  components: { ProjLayout },
};
</script>

<template>
  <div :class="proj">
    <div :class="title">
      <font-awesome-icon icon="fa-solid fa-angle-double-right" />
      Project
      <font-awesome-icon icon="fa-solid fa-angle-double-left" />
    </div>
    <div>CLICK TO EXPAND EACH ITEM</div>
    <ProjLayout />
  </div>
</template>

<style scoped>
.proj {
  display: flex;
  flex-direction: column;
  justify-items: center;
  align-items: center;
}

.title {
  font-size: 36px;
}
</style>

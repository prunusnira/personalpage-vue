<script lang="ts">
import TechLayout from "@/components/tech/TechLayout.vue";

export default {
  data() {
    return {
      proj: "proj",
      title: "title",
    };
  },
  components: { TechLayout },
};
</script>

<template>
  <div :class="proj">
    <div :class="title">
      <font-awesome-icon icon="fa-solid fa-angle-double-right" />
      Tech
      <font-awesome-icon icon="fa-solid fa-angle-double-left" />
    </div>
    <div>잠시마나 사용해 본 기술을 나열하였습니다</div>
    <TechLayout />
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

<script lang="ts">
export default {
  data() {
    return {
      link: "link",
      title: "title",
    };
  },
};
</script>

<template>
  <div :class="link">
    <div :class="title">
      <font-awesome-icon icon="fa-solid fa-angle-double-right" />
      Link
      <font-awesome-icon icon="fa-solid fa-angle-double-left" />
    </div>
    <div></div>
    <div></div>
  </div>
</template>

<style scoped>
.link {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}

.title {
  font-size: 36px;
}
</style>

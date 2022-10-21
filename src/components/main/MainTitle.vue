<script lang="ts">
export default {
  data() {
    return {
      title: "title",
      titleName: "titleName",
      titleDesc: "titleDesc",
    };
  },
};
</script>

<template>
  <div :class="title">
    <div :class="titleName">Nira</div>
    <div :class="titleDesc">
      코드로 많은 사람들에게 다가가고 싶은 개발자입니다
    </div>
  </div>
</template>

<style scoped>
.title {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 50px 0;
}

.titleName {
  font-size: 35px;
}

.titleDesc {
  font-size: 20px;
}
</style>

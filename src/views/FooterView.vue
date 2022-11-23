<script lang="ts">
export default {
  data() {
    return {
      footer: "footer",
    };
  },
};
</script>

<template>
  <section :class="footer">(c) 2023 Nira / Made with vue 3 + pinia</section>
</template>

<style scoped>
.footer {
  width: 100%;
  box-sizing: border-box;
  text-align: right;
  background-color: rgba(0, 1, 48, 0.8);
  color: white;
  position: fixed;
  bottom: 0;
  padding: 10px 20px;
}
</style>

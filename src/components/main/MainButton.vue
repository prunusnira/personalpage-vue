<script lang="ts">
export default {
  props: {
    iconUrl: String,
    text: String,
    desc: String,
  },
  btnTop: "top",
  btnBottom: "bottom",
};
</script>

<template>
  <button>
    <div :class="btnTop">
      <img src="iconUrl" />
      <span>{{ text }}</span>
    </div>
    <div :class="btnBottom">
      <span>{{ desc }}</span>
    </div>
  </button>
</template>

<style>
.top {
  display: flex;
  flex-direction: row;
}

.bottom {
}
</style>

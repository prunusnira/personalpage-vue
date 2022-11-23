<script lang="ts">
export default {
  props: {
    title: String,
    src: String,
  },
  data() {
    return {
      linkWrap: "linkWrap",
      linkTitle: "linkTitle",
      linkSrc: "linkSrc",
    };
  },
};
</script>

<template>
  <div :class="linkWrap">
    <div :class="linkTitle">
      {{ $props.title }}
    </div>
    <div :class="linkSrc">
      {{ $props.src }}
    </div>
  </div>
</template>

<style scoped>
.linkWrap {
  display: flex;
  flex-direction: row;
}

.linkTitle {
}

.linkSrc {
}
</style>

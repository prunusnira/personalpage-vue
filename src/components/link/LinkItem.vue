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
  methods: {
    openLink: function () {
      window.open(this.$props.src, "_blank", "noreferrer noopener");
    },
  },
};
</script>

<template>
  <div :class="linkWrap">
    <div :class="linkTitle">
      {{ $props.title }}
    </div>
    <div :class="linkSrc" @:click="openLink">
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
  font-weight: bold;
  font-size: 20px;
  width: 200px;
}

.linkSrc {
  font-size: 20px;
  cursor: pointer;
  text-decoration: underline;
}
</style>

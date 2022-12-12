<script lang="ts">
import { useThemeStore } from "@/stores/theme";

export default {
  props: {
    iconUrl: String,
    text: String,
    desc: String,
    href: String,
  },
  data: () => {
    const theme = useThemeStore().theme;
    return {
      btnAll: "btn",
      btnTop: "top",
      btnBottom: "bottom",
      theme,
    };
  },
  methods: {
    moveToLink: function () {
      const link = this.$props.href;
      link ? (window.location.href = link) : console.error("no link");
    },
  },
};
</script>

<template>
  <button :class="btnAll" @click="moveToLink">
    <div :class="btnTop">
      <img :src="iconUrl" />
      <span>{{ text }}</span>
    </div>
    <div :class="btnBottom">
      <span>{{ desc }}</span>
    </div>
  </button>
</template>

<style>
.btn {
  border: none;
  background-color: transparent;
  transition: transform 0.2s;
  cursor: pointer;
}

.btn:hover {
  transform: scale(1.3);
}

.top {
  display: flex;
  flex-direction: row;
  align-items: center;
  gap: 16px;
}

.top img {
  width: 40px;
  height: 40px;
}

.top span {
  font-size: 24px;
}

.bottom {
  font-size: 18px;
}
</style>

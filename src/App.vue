<script setup lang="ts">
import { RouterView } from "vue-router";
import HeaderView from "./views/HeaderView.vue";
</script>

<template>
  <HeaderView />
  <router-view v-slot="{ Component, route }">
    <transition name="fade" appear>
      <component :is="Component" :key="route.path" />
    </transition>
  </router-view>
</template>

<style>
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.5s;
}

.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}
</style>

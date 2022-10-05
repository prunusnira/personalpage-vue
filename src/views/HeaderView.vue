<script setup lang="ts">
import { RouterLink } from "vue-router";
</script>

<template>
  <nav>
    <RouterLink to="/">Home</RouterLink>
    <RouterLink to="/about">About</RouterLink>
    <RouterLink to="/tech">Tech Stack</RouterLink>
    <RouterLink to="/project">Project</RouterLink>
    <RouterLink to="/link">Link</RouterLink>
  </nav>
</template>

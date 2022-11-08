<script lang="ts">
import TechBox from "./TechBox.vue";
import { techFront } from "@/data/tech/frontend";
import { techBackend } from "@/data/tech/backend";
import { techNonWeb } from "@/data/tech/nonweb";
export default {
  data: () => {
    return {
      techFront,
      techBackend,
      techNonWeb,
    };
  },
  components: { TechBox },
};
</script>

<template>
  <div>
    <TechBox :item="techFront" />
    <TechBox :item="techBackend" />
    <TechBox :item="techNonWeb" />
  </div>
</template>

<style></style>

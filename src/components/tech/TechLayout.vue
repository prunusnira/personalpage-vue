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
      techBox: "techBox",
    };
  },
  components: { TechBox },
};
</script>

<template>
  <div :class="techBox">
    <TechBox :item="techFront" />
    <TechBox :item="techBackend" />
    <TechBox :item="techNonWeb" />
  </div>
</template>

<style scoped>
.techBox {
  display: flex;
  flex-direction: column;
  gap: 20px;

  width: 100%;
  max-width: 1024px;
}
</style>

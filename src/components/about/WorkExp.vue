<script lang="ts">
export default {
  props: {
    dateStr: String,
    companyStr: String,
    typeStr: String,
    workStr: String,
    techStr: String,
    etcStr: String,
  },
  data() {
    return {
      date: "date",
      company: "company",
      type: "type",
      work: "work",
      tech: "tech",
      etc: "etc",
    };
  },
};
</script>

<template>
  <div>
    <div :class="date">{{ dateStr }}</div>
    <div :class="company">근무처: {{ companyStr }}</div>
    <div :class="type">직종: {{ typeStr }}</div>
    <div :class="work">업무: {{ workStr }}</div>
    <div :class="tech">사용기술: {{ techStr }}</div>
    <div :class="etc" v-if="etcStr && etcStr.length > 0">
      기타: {{ etcStr }}
    </div>
  </div>
</template>

<style scoped>
.date {
  font-weight: bold;
}

.company {
}

.type {
}

.work {
}

.tech {
}

.etc {
}
</style>

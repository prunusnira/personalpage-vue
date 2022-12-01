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
      box: "box",
      date: "date",
      wrap: "wrap",
      itemTitle: "itemTitle",
    };
  },
};
</script>

<template>
  <div :class="box">
    <div :class="date">{{ dateStr }}</div>
    <div :class="wrap">
      <div :class="itemTitle">Worked at</div>
      <div>{{ companyStr }}</div>
    </div>
    <div :class="wrap">
      <div :class="itemTitle">Company category</div>
      <div>{{ typeStr }}</div>
    </div>
    <div :class="wrap">
      <div :class="itemTitle">Works</div>
      <div>{{ workStr }}</div>
    </div>
    <div :class="wrap">
      <div :class="itemTitle">Tech used</div>
      <div>{{ techStr }}</div>
    </div>
    <div :class="wrap" v-if="etcStr && etcStr.length > 0">
      <div :class="itemTitle">etc</div>
      <div>{{ etcStr }}</div>
    </div>
  </div>
</template>

<style scoped>
.box {
  border: solid 3px white;
  border-radius: 10px;
  padding: 10px;
}

.date {
  font-weight: bold;
  font-size: 24px;
}

.wrap {
  padding: 10px 0;
}

.itemTitle {
  font-weight: bold;
}
</style>

<script lang="ts">
import TxtAbout from "@/data/text/about";
import WorkExp from "@/components/about/WorkExp.vue";
export default {
  name: "About",
  components: { TxtAbout, WorkExp },
  data() {
    return {
      about: "about",
      title: "title",
      subtitle: "subtitle",
      content: "content",
      contentWrap: "contentWrap",
      contentAbout: "contentAbout",
      TxtAbout: TxtAbout,
    };
  },
};
</script>

<template>
  <div :class="about">
    <div :class="title">
      <font-awesome-icon icon="fa-solid fa-angle-double-right" />
      About
      <font-awesome-icon icon="fa-solid fa-angle-double-left" />
    </div>
    <div :class="subtitle">
      <font-awesome-icon icon="fa-solid fa-angle-right" />
      {{ TxtAbout.introTitle }}
      <font-awesome-icon icon="fa-solid fa-angle-left" />
    </div>
    <div :class="contentAbout">
      <ul>
        <li>{{ TxtAbout.introData[0] }}</li>
        <li>{{ TxtAbout.introData[1] }}</li>
        <li>{{ TxtAbout.introData[2] }}</li>
        <li>{{ TxtAbout.introData[3] }}</li>
        <li>{{ TxtAbout.introData[4] }}</li>
      </ul>
    </div>
    <div :class="subtitle">
      <font-awesome-icon icon="fa-solid fa-angle-right" />
      {{ TxtAbout.expTitle }}
      <font-awesome-icon icon="fa-solid fa-angle-left" />
    </div>
    <div :class="contentWrap">
      <div :class="content" v-for="item in TxtAbout.expData">
        <WorkExp
          :dateStr="item.date"
          :companyStr="item.company"
          :workStr="item.work"
          :typeStr="item.type"
          :techStr="item.tech"
          :etcStr="item.etc"
        />
      </div>
    </div>
  </div>
</template>

<style scoped>
.about {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}

.title {
  font-size: 36px;
}

.subtitle {
  font-size: 24px;
}

.contentAbout {
  font-size: 18px;
}

.content {
  font-size: 18px;
}

.contentWrap {
  display: flex;
  flex-direction: column;
  gap: 30px;
  padding: 20px;
}
</style>

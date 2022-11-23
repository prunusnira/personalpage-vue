<script lang="ts">
import type ProjItem from "@/data/project/projectItem";
import type { PropType } from "vue";

export default {
  props: {
    item: Object as PropType<ProjItem>,
  },
  data: () => {
    return {
      wrap: "wrap",
      header: "header",
      headerLeft: "headerLeft",
      icon: "icon",
      titlewrap: "titlewrap",
      title: "title",
      subtitle: "subtitle",
      type: "type",
      bottomWrap: "bottomWrap",
      itemTitle: "itemTitle",
      bottomItem: "bottomItem",
      itemImgWrap: "itemImgWrap",
      itemImg: "itemImg",
      isOpen: false,
    };
  },
  methods: {
    changeOpen: function () {
      this.isOpen = !this.isOpen;
    },
  },
  computed: {
    cssVariable() {
      return {
        "--isOpen": this.isOpen ? "visible" : "hidden",
        "--height": this.isOpen ? "auto" : "0",
        "--pval": this.isOpen ? "20px" : "0",
      };
    },
  },
};
</script>

<template>
  <div :class="wrap">
    <div :class="header" @click="changeOpen()">
      <div :class="headerLeft">
        <img :class="icon" :src="item!.icon" />
        <div :class="titlewrap">
          <div :class="title">{{ item!.title["ko"] }}</div>
          <div :class="subtitle">{{ item!.simpledesc["ko"] }}</div>
        </div>
      </div>
      <div :class="type">
        {{ item!.platform }}
      </div>
    </div>
    <div id="bottom" :class="bottomWrap" :style="cssVariable">
      <div :class="bottomItem">
        <div :class="itemTitle">Platform</div>
        <div>{{ item!.platform }}</div>
      </div>
      <div :class="bottomItem">
        <div :class="itemTitle">Period</div>
        <div>{{ item!.period }}</div>
      </div>
      <div :class="bottomItem">
        <div :class="itemTitle">Tech</div>
        <div>{{ item!.tech }}</div>
      </div>
      <div :class="bottomItem" v-if="item!.link.length > 0">
        <div :class="itemTitle">Link</div>
        <div v-for="i in item!.link">
          <a :href="i">{{ i }}</a>
        </div>
      </div>
      <div :class="bottomItem">
        <span :class="itemTitle">About</span>
        <div v-html="item!.content['ko']"></div>
      </div>
      <div :class="bottomItem">
        <span :class="itemTitle">Development</span>
        <div v-html="item!.dev['ko']"></div>
      </div>
      <div :class="bottomItem">
        <div :class="itemTitle">Images</div>
        <div :class="itemImgWrap">
          <a
            v-for="i in item!.image"
            :href="i"
            target="_blank"
            rel="noopener noreferer"
          >
            <img :class="itemImg" :src="i" />
          </a>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
.wrap {
  width: 100%;
  background-color: #efefef;
  border-radius: 10px;
}

.header {
  display: flex;
  flex-direction: row;
  cursor: pointer;
  padding: 20px;
  justify-content: space-between;
  align-items: center;
}

.headerLeft {
  display: flex;
  flex-direction: row;
}

.icon {
  width: 75px;
  height: 75px;
  margin-right: 12px;
}

.titlewrap {
  display: flex;
  flex-direction: column;
  justify-content: center;
}

.title {
  font-size: 24px;
  font-weight: bold;
}

.subtitle {
  font-size: 18px;
}

.bottomWrap {
  background-color: #ffffff;
  margin: var(--pval);
  padding: var(--pval);
  border-radius: 10px;
  visibility: var(--isOpen);
  height: var(--height);
}

.itemTitle {
  font-weight: bold;
}

.bottomItem {
  padding: 5px;
}

.itemImgWrap {
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  gap: 8px;
}

.itemImg {
  max-width: 250px;
  border: solid 1px #afafaf;
}
</style>
<script lang="ts">
import type ProjItem from "@/data/project/projectItem";
import { useLangStore } from "@/stores/lang";
import { useThemeStore } from "@/stores/theme";
import type { PropType } from "vue";

export default {
  props: {
    item: Object as PropType<ProjItem>,
  },
  data: () => {
    const lang = useLangStore().lang as "ko" | "jp" | "en";
    const theme = useThemeStore().theme
    return {
      wrap: theme === 'light' ? "wrap wrapLight" : "wrap wrapDark",
      header: "header",
      headerLeft: "headerLeft",
      icon: "icon",
      titlewrap: "titlewrap",
      title: "title",
      subtitle: "subtitle",
      type: "type",
      bottomWrap: theme === 'light' ? "bottomWrap bottomLight" : "bottomWrap bottomDark",
      itemTitle: "itemTitle",
      bottomItem: "bottomItem",
      itemImgWrap: "itemImgWrap",
      itemImg: "itemImg",
      isOpen: false,
      lang,
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
          <div :class="title">{{ item!.title[lang] }}</div>
          <div :class="subtitle">{{ item!.simpledesc[lang] }}</div>
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
        <div v-html="item!.content[lang]"></div>
      </div>
      <div :class="bottomItem">
        <span :class="itemTitle">Development</span>
        <div v-html="item!.dev[lang]"></div>
      </div>
      <div :class="bottomItem">
        <div :class="itemTitle">Images</div>
        <div :class="itemImgWrap">
          <a
            v-for="i in item!.image"
            :href="i"
            target="_blank"
            rel="noopener noreferrer"
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
  border-radius: 10px;
}

.wrapLight {
  background-color: #efefef;
}

.wrapDark {
  background-color: #101010;
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
  margin: var(--pval);
  padding: var(--pval);
  border-radius: 10px;
  visibility: var(--isOpen);
  height: var(--height);
}

.bottomLight {
  background-color: #ffffff;
}

.bottomLight a {
  color: darkblue;
}

.bottomLight a:checked {
  color: darkblue;
}

.bottomDark {
  background-color: #000000;
  border: solid 1px #aaaaaa;
}

.bottomDark a {
  color: yellow;
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

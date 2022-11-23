import { createApp, watch } from "vue";
import { createPinia } from "pinia";

import App from "./App.vue";
import router from "./router";

import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";
import { library } from "@fortawesome/fontawesome-svg-core";
import {
  faAngleDoubleRight,
  faAngleDoubleLeft,
  faAngleRight,
  faAngleLeft,
  faCircleXmark,
} from "@fortawesome/free-solid-svg-icons";

import "./assets/main.css";

library.add(
  faAngleDoubleRight,
  faAngleDoubleLeft,
  faAngleRight,
  faAngleLeft,
  faCircleXmark
);

const app = createApp(App);
const pinia = createPinia();

app.component("font-awesome-icon", FontAwesomeIcon);

if (localStorage.getItem("pinia")) {
  pinia.state.value = JSON.parse(localStorage.getItem("pinia")!);
  console.log(pinia.state);
} else {
  console.log("pinia value not found");
}

watch(
  pinia.state,
  (val) => {
    localStorage.setItem("pinia", JSON.stringify(val));
  },
  { deep: true }
);

app.use(pinia);
app.use(router);

app.mount("#app");

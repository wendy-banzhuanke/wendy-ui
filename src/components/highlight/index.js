import Highlight from "./highlight.vue";

export default {
  ...Highlight,
  install: Vue => Vue.component(Highlight.name, Highlight)
};

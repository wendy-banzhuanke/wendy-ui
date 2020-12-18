import Highlight from "./components/highlight";

import Loading from "./directives/loading";

export { Highlight, Loading };

export default {
  install: Vue => {
    Vue.use(Highlight);

    Vue.use(Loading);
  }
};

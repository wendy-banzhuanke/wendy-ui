import { storiesOf } from "@storybook/vue";
import { boolean } from "@storybook/addon-knobs";
import Vue from "vue";

import Loading from "./index";

Vue.use(Loading);

storiesOf("Directives|Loading", module)
  .add("局部模式", () => ({
    template: `
      <div v-ej-loading="loading">
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquam aliquid assumenda at beatae consectetur consequuntur dolore earum eum incidunt nulla qui quidem, quisquam recusandae similique sit temporibus voluptate voluptatem voluptatum?
      </div>
    `,
    props: {
      loading: {
        default: boolean("Loading", true)
      }
    }
  }))
  .add("全屏模式", () => ({
    template: `
      <div v-ej-loading.fullscreen="loading">
        111Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusamus ad consectetur delectus enim et, fugit illo ipsum nostrum obcaecati quaerat quasi reiciendis voluptate? Doloribus fuga laborum nam omnis quae ratione.
      </div>
    `,
    props: {
      loading: {
        default: boolean("Loading", true)
      }
    }
  }));

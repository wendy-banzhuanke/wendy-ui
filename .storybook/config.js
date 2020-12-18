import { configure, addDecorator } from "@storybook/vue";
import { withKnobs } from "@storybook/addon-knobs";

import "element-ui/lib/theme-chalk/index.css";
import "../src/base.less";

addDecorator(withKnobs);

// automatically import all files ending in *.stories.js or the index.js under stories folder (stories/index.js)
const req = require.context("../src", true, /(\.stories\.js|stories)$/);

function loadStories() {
  req.keys().forEach(filename => req(filename));
}

configure(loadStories, module);

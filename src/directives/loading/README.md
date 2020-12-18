## v-ej-loading 加载状态指示器

```html
<!-- 覆盖元素内容区域 -->
<div v-ej-loading="loading">...</div>

<!-- 覆盖全屏 -->
<div v-ej-loading.fullscreen="loading">...</div>
```

```js
import Vue from 'vue'
import {Loading} from '@ej/ui'

Vue.use(Loading)

new Vue({
  data: {
    loading: true,
  },
})

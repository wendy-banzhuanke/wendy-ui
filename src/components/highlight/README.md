## Highlight 代码高亮组件

基于 highlight.js 实现。

```html
<ej-highlight code="SELECT * FROM ExampleTable;" language="sql"/>
```

### Props

| Prop | Type | Default | Description |
|---|---|---|---|
| `code` | String | | 要高亮显示的代码文本 |
| `language` | String | `"sql"` | 高亮语言，目前只支持 SQL |

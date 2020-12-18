/**
 * 把尺寸数据转换成 CSS 值
 *
 * @param val {string | number}
 * @return {string}
 */
export function toCssSize (val) {
  return typeof val === 'number' || /^\d+$/.test(val) ? val + 'px' : val
}

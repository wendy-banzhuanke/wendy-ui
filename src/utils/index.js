export function cloneDeep (obj) {
  return JSON.parse(JSON.stringify(obj))
}

/**
 * 时间格式化
 *
 * @param [d] {Date} - Date 对象，默认为当前时间
 * @param [format] {String} - 格式模板，默认为 `2019-04-01 01:02:03`
 * @return {String} - 格式化后的时间字符串
 */
export function formatDate (d = new Date(), format = 'YYYY-MM-DD HH:mm:ss') {
  if (typeof d === 'string') {
    d = new Date(d)
  }
  const year = d.getFullYear()
  const month = d.getMonth() + 1
  const date = d.getDate()
  const hour = d.getHours()
  const minute = d.getMinutes()
  const second = d.getSeconds()

  return format
    .replace('YYYY', year)
    .replace('YY', (year % 100 + '').padStart(2, '0'))
    .replace('MM', (month + '').padStart(2, '0'))
    .replace('M', month + '')
    .replace('DD', (date + '').padStart(2, '0'))
    .replace('D', date + '')
    .replace('HH', (hour + '').padStart(2, '0'))
    .replace('H', hour + '')
    .replace('hh', (hour % 12 + '').padStart(2, '0'))
    .replace('h', hour % 12 + '')
    .replace('mm', (minute + '').padStart(2, '0'))
    .replace('m', minute + '')
    .replace('ss', (second + '').padStart(2, '0'))
    .replace('s', second + '')
}

/**
 * 字节格式化
 *
 * @param val {Number} - 字节大小
 * @return {String} - 格式化后的尺寸大小
 */
export function humanizeFileSize (val) {
  const ONE_KB = 1024
  const ONE_MB = ONE_KB * 1024

  if (val >= ONE_MB) {
    return `${Math.round(val / ONE_MB * 10) / 10}MB`
  } else if (val >= ONE_KB) {
    return `${Math.round(val / ONE_KB * 10) / 10}KB`
  } else {
    return `${val}B`
  }
}

/*
* 数据类型判断
* */
export function typeofData (obj) {
  /* 返回 'String' */
  return Object.prototype.toString.call(obj).slice(8, -1)
}


/**
 * 数组字段转字符串
 * @param {Array} list list
 * @param {Object} key 键名
 * @param {String} tag 连接符
 * @return {String} return
 */
export function mapListString (list = [], key, tag = ',') {
  return list.map(item => {
    return item ? item[key] : ''
  }).join(tag)
}

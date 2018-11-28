const timeFormat = (dateTime, type = 1) => {
  // type = 1 取年月日时分秒  默认1
  // type = 2 取年月日
  // type = 3 9.1日00：00
  let date = new Date(dateTime)
  let year = date.getFullYear()
  let month = date.getMonth() + 1
  let day = date.getDate()
  let hours = date.getHours()
  let minutes = date.getMinutes()
  let seconds = date.getSeconds()

  function s (t) {
    return t < 10 ? '0' + t : t
  }

  // if (!type) type = 1
  if (type === 3) {
    return s(hours) + ':' + s(minutes) + ':' + s(seconds)
  } else if (type === 2) {
    return year + '-' + s(month) + '-' + s(day)
  } else if (type === 1) {
    return year + '-' + s(month) + '-' + s(day) + ' ' + s(hours) + ':' + s(minutes) + ':' + s(seconds)
  } else if (type === 3) {
    return month + '.' + day + '日' + s(hours) + ':' + s(minutes)
  }
}

// 兼容commjs规范
if (typeof module !== 'undefined' && module.exports) module.exports = timeFormat
// 兼容amd规范
if (typeof define === 'function') define(() => timeFormat)
export default timeFormat
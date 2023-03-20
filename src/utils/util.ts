import dayjs from 'dayjs'
import routes from '../router/commonRoutes'

const dateFormat = 'DD/MM/YYYY'
/**
 *
 * @param pageSize
 * @param currentPage
 * @param rowIndex
 */
const getTableRowIndex = (pageSize: number, currentPage: number, rowIndex: number): number => {
  if (currentPage === 0) {
    currentPage = 1
  }
  return (currentPage - 1) * pageSize + rowIndex + 1
}
/**
 *
 * @param body // response
 * @return totalData
 */
const handlePaginationData = (body: {
  page_meta: { total_elements: number }
}): {
  total?: number
} => {
  if (body) {
    return { total: body.page_meta.total_elements }
  } else {
    return {}
  }
}
/**
 * kiểm tra có phải là mảng hay không
 * @param arr
 * @returns {boolean}
 * @createBy: chiempt
 */
const checkArray = (arr: string[]): boolean => {
  return !!(arr && Array.isArray(arr))
}
/**
 * kiểm tra có phải là mảng hay không, và check mảng có ít nhất 1 phần tử
 * @param arr
 * @returns {boolean}
 */
const checkArrayExist = (arr: string | Array<any>) => {
  return !!(arr && Array.isArray(arr) && arr.length)
}
/**
 * Lấy tên của globallist theo mã
 * @param arr
 * @param value
 * @param keyName
 * @param name
 * @return value: Tên
 */
const getText = (
  arr: string | Array<any>,
  value: string,
  keyName: string,
  name: string
): string => {
  if (checkArrayExist(arr) && value) {
    for (const arrElement of arr) {
      if (arrElement && arrElement[keyName] === value) {
        return arrElement[name]
      }
    }
  }
  return ''
}
/**
 * Hiển thị một số dạng %
 * @param num number
 * @param digit string
 * @return string
 */
const displayPercent = (num: number, digit = 2) => {
  return Number(num / 100).toLocaleString('vi-VN', {
    style: 'percent',
    minimumFractionDigits: digit,
  })
}
/**
 * Hiển thị số dạng tền tệ ( bao gồm cả symbol )
 * @param num
 * @param digits
 * @param currency
 * @return string
 */
const displayMoney = (num: number, digits = 2, currency = 'VND') => {
  return Number(num).toLocaleString('vi-VN', {
    style: 'currency',
    currency: currency,
    minimumFractionDigits: digits,
  })
}
/**
 * Hiển thị format dạng số
 * @param num
 * @param digits
 */
const displayNumber = (num: number, digits = 0) => {
  return Number(num).toLocaleString('vi-VN', {
    minimumFractionDigits: digits,
  })
}
/**
 * @use: convert tiền sang định dạng việt nam
 * @return: string // số tiền được convert
 * @param value
 */
const formatMoney = (value: number | string): string | number => {
  if (!value) {
    return '0'
  }
  const val = Number(value).toFixed(2).replace('.', ',')
  return val.toString().replace(/\B(?=(\d{3})+(?!\d))/g, '.')
}
/**
 * Remove các thẻ html, script, ...
 * @param str
 */
const stripTags = (str: string) => {
  return str.replace(/(<([^>]+)>)/gi, '')
}
/**
 * @use: format ngày tháng năm
 * @param value
 * @param format
 * @return string
 */
const formatDay = (value: string, format: string) => {
  if (!value) {
    return
  }
  format = format ? format : dateFormat
  return dayjs(value).format(format)
}
const baseURL = process.env.REACT_APP_BASE_URL

/**
 * @use: deepFlatArray
 * @return: Array
 * @param arr
 * @param key
 */
const deepFlatArray = (arr: Array<any>, key = 'children'): Array<any> => {
  const result: Array<any> = []
  recursiveDeepFlatArray(arr, key, result)
  return result
}
const recursiveDeepFlatArray = (arr: Array<any>, key: string, result: any[]): void => {
  const currentArr = [...arr]
  console.log('currentArr', currentArr)
  currentArr.forEach((obj) => {
    if (obj[key] && Array.isArray(obj[key]) && obj[key].length) {
      const el: any = { ...obj }
      const item = { ...el }
      delete item[key]
      result.push(item)
      recursiveDeepFlatArray(el[key], key, result)
      delete el[key]
    } else {
      delete obj[key]
      result.push(obj)
    }
  })
  return
}

export {
  getTableRowIndex,
  handlePaginationData,
  checkArray,
  checkArrayExist,
  getText,
  displayPercent,
  displayMoney,
  displayNumber,
  formatMoney,
  stripTags,
  formatDay,
  baseURL,
  deepFlatArray,
}

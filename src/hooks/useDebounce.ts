/**
 * @description 防抖
 * @param fn 回调函数
 * @param wait 等待时间
 * @returns void
 */

const useDebounce = (fn: Function, wait: number) => {
  let timer: number
  return (...args: any[]) => {
    clearTimeout(timer)
    timer = setTimeout(() => {
      fn(...args)
    }, wait)
  }
}

export default useDebounce

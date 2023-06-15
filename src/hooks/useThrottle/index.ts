/**
 * @description 节流函数
 * @param fn 执行的回调函数
 * @param wait 延迟时间
 * @returns void
 */

const useThrottle = (fn: (...args: any[]) => any, wait: number) => {
  let timer: NodeJS.Timeout | null
  return (...args: any[]) => {
    if (timer) {
      return
    }
    timer = setTimeout(() => {
      fn(...args)
      timer = null
    }, wait)
  }
}

export { useThrottle }

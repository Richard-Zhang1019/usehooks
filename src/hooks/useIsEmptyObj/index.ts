/**
 * @description 判断一个对象是否为空对象
 * @param obj 传递一个目标对象
 * @returns 返回一个布尔值 Boolean
 */

const useIsEmptyObj = (obj: object) => {
  return String(obj) === '[object Object]' && Reflect.ownKeys(obj).length === 0
}

export { useIsEmptyObj }

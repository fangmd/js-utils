/**
 * 数组相关函数
 */

/**
 * 删除数组某个位置的元素
 * @param arr 数组
 * @param index 删除的位置
 */
export function removeArrIndex<T>(arr: Array<T>, index: number): Array<T> {
  if (!arr || arr.length < index) return
  return arr.splice(index, 1)
}

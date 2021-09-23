/**
 * 如果文本超过最大长度，就截取
 * 使用场景：
 * 1. input 输入框限制长度时
 * @param value 文本
 * @param maxLength 最大长度
 */
export const maxLength = (value: string, maxLength: number = Infinity) => {
  if (!value) return value
  let ret = value.trim()
  if (ret.length > maxLength) {
    ret = ret.substring(0, maxLength)
  }
  return ret
}


// export const limitLength = (content:string)=>{
//   return content.match(new RegExp('^[\\s\\S]{10,5000}$'))
// }
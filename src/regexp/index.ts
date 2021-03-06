/**
 * @description 正则表达式相关函数
 */

/**
 * 检查是否是手机号码
 * @param phone 手机号码
 * @returns 错误信息，存在错误信息表示手机号格式有误
 */
export function isPhone(phone: string): string {
  if (!phone || !phone.trim()) {
    return '请输入手机号'
  } else if (!/^1\d{10}$/.test(phone.trim())) {
    return '请输入有效手机号'
  }
}

/**
 * 是否是脱敏手机号: 156****2390
 * @param phone 手机号
 * @returns boolean, false 表示不是脱敏手机号，true 表示是脱敏手机号
 */
export const isDesensitizationPhone = (phone: string): boolean => {
  if (!phone || !phone.trim()) {
    return false
  }
  return /^1\d{2}\*\*\*\*\d{4}$/.test(phone.trim())
}

/**
 * 检查内容长度是否合法
 * @param content 内容
 * @param min 最小长度
 * @param max 最大长度
 * @returns true：表示长度在范围内，false 表示长度超出范围
 */
export const lengthValidate = (content: string, min: number, max: number): boolean => {
  return new RegExp(`^(.){${min},${max}}$`).test(content)
}

/**
 * 去除富文本内容，并且保留换行格式 div, p, br 换行
 * 目前处理的标签: div, p, br, span, strong
 * @param content 富文本
 * @returns 处理后的文本
 */
export const removeRichTextReserveWrap = (content: string): string => {
  if (!content) return content
  content = content.replace(/\<\/p>|\<\/div>|<br>/g, '\n') // 处理 </p>,</div>,<br>
  content = content.replace(/\<\/span>|\<\/br>|\<\/strong>/g, '') // 处理 </span>, </br>, </strong>
  content = content.replace(/<p\/?[^>]*>|<span\/?[^>]*>|<div\/?[^>]*>|<strong\/?[^>]*>/g, '') // 处理 <p...>, <span...>, <div...>, <strong...>
  // content = content.replace(/<[^>]+>/g, '') // 处理所有标签 <xxx>, </xxx>
  return content
}

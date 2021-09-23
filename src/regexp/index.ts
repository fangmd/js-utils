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
  console.log(new RegExp(`(.){${min},${max}}`).test(content))

  return new RegExp(`(.){${min},${max}}`).test(content)
}

export const removeRichTextReserveWrap = (content: string): string => {
  // content = content.replace(/\<\/p>/g, '\n')
  // content = content.replace(/\<\/div>/g, '\n')

  content = content.replace(/<\/?[^>]*>/g, '')
  return content
}

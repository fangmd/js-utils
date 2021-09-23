import { isPhone, isDesensitizationPhone, lengthValidate } from '../../src/regexp'
import { str4999 } from '../mock'

test('isPhone', () => {
  expect(isPhone('15669262390')).toBeUndefined()
  expect(isPhone('15669262390212')).toBe('请输入有效手机号')
})

test('isDesensitizationPhone', () => {
  expect(isDesensitizationPhone('156****1212')).toBe(true)
  expect(isDesensitizationPhone('15669262390212')).toBe(false)
})

test('lengthValidate', () => {
  expect(lengthValidate('123456', 0, 1)).toBe(false)
  expect(lengthValidate('123456', 0, 6)).toBe(true)
  expect(lengthValidate('123456', 7, 8)).toBe(false)
})

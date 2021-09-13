import { maxLength } from '../../src'

test('maxLength', () => {
  expect(maxLength('hello', 2)).toBe('he')
  expect(maxLength('hello ', 2)).toBe('he')
  expect(maxLength(' hello ', 2)).toBe('he')
  expect(maxLength('', 2)).toBe('')
})

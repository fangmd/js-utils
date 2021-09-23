import { isPhone, isDesensitizationPhone, lengthValidate, removeRichTextReserveWrap } from '../../src/regexp'
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

test('removeRichTextReserveWrap', () => {
  let content =
    `<p>出租包河百脑汇出租包河百脑汇1 </p><p>出租包河百脑汇2</p><p>出租包河百脑汇3</p><p>出租包水电费水电费123123河百脑汇4</p><p>出租包河百脑汇5</p><p><br></p><p style="position: absolute; width: 1px; height: 1px; overflow: hidden; left: -1000px; white-space: nowrap; top: 71px;">出租包河百脑汇6</p><p style="position: absolute; width: 1px; height: 1px; overflow: hidden; left: -1000px; white-space: nowrap; top: 71px;"><br></p><p style="position: absolute; width: 1px; height: 1px; overflow: hidden; left: -1000px; white-space: nowrap; top: 71px;">出租包河百脑汇7</p><p style="position: absolute; width: 1px; height: 1px; overflow: hidden; left: -1000px; white-space: nowrap; top: 71px;"><br></p><p style="position: absolute; width: 1px; height: 1px; overflow: hidden; left: -1000px; white-space: nowrap; top: 129px;"><span style="white-space: normal;">出租包河百脑汇8</span></p><p style="position: absolute; width: 1px; height: 1px; overflow: hidden; left: -1000px; white-space: nowrap; top: 129px;"><span style="white-space: normal;"><br></span></p>`
  console.log(removeRichTextReserveWrap(content))
})

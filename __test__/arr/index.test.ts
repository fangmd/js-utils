import { removeArrIndex } from '../../src/arr'

test('removeArrIndex', () => {
  let arr = [1, 2, 3, 4]
  removeArrIndex(arr, 1)
  expect(arr).toEqual([1, 3, 4])
})

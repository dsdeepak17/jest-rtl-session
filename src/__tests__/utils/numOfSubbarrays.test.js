import { numOfSubbarrays } from "../../utils/numOfSubbarrays";

test('numberOfSubArrays Test Cases', () => {
  expect(numOfSubbarrays([[1, 2, 3]])).toStrictEqual(1);

  expect(numOfSubbarrays([[1, 2, 3], [1, 2, 3], [1, 2, 3]])).toStrictEqual(3);

  expect(numOfSubbarrays([[1, 2, 3], [1, 2, 3], [1, 2, 3], [1, 2, 3]])).toStrictEqual(4);

  expect(numOfSubbarrays([1, 2, 3])).toStrictEqual(0);
});
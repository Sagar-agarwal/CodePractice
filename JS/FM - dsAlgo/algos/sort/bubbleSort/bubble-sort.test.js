import bubbleSort from './bubble-sort';

describe('Bubble sort Algorithm Tests', () => {
  test('[1, 6, 2, 5, 3, 4] > [1, 2, 3, 4, 5, 6]', () => {
    expect(bubbleSort([1, 6, 2, 5, 3, 4])).toEqual([1, 2, 3, 4, 5, 6]);
  });
});

export default function bubbleSort(arr: number[]): number[] {
  const len = arr.length;

  for (let i = 0; i < len; i += 1) {
    for (let j = 0; j < len - 1 - i; j += 1) {
      const temp = arr[j];
      if (arr[j] > arr[j + 1]) {
        arr[j] = arr[j + 1];
        arr[j + 1] = temp;
      }
    }
  }
  return arr;
}

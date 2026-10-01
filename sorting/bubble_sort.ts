function bubbleSort(number: number[]): number[] {
  for (let i = 0; i < number.length - 1; i++) {
    let swapped = false;
    for (let j = 0; j < number.length - 1 - i; j++) {
      if (number[j] > number[j + 1]) {
        [number[j], number[j + 1]] = [number[j + 1], number[j]];
        swapped = true;
      }
    }
    if (!swapped) {
      return number;
    }
  }
  return number;
}

const bubbleSortNumbers = [64, 25, 12, 22, 11];
console.log(bubbleSort(bubbleSortNumbers));

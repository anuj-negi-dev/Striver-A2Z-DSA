function selectionSort(numbers: number[]): number[] {
  for (let i = 0; i < numbers.length - 1; i++) {
    let minIndex = i;
    for (let j = i + 1; j < numbers.length; j++) {
      if (numbers[j] < numbers[minIndex]) {
        minIndex = j;
      }
    }
    if (minIndex !== i) {
      [numbers[i], numbers[minIndex]] = [numbers[minIndex], numbers[i]];
    }
  }
  return numbers;
}

function selectionSortDescending(numbers: number[]): number[] {
  for (let i = 0; i < numbers.length - 1; i++) {
    let maxIndex = i;
    for (let j = i + 1; j < numbers.length; j++) {
      if (numbers[maxIndex] < numbers[j]) {
        maxIndex = j;
      }
    }
    if (maxIndex != i) {
      [numbers[i], numbers[maxIndex]] = [numbers[maxIndex], numbers[i]];
    }
  }

  return numbers;
}

const numbers = [64, 25, 12, 22, 11];
console.log(selectionSort(numbers));
console.log(selectionSortDescending(numbers));

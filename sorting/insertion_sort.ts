function insertionSort(nums: number[]): number[] {
  for (let i = 1; i < nums.length; i++) {
    let j = i;
    while (j > 0 && nums[j - 1] > nums[j]) {
      [nums[j], nums[j - 1]] = [nums[j - 1], nums[j]];
      j--;
    }
  }
  return nums;
}

function insertionSortDescending(nums: number[]): number[] {
  for (let i = 1; i < nums.length; i++) {
    let j = i;
    while (j > 0 && nums[j - 1] < nums[j]) {
      [nums[j], nums[j - 1]] = [nums[j - 1], nums[j]];
      j--;
    }
  }
  return nums;
}

const insertionSortNumbers = [64, 25, 12, 22, 11];
console.log(insertionSort(insertionSortNumbers));
console.log(insertionSortDescending(insertionSortNumbers));

function partition(nums: number[], low: number, high: number): number {
  let i = low;
  let j = high;
  let pivot = nums[low];

  while (i < j) {
    while (nums[i] <= pivot && i < high) {
      i++;
    }
    while (nums[j] > pivot && j > low) {
      j--;
    }
    if (i < j) {
      [nums[i], nums[j]] = [nums[j], nums[i]];
    }
  }

  [nums[low], nums[j]] = [nums[j], nums[low]];

  return j;
}

function qs(nums: number[], low: number, high: number) {
  if (low >= high) {
    return;
  }
  let partitionIdx = partition(nums, low, high);
  qs(nums, low, partitionIdx - 1);
  qs(nums, partitionIdx + 1, high);
}

function quickSort(nums: number[]): number[] {
  qs(nums, 0, nums.length - 1);
  return nums;
}

const nums1 = [7, 4, 5, 3, 1, 2, 9];

console.log(quickSort(nums1));

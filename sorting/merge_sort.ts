function merge(nums: number[], low: number, mid: number, high: number) {
  let left = low;
  let right = mid + 1;
  let temp = [];

  while (left <= mid && right <= high) {
    if (nums[left] <= nums[right]) {
      temp.push(nums[left]);
      left++;
    } else {
      temp.push(nums[right]);
      right++;
    }
  }

  while (left <= mid) {
    temp.push(nums[left]);
    left++;
  }
  while (right <= high) {
    temp.push(nums[left]);
    left++;
  }

  for (let i = low; i <= high; i++) {
    nums[i] = temp[i - low];
  }
  return;
}

function mergeSort(nums: number[], low: number, high: number): number[] {
  if (low >= high) return nums;
  let mid = Math.floor((low + high) / 2);
  mergeSort(nums, low, mid);
  mergeSort(nums, mid + 1, high);
  merge(nums, low, mid, high);

  return nums;
}

const nums = [64, 25, 12, 22, 11];
console.log(mergeSort(nums, 0, nums.length - 1));

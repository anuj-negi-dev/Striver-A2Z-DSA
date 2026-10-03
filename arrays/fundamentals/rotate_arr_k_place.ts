function rotateArrayBrute(nums: number[], k: number) {
  let n = nums.length;
  k = k % n;
  let temp = [];

  for (let i = 0; i < k; i++) {
    temp.push(nums[i]);
  }

  for (let i = k; i < n; i++) {
    nums[i - k] = nums[i];
  }

  for (let i = n - k; i < n; i++) {
    nums[i] = temp[i - (n - k)];
  }

  return;
}

function reverseArray(nums: number[], start: number, end: number) {
  while (start < end) {
    let temp = nums[start];
    nums[start] = nums[end];
    nums[end] = temp;
    start++;
    end--;
  }
}

function rotateArray(nums: number[], k: number) {
  let n = nums.length;
  k = k % n;
  reverseArray(nums, 0, k - 1);
  reverseArray(nums, k, n - 1);
  reverseArray(nums, 0, n - 1);
  return;
}

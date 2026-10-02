class Solution {
  linearSearch(nums: number[], target: number): number {
    // iterate through the array and check if the current element is equal to the target
    for (let i = 0; i < nums.length; i++) {
      if (nums[i] == target) {
        return i;
      }
    }
    // if the target is not found, return -1
    return -1;
  }
}

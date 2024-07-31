function twoSum(nums: number[], target: number): number[] {
  const arr = [...nums];

  for(let i = nums.length - 1; i >= 0; i--) {
    for(let j = arr.length - 2; j >= 0; j--) {
      if(nums[i] + arr[j] === target) {
        return [j, i]
      }
    }

    arr.pop();
  }

  return [];
};
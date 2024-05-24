function solution(nums) {
  let result = 0;

  const isPrime = (Prime) => {
    for (let i = 2; i <= Prime; i++) {
      if (Prime % i == 0 && Prime !== i) return false;
    }
    return true;
  };

  for (let i = 0; i < nums.length - 2; i++) {
    for (let j = i + 1; j < nums.length - 1; j++) {
      for (let k = j + 1; k < nums.length; k++) {
        let Prime = nums[i] + nums[j] + nums[k];
        if (isPrime(Prime)) result++;
      }
    }
  }
  return result;
}

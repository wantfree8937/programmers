function solution(arr) {
  let newInt = 0;
  let ans = [0];
  for (let i = arr.length; i >= 1; i--) {
    if (arr[i] % 2 !== 0) {
      newInt = arr[i] - 1;
    } else newInt = arr[i];
    for (let j = 0; j < newInt / 2; j++) {
      ans.push(i);
      ans.unshift(i);
    }
  }
  ans = ans.join('');
  return ans;
}
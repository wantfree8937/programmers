function solution(str) {
  var ans = [];
  for (let i = 0; i < str.length; i++) {
    let found = false;
    for (let j = i - 1; j >= 0; j--) {
      if (str[i] === str[j]) {
        ans.push(i - j);
        found = true;
        break;
      }
    }
    if (!found) {
      ans.push(-1);
    }
  }
  return ans;
}
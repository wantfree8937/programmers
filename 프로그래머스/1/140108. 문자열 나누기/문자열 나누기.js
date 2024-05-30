function solution(s) {
  let result = 0;
  let count = [0, 0];
  let firstChar = s[0];  

  for (let i = 0; i < s.length; i++) {
    if (s[i] === firstChar) {
      count[0]++;
    } else {
      count[1]++;
    }

    if (count[0] === count[1]) {
      result++;
      count = [0, 0];
      if (i + 1 < s.length) {
        firstChar = s[i + 1];
      }
    }
  }

  if (count[0] > 0 || count[1] > 0) {
    result++;
  }

  return result;
}

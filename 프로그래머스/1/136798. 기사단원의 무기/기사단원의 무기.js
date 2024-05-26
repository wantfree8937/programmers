function solution(number, limit, power) {
  let sum = 0;
  for (let i = 1; i <= number; i++) {
    let count = 0;
    let sqrt = Math.sqrt(i);
    for (let j = 1; j <= sqrt; j++) {
      if (i % j === 0 && i / j !== j) count++;
    }
    count *= 2;
    if (sqrt % 1 === 0) count++;
    if (count > limit) sum += power;
    else sum += count;
  }
  return sum;
}

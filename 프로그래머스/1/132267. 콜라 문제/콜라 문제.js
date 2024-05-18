function solution(empty, coca, n) {
  let remain = 0;
  let count = 0;
  while (n >= empty) {
    if (n % empty == 0) {
      n /= empty;
      n *= coca;
      count += n;
    } else {
      remain = n % empty;
      n = Math.floor(n / empty);
      n *= coca;
      count += n;
      n += remain;
    }
  }
  return count;
}
function solution(empty, coca, n) {
  let count = 0;
  while (n >= empty) {
    let newCoca = Math.floor(n / empty) * coca;
    count += newCoca;
    n = newCoca + (n % empty);
  }
  return count;
}
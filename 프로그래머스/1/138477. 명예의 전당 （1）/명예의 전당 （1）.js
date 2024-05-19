function solution(k, score) {
  let result = [];
  let kmax = [];
  for (let i = 0; i < score.length; i++) {
    kmax.push(score[i]);
    if (kmax.length > k) {
      kmax.splice(kmax.indexOf(Math.min(...kmax)), 1);
    }
    result.push(Math.min(...kmax));
  }
  return result;
}
function solution(k, m, score) {
  let result = 0;
  score.sort((a, b) => b - a);
  for(let i = m; i <= score.length; i += m){
    result += score[i - 1] * m;
  }
    return result;
}
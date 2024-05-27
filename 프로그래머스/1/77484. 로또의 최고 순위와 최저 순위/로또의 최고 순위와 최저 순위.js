function solution(lottos, win_nums) {
  let rate = [6, 6, 5, 4, 3, 2, 1];

  let lowCount = win_nums.filter(num => lottos.includes(num)).length;
  let highCount = lottos.filter(zero => zero === 0).length;

  return [rate[lowCount + highCount], rate[lowCount]];
}
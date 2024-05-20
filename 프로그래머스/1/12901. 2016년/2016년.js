function solution(a, b) {
  let dayOfweek = ["SUN", "MON", "TUE", "WED", "THU", "FRI", "SAT"];
  let result = dayOfweek[new Date(`2016-0${a}-${b}`).getDay()];
  return result;
}
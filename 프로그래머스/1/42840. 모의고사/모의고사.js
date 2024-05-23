function solution(answers) {
  let person1 = [1, 2, 3, 4, 5];
  let person2 = [2, 1, 2, 3, 2, 4, 2, 5];
  let person3 = [3, 3, 1, 1, 2, 2, 4, 4, 5, 5];

  let scores = [0, 0, 0];
  let result = [];

  answers.forEach((answer, index) => {
    if (answer === person1[index % person1.length]) scores[0]++;
    if (answer === person2[index % person2.length]) scores[1]++;
    if (answer === person3[index % person3.length]) scores[2]++;
  });

result = scores
  .map((score, index) => (score === Math.max(...scores) ? index + 1 : null))
  .filter(index => index !== null);

  return result;
}
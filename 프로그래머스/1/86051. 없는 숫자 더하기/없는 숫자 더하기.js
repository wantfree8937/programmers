function solution(numbers) {
    var answer = 45 - numbers.reduce((acc, val) => acc + val, 0);
    return answer;
}
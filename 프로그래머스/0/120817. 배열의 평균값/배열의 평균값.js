function solution(numbers) {
    var answer = 0;
    for(let idx in numbers){
        answer += numbers[idx];
    }
    answer /= numbers.length;
    return answer;
}
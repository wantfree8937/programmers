function solution(arr) {
    var answer = 0;
    for (let idx in arr){
        answer += arr[idx];
    }
    answer /= arr.length
    return answer;
}
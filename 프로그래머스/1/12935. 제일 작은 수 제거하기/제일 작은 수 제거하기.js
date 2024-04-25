function solution(arr) {
    var answer = [];
    arr.toString() == "10" ? answer.push(-1) : answer = arr.filter((val)=> val > Math.min(...arr));
    return answer;
}
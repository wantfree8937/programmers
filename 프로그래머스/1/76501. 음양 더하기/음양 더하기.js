function solution(absolutes, signs) {
    var answer = 0;
    for(let idx in signs){
        answer += signs[idx] ? absolutes[idx] : -absolutes[idx];
    }
    return answer;
}

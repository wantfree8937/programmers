function solution(n, m) {
    var answer = [];
    for (let i = 2; i<=Math.min(n, m); i++){
        if(n % i == 0 && m % i == 0) answer[0] = i;
    }
    if (answer[0] == undefined) answer[0] = 1; 
    answer[1] = n*m/answer[0];
    return answer;
}

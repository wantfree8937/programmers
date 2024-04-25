function solution(n) {
    var answer = '';
    answer = n % 2 == 1 ? "수박".repeat((n+1)/2).slice(0,-1) : "수박".repeat(n/2);
    return answer;
}
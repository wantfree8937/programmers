function solution(n) {
    var answer = [];
    let num = n.toString();
    let spnum = num.split('');
    answer = spnum.map(Number);
    answer.reverse();
    return answer;
}
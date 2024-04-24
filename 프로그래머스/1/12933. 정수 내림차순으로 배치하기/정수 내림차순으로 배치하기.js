function solution(n) {
    var answer = 0;
    let num = [...n.toString()];
    num.sort((a,b)=>(b-a));
    answer = num.join('');
    answer = Number(answer);
    return answer;
}
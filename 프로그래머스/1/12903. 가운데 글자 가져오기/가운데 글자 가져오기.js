function solution(str) {
    var answer = '';
    if(str.length % 2 == 1){
        answer = str[str.length/2 - 0.5];
    } else {
        answer = str.slice(str.length/2 - 1,str.length/2 + 1);
    }
    return answer;
}
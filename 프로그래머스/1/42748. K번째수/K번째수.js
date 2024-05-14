function solution(array, commands) {
    var answer = [];
    for (let item of commands) answer.push((array.slice(item[0]-1,item[1]).sort((a, b) => a - b)[item[2]-1]));
    return answer;
}
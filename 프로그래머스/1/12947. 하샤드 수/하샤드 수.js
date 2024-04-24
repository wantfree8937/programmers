function solution(x) {
    var answer = true;
    let sum = 0;
    let newX = x + "";
    let newArr =  newX.split("").map(Number);
    for (let idx in newArr){
        sum += newArr[idx];
    }
    if(x % sum === 0){
        answer = true;
    } else{
        answer = false;
    }
    return answer;
}
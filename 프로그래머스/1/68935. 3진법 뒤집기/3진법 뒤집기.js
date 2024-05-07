function solution(n) {
    let answer = 0;
    let arr = [];
    while(n >= 1){
        arr.push(n % 3);
        n = Math.floor(n / 3);
    }
    console.log(arr);
    for (let i = 0; i < arr.length; i++){
        answer += arr[i] * (3**(arr.length - i - 1))
    }
    return answer;
}

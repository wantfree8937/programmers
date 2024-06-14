function solution(n) {
    let fibo = [];
    for(let i = 0; i <= n; i++){
        if(i === 0 || i === 1){
            fibo.push(i);
        }else{
            fibo.push((fibo[i-2] + fibo[i-1]) % 1234567);
        }
    }
    return fibo[n];
}


function solution(number) {
    let count = 0;
    for(let i in number){
        for(let j in number){
            for(let k in number){
                if(i != j && j != k && i != k && number[i] + number[j] + number[k] == 0) count++;
            }
        }
    }
    return count/6;
}
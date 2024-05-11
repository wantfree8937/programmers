function solution(s) {
    let numarr = ["zero", "one", "two", "three", "four", "five", "six", "seven", "eight", "nine"];
    let answer = s;
    for(let idx in numarr){
        if(answer.includes(numarr[idx])){
            answer = answer.replaceAll(numarr[idx], idx);
        }
    }
    return Number(answer);
}
function solution(phone_number) {
    var answer = [];
    let newN = [];
    newN = phone_number.split("").reverse();
    for (const idx in newN) {
        if (idx <= 3) {
            answer.unshift(newN[idx]);
        } else{
            answer.unshift("*");
        }
    }
    answer = answer.join("");
    return answer;
}
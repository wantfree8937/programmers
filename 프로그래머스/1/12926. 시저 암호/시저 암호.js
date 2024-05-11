function solution(str, num) {
    let answer = '';
    for (let item of str) {
        if (item == " ") {
            answer += " ";
            continue;
        }
        if ((item.charCodeAt(0) >= 65 && (item.charCodeAt(0) + num) > 90 && item.charCodeAt(0) < 96) ||
            (item.charCodeAt(0) >= 97 && (item.charCodeAt(0) + num) > 122)) {
            let asc1 = item.charCodeAt(0) - 26 + num;
            answer += String.fromCharCode(asc1);
        } else {
            let asc2 = item.charCodeAt(0) + num;
            answer += String.fromCharCode(asc2);
        }
    }
    return answer;
}
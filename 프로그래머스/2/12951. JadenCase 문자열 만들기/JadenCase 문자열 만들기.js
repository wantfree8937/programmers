function solution(s) {
    let arr = s.split('');
    for (let i = 0; i < arr.length; i++) {
        if (i !== 0 && arr[i - 1] === " ") {
            arr[i] = arr[i].toUpperCase();
        } else if (i !== 0 && arr[i - 1] !== " ") {
            arr[i] = arr[i].toLowerCase();
        } else if (i === 0) {
            arr[i] = arr[i].toUpperCase();
        }
    }
    return arr.join('');
}
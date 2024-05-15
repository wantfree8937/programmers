function solution(arr) {
    var ans = [];
    for(let i = 0; i < arr.length; i++){
        for(let j = i + 1; j < arr.length; j++){
            ans.push(arr[i] + arr[j]);
        }
    }
    return ans.filter((val, idx) => ans.indexOf(val) === idx).sort((a, b) => a - b);
}

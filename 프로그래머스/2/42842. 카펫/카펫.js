function solution(brown, yellow) {
    let [row, column] = [0, 0];
    
    brown = (brown - 4) / 2;
    
    for(let i = 1; i <= Math.floor(brown / 2); i++){
        if(i * (brown - i) === yellow){
            column = i;
            row = brown - i;
            break;
        }
    }
    
    
    return [row + 2, column + 2];
}

// brown에 4를 빼고 2로 나눈다.
// 그 수를 돌면서 2수를 곱했을때 yellow가 나오는 경우를 구한다.
// 각각 row, column에 2를 더한다.
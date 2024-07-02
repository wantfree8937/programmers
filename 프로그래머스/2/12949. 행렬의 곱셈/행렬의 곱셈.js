function solution(arr1, arr2) {
    const result = [];
    const rows = arr1.length;
    const cols = arr2[0].length;
    const common = arr1[0].length;
    
    for (let i = 0; i < rows; i++) {
        const row = [];
        for (let j = 0; j < cols; j++) {
            row.push(0);
        }
        result.push(row);
    }

    for (let i = 0; i < rows; i++) {
        for (let j = 0; j < cols; j++) {
            for (let k = 0; k < common; k++) {
                result[i][j] += arr1[i][k] * arr2[k][j];
            }
        }
    }

    return result;
}
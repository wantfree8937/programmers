function solution(k, dungeons) {
    let maxDungeons = 0;
    
    function permute(arr, m = []) {
        if (arr.length === 0) {
            let remainingFatigue = k;
            let count = 0;
            for (const [minFatigue, fatigueCost] of m) {
                if (remainingFatigue >= minFatigue) {
                    remainingFatigue -= fatigueCost;
                    count++;
                } else {
                    break;
                }
            }
            maxDungeons = Math.max(maxDungeons, count);
        } else {
            for (let i = 0; i < arr.length; i++) {
                let curr = arr.slice();
                let next = curr.splice(i, 1);
                permute(curr.slice(), m.concat(next));
            }
        }
    }
    
    permute(dungeons);
    
    return maxDungeons;
}
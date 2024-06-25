function solution(k, tangerine) {
    const countMap = new Map();
    for (const size of tangerine) {
        countMap.set(size, (countMap.get(size) || 0) + 1);
    }

    const sortedCounts = [...countMap.values()].sort((a, b) => b - a);

    let types = 0;
    for (const count of sortedCounts) {
        k -= count;
        types += 1;
        if (k <= 0) {
            break;
        }
    }

    return types;
}
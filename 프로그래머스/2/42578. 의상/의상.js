function solution(clothes) {
    const clothesMap = new Map();

    for (const [name, type] of clothes) {
        if (clothesMap.has(type)) {
            clothesMap.set(type, clothesMap.get(type) + 1);
        } else {
            clothesMap.set(type, 1);
        }
    }

    let combinations = 1;
    for (const count of clothesMap.values()) {
        combinations *= (count + 1);
    }

    return combinations - 1;
}
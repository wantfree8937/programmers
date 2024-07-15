function solution(topping) {
    const leftSet = new Set();
    const rightCount = new Map();

    topping.forEach(t => {
        if (rightCount.has(t)) {
            rightCount.set(t, rightCount.get(t) + 1);
        } else {
            rightCount.set(t, 1);
        }
    });

    let result = 0;

    for (const t of topping) {
        leftSet.add(t);
        rightCount.set(t, rightCount.get(t) - 1);
        if (rightCount.get(t) === 0) {
            rightCount.delete(t);
        }

        if (leftSet.size === rightCount.size) {
            result += 1;
        }
    }

    return result;
}
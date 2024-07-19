function solution(x, y, n) {
    if (x >= y) return x === y ? 0 : -1;

    let queue = [[y, 0]];
    let visited = new Set();
    visited.add(y);

    while (queue.length > 0) {
        let [current, steps] = queue.shift();

        if (current === x) {
            return steps;
        }

        if (current - n >= x && !visited.has(current - n)) {
            queue.push([current - n, steps + 1]);
            visited.add(current - n);
        }
        if (current % 2 === 0 && current / 2 >= x && !visited.has(current / 2)) {
            queue.push([current / 2, steps + 1]);
            visited.add(current / 2);
        }
        if (current % 3 === 0 && current / 3 >= x && !visited.has(current / 3)) {
            queue.push([current / 3, steps + 1]);
            visited.add(current / 3);
        }
    }

    return -1;
}



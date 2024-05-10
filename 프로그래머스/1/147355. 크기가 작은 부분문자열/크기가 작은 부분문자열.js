function solution(t, p) {
    let count = 0;
    for (let i = 0; i <= t.length - p.length; i++) {
        let push = '';
        for (let j = 0; j < p.length; j++) {
            push += t[i + j];
        }
        if (push <= p) count++;
    }
    return count;
}

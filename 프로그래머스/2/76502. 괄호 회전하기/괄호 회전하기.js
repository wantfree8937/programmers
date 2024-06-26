function solution(s) {
    const isValid = (str) => {
        const stack = [];
        const matching = { ')': '(', ']': '[', '}': '{' };

        for (const char of str) {
            if (char in matching) {
                if (stack.length === 0 || stack.pop() !== matching[char]) {
                    return false;
                }
            } else {
                stack.push(char);
            }
        }
        
        return stack.length === 0;
    }

    let count = 0;
    const n = s.length;

    for (let i = 0; i < n; i++) {
        const rotated = s.slice(i) + s.slice(0, i);
        if (isValid(rotated)) {
            count += 1;
        }
    }

    return count;
}
function isPrime(num) {
    if (num <= 1) return false;
    if (num === 2) return true;
    if (num % 2 === 0) return false;
    for (let i = 3; i * i <= num; i += 2) {
        if (num % i === 0) return false;
    }
    return true;
}

function solution(n, k) {
    const conversion = n.toString(k);
    const nSplits = conversion.split('0');
    
    let count = 0;
    for (const nSplit of nSplits) {
        if (nSplit && isPrime(Number(nSplit))) {
            count++;
        }
    }
    
    return count;
}
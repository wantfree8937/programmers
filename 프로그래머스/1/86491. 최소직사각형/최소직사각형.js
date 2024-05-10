function solution(sizes) {
    let wmax = 0;
    let hmax = 0;
    for (let item of sizes) {
        if (item[0] < item[1]) item.reverse();
        wmax = wmax < item[0] ? item[0] : wmax;
        hmax = hmax < item[1] ? item[1] : hmax;
    }
    return wmax * hmax
}
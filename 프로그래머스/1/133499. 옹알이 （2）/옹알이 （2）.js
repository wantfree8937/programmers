function solution(babbling) {
  let ongal = ["aya", "ye", "woo", "ma"];
  let count = 0;

  babbling.forEach((bab) => {
    for (let iter of ongal) {
      if (bab.includes(iter.repeat(2))) {
        break;
      }
      bab = bab.replaceAll(iter, " ");
    }
    bab = bab.replaceAll(" ", "");
    if (bab.length === 0) count++;
  });

  return count;
}
function solution(keymap, targets) {
  let result = [];
  let minKeymap;
  let resultCount;

  for (let str of targets) {
    resultCount = 0;
    for (let alphabet of str) {
      minKeymap = -1;
      keymap.forEach((currStr) => {
        if (currStr.includes(alphabet)) {
          currKeymap = currStr.indexOf(alphabet);
          if (minKeymap == -1 || currKeymap < minKeymap) {
            minKeymap = currKeymap;
          }
        }
      });
      if (minKeymap === -1) {
        result.push(-1);
        break;
      } else {
        resultCount += minKeymap + 1;
      }
    }
    if (minKeymap !== -1) result.push(resultCount);
  }

  return result;
}
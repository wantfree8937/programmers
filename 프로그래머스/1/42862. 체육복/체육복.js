function solution(n, lost, reserve) {
  let filterLost = lost.filter((los) => !reserve.includes(los));
  let filterReserve = reserve.filter((res) => !lost.includes(res));

  filterLost.sort((a, b) => a - b);
  filterReserve.sort((a, b) => a - b);

  for (let size of filterReserve) {
    if (filterLost.includes(size - 1)) {
      filterLost = filterLost.filter((los) => los !== size - 1);
    } else if (filterLost.includes(size + 1)) {
      filterLost = filterLost.filter((los) => los !== size + 1);
    }
  }

  return n - filterLost.length;
}
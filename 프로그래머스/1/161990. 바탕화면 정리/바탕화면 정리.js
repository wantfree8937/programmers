function solution(wallpaper) {
  let top = wallpaper.length
  let left = wallpaper[0].length;
  let bottom = 0
  let right = 0;

  wallpaper.forEach((row, i) => {
    if (row.includes("#")) {
      top = Math.min(top, i);
      bottom = Math.max(bottom, i + 1);
      left = Math.min(left, row.indexOf("#"));
      right = Math.max(right, row.lastIndexOf("#") + 1);
    }
  });

  return [top, left, bottom, right];
}

// result
// result[0]은 #이 나온 가장 처음 value의 index
// result[1]은 #이 가장 앞에 나온 value에서 #의 index
// result[2]는 #이 나온 가장 마지막 value의 index + 1
// result[3]은 #이 가장 뒤에 나온 value에서 #의 index + 1
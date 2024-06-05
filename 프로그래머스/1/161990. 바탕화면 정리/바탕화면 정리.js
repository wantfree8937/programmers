function solution(wallpaper) {
  const result = [];
  let resultOne = wallpaper[0].length;
  let resultTwo = 0;
  let resultThree = 0;

  for (let i = 0; i < 4; i++) {
    if (i === 0) {
      for (let j = 0; j < wallpaper.length; j++) {
        if (wallpaper[j].includes("#")) {
          result.push(j);
          break;
        }
      }
    }

    if (i === 1) {
      for (let j = 0; j < wallpaper.length; j++) {
        if (
          wallpaper[j].includes("#") &&
          wallpaper[j].indexOf("#") < resultOne
        ) {
          resultOne = wallpaper[j].indexOf("#");
        }
      }
      result.push(resultOne);
    }

    if (i === 2) {
      for (let j = 0; j < wallpaper.length; j++) {
        if (wallpaper[j].includes("#")) {
          resultTwo = j;
        }
      }
      result.push(resultTwo + 1);
    }

    if (i === 3) {
      for (let j = 0; j < wallpaper.length; j++) {
        if (
          wallpaper[j].includes("#") &&
          wallpaper[j].lastIndexOf("#") > resultThree
        ) {
          resultThree = wallpaper[j].lastIndexOf("#");
        }
      }
      result.push(resultThree + 1);
    }
  }

  return result;
}

// result
// result[0]은 #이 나온 가장 처음 value의 index
// result[1]은 #이 가장 앞에 나온 value에서 #의 index
// result[2]는 #이 나온 가장 마지막 value의 index + 1
// result[3]은 #이 가장 뒤에 나온 value에서 #의 index + 1
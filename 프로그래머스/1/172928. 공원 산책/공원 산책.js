function solution(park, routes) {
    let saveRow;
    let saveColumn;

    for (let i = 0; i < park.length; i++) {
        if (park[i].includes("S")) {
            saveRow = i;
            saveColumn = park[i].indexOf("S");
            break;
        }
    }

    for (let route of routes) {
        const [direct, distanceStr] = route.split(" ");
        const distance = Number(distanceStr);
        let isMovePossible = true;

        if (direct === "E") {
            if (saveColumn + distance <= park[saveRow].length - 1) {
                for (let i = 1; i <= distance; i++) {
                    if (park[saveRow][saveColumn + i] === "X") {
                        isMovePossible = false;
                        break;
                    }
                }
                if (isMovePossible) saveColumn += distance;
            }
        } else if (direct === "S") {
            if (saveRow + distance <= park.length - 1) {
                for (let i = 1; i <= distance; i++) {
                    if (park[saveRow + i][saveColumn] === "X") {
                        isMovePossible = false;
                        break;
                    }
                }
                if (isMovePossible) saveRow += distance;
            }
        } else if (direct === "W") {
            if (saveColumn - distance >= 0) {
                for (let i = 1; i <= distance; i++) {
                    if (park[saveRow][saveColumn - i] === "X") {
                        isMovePossible = false;
                        break;
                    }
                }
                if (isMovePossible) saveColumn -= distance;
            }
        } else if (direct === "N") {
            if (saveRow - distance >= 0) {
                for (let i = 1; i <= distance; i++) {
                    if (park[saveRow - i][saveColumn] === "X") {
                        isMovePossible = false;
                        break;
                    }
                }
                if (isMovePossible) saveRow -= distance;
            }
        }
    }

    return [saveRow, saveColumn];
}

// routes를 순회하며 처음부터 하나씩 읽으면서 진행한다.
// routes의 요소에서 split(" ")으로 나눠서 앞 부분의 방향을 구하고 뒷 부분의 이동할 거리를 구한다.
// park에 대입해서 이동할 수 있으면 해당 위치로 이동 시키고 그 값을 저장한다. 이후에 반복


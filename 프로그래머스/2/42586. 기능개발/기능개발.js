function solution(progresses, speeds) {
    let days = [];
    let result = [];

    for (let i = 0; i < progresses.length; i++) {
        let day = Math.ceil((100 - progresses[i]) / speeds[i]);
        days.push(day);
    }

    while (days.length > 0) {
        let maxDay = days[0];
        let count = 0;

        while (days.length > 0 && days[0] <= maxDay) {
            days.shift();
            count++;
        }

        result.push(count);
    }

    return result;
}
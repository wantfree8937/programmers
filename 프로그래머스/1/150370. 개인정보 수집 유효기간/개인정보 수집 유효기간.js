function solution(today, terms, privacies) {
  const result = [];
  let newTerm = 0;

  for (let i = 0; i < privacies.length; i++) {
    const privacy = privacies[i];
    for (let term of terms) {
      if (term.includes(privacy[privacy.length - 1])) {
        newTerm = Number(term.split(" ")[1]);
      }
    }

    const splitTodayYear = Number(today.split(".")[0]);
    const splitTodayMonth = Number(today.split(".")[1]);
    const splitTodayDay = Number(today.split(".")[2]);

    let splitPriYear = Number(privacy.split(" ")[0].split(".")[0]);
    let splitPriMonth = Number(privacy.split(" ")[0].split(".")[1]);
    const splitPriDay = Number(privacy.split(" ")[0].split(".")[2]);

    if (splitPriMonth + newTerm > 12) {
      if ((splitPriMonth + newTerm) % 12 == 0) {
        splitPriYear += Math.floor((splitPriMonth + newTerm) / 12) - 1;
        splitPriMonth = 12;
      } else {
        splitPriYear += Math.floor((splitPriMonth + newTerm) / 12);
        splitPriMonth = (splitPriMonth + newTerm) % 12;
      }
    } else {
      splitPriMonth += newTerm;
    }

    if (splitPriYear < splitTodayYear) {
      result.push(i + 1);
    } else if (
      splitPriYear == splitTodayYear &&
      splitPriMonth < splitTodayMonth
    ) {
      result.push(i + 1);
    } else if (
      splitPriYear == splitTodayYear &&
      splitPriMonth == splitTodayMonth &&
      splitPriDay <= splitTodayDay
    ) {
      result.push(i + 1);
    }
  }

  return result;
}
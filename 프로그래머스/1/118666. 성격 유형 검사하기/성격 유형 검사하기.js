function solution(survey, choices) {
  let result = "";
  let surveyObject = { R: 0, T: 0, C: 0, F: 0, J: 0, M: 0, A: 0, N: 0 };
  for (let i = 0; i < survey.length; i++) {
    if (choices[i] < 4) {
      surveyObject[survey[i][0]] += 4 - choices[i];
    } else if (choices[i] > 4) {
      surveyObject[survey[i][1]] += choices[i] - 4;
    }
  }

  if (surveyObject.R >= surveyObject.T) {
    result += "R";
  } else {
    result += "T";
  }

  if (surveyObject.C >= surveyObject.F) {
    result += "C";
  } else {
    result += "F";
  }

  if (surveyObject.J >= surveyObject.M) {
    result += "J";
  } else {
    result += "M";
  }

  if (surveyObject.A >= surveyObject.N) {
    result += "A";
  } else {
    result += "N";
  }

  return result;
}
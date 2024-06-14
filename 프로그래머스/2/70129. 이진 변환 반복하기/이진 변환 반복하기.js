function solution(s) {
  let [a, b] = [0, 0];

  while (s !== "1") {
    s = s.split("");
    s.forEach((zero) => {
        if(zero === "0") b++;
    });
    s = s.join("");
    s = s.replaceAll("0", "").length.toString(2);
    a++;
  }

  return [a, b];
}
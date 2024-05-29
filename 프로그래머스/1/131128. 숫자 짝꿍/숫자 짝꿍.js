function solution(X, Y) {
  let equl = "";

  let arrX = X.split("");
  let arrY = Y.split("");

  for (let i = 0; i < 10; i++) {
    let freX = arrX.filter(num => Number(num) === i).length;
    let freY = arrY.filter(num => Number(num) === i).length;
    equl += String(i).repeat(Math.min(freX, freY));
  }

  equl = equl.split("").sort((a, b) => b - a).join("");
    
  if (equl.length === 0) return "-1";
  if (equl === "0".repeat(equl.length)) return "0";

  return equl;
}

function solution(s, skip, index) {
  let result = '';
  let alphabet = "abcdefghijklmnopqrstuvwxyz";
  let filterAlphabet = "";
  let currIdx;

  for(let str of alphabet){
    if(!skip.includes(str)){
      filterAlphabet += str;
    }
  }

  for(let str of s){
    currIdx = filterAlphabet.indexOf(str);
    result += filterAlphabet[(currIdx + index) % filterAlphabet.length];
  }

  return result;
}

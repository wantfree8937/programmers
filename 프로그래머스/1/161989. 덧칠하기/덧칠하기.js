function solution(n, m, section) {
  let count = 0;
  let saveRoller = 0;
  section.forEach((currentSection, idx) => {
    if (idx === 0 || currentSection > saveRoller) {
      saveRoller = currentSection + m - 1;
      count++;
    }
  });
  return count;
}
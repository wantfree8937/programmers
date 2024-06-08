function solution(players, callings) {
  let playersMap = new Map();

  players.map((val, idx) => {
    playersMap.set(val, idx);
  });
  
  callings.map((val) => {
    const currCall = playersMap.get(val);
  
    const prevPlayerIdx = currCall - 1;
    const prevPlayer = players[prevPlayerIdx];
  
    players[currCall] = prevPlayer;
    players[prevPlayerIdx] = val;
  
    playersMap.set(prevPlayer, currCall);
    playersMap.set(val, prevPlayerIdx);
  });

  return players;
}

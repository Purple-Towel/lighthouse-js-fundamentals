const moves = ['north', 'north', 'west', 'west', 'north', 'east','north'];
//const start = [0, 0];

const finalPosition = function (moves) {
  const start = [0,0];
  let x = start[0];
  let y = start[1];
  const end = []
  for (const move of moves) {
    if (move == "north") {
      y = y + 1;
    } else if (move == "south") {
      y = y - 1;
    } else if (move == "east") {
      x = x + 1;
    } else if (move == "west") {
      x = x - 1;
    }
  }
  end.push(x);
  end.push(y);
  return end;
};
console.log(finalPosition(moves));
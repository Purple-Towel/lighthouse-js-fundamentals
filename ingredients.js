const ingredients = ["eggs", "milk", "flour", "sugar", "baking soda", "baking powder", "chocolate chips", "bananas"];

// Write a while loop that prints out the contents of ingredients:

function whileForward (array) {
  var i = 0;
  while (i <= (array.length - 1)) {
    console.log(array[i]);
    i++;
  }
}

whileForward(ingredients);

// Write a for loop that prints out the contents of ingredients:

function forForward (array) {
  for (var x = 0; x <= (array.length -1); x++) {
    console.log(array[x]);
  }
}

forForward(ingredients);

// Write any loop (while or for) that prints out the contents of ingredients backwards:

function forReverse (array) {
  for (var y = (array.length -1); y >= 0; y--) {
    console.log(array[y]);
  }
}

forReverse(ingredients);
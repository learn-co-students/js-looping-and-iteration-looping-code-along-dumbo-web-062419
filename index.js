// Code your solutions in this file
function writeCards(array, event) {
  var new_array = []
  for (let i = 0; i < array.length; i++) {
    new_array.push(`Thank you, ${array[i]}, for the wonderful ${event} gift!`);
  }
  return new_array
}

function countdown(num) {
  while (num >= 0) {
    console.log(num--)
  }
}

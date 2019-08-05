// Code your solutions in this file
function writeCards(names, event) {
  for (let i = 0; i < names.length; i++) {
    names[i] = `Thank you, ${names[i]}, for the wonderful surprise gift!`;
  }
  return names;
};

function countdown(n) {
  let i = n;
  while (i >= 0) {
    console.log(i);
    i--;
  }
};

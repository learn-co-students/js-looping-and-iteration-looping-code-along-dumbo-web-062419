// Code your solutions in this file
function writeCards(nameArray, message) {
  let result = [];
  for(let i = 0; i < nameArray.length; i++){
    result.push(`Thank you, ${nameArray[i]}, for the wonderful ${message} gift!`);
  }
  return result;
}

function countdown(n){
  while (n >= 0){
    console.log(n);
    n--;
  }
}

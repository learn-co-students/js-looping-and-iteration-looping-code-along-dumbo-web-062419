// Code your solutions in this file

function writeCards(array, event){
  let finalArray = []
  for(let i=0; i<array.length; ++i){
    let name = array[i];
    array[i] = `Thank you, ${name}, for the wonderful ${event} gift!`
  }
  return array;
}


function countdown(integer){
  for(let i=integer; i>=0; --i){
    console.log(i);
  }
}

// Code your solutions in this file
function countdown(num)
{
  while(num > 0) {
        console.log(num);
        num --;
    }
    console.log(num);
}

function writeCards(names, event) {
    let messageArray = [];
    for (let i = 0; i < names.length; i++ ) {
        messageArray.push(`Thank you, ${names[i]}, for the wonderful ${event} gift!`);
    }
    return messageArray;
}

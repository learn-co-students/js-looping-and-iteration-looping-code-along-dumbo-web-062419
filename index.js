// Code your solutions in this file
function writeCards(names, event) {
    let messageArray = [];
    for (let i = 0; i < names.length; i++ ) {
        messageArray.push(`Thank you, ${names[i]}, for the wonderful ${event} gift!`);
    }
    return messageArray;
}

function countdown(number) {
    while(number > 0) {
        console.log(number);
        number -= 1;
    }
    console.log(number);
}
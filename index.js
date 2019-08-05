// Code your solutions in this file
// const names = ["Lisa", "Kaitlin", "Jan"];

// const eventName = 'surprise';

let thx_arry = []

function writeCards(names, eventName) {
    for (let i = 0; i < names.length; i++) {
       thx_arry.push(`Thank you, ${names[i]}, for the wonderful ${eventName} gift!`);
    }
    return thx_arry
}

writeCards(names, eventName);




function countdown(i) {
    while (i >= 0){
    console.log(i--)
    }
    return i;
}

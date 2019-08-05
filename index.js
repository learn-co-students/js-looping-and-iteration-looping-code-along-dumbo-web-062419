// Code your solutions in this file

function writeCards(names) {
let i = 0;
let messages = [];
while (i < names.length) {
    messages.push(`Thank you, ${names[i]}, for the wonderful surprise gift!`);
    i++;
    }
return messages;
}


function countdown(int) {
while (int > -1 ) { 
    console.log(int);
    int --;
}

}
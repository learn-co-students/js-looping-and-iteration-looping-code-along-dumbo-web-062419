// Code your solutions in this file
// const gifts = ["teddy bear", "drone", "doll"];
 
// function wrapGifts(gifts) {
//   for (let i = 0; i < gifts.length; i++) {
//     console.log(`Wrapped ${gifts[i]} and added a bow!`);
//   }
 
//   return gifts;
// }
 
// wrapGifts(gifts);

const friends = ["Lisa", "Kaitlin", "Jan"]
const event = ["surprise"]
let messages = []

function writeCards(friends, event) {
    for (let i = 0; i < friends.length; i++) {
        messages.push(`Thank you, ${friends[i]}, for the wonderful ${event} gift!`);
    }
    return messages;
}



// let countup = 0;
// while (countup < 10) {
//   console.log(countup++);
// }
function countdown(n) {
    let countdown = n;
        while (countdown >= 0) {
            console.log(countdown--);
        }
}  
countdown(10); 
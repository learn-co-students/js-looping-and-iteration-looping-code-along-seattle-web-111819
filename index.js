// Code your solutions in this file
function writeCards(name, event) {
    let cards = [];
    for (let i = 0; i < name.length; i++) {
        cards.push(`Thank you, ${name[i]}, for the wonderful ${event} gift!`)
    }
   return cards 
}

function countDown(number) {
    while (number > 0) {
        console.log(number);
        number -=1;
    }
    console.log( number );
}
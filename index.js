let thanks = [];
function writeCards(array, msg) {
    for (let i = 0; i < array.length; i++) {
        thanks.push(`Thank you, ${array[i]}, for the wonderful ${msg} gift!`)
    }
    return thanks
}


function countDown(num) {
    while (num > -1) {
        console.log(num);
        num--;
    }
}
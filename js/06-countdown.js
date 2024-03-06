let choice = window.prompt('How many times should loop execute');

let loopLength = parseInt(choice);

do {
    console.log(loopLength);
    loopLength--;
}while(loopLength >= 0)
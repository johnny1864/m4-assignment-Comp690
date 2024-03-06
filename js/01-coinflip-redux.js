let coinFlip;

let choice = window.prompt('How many times should loop execute');

let loopLength = parseInt(choice);

for (let i = 0; i < loopLength; i++) {
    coinFlip = Math.round(Math.random());
    if (coinFlip == 0) {
        console.log("Heads");
    }
    if (coinFlip == 1) {
        console.log("Tails");
    }
}




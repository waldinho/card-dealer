var x = Math.random();
var y = (x * 4) + 1;
var z = Math.floor(y);

var a = Math.random();
var b = (a * 13) + 1;
var c = Math.floor(b);

for (var i = 0; i < z; i++) {
    for (var j = 0; j < c; j++) {
        if (z === 1) {
            z = "Hearts";
        } else if (z === 2) {
            z = "Clubs";
        } else if (z === 3) {
            z = "Spades";
        } else if (z === 4){
            z = "Diamonds";
        }
    }
}

for (var j = 0; j < c; j++) {
    if (c === 1) {
        c = "Ace";
    } else if (c === 11) {
        c = "Jack";
    } else if (c === 12) {
        c = "Queen";
    } else if (c === 13) {
        c = "King";
    } else {
        c = c;
    }
}

console.log(c + " of " + z)
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

//Improved version

function pickCard() {

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
            } else if (z === 4) {
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
    return (" " + c + " of " + z)
}

var cards = [];
var played = [];

for (var k = 0; k < 1000; k++) {
    l = pickCard()
    if (cards.includes(l)) {
        pickCard()
    } else {
        cards.push(l);
    }
}

function playersHand() {
    var hand = cards.slice(0, 2)
    console.log("===============================================");
    console.log("Current Hand = " + hand);
    for (var k = 0; k < 2; k++) {
        l = pickCard()
        played.push(cards[k]);
    }
    console.log("Played cards = " + played)
    cards.splice(0, 2);
    console.log("Deck = " + cards);
    console.log("===============================================");
}
    

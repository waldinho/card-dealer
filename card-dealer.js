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

// With simple HTML/CSS interface

<html>

<head>
    <script>
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
            return ("<p>" + c + " of " + z + "</p>")
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
                // console.log("===============================================");
                // console.log("Current Hand = " + hand);
            document.getElementById('hand').innerHTML = "<b><u>Current Hand</u></b>" + hand.join("");
            for (var k = 0; k < 2; k++) {
                l = pickCard()
                played.push(cards[k]);
            }
            // console.log("Played Cards = " + played)
            document.getElementById('played').innerHTML = "<b><u>Played cards</u></b>" + played.join("");
            cards.splice(0, 2);
            // console.log("Deck = " + cards);
            document.getElementById('deck').innerHTML = "<b><u>Deck</u></b>" + cards.join("");
            // console.log("===============================================");
        }

        function reset() {
            location.reload();
        }
    </script>
    <style>
        #wrap {
            width: 700px;
            display: flex;
            flex-flow: column;
            justify-content: center;
            margin: 0 auto;
            font-family: 'Helvetica';
        }
        
        button {
            width: 40%;
            margin: 10px auto;
            color: #fff;
            background: #000;
            border: 0;
            padding: 20px;
            font-size: 24px;
        }
        
        p {
            font-size: 12px;
            line-height: 6px;
        }
        
        #played {
            width: 50%;
            color: red;
        }
        
        #deck {
            width: 50%;
            color: green;
        }
        
        .box {
            margin: 1em;
            text-align: center;
        }
        
        .stack {
            display: flex;
            flex-flow: row;
            justify-content: center;
        }
        
        .reset {
            color: red;
        }
    </style>
</head>

<body>
    <div id="wrap">
        <div class="stack">
            <button onClick="playersHand()">DEAL</button>
            <button onClick="reset()" class="reset">RESET</button>
        </div>
        <div id="hand" class="box"></div>
        <div class="stack">
            <div id="played" class="box"></div>
            <div id="deck" class="box"></div>
        </div>
    </div>
</body>

</html>
    

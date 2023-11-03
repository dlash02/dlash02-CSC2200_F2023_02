let deck = {
    cards : [
        { 'img' : '2C.png', 'value': 2, 'suit' : 'clubs', 'dealt': false},
        { 'img' : '2D.png', 'value': 2, 'suit' : 'diamonds', 'dealt': false},
        { 'img' : '2H.png', 'value': 2, 'suit' : 'hearts', 'dealt': false},
        { 'img' : '2S.png', 'value': 2, 'suit' : 'spades', 'dealt': false},

        { 'img' : '3C.png', 'value': 3, 'suit' : 'clubs', 'dealt': false},
        { 'img' : '3D.png', 'value': 3, 'suit' : 'diamonds', 'dealt': false},
        { 'img' : '3H.png', 'value': 3, 'suit' : 'hearts', 'dealt': false},
        { 'img' : '3S.png', 'value': 3, 'suit' : 'spades', 'dealt': false},

        { 'img' : '4C.png', 'value': 4, 'suit' : 'clubs', 'dealt': false},
        { 'img' : '4D.png', 'value': 4, 'suit' : 'diamonds', 'dealt': false},
        { 'img' : '4H.png', 'value': 4, 'suit' : 'hearts', 'dealt': false},
        { 'img' : '4S.png', 'value': 4, 'suit' : 'spades', 'dealt': false},

        { 'img' : '5C.png', 'value': 5, 'suit' : 'clubs', 'dealt': false},
        { 'img' : '5D.png', 'value': 5, 'suit' : 'diamonds', 'dealt': false},
        { 'img' : '5H.png', 'value': 5, 'suit' : 'hearts', 'dealt': false},
        { 'img' : '5S.png', 'value': 5, 'suit' : 'spades', 'dealt': false},

        { 'img' : '6C.png', 'value': 6, 'suit' : 'clubs', 'dealt': false},
        { 'img' : '6D.png', 'value': 6, 'suit' : 'diamonds', 'dealt': false},
        { 'img' : '6H.png', 'value': 6, 'suit' : 'hearts', 'dealt': false},
        { 'img' : '6S.png', 'value': 6, 'suit' : 'spades', 'dealt': false},

        { 'img' : '7C.png', 'value': 7, 'suit' : 'clubs', 'dealt': false},
        { 'img' : '7D.png', 'value': 7, 'suit' : 'diamonds', 'dealt': false},
        { 'img' : '7H.png', 'value': 7, 'suit' : 'hearts', 'dealt': false},
        { 'img' : '7S.png', 'value': 7, 'suit' : 'spades', 'dealt': false},

        { 'img' : '8C.png', 'value': 8, 'suit' : 'clubs', 'dealt': false},
        { 'img' : '8D.png', 'value': 8, 'suit' : 'diamonds', 'dealt': false},
        { 'img' : '8H.png', 'value': 8, 'suit' : 'hearts', 'dealt': false},
        { 'img' : '8S.png', 'value': 8, 'suit' : 'spades', 'dealt': false},

        { 'img' : '9C.png', 'value': 9, 'suit' : 'clubs', 'dealt': false},
        { 'img' : '9D.png', 'value': 9, 'suit' : 'diamonds', 'dealt': false},
        { 'img' : '9H.png', 'value': 9, 'suit' : 'hearts', 'dealt': false},
        { 'img' : '9S.png', 'value': 9, 'suit' : 'spades', 'dealt': false}
    ],
    dealtCt : 0,
    getCard : function(){

        let gotGoodCard = false;
        while ( !gotGoodCard ){
            let rNum = Math.floor( Math.random() * this.cards.length );
            let card = deck.cards[rNum];
            if ( !card.dealt ){
                card.dealt = true;
                this.dealtCt += 1;
                return deck.cards[rNum];
            } else if ( this.dealtCt == deck.cards.length ){
                //ToDo: Fix this to look into existing hands
                let resp = prompt("Out of cards ... shall I reshuffle?");
                return null;
            }
        }
        return card;
    }
}
let User = {
    bet : 0,
    hand : [] // array of cards

}
let Game = {
    nCards : 5,  // cards in a hanud
    buildAHand : function() {
        let h = [];
        for ( let i=0; i<this.nCards; i++){
            let c = deck.getCard();
            // console.log( c );
            h.push( c );
        }
        return h;
    },
    gotPair : function( hand ) {
        let handValues = [];
        // LEFT OFF HERE -> Use a map!
        for ( let i=0; i<hand.length; i++ ){
            let v = hand[i].value;

        }
    }
}
let UI = {
    getBet : function ( betId, betDisId ){
        //ToDo: Implement a MAX_BET
        let betObj = document.getElementById( betId );
        let bet = betObj.value;
        let msg = ""
        let notGotError = true;
        if ( bet <= 0 ||  isNaN( bet ) || bet == undefined || bet == null ) {
            msg = `<span style='color:red'> Illegal Bet:${bet} </span> `;
            notGotError = false;
        } else {
            msg = `<span style='color:blue'>  Bet:${bet} </span> `;
        }
        document.getElementById(betDisId).innerHTML = msg;
        return notGotError;
    },
    displayHand( hand, id ){
        let resObj = document.getElementById( id );
        let oStr = "";
        for ( let i=0; i<hand.length; i++ ){
            let c = hand[i];
            oStr += `<img src=imgs/${c.img} width='50px' alt="Card">`
        }
        resObj.innerHTML = oStr;
    }
}
function startGame() {
    // alert( "Starting games")
    if ( UI.getBet( "uBet","Results" )) {
        let daCard = deck.getCard();
        User.hand = Game.buildAHand();
        UI.displayHand( User.hand, "Cards");
    }
}
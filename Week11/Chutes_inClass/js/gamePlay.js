let GameBoard = {
    myBoard: [
        [ null, "BB", "SS", "S", "S", "S", null, null,null, null ],
        [ null, null, "BB", null, null, null, null, null,null, null ],
        [ null, null, null, "BB", null, null, null, null,null, null ],
        [ null, null, null, null, "BB", null, null, null,null, null ],
        [ null, null, null, null, null, "BB", null, null,null, null ],
        [ null, null, "SS", "S", "S", "S", "S", "S",null, null ],
        [ null, null, null, null, null, null, null, null,null, null ],
        [ null, null, null, null, null, null, null, null,null, null ],
        [ null, null, null, "SS", "S", "S", null, "BB",null, null ],
        [ null, null, null, null, null, null, null, null,null, null ]
     ],
    bomb : {
        icon : '<i class="fas fa-bomb" style="font-size:18px;color:orangered;margin-left: 5px"></i>'
    },
    slideStart : {
        icon : '<i class="fas fa-solid fa-forward" style="font-size:18px;color:green;margin-left: 1px;font-weight: 900"></i>'
    },
    slideContinue : {
        icon :  '<i class="fas fa-solid fa-forward" style="font-size:18px;color:black;margin-left: 1px;font-weight: 900"></i>'
    },
    token1 : {
        icon : '<i class="fas fa-solid fa-ghost" style="font-size:18px;color:darkgreen;margin-left: 1px;font-weight: 900"></i>',
        row: 0,
        col: 0
    },
    token2 : {
        icon: '<i class="fas fa-dragon" style="font-size:28px;color:blue;margin-left: 5px;font-weight: 900"></i>',
        row: 0,
        col: 0
    },
    getToken( r, c ){
        let retStr = "";
        if ( this.token1.row == r && this.token1.col == c ){
            retStr += this.token1.icon;
        }
        if ( this.token2.row == r && this.token2.col == c ){
            retStr += this.token2.icon;
        }
       let  boardSq = this.myBoard[r][c];
       if ( boardSq == "BB"){
           retStr += this.bomb.icon;
       } else if ( boardSq == "SS"){
           retStr += this.slideStart.icon;
       } else if ( boardSq == "S"){
            retStr += this.slideContinue.icon;
        }
       return retStr;
    }
}
let UI = {
    showBoard : function( myBoard ){
        let oStr = "";
        for ( let r=0; r<myBoard.length; r++ ){
            oStr += `<tr id='${r}' />`;
            let row = myBoard[r];
            for ( let c=0; c<row.length; c++){
                let tok = GameBoard.getToken( r, c );
                oStr += `<td id='${r}${c}' class="square"> ${tok} </td>`;
            }
            oStr += "</tr>";
        }
        document.getElementById('table1').innerHTML = oStr;
    },
    showDie( die ){
        let oStr = `<img src='imgs/${die.img}' height='40px' alt=${die.alt} />`;
        document.getElementById("Game").innerHTML = oStr;
    }
}
let Dice = {
    die : [
        {'img' : 'Die1.PNG', value: 1, Alt: "Die1"},
        {'img' : 'Die2.PNG', value: 2, Alt: "Die2"},
        {'img' : 'Die3.PNG', value: 3, Alt: "Die3"},
        {'img' : 'Die4.PNG', value: 4, Alt: "Die4"},
        {'img' : 'Die5.PNG', value: 5, Alt: "Die5"},
        {'img' : 'Die6.PNG', value: 6, Alt: "Die6"},

    ],
    rollEm : function() {
        let rand = Math.floor( Math.random()* this.die.length);
        let die = this.die[rand];
        return die;
    }
}
function loadGame(){
    UI.showBoard( GameBoard.myBoard);
}
function takeTurn() {
    let die = Dice.rollEm();
    UI.showDie( die );
}
function resetGame(){
    alert( "resetting game ");
}

let secretWord = "";
let numberWrong = 0;
let showWord = "";
const MAX_WRONG = 3;
function initializeTheGame(){
    let secretWords = ["pizza", 'popcorn', 'pickles', 'pie'];
    secretWord = "";
    numberWrong = 0;
    showWord = "";
    let max = secretWords.length;
    let min = 0;
    let index = Math.floor( Math.random() * (max-min) + min);
    // alert( "initialize called:" + index );
    secretWord = secretWords[index];
    for ( let i=0; i<secretWord.length; i++){
        showWord += "*";
    }
    updateDisplay();
}
function guessIt(){
    // alert( "Guess It  called")
    let letter = document.getElementById("letter").value;
    let res = letterIsGood(letter);
    if ( res != ""){
        updateDisplay( res );
    } else {
        // is it in the word?
        let idx = secretWord.indexOf(letter);
        if ( idx == -1 ){
            // Is not there
            numberWrong++;
            updateDisplay(`Letter:${letter} is not there` );
        } else {
            let found = 0;
            let show = "";
            for( let i=0; i<secretWord.length; i++){
                if ( secretWord[i] == letter){
                    show += letter;
                    found += 1;
                    console.log( `showWord:` + showWord);
                } else {
                    show += showWord[i];
                }
            }
            showWord = show;
            let over = isGameOver();
            updateDisplay(`Yes! found Letter:${letter} Found:${found} times` )
        }
    }
}
function isGameOver(){
    let idx = showWord.indexOf('*');
}
function letterIsGood( l ){
    let msg = "";
    if ( l.length != 1 ){
        msg = `Letter:${l} is not size 1`;
    } else if ( !l.match(/[a-z]/i) ){
        msg = `Letter:${l} NOT a-z`;
    }
    return msg;
}
function updateDisplay( msg = '') {
    let res = document.getElementById("results");
    let oStr = `<span style='color:blue'> Word:${showWord} </span>`;
    oStr += `<span style='color:red'> NWrong:${numberWrong} </span>`;
    oStr += `<span style='color:red'> DEBUG WORD:${secretWord} </span>`;
    oStr += `<br /><span style='color:red'> Msg:${msg} </span>`;
    res.innerHTML = oStr;
}
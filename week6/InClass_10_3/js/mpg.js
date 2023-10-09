let myGlobal = "Pizza";
// let oStr = "";
function checkInput( m, g ){
    let oStr = "";
    var myLunch = " Burger";
    console.log(`global:${myGlobal}`);
    if ( isNaN(m) || isNaN(g)) {
        oStr += "Must specify number for Miles and Gallons";
        // change to let and unknwon outside of blck
        let strangeVal = "Blah is know when NAN outside of this block";
    }
    if ( g <= 0 || m <= 0 ){
        oStr +=  "Gallons and miles must be positive";
    }
    return oStr;
}
function calcMPG(){
    myGlobal += " Hut";
    let miles=parseFloat(document.getElementById("miles").value);
    let gals=parseFloat(document.getElementById("gallons").value);
    let oStr = checkInput( miles, gals );
    let mpg;
    if (oStr === ""){
        mpg =  (miles / gals).toFixed(2);
        oStr = ` MPG: ${mpg}`;
    } else {
        oStr = `<span style='color:red'> ${oStr} </span>`
    }
    console.log(`myLunch:${myLunch} global:${myGlobal}`);

    document.getElementById("results").innerHTML = oStr;
}

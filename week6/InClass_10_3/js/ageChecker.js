function checkAge() {
    // alert("Clicked");
    let age = parseInt(document.getElementById("age").value);
    let msg = "";
    if ( isNaN(age)){
        msg = "error age is not a number";
    } else {
        let fName = document.getElementById("firstName").value;
        // if ( fName.length <= 0){
        if ( fName == "" ){
            msg = "Name is not provided";
        } else {
            console.log('---------------------- ');
            let sAge = `Age:${age}`
            console.log(sAge);
            console.log("FistName:" + fName + " is a good with age" + age);
            msg = "<div style='color:red'> No driving for you</div>";
            const DRIVE_AGE = '16';
            // < > <= >= == === !=
            if (age >= DRIVE_AGE) {
                msg = "<div style='color:blue'>You can drive</div>";
            } else {
                msg = "<div style='color:red'>Nope! driving for you </div>";
            }
        }
    }
   document.getElementById("results").innerHTML = msg;


}
function checkAge2() {
    // alert("Clicked");
    let fruit;
    let x = 2;
    fruit = 'apple';
    let age = parseInt(document.getElementById("age").value);
    let fName = document.getElementById("firstName").value;

    // let msg = "";
    let msg = checkInput(age, fName);

    if ( msg == ""){
        const DRIVE_AGE = '16';
        // < > <= >= == === !=
        if (age >= DRIVE_AGE) {
            msg = "<div style='color:blue'>You can drive</div>";
        } else {
            msg = "<div style='color:red'>Nope! driving for you </div>";
        }
    }
    document.getElementById("results").innerHTML = msg;
}
function checkInput( age, first ){
    // let ret = {};
    let msg = "";

    if ( isNaN(age)) {
        msg = "<br /> error age is not a number";
    } else if ( age > 135 || age < 0 ){
        msg = "<br /> error age is out of bounds";
    }

    if ( first == "" ) {
        msg += "<br /> Name is not provided"
    }

    return msg;
}
let menu = {
    pizza : {
        Small : 9.99,
        Medium : 10.99,
        Large : 11.00,
        'Extra Large' : 22.00
    },
    tops : {
        Pepperoni : .50,
        Sauce :  .60,
        Mushroom :  .40,
       Onions : 1.00,
       Fish : 1.00
    },
    del : {
        'Pick-Up' : 1.0,
        'In-Store' : 0,
        'Delivery' : 5.00,
        'Door Dash' : 100.00
    }
};
const MAX_COMMENTS = 100;
function calcTotal() {
    let pSize = document.querySelector('input[type=radio][name=pSize]:checked').value;
    // alert(`pSize:${pSize}`);
    let delOpts = document.querySelector('.selOpts').value;
    // alert(`delOpts:${delOpts}`);
    let topObj = document.myForm.topping;
    console.log( topObj );
    let csvChecked = getCheckBoxes( topObj);
    let checkBoxTotal = getCheckBoxesTotals( topObj);

    let oStr = buildOutput( pSize, delOpts, csvChecked, checkBoxTotal);

    document.getElementById("results").innerHTML = oStr;

}
function buildOutput( pSize, delOpts, csvChecked, checkBoxTotal ){
   let USD = new Intl.NumberFormat( 'en-Us', {
       style: 'currency',
       currency :'USD'
   });
   let total = 0;
   let pCost = menu.pizza[pSize];
    let dCost = menu.del[delOpts];

    let oStr = "<table border='1'> ";
   oStr += `<tr><th> Pizza Size </th><td> ${pSize}</td><td> ${USD.format(pCost)} </td>`;
   oStr += `<tr><th> Delivery Cost </th><td> ${delOpts}</td><td> ${USD.format(dCost)} </td>`;
   oStr += `<tr><th> Toppings </th><td> ${csvChecked}</td><td> ${USD.format(checkBoxTotal)} </td>`;
   oStr += "</table>";
   return oStr;
}
function getCheckBoxes(topObj) {
    let cma = "";
    let csv = "";
    for ( let i=0; i<topObj.length; i++ ){
        if ( topObj[i].checked ){
            csv += cma + topObj[i].value;
            cma = ", ";
        }
    }
    return csv;
}
function getCheckBoxesTotals(topObj) {
    let total = 0;
    for ( let i=0; i<topObj.length; i++ ){
        if ( topObj[i].checked ){
            let v =  topObj[i].value;
            total  +=  menu.tops[v];
        }
    }
    return total;
}
function countChars() {
    // alert("Got It");
    let comBoxObj = document.getElementById("comments");
    let charCtObj = document.getElementById("charCt");
    let comBoxValue = comBoxObj.value; // str inside textArea

    if ( comBoxValue.length > MAX_COMMENTS ){
        comBoxObj.value = comBoxValue.substring(0,MAX_COMMENTS);
        charCtObj.innerText = MAX_COMMENTS;
    } else {
        charCtObj.innerText = comBoxValue.length;
    }
}
function updateForm() {
    document.getElementById("maxChars").innerHTML = `(Max Chars:${MAX_COMMENTS})`;

    updatePizzaSize();

    updateDelivery();

    updateToppings();

}
function updatePizzaSize() {
    let resArea = document.getElementById('pizzaSize');
    // Small 8": <input type="radio" name="pSize" value="Small" checked>
    // Medium 10": <input type="radio" name="pSize" value="Medium">
    // Large 12": <input type="radio" name="pSize" value="Large">
    let pKeys = Object.keys( menu.pizza ); // Returns a list
    let oStr = "";
    let first = true;
    for ( let i=0; i<pKeys.length; i++ ){
        let checked="";
        if ( first ){
            checked='checked';
            first=false;
        }
        oStr += `${pKeys[i]} <input type="radio" name="pSize" value="${pKeys[i]}" ${checked}>`
    }
    resArea.innerHTML = oStr;
}
function updateDelivery() {
    let resArea = document.getElementById('delOptions');
    // <option value="Pick-Up"> Pick Up </option>
    // <option value="Delivery" selected> Delivery </option>
    // <option value="In-Store"> In Store </option>
    let delKeys = Object.keys( menu.del ); // Returns a list
    let oStr = "";
    let first = true;
    for ( let i=0; i<delKeys.length; i++ ){
        let checked="";
        if ( first ){
            checked='selected';
            first=false;
        }
        oStr += ` <option value="${delKeys[i]}">${delKeys[i]} </option>`
    }
    resArea.innerHTML = oStr;
}
function updateToppings() {
    let resArea = document.getElementById('topOpt');
    // Pepperoni: <input type="checkbox" name="topping" value="pepperoni">
    //     Sauce: <input type="checkbox" name="topping" value="sauce" >
    //     Mushrooms: <input type="checkbox" name="topping" value="mushroom">
    //     Onions: <input type="checkbox" name="topping" value="onions">
    let topKeys = Object.keys( menu.tops ); // Returns a list
    let oStr = "";
    let first = true;
    for ( let i=0; i<topKeys.length; i++ ){
        oStr += `${topKeys[i]}: <input type="checkbox" name="topping" value="${topKeys[i]}">`
    }
    resArea.innerHTML = oStr;
}
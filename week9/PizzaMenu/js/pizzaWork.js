let pizza  = new Array();
pizza['Small'] = 9.99;
pizza['Medium'] = 10.99;
pizza['Large'] = 11.99;

let tops  = new Array();
tops['pepperoni'] = .50;
tops['sauce'] = .60;
tops['mushroom'] = .40;
tops['onions'] = 1.00;

let del = [];  // Added
del['Pick-Up'] = 1.0;  // Added
del['In-Store'] = 0;  // Added
del['Delivery'] = 5.00;  // Added


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
   let pCost = pizza[pSize];
    let dCost = del[delOpts];

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
            total  +=  tops[v];
        }
    }

    return total;
}
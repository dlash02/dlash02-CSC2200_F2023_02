
function calculateAverage(numbers) {
    let sum = 0;

    for (let i = 0; i <= numbers.length; i++) {
        sum += numbers[i];

    }
    let average = 0;
    if ( numbers.length > 0 ) {
        average = sum / numbers.length;
    }
    return average;
}

function doAver() {

// Test the function with an array
    let numbersArray = [10, 5, 8, 1];
    // numbersArray = ["Apple"];
    numbersArray = [-5, -5, 10];
    let result = calculateAverage(numbersArray);
    document.getElementById("results").innerHTML = `The average is: ${result}`;
    console.log(`The average is: ${result}`);
}


function calculateAverage(numbers) {
    let sum = 0;

    for (let i = 0; i <= numbers.length; i++) {
        sum += numbers[i];
    }
    let average = sum / numbers.length;

    return average;
}

function doAver() {

// Test the function with an array
    let numbersArray = [10, 5, 8, 12];
    numbersArray = [];
    let result = calculateAverage(numbersArray);
    document.getElementById("results").innerHTML = `The average is: ${result}`;
    console.log(`The average is: ${result}`);
}

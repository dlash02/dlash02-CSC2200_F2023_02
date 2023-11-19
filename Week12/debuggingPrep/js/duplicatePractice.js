// Duplicate Code Example

function doSumNumbers(numbers, minNum) {
    // Process an array of numbers
    let sum = 0;
    let count = 0;

    for (const number of numbers) {
        if ( number > minNum) {
            sum += number;
            count++;
        }
    }
    return {
        count: count,
        sum: sum
    }
}
function processScores(scores, min) {
    // Process an array of scores
    // let sum = 0;
    // let count = 0;
    // let obj = doSumNumbers( scores, min);
    // let sum = obj.sum;
    // let count = obj.count;
    let { count, sum } = doSumNumbers( scores, min);
    let average = 0;
    if (count > 0) {
        average = sum / count;
    }
    return average;
}

const numbersArray = [11, -2, 3, -4, 5, 15];
const scoresArray = [80, 90, -10, 75, 95];

function doSum() {
    const MIN_NUM = 10;
    let {count, sum} = doSumNumbers(numbersArray, MIN_NUM);
    let oStr = `The count:${count} of numbersArray larger than:${MIN_NUM} has sum:${sum}`;
    document.getElementById("results1").innerHTML = oStr;

}
function doAverage() {
    const MIN_SCORE = 0;

    let average = processScores(scoresArray, MIN_SCORE);
    let oStr = `The average scoresArray larger than:${MIN_SCORE} is average:${average}`;
    document.getElementById("results2").innerHTML = oStr;

}

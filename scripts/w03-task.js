/* LESSON 3 - Programming Tasks */

/* FUNCTIONS */
function add (number1, number2){

    return number1 + number2;
}
/* Function Definition - Add Numbers */
function addNumbers(){
    let addNumber1 = Number(document.querySelector('#add1').value);
    let addNumber2 = Number(document.querySelector('#add2').value);
    document.querySelector('#sum').value = add(addNumber1, addNumber2);
    
}
document.querySelector('#addNumbers').addEventListener('click', addNumbers);

/* Function Expression - Subtract Numbers */
const subtract = function(subtract1, subtract2){
    return subtract1 - subtract2;
}
const subtractNumbers = function(){
    let subtractNumber1 = Number(document.querySelector('#subtract1').value);
    let subtractNumber2 = Number(document.querySelector('#subtract2').value);
    document.querySelector('#difference').value = subtract(subtractNumber1, subtractNumber2);
}
document.querySelector('#subtractNumbers').addEventListener('click', subtractNumbers);

/* Arrow Function - Multiply Numbers */
const multiply =  (factor1, factor2) => factor1 * factor2;
const multiplyNumbers = () =>{
    let multiplyfactor1 = Number(document.querySelector('#factor1').value);
    let multiplyfactor2 = Number(document.querySelector('#factor2').value);
    document.querySelector('#product').value = multiply(multiplyfactor1, multiplyfactor2);
}
document.querySelector('#multiplyNumbers').addEventListener('click', multiplyNumbers);
/* Open Function Use - Divide Numbers */
function divide(dividend, divisor){
    return dividend / divisor;
}
function divideNumbers(){
    let divideDividend = Number(document.querySelector('#dividend').value);
    let divideDivisor = Number(document.querySelector('#divisor').value);
    document.querySelector('#quotient').value = divide(divideDividend, divideDivisor);
    
}
document.querySelector('#divideNumbers').addEventListener('click', divideNumbers);
/* Decision Structure */
var currentDate = '';
var currentYear = new Date();
currentYear.getFullYear(currentDate);

document.getElementById('year').innerHTML = currentYear;
/* ARRAY METHODS - Functional Programming */
let numbersArray = [1,2,3,4,5,6,7,8,9,10,11,12,13];

/* Output Source Array */
document.getElementById('array').innerHTML = numbersArray;

/* Output Odds Only Array */
//let odds = numbersArray.filter((num)=> num % 2 === 1);
//document.getElementById('odds').innerHTML = odds;

document.querySelector('#odds').innerHTML = numbersArray.filter(number => number % 2 === 1);
/* Output Evens Only Array */

document.querySelector('#evens').innerHTML = numbersArray.filter(number => number % 2 === 0);

/* Output Sum of Org. Array */
const sumArray = numbersArray.reduce((sum, number) => sum + number)
document.getElementById('sumOfArray').innerHTML = sumArray;
/* Output Multiplied by 2 Array */
const multiplyArray = numbersArray.map(number => number * 2);
document.getElementById('multiplied').innerHTML = multiplyArray;
/* Output Sum of Multiplied by 2 Array */
const sumMulArray = multiplyArray.reduce((sum, number) => sum + number);document.getElementById('sumOfMultiplied').innerHTML = sumMulArray;
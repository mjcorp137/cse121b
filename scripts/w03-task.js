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


/* ARRAY METHODS - Functional Programming */
/* Output Source Array */

/* Output Odds Only Array */

/* Output Evens Only Array */

/* Output Sum of Org. Array */

/* Output Multiplied by 2 Array */

/* Output Sum of Multiplied by 2 Array */

const decreaseBtn = document.getElementById("decreaseBtn");
const increaseBtn = document.getElementById("increaseBtn");
const resetBtn = document.getElementById("resetBtn");
const countLabel = document.getElementById("counter");

let count = 0;

increaseBtn.onclick = function(){
    count++;
    countLabel.textContent = count;
}

decreaseBtn.onclick = function(){
    count--;
    countLabel.textContent = count;
}

resetBtn.onclick = function(){
    count = 0;
    countLabel.textContent = count;
}

const myButton = document.getElementById("myButton");
const myLabel1 = document.getElementById("label1");
const myLabel2 = document.getElementById("label2");
const myLabel3 = document.getElementById("label3");
const min = 0;
const max = 6;
let randomNum1;
let randomNum2;
let randomNum3;


myButton.onclick = function(){
    randomNum1 = Math.floor(Math.random() * (max - min)) + min + 1;
    randomNum2 = Math.floor(Math.random() * (max - min)) + min + 1;
    randomNum3 = Math.floor(Math.random() * (max - min)) + min + 1;
    myLabel1.textContent = randomNum1;
    myLabel2.textContent = randomNum2;
    myLabel3.textContent = randomNum3;
}

let testScore = 43;
let letterGrade;

switch(true){
    case testScore >= 90:
        letterGrade = 'A';
        break;
    case testScore >= 80:
        letterGrade = 'B';
        break;
    case testScore >= 70:
        letterGrade = 'C';
        break;
    case testScore >=60:
        letterGrade = 'D';
        break;
    case testScore >= 50:
        letterGrade = 'E';
        break;
    default:
        letterGrade = 'F';
}

console.log(letterGrade);

// ---- NO METHOD CHAINING ----
/*
username = username.trim();
let letter = username.charAt(0);
letter = letter.toUpperCase();

let extraChars = username.slice(1);
extraChars = extraChars.toLowerCase();
username = letter + extraChars;

console.log(username);
*/

// ---- METHOD CHAINING ----
let username = window.prompt("Enter your username: ");
username = username.trim().charAt(0).toUpperCase() + username.trim().slice(1).toLowerCase();

console.log(username);

// ----Number Guessing Game----

// array = a variable like structure that can 
//             hold more than 1 value

let fruits = ["apple", "orange", "banana", "coconut"];

//fruits.push("coconut");  //add an element
//fruits.pop();                     //removes last element
//fruits.unshift("mango"); //add element to beginning
//fruits.shift();                    //removes element from beginning

let numOfFruits = fruits.length;
let index = fruits.indexOf("coconut");

//console.log(fruits);
//console.log(fruits[0]);
//console.log(fruits[1]);
//console.log(fruits[2]);
//console.log(fruits[3]);

//console.log(numOfFruits);
//console.log(index);

/*
for(let i = 0; i < fruits.length; i++){
    console.log(fruits[i]);
}
*/
/*
for(let i = fruits.length - 1; i >= 0; i--){
    console.log(fruits[i]);
}
*/

//fruits.sort();
//fruits.sort().reverse();

for(let fruit of fruits){
    console.log(fruit);
}

// spread operator =  ... allows an iterable such as an
//                                  array or string to be expanded
//                                  into separate elements
//                                 (unpacks the elements)

// ------------- EXAMPLE 1 -------------
let numbers = [1, 2, 3, 4, 5];
let maximum = Math.max(...numbers);
let minimum = Math.min(...numbers);

console.log(maximum);

// ------------- EXAMPLE 2 -------------
let Numele = "Bro Code";
let letters = [...username]; 

console.log(letters);

// ------------- EXAMPLE 3 -------------
let meats = ["cow", "chicken", "fish"];
let vegetables = ["carrots", "celery", "potatoes"];
let foods = [...fruits, ...vegetables, "eggs", "milk"];

console.log(foods);

// rest parameters = (...rest) allow a function work with a variable
//                                  number of arguments by bundling them into an array

//                                 spread = expands an array into separate elements
//                                 rest = bundles separate elements into an array

// -------- EXAMPLE 1 --------
function openFridge(...foods){
    console.log(...foods);
}
function getFood(...foods){
    return foods;
}

const food1 = "pizza";
const food2 = "hamburger";
const food3 = "hotdog";
const food4 = "sushi";
const food5 = "ramen";

openFridge(food1, food2, food3, food4, food5);

const foods2 = getFood(food1, food2, food3, food4, food5);

// -------- EXAMPLE 2 --------
function sum(...numbers){

    let result = 0;
    for(let number of numbers){
        result += number;
    }
    return result;
}

function getAverage(...numbers){

    let result = 0;
    for(let number of numbers){
        result += number;
    }
    return result / numbers.length;
}

const average = getAverage(75, 100, 85, 90, 50);

console.log(average);

// -------- EXAMPLE 3 --------
function combineStrings(...strings){
    return strings.join(" ");
}

const fullName = combineStrings("Mr.", "Spongebob", "Squarepants", "III");

console.log(fullName);


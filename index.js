console.log("I want to see myconsole log");
//window.alert("This is an windows alert");
document.getElementById("myH1").textContent = "Hello my diserables";
document.getElementById("myP").textContent = "I want to create a paragraph";

// a comment

/* another comment */

let age = 25;
let myName = "Cosmin";
let isOld = false;
let lookingForJob = true;

console.log(typeof age);
console.log('My age is ' + age)
console.log(typeof myName);
console.log('My name is ' + myName);
console.log(typeof lookingForJob);
console.log('I am looking for work');

document.getElementById("p1").textContent = `My name is ${myName}`;
document.getElementById("p2").textContent = `My age is ${age}`;
document.getElementById("p3").textContent = `It is ${lookingForJob}`;

/*let username;
username = window.prompt("What is your name?");
console.log(username);
*/

let username;
document.getElementById("mySubmit").onclick = function(){
    username = document.getElementById("myInput").value;
    document.getElementById("myH1").textContent =  `Username is ${username}`;
}

// type conversion
let myAge = 25;
myAge = Number(myAge);
let string = 26;
string = String(string);
let booly = 'pizza';
booly = Boolean(booly);

const PI = 3.14159;
let radius;
let circumferences;

document.getElementById("mySubmit2").onclick = function(){
    radius = document.getElementById("myInput2").value;
    radius = Number(radius);
    circumferences = 2 * PI * radius;
    document.getElementById("myH2").textContent = circumferences;
}
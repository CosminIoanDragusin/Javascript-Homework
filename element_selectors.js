// element selectors = Methods used to target and manipulate HTML elements 
//                                     They allow you to select one or multiple HTML elements
//                                     from the DOM (Document Object Model)

// 1. document.getElementById()                 // ELEMENT OR NULL
// 2. document.getElementsClassName()  // HTML COLLECTION
// 3. document.getElementsByTagName() // HTML COLLECTION
// 4. document.querySelector()                    // FIRST ELEMENT OR NULL
// 5. document.querySelectorAll()               // NODELIST

// ---------- getElementById() ----------

const myHeading = document.getElementById("my-heading");
myHeading.style.backgroundColor = "yellow";
myHeading.style.textAlign = "center";

// ---------- getElementsByClassName() ----------

const fruits = document.getElementsByClassName("fruits");

Array.from(fruits).forEach(fruit => {
    fruit.style.backgroundColor = "yellow";
});

// ---------- getElementsByTagName() ----------

const h4Elements = document.getElementsByTagName("h4");
const liElements = document.getElementsByTagName("li");

Array.from(h4Elements).forEach(h4Element => {
    h4Element.style.backgroundColor = "yellow";
});

Array.from(liElements).forEach(liElement => {
    liElement.style.backgroundColor = "lightgreen";
});

// ---------- querySelector() ----------

const element = document.querySelector("li");

element.style.backgroundColor = "yellow";

// ---------- querySelectorAll() ----------

const foods = document.querySelectorAll("li");

foods.forEach(food => {
    food.style.backgroundColor = "yellow"
});

// DOM Navigation = The process of navigating through the structure 
//                                  of an HTML document using JavaScript.

// .firstElementChild
// .lastElementChild
// .nextElementSibling
// .previousElementSibling
// .parentElement
// .children

// ---------- .firstElementChild ----------

const ulElements2 = document.querySelectorAll("ul");

ulElements2.forEach(ulElement => {
    const firstChild = ulElement.firstElementChild;
    firstChild.style.backgroundColor = "yellow";
});

// ---------- .lastElementChild ----------

const ulElements = document.querySelectorAll("ul");

ulElements.forEach(ulElement => {
    const lastChild = ulElement.lastElementChild;
    lastChild.style.backgroundColor = "yellow";
});

// ---------- .nextElementSibling ----------

const element = document.getElementById("vegetables");
const nextSibling = element.nextElementSibling;
nextSibling.style.backgroundColor = "yellow";

// ---------- .previousElementSibling ----------

const element = document.getElementById("desserts");
const prevSibling = element.previousElementSibling;
prevSibling.style.backgroundColor = "yellow";

// ---------- .parentElement ----------

const element = document.getElementById("ice cream");
const parent = element.parentElement;
parent.style.backgroundColor = "yellow";

// ---------- .children ----------

const element = document.getElementById("fruits");
const children = element.children;

Array.from(children).forEach(child => {
    child.style.backgroundColor = "yellow";
});

// ---------- EXAMPLE 1 h1 ELEMENT ----------

// STEP 1 CREATE THE ELEMENT
const newH1 = document.createElement("h1");

// STEP 2 ADD ATTRIBUTES/PROPERTIES
newH1.textContent = "I like pizza!";
newH1.id = "myH1";
newH1.style.color = "tomato";
newH1.style.textAlign = "center";

// STEP 3 APPEND ELEMENT TO DOM
document.body.append(newH1);
// document.body.prepend(newH1);
// document.getElementById("box1").append(newH1);
// document.getElementById("box1").prepend(newH1);

// const box4 = document.getElementById("box4");
// document.body.insertBefore(newH1, box4);

// const boxes = document.querySelectorAll(".box");
// document.body.insertBefore(newH1, boxes[0]);

// REMOVE HTML ELEMENT
// document.body.removeChild(newH1);
// document.getElementById("box1").removeChild(newH1);

// ---------- EXAMPLE 2 li ELEMENT ----------

// STEP 1 CREATE THE ELEMENT
const newListItem = document.createElement("li");

// STEP 2 ADD ATTRIBUTES/PROPERTIES
newListItem.textContent = "coconut";
newListItem.id = "coconut";
newListItem.style.fontWeight = "bold";
newListItem.style.backgroundColor = "lightgreen";

// STEP 3 APPEND ELEMENT TO DOM
document.body.append(newListItem);
// document.body.prepend(newListItem);
// document.getElementById("fruits").append(newListItem);
// document.getElementById("fruits").prepend(newListItem);

// const banana = document.getElementById("banana");
// document.getElementById("fruits").insertBefore(newListItem, banana);

// const listItems = document.querySelectorAll("#fruits li");
// document.getElementById("fruits").insertBefore(newListItem, listItems[1]);

// REMOVE HTML ELEMENT
// document.body.removeChild(newLink);
// document.getElementById("fruits").removeChild(newListItem);
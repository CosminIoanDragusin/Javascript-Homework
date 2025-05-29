const fruits = [ {name: "apple", color: "red", calories: 95}, 
                          {name: "orange", color: "orange", calories: 45}, 
                          {name: "banana", color: "yellow", calories: 105}, 
                          {name: "coconut", color: "white", calories: 159}, 
                          {name: "pineapple", color: "yellow", calories: 37}];

// Access properties of a fruit object
console.log(fruits[0].calories);

// Add a new fruit object
fruits.push({ name: "grapes", color: "purple", calories: 62});

// Remove the last fruit object
fruits.pop();

// Remove fruit objects by indices
fruits.splice(1, 2);

// ---------- forEach() ----------
fruits.forEach(fruit => console.log(fruit));
fruits.forEach(fruit => console.log(fruit.name));
fruits.forEach(fruit => console.log(fruit.color));
fruits.forEach(fruit => console.log(fruit.calories));

// ---------- map() ----------
const fruitNames = fruits.map(fruit => fruit.name);
const fruitColors = fruits.map(fruit => fruit.color);
const fruitCalories = fruits.map(fruit => fruit.calories);

console.log(fruitNames);
console.log(fruitColors);
console.log(fruitCalories);

// ---------- filter() ----------
const yellowFruits = fruits.filter(fruit => fruit.color === "yellow");
const lowCalFruits = fruits.filter(fruit => fruit.calories < 100);
const highCalFruits = fruits.filter(fruit => fruit.calories >= 100);

console.log(yellowFruits);
console.log(lowCalFruits);
console.log(highCalFruits);

// ---------- reduce() ----------
const maxFruit = fruits.reduce( (max, fruit) =>
                                                        fruit.calories > max.calories ?
                                                        fruit : max);

const minFruit = fruits.reduce( (min, fruit) =>
                                                       fruit.calories < min.calories ?
                                                       fruit : min);

console.log(maxFruit);
console.log(minFruit);

// sort() = method used to sort elements of an array in place.
//               Sorts elements as strings in lexicographic order, not alphabetical
//               lexicographic = (alphabet + numbers + symbols) as strings

// ---------- EXAMPLE 1 ----------
const numbers = [1, 10, 2, 9, 3, 8, 4, 7, 5, 6];

numbers.sort((a, b) => a - b); //FORWARD
numbers.sort((a, b) => b - a); //REVERSE

console.log(numbers);

// ---------- EXAMPLE 2 ----------
const people = [{name: "Spongebob", age: 30, gpa: 3.0},
                            {name: "Patrick", age: 37, gpa: 1.5},
                            {name: "Squidward", age: 51, gpa: 2.5},
                            {name: "Sandy", age: 27, gpa: 4.0}]

people.sort((a, b) => a.age - b.age); //FORWARD
people.sort((a, b) => b.age - a.age); //REVERSE

people.sort((a, b) => a.gpa - b.gpa); //FORWARD
people.sort((a, b) => b.gpa - a.gpa); //REVERSE

people.sort((a, b) => a.name.localeCompare(b.name)); //FORWARD
people.sort((a, b) => b.name.localeCompare(a.name)); //REVERSE

console.log(people);

// Fisher-Yates algorithm

const cards = ['A', 2, 3, 4, 5, 6, 7, 8, 9, 10, 'J', 'Q', 'K'];

shuffle(cards);

console.log(cards);

function shuffle(array){
    for(let i = array.length - 1; i > 0; i--){
        const random = Math.floor(Math.random() * (i + 1));

        [array[i], array[random]] = [array[random], array[i]];
    }
}
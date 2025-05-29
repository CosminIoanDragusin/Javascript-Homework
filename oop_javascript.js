// object = A collection of related properties and/or methods
//                Can represent real world objects (people, products, places)
//                object = {key:value,
//                               function()}

const person1 = {
    firstName: "Spongebob",
    lastName: "Squarepants",
    age: 30,
    isEmployed: true,
    sayHello: function(){console.log("Hi! I am Spongebob!")},
    eat: function(){console.log("I am eating a Krabby Patty")},
}

const person2 = {
    firstName: "Patrick",
    lastName: "Star",
    age: 42,
    isEmployed: false,
    sayHello: () => console.log("Hey, I'm Patrick..."),
    eat: () => console.log("I am eating roast beef, chicken, and pizza"),
}

console.log(person1.firstName);
console.log(person2.firstName);

person1.sayHello();
person1.eat();
person2.sayHello();
person2.eat();

// this = reference to the object where THIS is used
//           (the object depends on the immediate context)

const person3 = {
    name: "Spongebob",
    favFood: "hamburgers",
    sayHello: function(){console.log(`Hi! I am ${this.favFood}`)},
    eat: function(){console.log(`${this.name} is eating ${this.favFood}`)}
}
const person4 = {
    name: "Patrick",
    favFood: "pizza",
    sayHello: function(){console.log(`Hi! I am ${this.favFood}`)},
    eat: function(){console.log(`${this.name} is eating ${this.favFood}`)}
}

person3.eat();
person4.eat();

// constructor = special method for defining the
//                          properties and methods of objects

function Car(make, model, year, color){
    this.make = make,
    this.model = model,
    this.year = year,
    this.color = color,
    this.drive = function(){console.log(`You drive the ${this.model}`)}
}

const car1 = new Car("Ford", "Mustang", 2024, "red");
const car2 = new Car("Chevrolet", "Camaro", 2025, "blue");
const car3 = new Car("Dodge", "Charger", 2026, "silver");

car1.drive();
car2.drive();
car3.drive();

console.log(car1.make);
console.log(car1.model);
console.log(car1.year);
console.log(car1.color);

console.log(car2.make);
console.log(car2.model);
console.log(car2.year);
console.log(car2.color);

console.log(car3.make);
console.log(car3.model);
console.log(car3.year);
console.log(car3.color);

// class = (ES6 feature) provides a more structured and cleaner way to 
//               work with objects compared to traditional constructor functions
//               ex. static keyword, encapsulation, inheritance

class Product{
    constructor(name, price){
        this.name = name;
        this.price = price;
    }

    displayProduct(){
        console.log(`Product: ${this.name}`);
        console.log(`Price: $${this.price.toFixed(2)}`);
    }

    calculateTotal(salesTax){
        return this.price + (this.price * salesTax);
    }
}

const salesTax = 0.05;

const product1 = new Product("Shirt", 19.99);
const product2 = new Product("Pants", 22.50);
const product3 = new Product("Underwear", 100.00);

product1.displayProduct();

const total = product1.calculateTotal(salesTax);
console.log(`Total price (with tax): $${total.toFixed(2)}`);

// static = keyword that defines properties or methods that belong 
//               to a class itself rather than the objects created
//               from that class (class owns anything static, not the objects)

// ------------ EXAMPLE 1 ------------
class MathUtil{
    static PI = 3.14159;

    static getDiameter(radius){
        return radius * 2;
    }
    static getCircumference(radius){
        return 2 * this.PI * radius;
    }
    static getArea(radius){
        return this.PI * radius * radius;
    }
}

console.log(MathUtil.PI);
console.log(MathUtil.getDiameter(10));
console.log(MathUtil.getCircumference(10));
console.log(MathUtil.getArea(10));

// ------------ EXAMPLE 2 ------------

class User{

    static userCount = 0;

    constructor(username){
        this.username = username;
        User.userCount++;
    }

    static getUserCount(){
        console.log(`There are ${User.userCount} users online`);
    }
    sayHello(){
        console.log(`Hello, my username is ${this.username}`);
    }
}

const user1 = new User("Spongebob");
const user2 = new User("Patrick");
const user3 = new User("Sandy");

user1.sayHello();
user2.sayHello();
user3.sayHello();
User.getUserCount();

// inheritance = allows a new class to inherit properties and methods 
//                         from an existing class (parent -> child)
//                         helps with code reusability

class Animal{

    alive = true;

    eat(){
        console.log(`This ${this.name} is eating`);
    }
    sleep(){
        console.log(`This ${this.name} is sleeping`);
    }
}

class Rabbit extends Animal{

    name = "rabbit";

    run(){
        console.log(`This ${this.name} is running`);
    }
}

class Fish extends Animal{

    name = "fish";

    swim(){
        console.log(`This ${this.name} is swimming`);
    }
}

class Hawk extends Animal{
    
    name = "hawk";

    fly(){
        console.log(`This ${this.name} is flying`);
    }
}

const rabbit = new Rabbit();
const fish = new Fish();
const hawk = new Hawk();

console.log(rabbit.alive);
rabbit.eat();
rabbit.sleep();
rabbit.run();

// super = keyword is used in classes to call the constructor or
//              access the properties and methods of a parent (superclass)
//              this = this object
//              super = the parent

class Animal{

    constructor(name, age){
        this.name = name;
        this.age = age;
    }

    move(speed){
        console.log(`The ${this.name} moves at a speed of ${speed}mph`);
    }
}

class Rabbit extends Animal{

    constructor(name, age, runSpeed){
        super(name, age);
        this.runSpeed = runSpeed;
    }

    run(){
        console.log(`This ${this.name} can run`);
        super.move(this.runSpeed);
    }
}

class Fish extends Animal{
    
    constructor(name, age, swimSpeed){
        super(name, age);
        this.swimSpeed = swimSpeed;
    }

    swim(){
        console.log(`This ${this.name} can swim`);
        super.move(this.swimSpeed);
    }
}

class Hawk extends Animal{
    
    constructor(name, age, flySpeed){
        super(name, age);
        this.flySpeed = flySpeed;
    }

    fly(){
        console.log(`This ${this.name} can fly`);
        super.move(this.flySpeed);
    }
}

const rabbit1 = new Rabbit("rabbit", 1, 25);
const fish1 = new Fish("fish", 2, 12);
const hawk1 = new Hawk("hawk", 3, 50);

rabbit1.run();
fish1.swim();
hawk1.fly();

// ---------- EXAMPLE 1 ----------
class Rectangle{

    constructor(width, height){
        this.width = width;
        this.height = height;
    }

    set width(newWidth){
        if(newWidth > 0){
            this._width = newWidth;
        }
        else{
            console.error("Width must be a positive number");
        }
    }

    set height(newHeight){
        if(newHeight > 0){
            this._height = newHeight;
        }
        else{
            console.error("Height must be a positive number");
        }
    }


    get width(){
        return `${this._width.toFixed(1)}cm`;
    }
   
    get height(){
        return `${this._height.toFixed(1)}cm`;
    }


    get area(){
        return `${(this._width * this._height).toFixed(1)}cm`;
    }
}

const rectangle = new Rectangle(2, 3);

console.log(rectangle.width);
console.log(rectangle.height);
console.log(rectangle.area);

// ---------- EXAMPLE 2 ----------
class Person{

    constructor(firstName, lastName, age){
        this.firstName = firstName;
        this.lastName = lastName;
        this.age = age;
    }

    set firstName(newFirstName){
        if(typeof newFirstName === "string" && newFirstName.length > 0){
            this._firstName = newFirstName;
        }
        else{
            console.error("First name must be a non-empty string");
        }
    }

    set lastName(newLastName){
        if(typeof newLastName === "string" && newLastName.length > 0){
            this._lastName = newLastName;
        }
        else{
            console.error("Last name must be a non-empty string");
        }
    }

    set age(newAge){
        if(typeof newAge === "number" && newAge >= 0){
            this._age = newAge;
        }
        else{
            console.error("Age must be a non-negative number");
        }
    }
    
    get firstName(){
        return this._firstName;
    }

    get lastName(){
        return this._lastName;
    }

    get fullName(){
        return this._firstName + " " + this._lastName;
    }

    get age(){
        return this._age;
    }
}

const person = new Person("Spongebob", "Squarepants", 30);

console.log(person.firstName);
console.log(person.lastName);
console.log(person.fullName);
console.log(person.age);

// destructuring =  extract values from arrays and objects,
//                              then assign them to variables in a convenient way
//                              [] = to perform array destructuring
//                              {} = to perform object destructuring

// ---------- EXAMPLE 1 ----------
// SWAP THE VALUE OF TWO VARIABLES

let a = 1;
let b = 2;

[a, b] = [b, a];

console.log(a);
console.log(b);

// ---------- EXAMPLE 2 ----------
// SWAP 2 ELEMENTS IN AN ARRAY

const colors = ['red', 'green', 'blue', 'black', 'white'];

[colors[0], colors[4]] = [colors[4], colors[0]]

console.log(colors);

// ---------- EXAMPLE 3 ----------
// ASSIGN ARRAY ELEMENTS TO VARIABLES

const [firstColor, secondColor, thirdColor, ...extraColors] = colors;

console.log(firstColor);
console.log(secondColor);
console.log(thirdColor);
console.log(extraColors);

// ---------- EXAMPLE 4 ----------
// EXTRACT VALUES FROM OBJECTS

const person10 = {
  firstName: 'Spongebob',
  lastName: 'Squarepants',
  age: 30,
  job: "Fry cook",
};

const person20 = {
  firstName: 'Patrick',
  lastName: 'Star',
  age: 34
};

const {firstName, lastName, age, job="Unemployed"} = person20;

console.log(firstName);
console.log(lastName);
console.log(age);
console.log(job);

// ---------- EXAMPLE 5 ----------
// DESTRUCTURING IN FUNCTION PARAMETERS

function displayPerson({ firstName, lastName, age, job="Unemployed" }) {
    console.log(`name: ${firstName} ${lastName}`);
    console.log(`age: ${age}`);
    console.log(`job: ${job}`);
}

displayPerson(person10);
displayPerson(person20);

// nested objects = Objects inside of other Objects.
//                               Allows you to represent more complex data structures
//                               Child Object is enclosed by a Parent Object

//                               Person{Address{}, ContactInfo{}}
//                               ShoppingCart{Keyboard{}, Mouse{}, Monitor{}}  

class Person{

    constructor(name, age, ...address){
        this.name = name;
        this.age = age;
        this.address = new Address(...address);
    }
}

class Address{

    constructor(street, city, country){
        this.street = street;
        this.city = city;
        this.country = country;
    }
}

const person11 = new Person("Spongebob", 30, "124 Conch St.", 
                                            "Bikini Bottom", 
                                            "Int. Waters");

const person12 = new Person("Patrick", 37,   "128 Conch St.", 
                                            "Bikini Bottom", 
                                            "Int. Waters");

const person13= new Person("Squidward", 45, "126 Conch St.", 
                                            "Bikini Bottom", 
                                            "Int. Waters");


console.log(person11.name);
console.log(person11.age); 
console.log(person11.address);                                   
console.log(person11.address.street);
console.log(person11.address.city);
console.log(person11.address.country);


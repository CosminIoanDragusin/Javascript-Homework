// Date(year, month, day, hour, minute, second, ms)
const date = new Date(2025, 4, 29,15,3,23);
const date2 = new Date(17000000000); // miliseconds
const date3 = new Date("2025-01-02T12:00:00Z");
const year = date.getFullYear();
const month = date.getMonth();
const hour = date.getHours();
const minutes = date.getMinutes();
const seconds = date.getSeconds();
const dayOfWeek = date.getDay();

console.log(dayOfWeek);
console.log(seconds);
console.log(minutes);
console.log(month);
console.log(year);
console.log(date);
console.log(date2);
console.log(date3);

if(date2 > date){
    console.log("Happy new Year");
}
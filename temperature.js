const textBox = document.getElementById("textBox");
const toFahrenheit = document.getElementById("toFahrenheit");
const toFahrenheit2 = document.getElementById("toFahrenheit2");
const toCelsius = document.getElementById("toCelsius");
const toCelsius2 = document.getElementById("toCelsius2");
const toKelvin = document.getElementById("toKelvin");
const toKelvin2 = document.getElementById("toKelvin2");
let result = document.getElementById("result");
let temp;

function convert(){
    if(toFahrenheit.checked){
        temp = Number(textBox.value);
        temp = temp * 9 / 5 + 32;
        result.textContent = temp + "F"
    }
    else if(toFahrenheit2.checked){
        temp = Number(textBox.value);
        temp = (temp-273) * 9 / 5 + 32;
        result.textContent = temp + "F"
    }
    else if(toCelsius.checked){
        temp = Number(textBox.value);
        temp = (temp - 32) * 5 / 9;
        result.textContent = temp + "C"
    }
    else if(toCelsius2.checked)
    {
        temp = Number(textBox.value);
        temp = temp - 273;
        result.textContent = temp + "C"
    }
    else if(toKelvin.checked){
        temp = Number(textBox.value);
        temp = temp + 273;
        result.textContent = temp + "K"
    }
    else if(toKelvin2.checked){
        temp = Number(textBox.value);
        temp = (temp - 32) * 5 / 9 + 273;
        result.textContent = temp + "K"
    }
}
let btn = document.querySelector(".btn")

btn.addEventListener("click", ()=>{

let num = document.querySelector(".num").value;
num = Number(num);

let one = document.querySelector(".one")
let two = document.querySelector(".two")
let three = document.querySelector(".three")

one.innerText = "Fahrenheit: " + ((num * 9 / 5) + 32).toFixed(2) + " (°F)";
    two.innerText = "Kelvin: " + (num + 273.15).toFixed(2) + " (K)";
    three.innerText = "Réaumur: " + (num * 4 / 5).toFixed(2) + " (°Re)"; 



});
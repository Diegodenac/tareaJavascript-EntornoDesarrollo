import sumar from "./sumador";
import multiplicar from "./multiplicador";

const first = document.querySelector("#primer-numero");
const second = document.querySelector("#segundo-numero");
const firstM = document.querySelector("#primer-numero-M");
const secondM = document.querySelector("#segundo-numero-M");
const form = document.querySelector("#sumar-form");
const formMultiply = document.querySelector("#multiplicar-form");
const div = document.querySelector("#resultado-div");
const divMultiply = document.querySelector("#resultado-multiplicacion-div");

form.addEventListener("submit", (event) => {
  event.preventDefault();

  const firstNumber = Number.parseInt(first.value);
  const secondNumber = Number.parseInt(second.value);

  div.innerHTML = "<p>" + sumar(firstNumber, secondNumber) + "</p>";
});
formMultiply.addEventListener("submit", (event)=> {
  event.preventDefault();

  const firstNumber = Number.parseInt(firstM.value);
  const secondNumber = Number.parseInt(secondM.value);

  divMultiply.innerHTML = "<p>" + multiplicar(firstNumber, secondNumber) + "</p>";
});
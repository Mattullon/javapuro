//agregar otro manejador de evento de teclado + -
//sacar la funcion addEvent listener y llamar a esa funcion desde esa funcion
// investigar document
// investigar la variable windonw
//(e) => { count = eve(e,cont,value)}

import { eve } from "./funciones.js";
let count = 0;
const value = document.querySelector("#value");
const btns = document.querySelectorAll(".btn");

btns.forEach((btn) => {
  btn.addEventListener("click", (e) => {
    count = eve(e, count);
    value.textContent = count;
  });
});

document.addEventListener("keydown", tecla);



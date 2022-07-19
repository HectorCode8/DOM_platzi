
const h1 = document.querySelector('h1');
const p = document.querySelector('p');
const parrafito = document.querySelector('#parrafito');
const pid = document.querySelector('p');
const input1 = document.querySelector('#calculo1');
const input2 = document.querySelector('#calculo2');
const btn = document.querySelector('#btnCalcular');
const res = document.querySelector('#resultado');
const form = document.querySelector('#form');

form.addEventListener('submit', suma);

function suma(e) {
    e.preventDefault();
    const num1 = parseInt(input1.value);
    const num2 = parseInt(input2.value);
    const resultado = num1 + num2;
    res.innerHTML = resultado;
}



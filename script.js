
const contador = document.getElementById('count');
const decrementar = document.getElementById('decrement');
const resetar = document.getElementById('reset');
const incrementar = document.getElementById('increment'); 

let numero = 0;

contador.innerText = numero;

decrementar.addEventListener('click', () => {
    numero = numero - 1;
    contador.innerText = numero;
});

resetar.addEventListener('click', () => {
    numero = 0;
    contador.innerText = numero;
});

incrementar.addEventListener('click', () => {
    numero = numero + 1;
    contador.innerText = numero;
});
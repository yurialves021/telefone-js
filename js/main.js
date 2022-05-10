function preencheInput(numero) {
    const input = document.querySelector('.texto');
    input.value += numero;
}

const listaDeTeclas = document.querySelectorAll('.tecla');

for (let i = 0; i < listaDeTeclas.length; i++) {
    const tecla = listaDeTeclas[i];

    const numero = tecla.value;

    tecla.onclick = function () {
        preencheInput(numero);
    }
}
let divText1 = document.querySelector('.exercise1');

function startWhile() {
    divText1.classList.toggle('exercise1Active');

    const INDICE = 13;
    let SOMA = 0;
    let K = 0;

    while (K < INDICE) {
        K++;
        SOMA = SOMA + K;
    }

    let sum = document.querySelector('.sum');
    let textSum =  document.createTextNode("Soma: " + SOMA + " ");
    sum.appendChild(textSum);
}
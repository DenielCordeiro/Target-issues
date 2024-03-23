let divText2 = document.querySelector('.exercise2');

function startFibonacci() {
    divText2.classList.toggle('exercise2Active');

    let valor = 0;
    let valor2 = 1;
    let nextValue = 0;
    let valueEntered = 60;

    let textValueEntered =  document.createTextNode("O valor digitado é: " + valueEntered);
    let showValueEntered = document.querySelector('.value-entered');

    showValueEntered.appendChild(textValueEntered);

    nextValue = valor + nextValue;
   
    if(valueEntered > 70) {
        alert('[Erro]: digite um valor menor do que 70');
    } else {
        while (nextValue <= valueEntered) {
            valor = valor2;
            valor2 = nextValue;
            nextValue = valor + valor2;

            if(nextValue > 70) {
                let finalMessage = document.querySelector('.final-message');

                textFibonacci = document.createTextNode("Limetei em 70!");
                finalMessage.appendChild(textFibonacci);
            } else {
                let sequence = document.createTextNode(nextValue + " ");
                let values =  document.querySelector('.sequence-values');

                values.appendChild(sequence);
            }            
        }
    }    
}
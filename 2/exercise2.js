let divText2 = document.querySelector('.exercise2');

function infoValue() {
    divText2.classList.toggle('exercise2Active');
}

function getValue() {
    const valueEntered = document.querySelector('.value-entered');
    const value = Number(valueEntered.value);
 
    this.startFibonacci(value);
}

function startFibonacci(valueEntered) {
    let valor = 0;
    let valor2 = 1;
    let nextValue = 0;

    let showValueEntered = document.querySelector('.show-value-entered');
    let textValueEntered =  document.createTextNode("O valor digitado é: " + valueEntered);
    showValueEntered.appendChild(textValueEntered);

    nextValue = valor + nextValue;

    let showInfoSequence = document.querySelector('.info-sequence');
    let infoSequence = document.createTextNode('Sequencia de fibonacci: ');
    showInfoSequence.appendChild(infoSequence);
   
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

            let compareValue = document.querySelector('.compare-value');
            
            if (valueEntered == nextValue) {
                let textCompareValue = document.createTextNode('Este valor pertence a sequencia de Fibonacci.')
                compareValue.appendChild(textCompareValue);
                break
            } else if (valueEntered < nextValue && valueEntered != nextValue) {
                let textCompareValue = document.createTextNode('Este não pertence a sequencia de Fibonacci.')
                compareValue.appendChild(textCompareValue);
            }
        }
    }    
}
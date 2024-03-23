function startFibonacci() {
    let valor = 0;
    let valor2 = 1;
    let nextValue = 0;
    let valueEntered = 60;
    
    console.log('valor digitado: ', valueEntered);

    console.log(valor);

    nextValue = valor + nextValue;
   
    if(valueEntered > 70) {
        alert('[Erro]: digite um valor menor do que 70');
    } else {
        while (nextValue <= valueEntered) {
            valor = valor2;
            valor2 = nextValue;
            nextValue = valor + valor2;

            if(nextValue > 70) {
                console.log('Acabou!');
            } else {
                console.log(nextValue);
            }            
        }
    }    
}
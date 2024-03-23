let divText5 = document.querySelector('.exercise5');

function infoString() {
    divText5.classList.toggle('exercise5Active');
}

function getString() {
    const textEntered = document.querySelector('#text-entered');
    const builtText = String(textEntered.value);

    this.transformString(builtText);
}

function transformString(text) {
    console.log(text);
    // const boxString = [];
    // boxString.push(Name);
}
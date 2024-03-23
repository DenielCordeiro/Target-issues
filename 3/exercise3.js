let divText3 = document.querySelector('.exercise3');

function logicalSequencing() {
    divText3.classList.toggle('exercise3Active');

    let a = [1, 3, 5, 7, 9];
    let b = [2, 4, 8, 16, 32, 64, 128];
    let c = [0, 1, 4, 9, 16, 25, 36, 49];
    let d = [4, 16, 36, 64, 100];
    let e = [1, 1, 2, 3, 5, 8, 13];
    let f = [2,10, 12, 16, 17, 18, 19, 200];

    const letterA = document.querySelector('.letter-a');
    const letterB = document.querySelector('.letter-b');
    const letterC = document.querySelector('.letter-c');
    const letterD = document.querySelector('.letter-d');
    const letterE = document.querySelector('.letter-e');
    const letterF = document.querySelector('.letter-f');

    textLetterA = document.createTextNode("Letra A: " + a);
    textLetterB = document.createTextNode("Letra B: " + b);
    textLetterC = document.createTextNode("Letra C: " + c);
    textLetterD = document.createTextNode("Letra D: " + d);
    textLetterE = document.createTextNode("Letra E: " + e);
    textLetterF = document.createTextNode("Letra F: " + f);

    letterA.appendChild(textLetterA);
    letterB.appendChild(textLetterB);
    letterC.appendChild(textLetterC);
    letterD.appendChild(textLetterD);
    letterE.appendChild(textLetterE);
    letterF.appendChild(textLetterF);
}

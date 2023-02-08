/* Palidroma */
//const nome = parseInt(prompt("inserisci nome"));

/* Pari e Dispari */

//inserire numero
let input = parseInt(prompt("inserisci numero da 1 a 5"));
while (input <= 5) {
    input = parseInt(prompt("inserisci numero da 1 a 5"));
    console.log('ok')
}

console.log('numero casuale: ' + random());

//sommare input e random
somma = input + random();
console.log('la somma: ' + somma);

pariDispari(somma);


//generare numero random con funzione
function random(numRandom) {
    numRandom = Math.floor(Math.random() * 5);
    return numRandom;
}

//funzione pari dispari
function pariDispari(num) {
    if (num % 2 == 0) {
        console.log('pari');
    } else {
        console.log('dispari');
    }
}
/* Palidroma */
const nome = parseInt(prompt("inserisci nome"));
/*function palindromo(nome) {
    let lowerCaseStr = nome.toLowerCase();
    let strLength = lowerCaseStr.length;
    let halfLength = Math.floor(strLength / 2);
  
    for (let i = 0; i < halfLength; i++) {
      if (lowerCaseStr[i] !== lowerCaseStr[strLength - 1 - i]) {
        console.log('non è polimorfa')
      }
    }
  
    console.log(' è polimorfa')
  }
  
/* Pari e Dispari */

//inserire numero
let input;
do {
    input = parseInt(prompt("inserisci numero da 1 a 5"));
} while (input > 5)

console.log('numero casuale: ' + random());

//sommare input e random
somma = input + random();
console.log('la somma: ' + somma);

pariDispari(somma);


//generare numero random con funzione
function random() {
    return Math.floor(Math.random() * 5);
}

//funzione pari dispari
function pariDispari(num) {
    if (num % 2 == 0) {
        console.log('pari');
    } else {
        console.log('dispari');
    }
}
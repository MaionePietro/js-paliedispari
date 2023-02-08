


// Pari e Dispari

//inserire numero
const input = parseInt(prompt("inserisci 1 per pari 2 per dispari"));
console.log('hai inserito: '+input);

//generare numero random con funzione

function random(numRandom){
    numRandom = Math.floor(Math.random()*5);
    return numRandom;
}
console.log('numero casuale: '+ random());

//sommare input e random
somma = input + random;
console.log('la somma: '+somma);
//funzione pari dispari

function pariDispari(num){
    if(num%2==0){
        console.log('pari');
    }else{
        console.log('dispari');
    }
}

pariDispari(somma);
function randomNumbers(min, max) {
     
      return Math.floor(Math.random()*(min, max)+min)
}

/*
  ho creato una semplice funzione che mi permette di generare un numero random tra 1 e 6
*/
let numeroUtente = randomNumbers(1,6);
let numeroPc = randomNumbers(1,6)
console.log(numeroUtente, numeroPc);


if(numeroPc > numeroUtente){
    console.log(`ha vinto il computer con questo numeo ${numeroPc} mentre il concorrente umano aveva : ${numeroUtente}`);
} else if(numeroPc < numeroUtente){
     console.log(`ha vinto il concorrente umano con questo numero ${numeroUtente} mentre il pc ha perso con questo numero ${numeroPc}`);
} else if(numeroPc === numeroUtente){
    console.log(`un bel pareggio macchina ${numeroPc} umano  ${numeroUtente} `);
}
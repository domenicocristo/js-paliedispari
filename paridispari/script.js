// Pari e Dispari
// L’utente sceglie pari o dispari e inserisce un numero da 1 a 5.
// Generiamo un numero random (sempre da 1 a 5) per il computer (usando una funzione).
// Sommiamo i due numeri
// Stabiliamo se la somma dei due numeri è pari o dispari (usando una funzione)
// Dichiariamo chi ha vinto.

// 1. far scegliere l'utente tra pari e dispari
// 1.2 fargli scegliere un numero da 1 a 5
// 2. generare un numero random per il pc 
// 3. fare la somma dei numeri 
// 4. stabiliamo se la somma è pari o dispari 
// 5. stampiamo il vincitore 

let sceltaUtente1 = prompt("Scegli tra pari e dispari");
let sceltaUtente2 = parseInt(prompt("Scegli un numero da 1 a 5"));

function numerocomputer(min, max) {
    return Math.random() * (max - min) + min;
  }

const numeropc = numerocomputer(1, 5).toFixed(0);
const sum = (sceltaUtente2 + numeropc);
console.log(numeropc);
// Palidroma:
// Chiedere all’utente di inserire una parola
// Creare una funzione per capire se la parola inserita è palindroma.
// Dare l’output relativo.

// chiedo la parola all'utente
var word = prompt("Inserisci una parola");

var reverseword = inverterword(word);

// se la parola inverita è uguale stampo if altrimenti else
if(word == reverseword){
    console.log('la parola è palindroma');
  } else {
    console.log('la parola non è palindroma');
  }
  
// funzione 
function inverterword(word){
  var wordInverter = word.split('').reverse().join('');  
  return wordInverter;
}
`Partendo dall'esercizio Le Callback - 5, includi la gestione degli errori. Se la funzione di callback genera un errore, catturalo e gestiscilo.
Modificare la funzione performOperation per gestire l'errore e registrare un messaggio di errore.`




function performOperation(a, b, callback) {
  let sum = (a + b)
  if (sum <= 10) {
    callback(null,sum)
  } else {
    callback(new Error("toppo basso"),null)   /////credo di aver capito, dovrebbe dare (error, result) ma al posto di result ce null quindi appare solo il parametro error
  }

}

function displayResult(error,result) {
  if (error) {
    console.log(error);
  } else {
    console.log(`Il risultato è ${result}`);
  }
}


performOperation(5, 3, displayResult);

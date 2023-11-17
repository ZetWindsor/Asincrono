`Partendo dall'esercizio Le Callback - 5, includi la gestione degli errori. Se la funzione di callback genera un errore, catturalo e gestiscilo.
Modificare la funzione performOperation per gestire l'errore e registrare un messaggio di errore.`


function performOperation(a, b, callback) {

  try {
    let sum = (a + b);
    console.log(`sommiamo ${a} e ${b}`);
    callback(null, sum)
  }
  catch (error) {
    console.error("Si è verificato un errore:", error);
    callback(error, null);
  }}

function displayResult(error,result) {
  if (error) {
    console.error("Errore nella funzione di callback:", error);
  } else {
    console.log(`Il risultato è ${result}`);
  }
}

performOperation(5, 3, displayResult);
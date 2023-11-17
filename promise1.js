`Riscrivi la funzione fetchDataFromAPI dell'esercizio Le Callback - 6 utilizzando Promises per una migliore gestione degli errori.
La promise dovrebbe risolversi con i dati e rifiutare con un messaggio di errore.`



function fetchDataFromAPI(callback) {
 return new Promise((resolve, reject))

  setTimeout(function () {
    let data = { name: "John", age: 30 };
    callback(data)}, 2000)

  }


function handleData(data) {
  console.log(data);
}

fetchDataFromAPI(handleData);
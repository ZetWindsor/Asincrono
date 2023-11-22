`Dato l'oggetto { name: "John", age: 30 } crea una funzione che simula un'operazione asincrona, come il recupero dei dati da un'API. 
-Implementare una callback per gestire i dati recuperati. -Utilizzare setTimeout per simulare il ritardo dell'operazione.`

function fetchDataFromAPI(callback) {
  setTimeout(function () {
    let data = { name: "John", age: 30 };
    callback(data)}, 2000)
  }

function handleData(ciao) {
  console.log(ciao);
}

fetchDataFromAPI(handleData);
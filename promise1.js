`Riscrivi la funzione fetchDataFromAPI dell'esercizio Le Callback - 6 utilizzando Promises per una migliore gestione degli errori.
La promise dovrebbe risolversi con i dati e rifiutare con un messaggio di errore.`


function fetchDataFromAPI() {
  return new Promise((resolve, reject) => {
    setTimeout(function () {
      let data = { name: "John", age: 30 };
      if (data.age > 18) {
        resolve(data)
      } else {
        reject(`error : not a vaild data`)
      }
    }, 2000)
  })

}

fetchDataFromAPI().then((data) => console.log(data)).catch((error) => {
  console.log(error)
});;
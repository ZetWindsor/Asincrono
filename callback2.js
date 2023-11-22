`Crea una funzione chiamata delay che accetta una funzione di callback e un ritardo 
temporale in millisecondi come argomenti.
delay dovrebbe eseguire la funzione di callback dopo il ritardo specificato.`


function delay(callback, delayTime) {
setTimeout(callback, delayTime)
}


function sayHi() {
  console.log("Hi, there!");
}

delay(sayHi, 2000); // Should log "Hi, there!" after a 2-second delay.
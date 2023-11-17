/* Crea una funzione chiamata "contoAllaRovescia" che diminuirà il conto alla rovescia di 1 unità e visualizzerà il tempo rimanente in console.
Utilizza setInterval per chiamare la funzione contoAllaRovescia ogni secondo.
Visualizza il messaggio "Conto alla rovescia in corso..." all'inizio.
Quando il conto alla rovescia raggiunge 0, visualizza un messaggio che indica che il conto alla rovescia è terminato.*/



function contoAllaRovescia() {
  console.log("Conto alla rovescia in corso");
  let tempoRimanenete = 10;

  let id =setInterval(function () {
    console.log(tempoRimanenete);
    tempoRimanenete--;
    if (tempoRimanenete < 0){
      console.log(`tempo scaduto`);
      clearInterval(id)
    }
},1000)

}

contoAllaRovescia()
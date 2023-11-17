`Convertire la seguente funzione basata su callback in una funzione basata su Promise.`

/* function callback_BasedFunction(arg1, arg2, callback) { 
  setTimeout(() => { 
  const result = arg1 + arg2; 
  if (result % 2 !== 0) { 
  callback(null, result); 
  } else { 
  callback(new Error('Result is not odd!'), null); } }, 1000);
  } */


function basedFunction(arg1, arg2) {
  return new Promise((resolve, reject) => {

    setTimeout(() => {
      const result = arg1 + arg2;
      if (result % 2 !== 0) {
        resolve(result);
      } else {
        reject(new Error(`Result is not odd`));
      }
    },2000);
  });
}

basedFunction(2, 2).then(result => {
  console.log(`il risultato è ${result}`)
}).catch(error => {
  console.log(`Error:`, error.message);
})
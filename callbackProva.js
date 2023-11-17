function sayHello(name, callback) {
  setTimeout(() => {console.log(`hello, ${name}`)},4000);

  setTimeout(() => { callback() }, 2000)

}

function myCallback() {
  console.log(`ciao`);
}

sayHello(`mario`, myCallback)
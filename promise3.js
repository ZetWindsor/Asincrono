function checkAge(age) {
  return new Promise((resolve , reject)=>{
    setTimeout(()=>{
       if(age >= 18){
    resolve(`maggiorene ${age}`)
  }else{
    reject(`error : minorenne`)}
    },2000)
 
  });
}

console.log(checkAge(17).then((data)=>{
  console.log(data);
}).catch((error)=>{
  console.log(error);
}))
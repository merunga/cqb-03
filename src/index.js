import cipher from './cipher.js';

let myBotonCifrar = document.getElementById("botonCifrar");
let myBotonDescifrar = document.getElementById("botonDescifrar");
let myRange = document.getElementById("rango");
let myValue = 10;

myRange.addEventListener("change",(e)=>{
  myValue = e.target.value;
  //console.log(e.target.value);
})

myBotonCifrar.addEventListener("click", cifrando);
myBotonDescifrar.addEventListener("click", descifrando);


function cifrando() {
  
  let enterText=document.getElementById("input-cifrar").value.toUpperCase();
  document.getElementById("resultado").value= cipher.encode(myValue,enterText);

 
}
function descifrando() {
  let enterText=document.getElementById("input-cifrar").value.toUpperCase();
  document.getElementById("resultado").value= cipher.decode(myValue,enterText);
}

console.log(cipher);
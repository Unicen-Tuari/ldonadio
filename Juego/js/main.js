<!--Mi primer codigo en javascript-->
"use strict"

alert("Donadio esta programando cuidado!");


let indice = 0;

function jugar() {
  //let opcion = document.getElementsByName("opcion").value;
  let opcion = document.getElementById("opcion").value;
  let opciones_pc = ["piedra","papel","tijera"];
  let opcion_pc = opciones_pc[indice];
  let resultado;

  if (opcion_pc === opcion){
    console.log("Entro por igual");
    resultado = 0;<!--empate-->
  }
  else{
    console.log("Entro por distinto");
    switch (opcion) {
      case "piedra":
        if (opcion_pc === "tijera"){
          resultado = 1;<!--Gano usuario-->
        }
        else{
          resultado = 2;<!--Perdio usuario-->
        }
        break;
      case "tijera":
        if (opcion_pc === "papel"){
          resultado = 1;<!--Gano usuario-->
        }
        else{
          resultado = 2;<!--Perdio usuario-->
        }
        break;
      case "papel":
        if (opcion_pc === "piedra"){
          resultado = 1;<!--Gano usuario-->
        }
        else{
          resultado = 2;<!--Perdio usuario-->
        }
        break;
        default:
          alert("La palabra ingresada no es correcta");

    }
 }
 switch (resultado) {
   case 0: alert("Empate declarado");
          break;
   case 1: alert("Gano usted, hay revancha?");
          break;
   case 2: alert("Usted ha sido derrotado");
  }
  indice = indice +1;
  if (indice===3){
    indice = 0;
  }
}

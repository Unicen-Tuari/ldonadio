<!--Mi primer codigo en javascript-->
"use strict"

alert("Donadio esta programando cuidado!");


let indice = 0;

function jugar() {
  //let opcion = document.getElementsByName("opcion").value;
  let opcion = document.getElementById("opcion").value;
  let opciones_pc = ["piedra","papel","tijera"];
  let opcion_pc = opciones_pc[indice];

  if (opcion_pc === opcion){
    console.log("Entro por igual");
    return 0;<!--empate-->
  }
  else{
    console.log("Entro por distinto");
    switch (opcion) {
      case opcion:"piedra"
        if (opcion_pc === "tijera"){
          return 1;<!--Gano usuario-->
        }
        else if (false) {
          return 3;<!--Perdio usuario-->
        }
        break;
      case opcion:"tijera"
        if (opcion_pc === "papel"){
          return 1;<!--Gano usuario-->
        }
        else if (false) {
          return 3;<!--Perdio usuario-->
        }
        break;
      case opcion:"papel"
        if (opcion_pc === "piedra"){
          return 1;<!--Gano usuario-->
        }
        else if(false){
          return 3;<!--Perdio usuario-->
        }
        default:
          alter("La palabra ingresada no es correcta");

    }

  }
  indice = indice +1;
  if (indice===3){
    indice = 0;
  }
}

'use strict'
function BinarioADecimal(num) {
  /*
  input "110" (me fijo en el CStest)
  output 6
  
  convertir el string en array
  
  [1,1,0]
  
  dar vuelta el array (porque va de derecha a izquierda)
  
  [0,1,1]
  
  recorrer el array usando la posicion
  
  usar la posicion como factor para elevar la base,2, a ese factor
  
  multiplicar el resultado por el valor del elemento del array
  
  sumar los resultados
  */

  var data = num.split(""); // con esto obtengo el array [1,1,0] a partir del string inicial
  data = data.reverse() // [0,1,1]
  var result = 0; //enter, enter, enter, enter y al final return result.
  for (var i = 0; i < data.length; i++) {
    var factor = 2 ** i // o sea Math.pow(2, i)
    result = result + (factor * data[i]) // o result += factor * data[i]
  }
  return result;
}

//O

function BinarioADecimal(num) {
  var resultado = 0
  num = num.split("")
  num = num.reverse()
  num.forEach(function (value, index) {
    resultado = resultado + value * 2 ** index;
  });
  return resultado;
}

//O

function BinarioADecimal(num) {
  var result = 0
  num = num.split("");
  num = num.reverse();
  num.forEach(function (value, index) {
    const potencia = 2 ** index;
    result = result + potencia * value;
  });
  return result;
}
BinarioADecimal("110") //tira 6

//O con arrow

function BinarioADecimal(num) {
  var result = 0
  num = num.split("");
  num = num.reverse();
  num.forEach((value, index) => {
    const potencia = 2 ** index;
    result = result + potencia * value;
  });
  return result;
}
BinarioADecimal("110")

//O

function BinarioADecimal(num) {
  return num
    .split("")
    .reverse()
    .reduce(function (acc, el, i) {
      return acc + 2 ** i * el;
    }, 0);
}
BinarioADecimal("110") //tira 6

//O con arrow

function BinarioADecimal(num) {
  return num
    .split("")
    .reverse()
    .reduce((acc, el, i) => {
      return acc + 2 ** i * el;
    }, 0);
}
BinarioADecimal("110") //tira 6 




function DecimalABinario(num) {
  /*
dividir num entre 2 hasta que llegue a 0

quedarme con resultado entero (sin el valor decimal) y el resto 

ir recordando los restos

revertir el orden de los restos y agruparlos para devolverlo como string

*/
  let resto = "";
  while (num > 0) {
    resto = (num % 2) + resto; // me va agregando los restos invertidos al ""; si hacía resto+= despues tenía que hacer un reverse
    num = Math.floor(num / 2); //lo redondea para abajo y da el entero sin decimal.
  }
  return resto;
}

//O


function DecimalABinario(num) {
  var result = [];
  while (num > 0) {
    result.unshift(num % 2);  //me lo sube al final del array, es como invertirlo
    num = Math.floor(num / 2);
  }
  return result.join("");
}
DecimalABinario(6) //tira "110"



module.exports = {
  BinarioADecimal,
  DecimalABinario,
}
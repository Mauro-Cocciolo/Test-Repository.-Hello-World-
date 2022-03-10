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
  
  var data = num.split (""); // con esto obtengo el array [1,1,0] a partir del string inicial
  data = data.reverse() // [0,1,1]
  var result = 0; //enter, enter, enter, enter y al final return result.
  for (var i = 0; i < data.length; i++){
       var factor = 2 ** i // o sea Math.pow(2, i)
       result = result + (factor * data[i]) // o result += factor * data[i]
  }
  return result;
  }
  
  

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
    num = Math.floor(num / 2); //lo redondea para abajo y da el entero sin decimal
  }
  return resto;
}


module.exports = {
  BinarioADecimal,
  DecimalABinario,
}
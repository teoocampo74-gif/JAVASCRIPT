/** let saludo = "hola mundo javascript";
console.log(saludo.length)

let texto1 = "hola magola"
console.log(texto1.indexOf('paila'))

console.log(texto1.lastIndexOf('hola')) **/

var str = "Bienvenidos a todos JAVASCRIPT";

var pos1 = str.lastIndexOf("SCRIPT", 15); // IndexOF sirve para devolver la posicion donde encuentra por primera vez la palabra  
var pos2 = str.search("SCRIPT"); // Search sirve para buscar una coincidencia entre una expresión regular y una cadena de texto
var res3 = str.slice(7, 13); // Slice devuelve una copia de una parte dentro de uno nuevo (Busca la posicion de la palabra y la pone en otra nueva) 
var res4 = str.slice(-12, -6); //Este cuenta la posicion desde el final hacia el principio, empieza contar desde las posicion final hacia al principio
var res5 = str.slice(7); // Nuevamente devuelve la posicion indicada hasta ya el final
var res6 = str.substring(7, 13); // Devuelve un subconjunto de un string 
var res7 = str.substring(7,6); // Se invierte 
var res8 = str.replace("Bienvenidos", "JAVASCRIPT"); // Devuelve una nueva cadena con una, algunas, o todas las coincidencias de un patrón (Cambia la palabra)
var res9 = str.toUpperCase(); // Pasa todo a MAYUSCULA
var res10 = str.toLowerCase(); // PASA TODO A minuscula
var res11 = str.trim() // Elimina los espacios en blanco en ambos extremos del string 


function contarPalabra(texto, palabra) {
  // \b asegura que coincida con la palabra completa y "gi" ignora mayúsculas/minúsculas
  const regex = new RegExp(`\\b${palabra}\\b`, 'gi');
  const coincidencias = texto.match(regex);
  return coincidencias ? coincidencias.length : 0;
}

// Ejemplo de uso:
const frase = "JavaScript es genial. Me gusta JavaScript.JavaScript ";
console.log(contarPalabra(frase, "JavaScript")); // Resultado: 2





console.log(1,pos1)
console.log(pos2)
console.log(res3)
console.log(res4)
console.log(res5)
console.log(res6)
console.log(res7)
console.log(res8)
console.log(res9)
console.log(res10)
console.log(res11)

// console.log()

// str.slice(-5 ,-4);
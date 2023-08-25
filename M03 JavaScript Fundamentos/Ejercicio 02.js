/*⚠️ NO MODIFIQUES EL NOMBRE DE LAS DECLARACIONES ⚠️*/
/*2️⃣ EJERCICIO 02 2️⃣*/

const string = "string"

function devolverString(string) {
   // Debe retornar un string.
   // Tu código:
   return string

}

const devolver = devolverString(string);
console.log(devolver);


// ⛔️ "X" e "Y" son números.

const x = 2;
const y = 4;

function suma(x, y) {
   // Retorna el resultado de su suma.
   // Tu código:
      return x + y;

}
const resultado1 = suma(x, y);
console.log(resultado1);

function resta(x, y) {
   // Retorna el resultado de la resta.
   // Tu código:
   return x - y;
}
const resultado2 = resta(x, y);
console.log(resultado2);

function divide(x, y) {
   // Retorna el resultado de su división.
   // Tu código:
   return x / y;
}
const resultado3 = divide(x, y);
console.log(resultado3);



function multiplica(x, y) {
   // Retorna el resultado de su multiplicación.
   // Tu código:
   return x * y;
}
const resultado4 = multiplica(x, y);
console.log(resultado4);


function obtenerResto(x, y) {
   // Obten el resto de la división de "x" entre "y".
   // Tu código:
   return x % y;
}

const resultado5 = obtenerResto(x, y);
console.log(resultado5);

/*⚠️ NO MODIFIQUES NADA DEBAJO DE ESTO ⚠️*/
module.exports = {
   devolverString,
   suma,
   resta,
   divide,
   multiplica,
   obtenerResto,
};

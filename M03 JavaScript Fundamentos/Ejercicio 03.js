/*⚠️ NO MODIFIQUES EL NOMBRE DE LAS DECLARACIONES ⚠️*/
/*3️⃣ EJERCICIO 03 3️⃣*/

function sonIguales(x, y) {
   // Retorna true si "x" e "y" son iguales.
   // De lo contrario, retorna false.
   // Tu código:
    if (x == y) {
       return true;
   } else 
   { return false;
       }      
}

const resultado1 = sonIguales(5, 5);
const resultado2 = sonIguales(5, 8);
console.log(resultado1, resultado2);






function tienenMismaLongitud(str1, str2) {
   // Retorna true si los dos strings tienen la misma longitud.
   // De lo contrario, retorna false.
   // Tu código:
   return str1.length === str2.length;
}

const resultado3 = tienenMismaLongitud("hola", "beso");
const resultado4 = tienenMismaLongitud("hola", "besssos");
console.log(resultado3, resultado4);







function menosQueNoventa(num) {
   // Retorna true si el argumento "num" es menor que noventa.
   // De lo contrario, retorna false.
   // Tu código:
   if (num < 90) {
       return true;} 
         else  {
            return false;
       }
   }


const resultado5 = menosQueNoventa(92);
const resultado6 = menosQueNoventa(89);
console.log(resultado5, resultado6);







function mayorQueCincuenta(num) {
   // Retorna true si el argumento "num" es mayor que cincuenta.
   // De lo contrario, retorna false.
   // Tu código:
   return 50 < num;

}

const resultado7 = mayorQueCincuenta(46)
const resultado8 = mayorQueCincuenta(52)
console.log(resultado7,resultado8);





function esPar(num) {
   // Retorna true si "num" es par.
   // De lo contrario, retorna false.
   // Tu código:
   return num % 2 === 0;
}

const numero1 = esPar(7);
const numero2 = esPar(4);

console.log(numero1);
console.log(numero2);






function esImpar(num) {
   // Retorna true si "num" es impar.
   // De lo contrario, retorna false.
   // Tu código:
return num %2 !== 0 ;

}
const number1 = esImpar(3);   
const number2 = esImpar(4);

console.log(number1, number2);
/*⚠️ NO MODIFIQUES NADA DEBAJO DE ESTO ⚠️*/
module.exports = {
   tienenMismaLongitud,
   sonIguales,
   menosQueNoventa,
   mayorQueCincuenta,
   esPar,
   esImpar,
};

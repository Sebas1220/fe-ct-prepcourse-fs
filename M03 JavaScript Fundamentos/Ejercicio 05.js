/*⚠️ NO MODIFIQUES EL NOMBRE DE LAS DECLARACIONES ⚠️*/
/*5️⃣ EJERCICIO 05 5️⃣*/

function esPositivo(num) {
   // La función recibe un entero. Devuelve como resultado un string que indica si el número
   // es positivo o negativo.
   // Si el número es positivo ---> "Es positivo".
   // Si el número es negativo ---> "Es negativo".
   // Si el número es 0, devuelve false.
   // Tu código:
   if (num > 0 ) {
       return "Es positivo"
   } else if (num < 0) {
       return "Es negativo"
   } else {
       return false;
   }

}

const resultado = esPositivo(0)     
console.log(resultado);

   


function agregarSimboloExclamacion(str) {
   // Agrega un símbolo de exclamación al final del string "str" y retórnalo
   // Ejemplo: "hello world" ---> "hello world!"
   // Tu código:
   return str + "!";

}
const mensaje = "Hello world"
const exclama = agregarSimboloExclamacion(mensaje) 
console.log(exclama)


function combinarNombres(nombre, apellido) {
   // Retorna "nombre" y "apellido" combinados en un mismo string pero separados por un espacio.
   // Ejemplo: ("Soy", "Henry") ---> "Soy Henry"
   // Tu código: 
   
    return nombre + " " +apellido;
}

   const nombre = "Sebas"
   const apellido = "Valencia"

console.log(combinarNombres(nombre, apellido));





function obtenerSaludo(nombre) {
   // Toma el string "nombre" y concatena otra string en la cadena para que tome la siguiente forma:
   // Ejemplo: "Martin" ---> "Hola Martin!"
   // Tu código:
   return "Hola " + nombre+ "!" ;
   
}
console.log(obtenerSaludo(nombre));




function obtenerAreaRectangulo(alto, ancho) {
   // Retornar el área de un rectángulo teniendo su altura y ancho.
   // Tu código:
   return alto * ancho;
}

const areaRectangulo = obtenerAreaRectangulo(2, 3)
console.log(areaRectangulo);



function retornarPerimetro(lado) {
   // La función recibe como argumento la medida de un lado de un cuadrado.
   // Debes retornar su perímetro.
   // Tu código:
   return lado * 4 ;
}
const perimetro = retornarPerimetro(3)
console.log(perimetro); 



function areaDelTriangulo(base, altura) {
   // Calcula el área de un triángulo y retorna el resultado.
   // Tu código:
   return (base* altura) / 2;

}

const area = areaDelTriangulo(2, 4)
console.log(area);


function deEuroAdolar(euro) {
   // Supongamos que 1 euro equivale a 1.20 dólares.
   // Debes calcular el valor recibido como argumento pasándolo a dolares.
   // Tu código:
   return euro * 1.20;

}

let cambioEuroAdolar = deEuroAdolar(5)
console.log(cambioEuroAdolar,"$");


function esVocal(letra) {
   // Escribe una función que reciba una letra y, si es una vocal, muestre el mensaje “Es vocal”.
   // Si el usuario ingresa un string de más de un caracter debes retornar el mensaje: "Dato incorrecto".
   // Si no es vocal, tambien debe retornar "Dato incorrecto".
   // Tu código:
  
   
   
   myArray1 = ["a","e","i","o","u"];


   if (letra, myArray1.includes(letra)) {
       return "Es vocal"
   } else {
   return "Dato incorrecto";
   }
   
}
const letra = "b";
const vocal = esVocal(letra)
   console.log(vocal);



/*⚠️ NO MODIFIQUES NADA DEBAJO DE ESTO ⚠️*/
module.exports = {
   esPositivo,
   agregarSimboloExclamacion,
   combinarNombres,
   obtenerSaludo,
   obtenerAreaRectangulo,
   retornarPerimetro,
   areaDelTriangulo,
   deEuroAdolar,
   esVocal,
};

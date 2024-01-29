//! Homework de Variables y Tipos de Datos
//* En esta homework deberás practicar declarar variables y asignarles valores de distintos tipos de datos.
//* Agrega mas ejemplos de los que se te presentan para que practiques.

//TODO: Variables y Tipos de Datos

// declarar una variable
var nombre;
// definir una variable
var name = "Fernando";

//? Ejercicio 1: Declaración de variables
var nombre;
var edad;

//? Ejercicio 2: Asignación de valores a variables
nombre = "Ana";
edad = 25;

//? Ejercicio 3: Mostrar variables en la consola
console.log("Nombre:", nombre);
console.log("Edad:", edad);
console.table({ nombre, edad });
console.warn("Advertencia"); // navegador se ve naranja
console.error("Error"); // navegador se ve rojo

//? Ejercicio 4: Variables con distintos tipos de datos
// tipado debil o flexible
var numero = 10;
var texto = "Hola, mundo!";
var esVerdadero = true;
var arreglo = [1, 2, 3];
var objeto = { nombre: "Carlos", edad: 30 };

//? Ejercicio 5: Mostrar tipos de datos en la consola
//! Nota: El tyoeof es un operador que nos permite conocer el tipo de dato de una variable.
console.log("Número:", numero, typeof numero);
console.log("Texto:", texto, typeof texto);
console.log("Booleano:", esVerdadero, typeof esVerdadero);
console.log("Arreglo:", arreglo, typeof arreglo);
console.log("Objeto:", objeto, typeof objeto);

//? Ejercicio 6: Operaciones con variables
var a = 5;
var b = 3;
var suma = a + b;
var concatenacion = texto + " " + nombre;
var concatenacion1 = texto + " " + nombre;
console.log('Ayer estuve viendo la tele y el presentador dijo: "Hola, mundo!"');
// template strings -> `` backticks
var concatenacion2 = `${texto} ${nombre}`;

//? Ejercicio 7: Mostrar resultados de operaciones en la consola
console.log("Suma:", suma);
console.log("Concatenación:", concatenacion);

//? Ejercicio 8: Cambio de valor de variable
var cantidad = 10;
console.log("Cantidad inicial:", cantidad);

cantidad = 15;
console.log("Cantidad actualizada:", cantidad);

//? Ejercicio 9: Declaración y asignación simultánea
var precio = 20,
cantidadProductos = 5,
total = precio * cantidadProductos;

console.log("Precio:", precio);
console.log("Cantidad de productos:", cantidadProductos);
console.log("Total:", total);

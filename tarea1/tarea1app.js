/*Tarea1
Obtener un número aleatorio entre 1 y 100
Calcular su raiz cuadrada y mostrar en consola el resultado
Elevarlo a la quinta potencia y mostrar en consola el resultado
Tarea 2
Según la siguiente lista de números 120,250,-78,96,-38,45.72,1450,2380
Mostrar en consola el menor
Mostrar en consola el mayor
Tarea 3
Dado los siguientes números, dejarlos con dos decimales y mostrar en consola los mismos redondeados:
45.895025
56.788789
78.413582*/
console.log("Tarea 1")
let random= Math.ceil(Math.random()*100);

console.log(`el numero random es ${random}`)

console.log(`la raiz del numero random ${Math.sqrt(random)}`)

let exponente= 5
console.log(`el numero random elevado a la quinta potencia es ${ Math.pow(random, exponente)}`);
console.log("Tarea 2")
console.log("la lista de numero es 120,250,-78,96,-38,45.72,1450,2380")
console.log(`el numero maximo es ${Math.max(120,250,-78,96,-38,45.72,1450,2380)}`);
console.log(`el numero minimo es ${Math.min(120,250,-78,96,-38,45.72,1450,2380)}`);

console.log("Tarea 3")

let numero1=parseFloat(45.895025)
let numero2=parseFloat(56.788789)
let numero3=parseFloat(78.413582)

console.log(`el numero redondeado con dos decimales es `)
console.log(Math.round(numero1 * 100) / 100)
console.log(`el numero redondeado con dos decimales es`)
console.log(Math.round(numero2 * 100) / 100)
console.log(`el numero redondeado con dos decimales es`)
console.log(Math.round(numero3 * 100) / 100)

/*Solucion tarea 3 punto 1 

let numeroFixed = "45.895025";
numeroFixed = parseFloat(numeroFixed).toFixed(2);
console.log(numeroFixed);
*/





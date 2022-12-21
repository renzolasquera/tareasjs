/*Ejercicio con If
Ingresan dos números
Si el primero es mayor que el segundo mostrar en consola
la suma de ambos
Si el primero es menor que el segundo mostrar en consola
la resta del segundo menos el primero.
Si son iguales mostrar en consola la multiplicación de ambos.
ejemplo del mensaje: 2 es menor que 5, la resta de 5 - 2 es
igual a 3
Ejercicio con Condicionales
Recibir dos valores y la operación a realizar (+, -, *, /)
Verificar que los valores ingresados no sean NaN, si son NaN devolver un mensaje de error.
Con una estructura switch verificar la operación y devolver un mensaje con el
resultado de la misma.
Si se ingresa una operación que no está contemplada devolver un mensaje
de error.*/


let numero1 = parseFloat(prompt("Ingrese el primer número"));
let numero2 = parseFloat(prompt("Ingrese el segundo número"));
let operador = prompt ("ingrese el operador");



    if (isNaN(numero1) || isNaN(numero2)) { 
        console.warn(`Error no ha ingresado dos números`);
    } else {
        switch (operador) {
            case "+":
              console.log("La suma dio como resultado:",numero1+numero2);
              //acciones
              break;
            case "-":
                console.log("La resta dio como resultado:",numero1-numero2);
                //acciones
              break;
              case "/":
                console.log("La división dio como resultado:",numero1/numero2);
                //acciones
              break;
              case "*":
                console.log("La multiplicación dio como resultado:",numero1*numero2);
                //acciones
              break;
            default:
              console.log("Error, operador ingresado No Valido");
              break;
          }
         }

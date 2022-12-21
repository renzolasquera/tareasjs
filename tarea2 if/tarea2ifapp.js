let numero1 = parseFloat(prompt("Ingrese el primer número"));
let numero2 = parseFloat(prompt("Ingrese el segundo número"));

if (isNaN(numero1) || isNaN(numero2)) { 
    console.warn(`Error no ha ingresado dos números`);
} else {
    if (numero1>numero2) {
        console.log(`El primer número ingresado ${numero1} es mayor que el segundo número ${numero2} y por lo tanto se realizo la suma de ambos, que dio como resultado: ${numero1+numero2}`);
} else {
            if(numero1<numero2){
                console.log(`El primer número ingresado ${numero1} es menor que el segundo número ${numero2} y por lo tanto se realizo la resta de  ${numero2} - ${numero1}  , que dio como resultado: ${numero2-numero1}`);
            }else{
                console.log(`Los números que ud. ha ingresado son iguales, y por lo tanto se realizo la multiplicación de ambos, que dio como resultado: ${numero1*numero2}`);

            }
      }
    }
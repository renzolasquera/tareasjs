/* 
1- Escribir un programa que solicite la edad y si es mayor de 18 años
    monstrar un mensaje que ya puede conducir, si la edad ingresada no
    es un número válido indicarlo en un mensaje. Dificultad 1
*/
/*let edad = parseInt(prompt("Ingrese su edad:"));

if (isNaN(edad) || edad >130) { 
    console.warn(`Error no ha ingresado una edad valida`);
    } else {
    if (edad>=18) {
        console.log(`Su edad es: ${edad} y por lo tanto por tener 18 años o más, usted puede conducir`);
        } else {
            console.log(`Su edad es: ${edad} y por lo tanto por tener menos que 18 años, usted NO puede conducir`);      
        }
}*/

/* 
2- Escribir un programa que solicite una nota (número) de 0 a 10.
    Luego mostrar la calificación en un alert según los siguientes rangos de nota:
    
    0-2: Muy deficiente

    3-4: Insuficiente

    5-6: Suficiente

    7: Bien

    8-9: Notable

    10: Sobresaliente

    Si ingreso un número que no esté dentro del rango de 0 a 10
    mostrar un mensaje "Número erróneo".

    Si el número ingresado no es válido mostrar el mensaje:
    "Introduce un número válido".
*/
/* tarea 2
let nota = parseFloat(prompt("Ingrese la nota"));

if (isNaN(nota)) { 
    console.warn(`Introduce un número válido!`);
} else{
    switch (true) {
        case nota <= 2 && nota >= 0:
            console.log("Muy deficiente");
            break;
            case nota <= 4 && nota >= 3:
                console.log("Insuficiente");
                break;
                case nota <= 6 && nota >= 5:
                    console.log("Suficiente");
                    break;
                    case nota==7:
                        console.log("Bien");
                        break;
                        case nota <= 9 && nota >= 8:
                            console.log("Notable");
                            break;
                            case nota == 10:
                                console.log("Sobresaliente");
                                break;
        default:
            console.log("Número erróneo");
            break;
    }*/
    /* 
3- Realiza un script que pida cadenas de texto hasta que se pulse "cancelar".

    Al salir con "cancelar" deben mostrarse todas las cadenas concatenadas con un guión - .
    
    Nota: usar confirm () 
    https://www.w3schools.com/jsref/met_win_confirm.asp

*/
/*let cadenasConcatenadas=""
do{
    let cadena=prompt("Ingresa una cadena de texto: ")
    if(cadenasConcatenadas ==""){
        cadenasConcatenadas= cadenasConcatenadas + cadena;
    }else{
        cadenasConcatenadas= cadenasConcatenadas + "-" + cadena;
    }

}while(confirm("Desea seguir ingresando cadenas?"))
document.write(cadenasConcatenadas)

*/
/* 
4- Realiza un script que pida números hasta que se pulse “cancelar”. 
Si no es un número deberá indicarse con un «alert» y seguir pidiendo números. 
Al salir con “cancelar” deberá indicarse la suma total de los números introducidos.
*/
/* let suma=0
do{
    let numero = parseFloat(prompt("Ingrese un numéro"));
    if (isNaN(numero)) { 
        console.warn(`Introduce un número válido!`);
    } else{
        suma=suma+numero
    }
}while(confirm("Desea seguir ingresando numéros?"))
console.log("Ud a finalizado el programa. La suma de números ingresados es" ,suma) */

/* 
5- 
Realizar una página con un script que calcule el valor de 
la letra de un número de DNI (Documento nacional de identidad).

El algoritmo para calcular la letra del dni es el siguiente :

El número debe ser entre 0 y 99999999
Debemos calcular el resto de la división entera entre el número y el número 23.
Según el resultado, de 0 a 22, le corresponderá una letra de las siguientes:  
(T, R, W, A, G, M, Y, F, P, D, X, B, N, J, Z, S, Q, V, H, L, C, K, E) 
Si lo introducido no es un número deberá indicarse con un alert y volver a preguntar.
Deberá de repetirse el proceso hasta que el usuario pulse «cancelar».

*/
/*let resto=0
let caracteres=["T", "R", "W", "A", "G", "M", "Y", "F", "P", "D", "X", "B", "N", "J", "Z", "S", "Q", "V", "H", "L", "C", "K", "E"]
do{
    let dni = parseFloat(prompt("Ingrese un DNI"));
    if (isNaN(dni) || dni<0 || dni>99999999) { 
        console.warn(`DNI INVALIDO`);
    } else{
        resto=dni%23
        console.log(`Usted a ingresado el DNI: ${dni} y por lo tanto le corresponde la letra ${caracteres[resto]}`)
    }
}while(confirm("Desea seguir ingresando numéros?"))¨*/

/*6- Realiza un script que escriba una pirámide del 1 al 30 de la siguiente forma :

1
22
333
4444
55555
666666
…….*/
/*
for(let i=1; i<=30;i++){
    for( let j=0; j<i;j++){
        document.write(i);
    }
    document.write("<br>");
} */

/*7- Haz un script que escriba una pirámide inversa de los números del 1 al número que indique el usuario (no mayor de 50)  de la siguiente forma : (suponiendo que indica 30).

303030303030303030303030303030303030303030303030303030303030
2929292929292929292929292929292929292929292929292929292929
28282828282828282828282828282828282828282828282828282828
…..
333
22
1*/

/*let numeroRepeticiones=parseInt(prompt("Ingrese la cantidad de repeticiones:"))

if (isNaN(numeroRepeticiones) || numeroRepeticiones>50 ) { 
    console.warn("Número invalido");
    } else{
            for (let i=numeroRepeticiones; i>=1; i--){
                for(let j=i; j>=1;j--){
                    document.write(i);
                }
                document.write("<br>")
            }
    }*/

    /*8- Crea script para generar pirámide siguiente con los números del 1 al número que indique el usuario (no mayor de 50) 

    1
    12
    123
    1234
    12345
    123456
    ……*/
    /*let numeroRepeticiones=parseInt(prompt("Ingrese la cantidad de repeticiones:"))

    if (isNaN(numeroRepeticiones) || numeroRepeticiones>50 ) { 
        console.warn("Número invalido");
        } else{
                for (let i=0; i<=numeroRepeticiones; i++){
                    for(let j=1; j<=i;j++){
                        document.write(j);
                    }
                    document.write("<br>")
                }
        }
*/

/*9_ Crea un script que escriba los números del 1 al 500, que indique cuáles son múltiplos de 4 y de 9 y que cada 5 líneas muestre una línea horizontal. Por ejemplo :

1
2
3
4 (Múltiplo de 4)
5-
————————————————————-

6
7
8 (Múltiplo de 4)
9 (Múltiplo de 9)
10




/*10_Realiza un script que pida número de filas y columnas y escriba una tabla. Dentro de cada una de las celdas deberá escribirse un número consecutivo en orden descendente. Si, por ejemplo, la tabla es de 7×5 los números irán del 35 al 1.

// let row=prompt("Nro de filas (no mayor a 30)")
// let col=prompt("Nro de columnas (no mayor a 30)")
​
// if(row==null||col==null){
//     console.warn("operacion cancelada")
// }else{
//     row=parseInt(row)
//     col=parseInt(col)
//     if(isNaN(row)||row>30||isNaN(col)||col>30){
//         alert("error: has introducido un valor incorrecto")
//         console.error("has introducido un valor incorrecto")
//     }else{
//         let nums=row*col
//         document.write(`<table border class="table">`)
//         for(r=1;r<=row;r++){
//             document.write("<tr>")
//             for(c=1;c<=col;c++){
//                 document.write("<td>")
//                 document.write(nums)
//                 nums--
//                 document.write("</td>")
//             }
//             document.write("</tr>")
//         }
//         document.write(`</table>`)
//     }
// } */

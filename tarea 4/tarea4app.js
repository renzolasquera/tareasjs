/*Tarea 1
Declara un array que vamos a llamar “clasificaciones” con los siguientes valores:
Ana, Oswaldo, Raúl, Celia, María, Antonio
(vamos a suponer que es el orden de clasificación de un concurso, en un momento dado)

Imprime la clasificación actual
El concurso continua, y se van modifican esas posiciones anteriores. Debemos cambiar en el array:

Celia adelanta a Raúl
Antonio es descalificado y se elimina del concurso
Detrás de Ana y antes de Oswaldo se clasifican dos nuevos concursantes: Roberto y Amaya, en ese orden
Hay una nueva participante que pasa a encabezar la clasificación: Marta
Imprime la clasificación actualizada y comprueba que se ha hecho correctamente
Tarea 2
Pedir por pantalla el nombre de 5 alumnos de la comisión.
Guardarlos en un arreglo llamado rollingCoders
Usando el arreglo mostrar en consola por cada uno un mensaje de bienvenida al mundo del desarrollo web.
Tarea 3
Solicitar por pantalla al usuario ingresar el valor de los lados de un rectángulo, luego crear una función para calcular su perímetro y mostrarlo por pantalla.

La fórmula del perímetro es p = 2*(a + b) */

//Tarea1

/*let clasificación= ["Ana", "Oswaldo", "Raúl", "Celia", "María", "Antonio"]
console.log(`los clasificados son:${clasificación}`);

clasificación[2]="Cecilia"
clasificación[3]="Raul"
clasificación.pop("Antonio")
clasificación.splice(1,0,"Roberto","Amaya")
clasificación.unshift("Marta")

console.log(`La nueva clasificacion es ${clasificación}`);*/

//Tarea2


/*let rollingCoders=[]
for (let i = 0; i <= 5; i++) {
    alumno = prompt("Ingresa tu nombre:", "");
    rollingCoders.push(`bienvenido al mundo del desarrollo web ${alumno}`)
}
console.log(rollingCoders)*/

//Tarea3




//Ejercicio 3-Perimetro
let base=parseInt(prompt("Ingrese la base del rectangulo"))
let altura=parseInt(prompt("Ingrese la base del rectangulo"))

const calcularPerimetro = function(base,altura){
    perimetro= 2*(base + altura)
    return perimetro
}

console.log("La base del perimetro es",calcularPerimetro(base,altura))

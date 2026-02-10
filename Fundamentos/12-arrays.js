// Estructuras de datos: Son estructuras que nos permiten almacenar varios valores a una sola variable. Un conjunto de valores para una sola.

// array
// útiles para cuando quieres tener un listado de elementos.

// Declaración de arrays
let myArray = []
let myArray2 = new Array()

console.log(myArray)
console.log(myArray2)
// Por defecto, JS te crea Arrays vacíos

// ------------------INICIALIZACION---------------------
myArray = [3] // Mete el número 3 al array
myArray2 = new Array(3) // Crea tres espacios en blanco para el array.

// En ambos estamos reservando espacio, pero de diferente manera
console.log(myArray)
console.log(myArray2)

// Agregando valores
myArray =[1, 2, 3, 4]
myArray2 = new Array(1,2,3,4)

console.log(myArray)
console.log(myArray2)

// Los arrays pueden combinar tipos de datos, justo como Python
myArray =["Gus", "Belu", "Tifa", "Aisabel", true, 5]
myArray2 = new Array("Gus", "Belu", "Tifa", "Aisabel", true, 5)

console.log(myArray)
console.log(myArray2)

// Puedes insertar valores a partir de sus índices (0 hasta n-1):
myArray[2] = "Fifirifi"
myArray2[1] = "Ojitos"

console.log("Insertando valores mediante índices:\n")
console.log(myArray)
console.log(myArray2)

console.log(`${myArray[4]}`) //¿Qué pasa si intentas acceder a un índice que no existe en un array? La respuesta es: NADA, sólo se ve como undefined.

// Los arrays son más dinámicos.

// --------MÉTODOS COMUNES--------------

myArray = []

// push: sirve para añadir elementos al array:
myArray.push("Gus")
myArray.push("Marroquin")
myArray.push("Fifirifi")
myArray.push("Belu")

console.log(myArray)

// pop: elmina el último elemento del array. También DEVUELVE ese elemento.
let elementDeleted=myArray.pop()
myArray.pop()

console.log(elementDeleted)

console.log(myArray)

// shift: Elimina el primer elemento del array y también lo devuelve.
myArray.shift() 
console.log(myArray)

// unshift: Agrega 1 o más elementos al principio del array. Devuelve la nueva longitud del array
let variable = myArray.unshift("Gus", "Alonso", "Belu", "Fifirifi")

console.log(myArray)

// length: Es una propiedad que da la longitud del arreglo

console.log(myArray.length)

// clear: Borra, un arreglo, pero no hay un método como tal, solo sintaxis.
myArray = []

// slice: Permite crear un subarray desde A hasta B (sin incluirlo) de un array. Extrae una parte del array para crear una copia
let myNewArray =  myArray2.slice(1,4)
console.log(myNewArray)

// splice: Sirve para eliminar elementos, insertarlos y reemplazarlos. Modifica el array original.
let numeros = [10, 20, 30, 40]
numeros.splice(1,2) // splice(desdeQueIndice, cuantosEliminar)

console.log(numeros) // [10,40]

// reemplazando con splice:

numeros = [10,20,30]

numeros.splice(1,1,99)

console.log(numeros)
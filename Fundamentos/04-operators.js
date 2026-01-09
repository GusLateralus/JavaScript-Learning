// Operadores

// Operadores aritméticos
let a = 5
let b = 10

console.log(a+b) // Suma
console.log(a-b) // Resta
console.log(a*b) // Multiplicación
console.log(a/b) // División

console.log(a%b) // Módulo
console.log(a**b) // Exponente

a++ //Incremento
console.log(`Operación de incremento: ${a}`)

b-- // Decremento
console.log(`Operación de decremento: ${b}`)

// Operadores de asignación:

let myVariable = 2 // Asignamos el valor 2 a la variable
console.log(myVariable)
myVariable +=2 // Incrementamos en 2
console.log(myVariable)

//Más operadores de asignación:
myVariable -=2
myVariable *=2
myVariable /=2
myVariable %=2
myVariable **=2


// Operaciones de comparación:
console.log( a > b)
console.log(a < b)
console.log( a >= b)
console.log( a <= b)
console.log( 5 == "5") // Comprobamos igualdad por valor
console.log( 5 == 5) // Igualdad por valor
console.log( 5 === 5) // Igualdad por identidad (compara el tipo y valor)
console.log( 5 === "5")//Igualdad por identidad
console.log( a != 6) //Desigualdad por valor
console.log( a !== "6") //Desigualdad por identidad

// Truthy values (valores verdaderos)
/*
Todos los números positivos y negativos menos el cero
Todas las cadenas de texto menos las vacías
El boolean true
*/

// Falsy values (valores falsos)
/*
0
0n
null
undefined
NaN
El boolean false
Cadenas de texto vacías
*/

// Operadores lógicos

// AND (&&)
console.log(5 > 10 && 15 > 20)

// OR ( ||)
console.log(5 > 10 || 15 > 20)
console.log(5 > 10 && 15 > 20 || 30 < 40)

// NOT (!)
console.log(!(5 > 10 && 15 > 20))

// Operadores ternarios:

const isRaining = true

isRaining ? console.log("Está lloviendo") : console.log("No está lloviendo") 

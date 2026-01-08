// var: La forma original para declarar variables, pero hoy día no es recomendable utilizar esta palabra reservada
// Hay ciertos problemas de definición utilizando esta palabra reservada y puede causar bugs complejos
var helloWorld = "Hello, JavaScript!"
console.log(helloWorld)

helloWorld = "Hello, again, JavaScript!"
console.log(helloWorld)

// let (Esta es la forma en que hoy día debes declarar variables en JS)
let helloWorld2 = "Hello, JS!"
console.log(helloWorld2)

helloWorld2 = "Hello again, JS!"
console.log(helloWorld2)

// const: Es para declarar constantes, es decir, variables que no van a cambiar su valor
const helloWorld3 = "Hello, this is a constant"
console.log(helloWorld3)
//helloWorld3 = "Esto va a ser un error"
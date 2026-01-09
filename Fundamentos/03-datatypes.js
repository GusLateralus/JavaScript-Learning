// JS es de tipado dinámico, lo que significa que no declaras el tipo y JS lo infiere automáticamente

// Number: Es tipo de dato numérico, lo que implica que no hay int, float o cosas así.
let edad = 26
let precio = 19.99

console.log(precio)
console.log(edad+1)

//String: Ya sabes, es un tipo de dato para texto
let mensaje = "This is a message"
let nombre = 'Gus'
let otroMensaje = `Hola, ${mensaje}` // Esta es la manera más nativa de escribir cadenas en JS

console.log(otroMensaje)

// Booleanos: verdadero o falso
let estaActivo = true
let esMayor = false
console.log(estaActivo)
console.log(esMayor)

//Undefined: Básicamente es cuando declaraste una variable, pero no la inicializaste
let variable
console.log(variable)

// null: contiene el elemento null, o sea, el vacío
let varNull = null
console.log(varNull)

// Symbol: Valor único e inmutable, se usa para representar identificadores únicos
let mySymbol = Symbol("mysymbol")

// Big Int: Un entero muy grande
let myBigInt = BigInt(123456789123456789)

console.log(edad)
console.log(precio)
console.log(mensaje)
console.log(estaActivo)
console.log(variable)
console.log(varNull)
console.log(mySymbol)

/*
En la consola del navegador:

Crea una constante ciudad
Crea una variable anioNacimiento
Calcula tu edad aproximada
Imprime un mensaje así:

Hola, soy Gus, vivo en Pachuca y tengo 26 años
*/

const ciudad = "Pachuca"
let anioNacimiento = 1998
let edad2 = 2026-anioNacimiento
console.log(`Hola, soy Gus, vivo en ${ciudad} y tengo ${edad2}`)
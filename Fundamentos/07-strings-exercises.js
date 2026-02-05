//1. Concatena dos cadenas de texto
let greeting = "Hola"
let completeGreeting = greeting+" Gus"
console.log(`Saludo: ${completeGreeting}`)
//2. Muestra la longitud de una cadena de texto
console.log(`Longitud: ${completeGreeting.length}`)
//3. Muestra el primer y último caracter de un string
console.log(`Primer caracter: ${greeting[0]}`)
console.log(`Último caracter: ${greeting[greeting.length-1]}`)
//4. Convierte a mayúsculas y minúsculas un string
console.log(`Cadena en mayúsculas: ${greeting.toUpperCase()}`)
console.log(`Cadena en minúsculas: ${greeting.toLowerCase()}`)
//5. Crea una cadena de texto en varias líneas
let longString = `Hola, mi nombre es Gus, 
me gusta la lasaña y tengo 27 años`
//6. Interpola el valor de una variable en un string
let nameStr = "Belu"
console.log(`Hola, ${nameStr}`)

//7. Reemplaza todos los espacios en blanco de un string por guiones
console.log(`${longString.replaceAll(" ","-")}`) // replaceALL sí reemplaza todos los valores
//8. Comprueba si una cadena de texto contiene una palabra concreta.
console.log(longString.includes("Hola"))
//9. Comprueba si dos strings son iguales
console.log(greeting.toLowerCase() === completeGreeting.toLowerCase()) // Para comparación de strings, usa el ===. Estaba dando problemas porque se te olvidaron los paréntesis para la función toLowerCase()
//10. Comprueba si dos strings tienen la misma longitud.
console.log(greeting.length === completeGreeting.length)
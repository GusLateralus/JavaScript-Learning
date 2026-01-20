// Strings: Cadenas de texto. Es un tipo de dato primitivo inmutable, es decir, que una vez sea creada la cadena su contenido ya no podrá cambiar.

//En este tipo de dato se pueden hacer mil operaciones (no literalmente, pero sí muchas)

// Concatenación
let myName = "Gus"
let greeting = "Hey there, "+myName
console.log(greeting)
console.log(typeof greeting) // Checamos el tipo de dato

// Longitud
console.log(greeting.length) // Devuelve el tamaño de la cadena

// Acceso a caracteres (igual que otros lenguajes, empezamos contando desde cero)
console.log(greeting[0])
console.log(greeting[1])
console.log(greeting[14]) // Aquí saldrá undefined, porque tenemos 14 elementos, pero los disponibles son n-1, es decir, va de 0 a 13

// Métodos comunes
console.log(greeting.toUpperCase())
console.log(greeting.toLowerCase())
console.log(greeting.indexOf("Gus")) // Si es un substring, te devolverá la posición del primer caracter de esa subcadena
console.log(greeting.includes("Hey")) // Devuelve un true si encuentra la palabra, en caso contrario, un false
console.log(greeting.includes("Hola"))
console.log(greeting.includes("Gus"))
console.log(greeting.slice(0,10)) // Retorna una sección de un string, es decir, una subcadena, como parámetros pones la posición inicial hasta donde quieras extraer
console.log(greeting.replace("Gus","Belu")) //Reemplazamos una cadena por otra

// Template literals (plantillas literales) -> se usan cuando tienes un string de más de una línea de código
let message = `Hola, este es mi 
                curso de JavaScript`


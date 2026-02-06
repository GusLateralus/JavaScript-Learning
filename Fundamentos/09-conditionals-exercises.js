// 1. Imprime por consola tu nombre si una variable toma su valor.
let nombre = "Gus"
let variableNombre = "Gus"

if(nombre == variableNombre)
{
    console.log("Los nombres son iguales.")
}

// 2. Imprime por consola un mensaje si el usuario y contraseña coincide con unos establecidos
let user = "Euronymous"
let password = "password"

if(user == "Euronymous" && password == "password")
{
    console.log("Usuario y contraseña correctos")
}
//3. Verifica si un número es positivo, negativo o cero e imprime un mensaje.
let number = -9

if(number > 0)
{
    console.log("El número es positivo.")
}
else if(number == 0)
{
    console.log("El número es cero.")
}
else
{
    console.log("El número es negativo.")
}
//4. Verifica si una persona puede votar o no (mayor o igual a 18) e indica cuántos años le faltan.
let age = 11

if(age >= 18)
{
    console.log("Puedes votar")
}
else{
    console.log(`No puedes votar, te faltan ${18-age} años`)
}
//5. Usa el operador ternario para asignar el valor "adulto" o "menor" a una variable dependiendo de la edad
let edad = 18

let youngOrAdult = edad >= 18 ? "Adulto": "Menor" // Sintaxis: let variable = condicion ? valueIfTrue : valueIfFalse
console.log(youngOrAdult)

//6. Muestra en qué estación del año nos encontramos dependiendo del valor de una variable "mes" (utiliza else-if)
let mes = "ABRIL"
let mesNormalizado = mes.toLowerCase()

if(mesNormalizado == "diciembre"||mesNormalizado == "enero" || mesNormalizado == "febrero" )
{
    console.log("Invierno")
}

else if(mesNormalizado == "marzo" || mesNormalizado == "abril" || mesNormalizado == "mayo")
{
    console.log("Primavera")
}

else if(mesNormalizado == "junio" || mesNormalizado == "julio" || mesNormalizado == "agosto")
{
    console.log("Verano")
}

else if(mesNormalizado == "septiembre"|| mesNormalizado == "octubre" || mesNormalizado == "noviembre")
{
    console.log("Otoño")
}

else{
    console.log("No digitaste un parámetro adecuado")
}

//7. Muestre el número de días que tiene un mes dependiendo de la variable del ejercicio anterior. (else-if)

if(mesNormalizado == "enero" || mesNormalizado == "marzo" || mesNormalizado == "mayo" ||
    mesNormalizado == "julio" || mesNormalizado == "agosto" || mesNormalizado == "octubre" 
    || mesNormalizado == "diciembre")
    {
            console.log("31 días")

    }
else if(mesNormalizado == "abril" || mesNormalizado == "junio" || mesNormalizado == "septiembre" 
        || mesNormalizado == "noviembre")
        {
            console.log("30 días")
        }
else if( mesNormalizado == "febrero")
{
    console.log("28 días")
}
else{
    console.log("No ingresó un parámetro adecuado.")
}

// -> SWITCH

//8. Usa un switch para imprimir un mensaje de saludo diferente dependiendo del idioma

let language = "Japonés"

switch(language.toLowerCase())
{
    case "español": 
                console.log("Hola, buen día")
    break

    case "inglés":
                console.log("Hello, good morning")
    break

    case "francés":
                console.log("Salut, bonjour")
    break

    case "alemán":
                console.log("Hallo, guten morgen")
    break

    case "noruego":
                console.log("Hei, god dag")
    break

    default:
                console.log("No ingresaste un idioma disponible")
}

// 9. Usa un Switch para hacer de nuevo el ejercicio 6.
switch(mesNormalizado)
{
    case "enero":
        console.log("Invierno")
        break
    
    case "febrero":
        console.log("Invierno")
        break
    
    case "marzo":
        console.log("Primavera")
        break
    
    case "abril":
        console.log("Primavera")
        break
    
    case "mayo":
        console.log("Primavera")
        break
    
    case "junio":
        console.log("Verano")
        break
    
    case "julio":
        console.log("Verano")
        break
    
    case "agosto":
        console.log("Verano")
        break
    
    case "septiembre":
        console.log("Otoño")
        break
    
    case "octubre":
        console.log("Otoño")
        break
    
    case "noviembre":
        console.log("Otoño")
        break
    
    case "diciembre":
        console.log("Invierno")
        break
    
    default:
        console.log("No ingresaste un parámetro adecuado.")
}


//10. Usa un Switch para hacer de nuevo el ejercicio 7.

switch(mesNormalizado)
{
    case "enero":
        console.log("31 días")
        break
    
    case "febrero":
        console.log("28 días")
        break
    
    case "marzo":
        console.log("31 días")
        break
    
    case "abril":
        console.log("30 días")
        break
    
    case "mayo":
        console.log("31 días")
        break
    
    case "junio":
        console.log("30 días")
        break
    
    case "julio":
        console.log("31 días")
        break
    
    case "agosto":
        console.log("31 días")
        break
    
    case "septiembre":
        console.log("30 días")
        break
    
    case "octubre":
        console.log("31 días")
        break
    
    case "noviembre":
        console.log("30 días")
        break
    
    case "diciembre":
        console.log("31 días")
        break
    
    default:
        console.log("No ingresaste un parámetro adecuado.")
}


let namePet = "Tifa"
// Operador ternario: Realizamos una comprobación, pero al mismo tiempo, funciona como un resumen de un if-else
namePet == "Fifirifi" ? console.log("El nombre es Fifirifi"): console.log("El nombre NO es Fifirifi")


// if, else if, else

//Se utiliza para controlar el flujo del programa, si determinada condición se cumple, algo pasará.
let age = 37

if(age >= 18 && age <=59){

    console.log("Eres mayor de edad.")
}
// Pondremos else if cuando quieras probar una condición adicional a la que habías probado.
else if(age >= 60)
{
    console.log("Eres un anciano :0")
}
// Esta else se ejecuta cuando no se cumpla la condición del if.
else{
    console.log("No eres mayor de edad.")
}


// Condicional múltiple (switch)

let day = 0
let dayName

switch(day)
{
    case 0: 
        dayName="Lunes"
        break
    case 1: 
        dayName="Martes"
        break
    case 2: 
        dayName="Miércoles"
        break
    case 3: 
        dayName="Jueves"
        break
    case 4: 
        dayName="Viernes"
        break
    case 5: 
        dayName="Sábado"
        break
    case 6: 
        dayName="Domingo"
        break
    default: 
        console.log("No digitaste un parámetro adecuado")
}
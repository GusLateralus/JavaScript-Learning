// Bucles

// Bucle for 
// Sintaxis : for(inicialización; condición; incrementoOdecremento)
// Se usa cuando sabes cuántas repeticiones hará, o de dónde a dónde va el ciclo.
for(let i = 0; i<=10; i++)
{
    console.log(i)
}

console.log("---DECREMENTAL------")

for(let i = 10; i>0; i--)
{
    console.log(i)
}

// Bucle while
// Sintaxis: while(condición)
// Se usa cuando no sabes cuántas iteraciones hará el ciclo.
console.log("----BUCLE WHILE-----------")
let j = 10

while(j>0)
{
    console.log(j)
    j-- // NUNCA se te olvide modificar la variable de acceso o el contador.
}


// Mini reto: imprime una sucesión desde 2 hasta 10, haciendo incrementos de dos en dos.
console.log("----MINI RETO----------")
let count = 2

while(count<=10)
{
    console.log(count)
    count +=2

}

// Bucle do-while
// Es lo equivalente a actuar antes de pensar
// Este bucle primero ejecuta antes de evaluar la condición. Lo usarás cuando tengas certeza de que mínimo una vez debes ejecutar este ciclo.
console.log("-----DO...WHILE----------")

let a = 10

do{

    console.log(a)

}while(a<5)

console.log("-----MINI EJERCICIO----------")

a = 5

do{
    console.log(a)
    a--

}while(a>0)


// Instrucciones break & continue:
// break: detiene por completo un bucle. Rompe el ciclo
// continue: se salta la iteración actual y continúa con la siguiente.
console.log("----------BREAK & CONTINUE ----------------")
for(let i = 1; i <= 10; i++)
{
    if(i === 5)
    {
        break
    }
    console.log(i)
}

console.log("-----------------------------")

for(let i = 1; i <= 5; i++)
{
    if(i === 3)
    {
        continue
    }
    console.log(i)
}

// Loops anidados (nested loops)
// Básicamente es un bucle dentro de otro bucle, se utilizan principalmente en matrices.

for(let i = 0; i<=3; i++)
{
    for(let j = 0; j<=3; j++)
    {
        console.log(`i=${i}, j=${j}`)
    }
}


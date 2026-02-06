// 1. Imprime el resultado de la suma de los números pares del 1 al 20.
let sum = 0
for(let i = 1; i<=20; i++)
{
    if(i%2===0)
    {
        sum = sum+i
    }

}

console.log(`La suma total de los pares entre 1 y 20 es: ${sum}`)

// 2. Haz un for del 1 al 20 que imprima todos los números excepto los múltiplos de 3
console.log("---------------------------------------")
for(let i = 1; i<=20; i++)
{
    if(i%3===0)
    {
        continue
    }
    console.log(i)
}
console.log("-------------------------------------")
/* 3. Crea un patrón de asteriscos que sea así:

*
**
***
****
*****

*/ 

let filas = 4

console.log(`No. filas: ${filas}`)

for(let i = 1; i<=filas; i++)
{
    for(let j = 1; j<=i; j++)
    {
        process.stdout.write("*")
    }
    console.log()
}

/* 4. Crea un patrón de asteriscos que sea así:

****
***
**
* 

*/

console.log("---------PATRÓN INVERTIDO--------------")

console.log(`No. filas: ${filas}`)

for(let i = 1; i<=filas; i++)
{
    for(let j = 1; j<=filas-i+1; j++)
    {
        process.stdout.write("*")
    }
    console.log()
}
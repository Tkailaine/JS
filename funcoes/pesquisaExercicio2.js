//Considere um array de números inteiros

const numeros = [6, 9, 12, 15, 18, 21];

const numMultiplicados = numeros.forEach(num => console.log(num*3))

const indice = numeros.findIndex(num => num===18)

console.log(indice)
// Utilize o método forEach para imprimir cada elemento de um array juntamente com seu índice.

const frutas = ["banana", "maça", "goiaba", "laranja"]
let indice = 1

const imprimirFrutas = frutas.forEach(fruta => {console.log(`${indice}° fruta:  ${fruta}` ), indice++})

console.log(imprimirFrutas)
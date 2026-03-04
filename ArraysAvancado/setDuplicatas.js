//Devemos remover as duplicatas de uma lista com o operador set.

const nomes = ['ANA', 'FELIPE', 'ANA', 'BEATRIZ', 'JOAO', 'JOAO']

//O set não irá devolver uma Array, ele parece uma array mas não é, ou seja, não conseguiremos adicionar elementos, remover etc, para isso temos que transformar em uma array, usamos o espalhamento.

/*
const nomesAtualizado = new Set(nomes)
console.log(nomesAtualizado)
//Dará erro
//nomesAtualizado.push('Carina')

const listaNomes = [...nomesAtualizado]
console.log(listaNomes)*/

//forma reduzida
const listaNomes = [...new Set(nomes)]

console.log(listaNomes)
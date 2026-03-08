//import estudante from './estudante.json' esse jeito é correto também
const estudante = require("./estudante.json")
console.log(estudante)
// o tipo de estudante é um objeto, ou seja, um json é um objeto.
console.log(typeof estudante) //object

//podemos usar métodos de objeto no json.
const chaves = Object.keys(estudante)
console.log(chaves)

// Importação de um módulo nativo em Node.js
const fs = require('fs');

// Agora, 'fs' contém as funcionalidades do módulo File System
console.log(fs)
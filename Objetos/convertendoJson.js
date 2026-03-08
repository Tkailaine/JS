const estudante = require('./estudante.json')

//Quando trabalhamos com back-end e Front-end temos que converter o JSON em String para enviar dados de cliente-servidor e depois converter novamente em objeto para podermos trabalharmos com eles.

//Convertendo em String
const estudanteString = JSON.stringify(estudante)
console.log(estudanteString) 
console.log(typeof estudanteString) // String

//Convertendo em objeto novamente
const estudanteObjeto = JSON.parse(estudanteString)
console.log(estudanteObjeto)
console.log(typeof estudanteObjeto)  
const estudantes = require('../Objetos/estudantes.json')

function filtrarPorPropriedade(lista, propriedade){
    return lista.filter((estudante) => {
        //verifica se existe a propriedade/atributo no objeto
        return !estudante.endereco.hasOwnProperty(propriedade)
    })
}

const listaEnderecosImcompletos = filtrarPorPropriedade(estudantes, "cep")

console.log(listaEnderecosImcompletos)
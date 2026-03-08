const estudantes = require("../Objetos/estudantes.json")

function buscarDado(lista, dado, chave){
    return lista.find((estudante) => estudante[chave].includes(dado))
}

console.log(buscarDado(estudantes, "leticia", "nome"))
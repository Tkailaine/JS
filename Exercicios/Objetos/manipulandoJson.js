/* ) Leia o conteúdo do arquivo animais.json.

b) Converta o conteúdo lido para um objeto JavaScript utilizando JSON.parse().

c) Adicione um novo animal ao array de animais. O novo animal deve ter um id único, nome, tipo e habitat.

d) Modifique o habitat de um animal existente no array de animais.

e) Remova um animal do array de animais.

f) Converta o objeto modificado para uma string JSON utilizando JSON.stringify().

g) Imprima no console o objeto JavaScript resultante das operações. */
const dados = require("./animais.json")


 //adicioanando animal
//const objetoAnimais = JSON.parse(animais)
dados.animais.push({id:4, nome: "Caranguejo", tipo: "Crustáceo", habitat : "Mar"})
//modificando habitat
dados.animais[2].habitat = "marinho"
console.log(dados)

 //removendo animal
dados.animais.splice(2,1)
 console.log(dados)

dadosString = JSON.stringify(dados)
console.log(dadosString)
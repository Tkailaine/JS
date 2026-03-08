/* Crie um arquivo chamado dados.json contendo informações fictícias em formato JSON. O arquivo pode representar, por exemplo, dados de produtos, usuários ou qualquer outra informação que você deseje. */

const dados = require('./dados.json')
console.log(dados)

console.log(dados.usuarios[0].nome)
console.log(dados.produtos[1].preco)
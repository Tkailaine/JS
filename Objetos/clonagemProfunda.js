const objetoOriginal = {chave : 'valor'}
//Cria apenas uma referência e não uma cópia do objeto
/*const objetoNovo = objetoOriginal
objetoNovo.chave = 'novoValor'
console.log(objetoOriginal)*/

objetoNovo= JSON.parse(JSON.stringify(objetoOriginal))
objetoNovo.chave = 'valorMutado'
console.log('ObjetoOriginal: ', objetoOriginal)
console.log('ObjetoNovo: ', objetoNovo)
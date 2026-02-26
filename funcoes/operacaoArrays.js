//Crie uma função chamada executaOperacaoEmArray que recebe dois parâmetros: um array e uma função de callback que executa alguma operação matemática. Essa função deve iterar por cada elemento do array e aplicar a função de callback em cada um dos elementos, imprimindo o resultado da operação no console.
const lista = [2,4,6,7]
function executaOperacaoEmArray(array, funcao){
    return(
        array.map(funcao)
    )
}

function dobrar(num){
    return num*2
}

console.log(executaOperacaoEmArray(lista, dobrar))
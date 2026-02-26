const lista = [1,2,3,4,5]

let soma = 0

//forEach: é igual ao for, só que ela percorre desde o primeiro item da lista até o ultimo realizando um função. e ela só pode ser usada em arrays.
lista.forEach(numero => soma += numero)

console.log(soma)

//Como visto acima, o método forEach() recebe uma função como parâmetro, e esta função por sua vez utiliza como parâmetro cada um dos elementos do array. A lógica interna do forEach() vai manejar a iteração do primeiro ao último item do array e fazer com que o código definido dentro da função callback (no caso, apenas um incremento soma += numero) seja executado a cada iteração.

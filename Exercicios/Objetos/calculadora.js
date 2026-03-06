/* Crie um objeto chamado calculadora que terá os seguintes métodos:

soma: uma função que aceita dois parâmetros e retorna a soma deles.
subtracao: uma função que aceita dois parâmetros e retorna a subtração do segundo parâmetro do primeiro.
multiplicacao: uma função que aceita dois parâmetros e retorna o resultado da multiplicação deles.
divisao: uma função que aceita dois parâmetros e retorna o resultado da divisão do primeiro pelo segundo. Certifique-se de tratar a divisão por zero, retornando uma mensagem apropriada nesse caso.
a) Chame cada função dentro do objeto calculadora passando valores como argumentos e imprima no console os resultados obtidos.

b) Adicione um novo método chamado calcularMedia ao objeto calculadora. Esta função deve aceitar um array de números como parâmetro e retornar a média aritmética dos valores.

c) Chame a função calcularMedia passando um array de números e imprima no console o resultado obtido. */


calculadora = {
    soma : function(n1, n2){return n1+n2},
    subtracao : function(n1, n2){return n1-n2},
    multiplicacao : function(n1, n2){return n1*n2},
    divisao: function(n1, n2){
        if(n2>0){return n1/n2}else{return "Erro! Digite um denominador maior que 0."}
        },
    calcularMedia : function(notas){
        const soma = notas.reduce((acumulador, nota)=> acumulador+nota, 0)
        return soma/notas.length
    } 
}

const notas = [2,10]
console.log(calculadora.soma(10,6))
console.log(calculadora.subtracao(20,2))
console.log(calculadora.divisao(4,2))
console.log(calculadora.divisao(10,0))
console.log(calculadora.calcularMedia(notas))
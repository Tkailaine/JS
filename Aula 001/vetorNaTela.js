let vetor = [1,5,7,9]
console.log(vetor)
for ( var pos= 0;pos < vetor.length; pos++){
    console.log(vetor[pos])
}

console.log('método mais simples de for')
for(var pos in vetor){
    console.log(vetor[pos])
}
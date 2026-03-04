//Com a média de todos os alunos de 3 salas, calcule a média geral de cada sala.

const js = [7, 8, 8, 7, 10, 6.5, 4, 10, 7]
const java =[6, 5, 8, 9, 5, 6]
const python = [7, 3.5, 8, 9.5]

//fazendo com map
   /*function media(notas){
       let somador = 0;
       notas.map(nota => {
                somador += nota;})
        return(
            somador/notas.length
            )
        
    } 
console.log(media(js))*/

// Reduce tem como função reduzir os elementos de uma Array em um elemento só.

//Usando a função REDUCE
/*function media(notas){
    //O reduce recebe doi parâmetros (o acumulador e o elemento) e o segundo parâmetro da função callback é de onde inicia o acumlador, no nosos caso irá iniciar do 0. É como se fosse declarar let somador = 0.
       const somaDasNotas = notas.reduce((acumulador, nota) => {
        return acumulador + nota;
       }, 0)

       const media = somaDasNotas/notas.length
       return media
        
    }

console.log(media(js)) */

    //forma reduzida
    function media(notas){
        const somaDasNotas = notas.reduce((acumulador, nota) => acumulador + nota, 0)
    }
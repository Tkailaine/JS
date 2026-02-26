//Um aluno recebeu um ponto extra em cada uma das suas notas. adicione um ponto extra na lista de notas abaixo

const notas = [10, 9.5, 8, 7, 6]

notas.forEach(nota => 
   nota++

   //forEach não retorna nada, ele seria ideal para prints, manipular dom, dar efeito e não modificar arrays, ele executa ação, então usaremos o map que faz a mesma coisa mas retorna
)


//const notasAtualizadas =  notas.map( nota =>{
 //   return nota + 1
//} 
//)

//const notasAtualizadas =  notas.map( nota =>
    //{if(nota<10){ 
    //  return nota + 1}
    //return nota 
//} 
//)

//se nota for maior ou igual a 10, ela não será alterada.
const notasAtualizadas =  notas.map( nota => nota >= 10 ? 10 : nota+1)

console.log(notasAtualizadas) // [ 11, 10.5, 9, 8, 7 ]
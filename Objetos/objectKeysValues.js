//o método Object.keys mostra a chave dos atributos do objeto e o values o valor

pessoa = {
    nome: "Fernando",
    idade: 20,
    solteiro: false,
    hobbies:['correr', 'jogar video game', 'tocar violão'],
}

function mostrarPessoa(pessoa){
   Object.keys(pessoa).map( a => {
    console.log(a, typeof(pessoa[a]))
   }) 

   Object.values(pessoa).map( a => {
    console.log(a, typeof(pessoa[a]))
   }) 
}

mostrarPessoa(pessoa)

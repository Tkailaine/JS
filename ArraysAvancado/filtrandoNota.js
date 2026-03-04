//Após calcular a média das pessoas estudantes, precisamos mostrar quem está reprovado entre os seguintes nomes: Ana, Marcos, Maria e Mauro. Temos as notas 7, 4.5, 8 e 7.5. Vamos partir da afirmação de que a média será 7.

const alunos = ['Ana', 'Marcos', 'Pedro', 'Mauro'];
const medias = [7, 4.5, 8, 7.5]

//quero que você filtre nomes que tenham tamanho (caracteres) menor que 4 da lista de alunos.
//const tamanhoNome = alunos.filter(aluno => aluno.length < 4)

//console.log(tamanhoNome)

//Filtre os alunos reprovados com a média menor que 7.
const reprovados = alunos.filter((aluno, indice) => medias[indice] < 7)
console.log(reprovados)

//A função Filter retorna um booleano. Quando ele retorna True, o elemento é adicionado na nova lista, e quando é retornado False, ele é descartado.

const aprovados = alunos.filter((aluno, indice) => medias[indice] >= 7)
console.log(aprovados)
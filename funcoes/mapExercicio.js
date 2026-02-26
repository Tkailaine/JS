//Precisamos padronizar uma lista de alunos para que todos os elementos estejam em letra maiúscula.

const alunos = ["marilia Rosa", "Fatima Alves", "Renan cardoso"]
//toUpperCase() deixa em maiusculo
const alunosFormatado = alunos.map(aluno => aluno.toUpperCase())

console.log(alunosFormatado)
//Crie uma função que filtre a lista de filmes por ano
const catalogoFilmes = [
    { id: 1, titulo: "Matrix", diretor: "Lana Wachowski", anoLancamento: 1999 },
    { id: 2, titulo: "Jurassic Park", diretor: "Steven Spielberg", anoLancamento: 1999 },
    { id: 3, titulo: "Inception", diretor: "Christopher Nolan", anoLancamento: 2010 }
]

function filtrarPorAno(lista, ano){
    return(
        lista.filter(filme => filme.anoLancamento === ano)
    )
}

console.log(filtrarPorAno(catalogoFilmes, 1999))
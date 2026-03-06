/* Imagine que você está desenvolvendo uma interface de atendimento online.Quando o usuário envia uma pergunta, o sistema precisa simular que está "pensando" ou "processando a resposta", e só depois exibir a resposta final.

Sua tarefa é criar uma função chamada responderUsuario, que receba dois parâmetros:

o nome do usuário, e
uma função de callback que será executada após 3 segundos.*/

//função que tem como parâmetro o nome do usuário e a callback que será realizada depois do tempo de espera
function responderUsuario(nome, callback){
    console.log("Processando sua mensagem...")
    setTimeout(()=> {
        callback(nome)
    }, 3000)
}
//função que mostra mensgagem de resposta, recebe de parâmetro o nome do usuário para exibir a resposta com seu nome.
const mostrarMensagem =  (nome) => console.log(`${nome}, aqui está sua resposta.`)
//a função responderUsuario recebe o nome do usuário e joga como parâmetro na função mostrarMensagem e recebe de parâmetro a função que será executada depois dos 3 segundos.
responderUsuario("Thaissa", mostrarMensagem)
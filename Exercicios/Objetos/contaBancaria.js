/* Crie um objeto chamado contaBancaria com as seguintes propriedades:

titular: uma string representando o titular da conta.
saldo: um número representando o saldo da conta.
depositar: uma função que aceita um valor como parâmetro e adiciona esse valor ao saldo da conta. Utilize this para acessar a propriedade saldo.
sacar: uma função que aceita um valor como parâmetro e subtrai esse valor do saldo da conta. Utilize this para acessar a propriedade saldo. Certifique-se de verificar se há saldo suficiente antes de efetuar o saque.
Crie um objeto chamado cliente que representa um cliente com uma conta bancária. O objeto deve ter as seguintes propriedades:

nome: uma string representando o nome do cliente.
conta: uma referência à conta bancária associada a esse cliente (objeto criado anteriormente).
Crie uma função chamada mostrarSaldo que aceita o objeto cliente como parâmetro e imprime no console o nome do cliente e o saldo da sua conta utilizando this para acessar as propriedades do objeto.

Realize operações de depósito e saque na conta bancária do cliente usando as funções do objeto contaBancaria e, em seguida, chame a função para exibir as informações atualizadas no console.*/
const contaBancaria = {
    titular: "João",
    saldo: 1000,
    depositar: function(valor) {
        this.saldo += valor;
    },
    sacar: function(valor) {
        if (valor <= this.saldo) {
            this.saldo -= valor;
        } else {
            console.log("Saldo insuficiente para saque.");
        }
    }
};

const cliente = {
    nome: "Carlos",
    conta: contaBancaria
};

function mostrarSaldo(cliente) {
    console.log(`Nome do cliente: ${cliente.nome}`);
    console.log(`Saldo da conta: ${cliente.conta.saldo}`);
}

// Realize operações de depósito e saque na conta bancária do cliente
cliente.conta.depositar(500);
cliente.conta.sacar(200);

// Chame a função mostrarSaldo para exibir as informações atualizadas
mostrarSaldo(cliente)

var num = window.document.getElementById('txtnumero')
var lista = window.document.getElementById('listanum')
var res = window.document.getElementById('res')
var valores = []

function isNumero(n){
    if(Number(n) >= 1 && Number(n) <= 100){
        return true
    } else{
        return false
    }
}

function inLista(n, list){
    if(list.indexOf(Number(n)) != -1){
        return true
    } else{
        return false
    }
}

function adicionar_numero(){
       if(isNumero(num.value) && !inLista(num.value, valores)){
        valores.push(Number(num.value))
        var item = document.createElement('option')
        item.text = `Você adicionou o número ${Number(num.value)}`
        lista.appendChild(item)
    }else{window.alert('Valor informado inválido ou já encontrado na lista')}
    num.value = ''
    num.focus() //a função focus() deixa o mouse no input sem precisar clicar//

}

function finalizar(){
    res.innerHTML = '{'
}
  
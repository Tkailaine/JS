function gerador(){
    var num = window.document.getElementById('txtnumero')
    var tabuada = window.document.getElementById('seltab')
    var res = window.document.getElementById('res')
    
    tabuada.innerHTML=''
    if(num.value.length == 0){
        window.alert('Digite um número por favor!')
    }else{
        n = Number(num.value)
        c=1
        while(c<=10){
            var item = document.createElement('option')
            item.text = `${n} X ${c} = ${n*c}`
            item.value = `tab${c}`
            tabuada.appendChild(item)
            c++
        }
    }
}
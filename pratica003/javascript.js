function verificar(){
    var finicio = window.document.getElementById('txtinicio')
    var ffim = window.document.getElementById('txtfim')
    var fpasso = window.document.getElementById('txtpasso')
    var res = window.document.getElementById('res')

    res.innerHTML =''
    if (finicio.value.length == 0 || ffim.value.length == 0 || fpasso.value.length == 0){
        res.innerHTML = 'Impossível contar!'
        window.alert(`[ERRO] Faltam dados!`)
    }else {
        var i = Number(finicio.value)
        var f = Number(ffim.value)
        var p = Number(fpasso.value)
    }

    if(p<=0 || p>f){
        window.alert(`Passo inválido, considerando PASSO = 1`)
        p = 1
    }

    
    if(i<f){
        while(i <= f){
        
        if(i>=f){
            res.innerHTML += `${i} 🏁 `
        i = i + p}else { res.innerHTML += `${i} 👣 `
        i = i + p

            }
        }
    }else{
        while(i >= f){
        if(i<=f){
            res.innerHTML += `${i} 🏁 `
            i = i - p
        }else { res.innerHTML += `${i} 👣 `
        i = i - p

        }
    }

    
    
    
    
    
}}
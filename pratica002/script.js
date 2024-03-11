function verificar(){
    var data = new Date()
    var data_atual = data.getFullYear()
    var fano = window.document.getElementById('txtano')

    var res = window.document.querySelector('div.texto')
    var foto = window.document.getElementById("foto")

    if(fano.value.length == 0 || fano.value.length < 4 || fano.value > data_atual){
        window.alert('[ERRO] Ano inválido, tente novamente!')
    } else{
        var fsexo = window.document.getElementsByName('radsexo')
        var idade = data_atual - Number(fano.value)
        var gênero = ''

        if(fsexo[0].checked){
            if(idade >= 0 && idade <= 5){
                foto.src = 'bancoimagens/homembebe.png'
            }else if(idade<15){
                foto.src = 'bancoimagens/homemcrianca.png'
            }else if(idade<22){
                foto.src= 'bancoimagens/homemjovem.png'
            }else if(idade<50){
                foto.src = 'bancoimagens/homemadulto.png'
            }else if(idade>50){
                foto.src = 'bancoimagens/homemidoso.png'
            }
            gênero = 'homem'
        } else if (fsexo[1].checked){
            gênero = 'mulher'
            if(idade >= 0 && idade <= 5){
                foto.src = 'bancoimagens/mulherbebe.png'
            }else if(idade<15){
                foto.src = 'bancoimagens/mulhercrianca.png'
            }else if(idade<22){
                foto.src= 'bancoimagens/mulherjovem.png'
            }else if(idade<50){
                foto.src = 'bancoimagens/mulheradulto.png'
            }else if(idade>50){
                foto.src = 'bancoimagens/mulheridoso.png'
            }
        }
        
        res.style.textAlign = 'center' 
        if(idade == 1){
            res.innerHTML = `Detectamos que você é ${gênero} e tem ${idade} ano.`
        }else{
            res.innerHTML = `Detectamos que você é ${gênero} e tem ${idade} anos.`
        }
        res.appendChild(foto)

        

    }

    
    }

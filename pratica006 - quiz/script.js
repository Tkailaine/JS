function verificar(){
    caramelo = 0
    hortela = 0
    avela = 0

    var aroma = window.document.getElementsByName('aroma')
    var chocolate = window.document.getElementsByName('chocolate')
    var estacao = window.document.getElementsByName('estacao')
    var vela = window.document.getElementsByName('vela')
    var lazer = window.document.getElementsByName('lazer')
    var res = window.document.querySelector('div.texto')
  
    
    if(aroma[0].checked){
       caramelo = caramelo + 1.3
    }
    else if(aroma[1].checked){
        hortela = hortela + 1.3
     }
     else if(aroma[2].checked){
        avela = avela + 1.3
     }

     if(vela[0].checked){
        caramelo = caramelo + 1.1
     }
     else if(vela[1].checked){
         hortela = hortela + 1.1
      }
     else if(vela[2].checked){
         avela = avela + 1.1
      }


     if(chocolate[0].checked){
        caramelo = caramelo + 1.2
     }
     else if(chocolate[1].checked){
         hortela = hortela + 1.2
      }
     else if(chocolate[2].checked){
         avela = avela + 1.2
      }


      if(estacao[0].checked){
        caramelo = caramelo + 1
     }
     else if(estacao[1].checked){
         hortela = hortela + 1
      }
     else if(estacao[2].checked){
         avela = avela + 1
      }


    if(lazer[0].checked){
        caramelo = caramelo + 1
     }
     else if(lazer[1].checked){
         hortela = hortela + 1
      }
     else if(lazer[2].checked){
         avela = avela + 1
      }

    if(caramelo > hortela && caramelo > avela){
        res.innerHTML='caramelo'
    }else if(hortela > caramelo && hortela > avela){
        res.innerHTML='hortela'
    }else{
        res.innerHTML='avelã'
    }
    }

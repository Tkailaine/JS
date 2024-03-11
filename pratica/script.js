function carregar(){
    var msg = window.document.getElementById('msg')
    var img = window.document.getElementById('imagem')
    var data = new Date()
    var hora = data.getHours()
    msg.innerHTML = `Agora são <strong>${hora} horas</strong>.`
    if(hora >= 0 && hora < 12){
        img.src = 'bancoimagens/fotomanha.png'
        document.body.style.background = '#f6be98'
    }
    else if(hora >= 12 && hora < 18){
        img.src= 'bancoimagens/fototarde.png'
        document.body.style.background = '#cb924c'
        
    }
    else{
        img.src = 'bancoimagens/fotonoite.png'
        document.body.style.background = '#0a191c'
    }

}
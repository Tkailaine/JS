//Cor de fundo html
const html = document.querySelector('html')
//Botões
const botoesContexto = document.querySelectorAll('.app__card-button')
const focoBtn = document.querySelector('.app__card-button--foco')
const curtoBtn = document.querySelector('.app__card-button--curto')
const longoBtn = document.querySelector('.app__card-button--longo')
const botaoIniciar = document.querySelector('.app__card-primary-button');
//Temporizador
const temporizador = document.querySelector('#timer')
//Imagem da página
const imagemHero = document.querySelector('.app__image')
//Título principal
const tituloHero = document.querySelector('.app__title')

//Tempo temporizador de cada modo
const duracaoFoco = 1500; 
const duracaoDescansoCurto = 300; 
const duracaoDescansoLongo = 900; 

//Musica
const musicaInput = document.querySelector('#alternar-musica')
const musica = new Audio('sons/luna-rise-part-one.mp3')
musica.loop = true

musicaInput.addEventListener('change', () => ( musica.paused ? musica.play() : musica.pause()
))

const frases = [
    {
        modo : 'foco',
        frase: 'Otimize sua produtividade,',
        fraseStrong : 'mergulhe no que importa.'
    },
    {
        modo : 'duracao-curta',
        frase: 'Que tal dar uma respirada?',
        fraseStrong: 'Faça uma pausa curta!'
    },
    {
        modo : 'duracao-longa',
        frase: 'Hora de voltar à superfície.',
        fraseStrong: 'Faça uma pausa longa'
    }
]


focoBtn.addEventListener('click', () =>{
    alterarContexto('foco')
    alterarTitulo(frases,0)
    focoBtn.classList.add('active')
   
})

curtoBtn.addEventListener('click', () =>{
    alterarContexto('descanso-curto')
   alterarTitulo(frases,1)
   curtoBtn.classList.add('active')
   
})

longoBtn.addEventListener('click', () =>{
    alterarContexto('descanso-longo')
     alterarTitulo(frases,2)
     longoBtn.classList.add('active')
   

})

function alterarContexto(contexto){
    botoesContexto.forEach((contexto) => contexto.classList.remove('active'))
    html.setAttribute('data-contexto', `${contexto}` )
    imagemHero.setAttribute('src', `imagens/${contexto}.png`)
}

function alterarTitulo(lista,index){
    tituloHero.innerHTML = ` <h1 class="app__title">
            ${lista[index].frase}<br>
            <strong class="app__title-strong">
                ${lista[index].fraseStrong}
            </strong>
        </h1>`


}


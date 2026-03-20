import api from "./api.js"

const ui = {
  async renderizarPensamentos() {
    const listaPensamentos = document.getElementById("lista-pensamentos")

    try {
      const pensamentos = await api.buscarPensamentos()
      pensamentos.forEach(ui.adicionarPensamento)
    }
    catch {
      alert('Erro ao renderizar pensamentos')
    }
  },

    adicionarPensamento(pensamento){
    const listaPensamentos = document.getElementById("lista-pensamentos")
    const li = document.createElement('li')
    li.setAttribute("data-id", pensamento.id)
    li.classList.add("li-pensamento")

    const iconeAspas = document.createElement("img")
    iconeAspas.src = "assets/imagens/aspas-azuis.png"
    iconeAspas.classList.add("icone-aspas")
    const pensamentoConteudo = document.createElement("div")
    pensamentoConteudo.classList.add('pensamento-conteudo')
    pensamentoConteudo.textContent = pensamento.conteudo

    const pensamentoAutoria = document.createElement("div")
    pensamentoAutoria.textContent = pensamento.autoria
    pensamentoAutoria.classList.add("pensamento-autoria")

    const btnEditar = document.createElement('button')
    btnEditar.classList.add("botao-editar")
    const iconeEditar = document.createElement('img')
    iconeEditar.setAttribute('src', 'assets/imagens/icone-editar.png')
    btnEditar.appendChild(iconeEditar)
    btnEditar.onclick = () => {
      ui.preencherFormulario(pensamento.id)
    }

    const btnExcluir = document.createElement('button')
    btnExcluir.classList.add("botao-excluir")
    const iconeExcluir = document.createElement('img')
    iconeExcluir.setAttribute('src', 'assets/imagens/icone-excluir.png')
    btnExcluir.appendChild(iconeExcluir)
     btnExcluir.onclick = () => {
     api.excluirPensamentoEspecifico(pensamento.id)
    }

    
    li.appendChild(iconeAspas)
    li.appendChild(pensamentoConteudo)
    li.appendChild(pensamentoAutoria)
    li.appendChild(btnEditar)
    li.appendChild(btnExcluir)
    listaPensamentos.appendChild(li)
  },


  async preencherFormulario(pensamentoId){
    try{
      const pensamento = await api.buscarPensamentoEspecifico(pensamentoId)
      document.getElementById('pensamento-id').value = pensamento.id;
      document.getElementById('pensamento-conteudo').value = pensamento.conteudo;
      document.getElementById('pensamento-autoria').value = pensamento.autoria;
    }
    catch{
      alert('erro em preencher formulario')
    }
  }
}
export default ui
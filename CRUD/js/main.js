import ui from "./ui.js"
import api from "./api.js"

const formularioPensamento = document.querySelector('#pensamento-form')
const pensamentoConteudo = document.querySelector('#pensamento-conteudo')
const pensamentoAutoria = document.querySelector('#pensamento-autoria')
const pensamentoId = document.querySelector('#pensamento-id')
const btnCancelar = document.querySelector('#botao-cancelar')

document.addEventListener("DOMContentLoaded", () => {
  ui.renderizarPensamentos();
});

formularioPensamento.addEventListener('submit', manipulandoFormulario)

async function manipulandoFormulario(event) {
  event.preventDefault();

  const dadosPensamento = {
    conteudo: pensamentoConteudo.value,
    autoria: pensamentoAutoria.value
  }

  try {
    if(pensamentoId.value){
      dadosPensamento.id = pensamentoId.value
      await api.editarPensamentos(dadosPensamento)
      await ui.renderizarPensamentos()
    }else{
      await api.salvarPensamentos(dadosPensamento, dadosPensamento)
      await ui.renderizarPensamentos()
    }
    
    formularioPensamento.reset()
  }
  catch {
    alert('erro ao salvar pensamento')
  }
}

btnCancelar.onclick = () => {
    formularioPensamento.reset()
  }

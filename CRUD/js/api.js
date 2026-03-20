//Aqui faremos funções para requisições
const URL_BASE = 'http://localhost:3000'
const api ={
    /*async buscarPensamentos(){
        try{
            const response = await fetch(`${URL_BASE}/pensamentos`)
            return await response.json()
        }
        catch(error){
            alert('Erro ao buscar pensamentos')
            throw error
        }
    },*/

    async buscarPensamentos(){
        try{
            const response = await axios.get(`${URL_BASE}/pensamentos`)
            return await response.data
        }
        catch(error){
            alert('Erro ao buscar pensamentos')
            throw error
        }
    },

    async salvarPensamentos(pensamento){
        try{
            const response = await axios.post(`${URL_BASE}/pensamentos`, pensamento)
            return await response.data //retorna em objeto js.
        }
        catch(error){
            alert('Erro ao salvar pensamento')
        }
    },

    async buscarPensamentoEspecifico(id){
        try{
            const response = await axios.get(`${URL_BASE}/pensamentos/${id}`)
            return await response.data
        }
        catch(error){
            alert('Erro ao buscar pensamento específico')
            throw error
        }
    },

    async editarPensamentos(pensamento){
         try{
            const response = await fetch(`${URL_BASE}/pensamentos/${pensamento.id}`, 
                {method:'PUT', headers:{"Content-Type" : "application/json" },body: JSON.stringify(pensamento) 
            }
        )
            return await response.json() //retorna em objeto js.
        }
        catch(error){
            alert('Erro ao editar pensamento')
        }},

         async excluirPensamentoEspecifico(id){
         try{
            const response = await fetch(`${URL_BASE}/pensamentos/${id}`, 
                {method:'DELETE'}
        )
        }
        catch(error){
            alert('Erro ao excluir pensamento')
        }},


        
    }

export default api;


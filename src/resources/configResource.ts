import axios from './axios'

export default class ConfigResource{

    static async porOndeNosConheceu() {
        return await axios.get('/settings/por_onde_nos_conheceu');
    }

    static async tipoCadastro() {
        return await axios.get('/settings/tipo_cadastro');
    }
    
    static async gerente() {
        return await axios.get('/gerente');
    }
    

}

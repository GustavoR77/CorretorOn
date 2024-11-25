import axios from './axios'

export default class TabelaResource{

    static async search(data = {}) {

        return await axios.get('/empreendimento/tabelas', {
            params: data
        })
    }


}

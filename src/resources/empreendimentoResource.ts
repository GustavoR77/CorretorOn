import axios from './axios'

export default class EmpreendimentoResource{

    static regioes() {
        return axios.get('/regioes');
    }

    static async search(data = {}) {
        return await axios.get('/empreendimento', {
            params: data
        });
    }

    static find(id: string|number|null) {
        return axios.get('/empreendimento/' + id);
    }

    static async empreendimentos() {
        return await axios.get('/empreendimentos');
    }

}

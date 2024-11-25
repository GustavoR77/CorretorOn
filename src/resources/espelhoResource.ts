import axios from './axios'

export default class EspelhoResource{

    static async search(data = {}) {

        return await axios.get('/espelho-empreendimento', {
            params: data
        })
    }

    static async blocos(espelho_id) {

        return await axios.get('/espelho-empreendimento/' + espelho_id)
    }

    static async unidades(data = {}) {

        return await axios.get('/espelho-unidade', {
            params: data
        })
    }


}

import axios from './axios'

export default class AgendaResource{

    static agendarVisita(data) {
        return axios.post('/visita', data);
    }

}

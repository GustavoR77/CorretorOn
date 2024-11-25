import axios from './axios'

export default class TextoResource{

    static async get(slug) {
        return await axios.get('/content/' + slug)
    }

   
}

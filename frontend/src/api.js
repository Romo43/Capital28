import axios from 'axios'
const url = "/Capital28/News"

export default class API{

        //para obtener todas las News
        static async allNews(){
            const res = await axios.get(url);
            return res.data;
        }
        //para obtener una News
        static async findNews(id){
            const res = await axios.get(`${url}/${id}`);
            return res.data;
        }

        //para insertar una noticia en la BD
        static async createNews(news){
            const res = await axios.post(url, news);
            return res.data;
        }   
        //para actualizar una version en la BD
        static async updateNews(news){
            const res = await axios.patch(`${url}/${id}`, news);
            return res.data;
        }
        //para actualizar el status
        static async updateStatus(){
            const res = await axios.delete(`${url}/status/${id}`);
            return res.data;
        }
        //para eliminar una version
        static async deleteNews(){
            const res = await axios.delete(`${url}/${id}`);
            return res.data;
        }
}
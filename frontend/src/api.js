import axios from 'axios'
const url = "/Capital28/News"

export default class API{
    //Apss

        //para obtener todas las Apps
        static async allApps(){
            const res = await axios.get(url+'/apps');
            return res.data;
        }
        //para obtener una App
        static async findApp(id){
            const res = await axios.get(`${url}/app/${id}`);
            return res.data;
        }

    //Versions

        //para insertar una noticia en la BD
        static async createNews(post){
            const res = await axios.post(url, post);
            return res.data;
        }   
        //para actualizar una version en la BD
        static async updateVersion(post){
            const res = await axios.put(`${url}/${id}`, post);
            return res.data;
        }
        //para eliminar una version
        static async deleteVersion(){
            const res = await axios.delete(`${url}/${id}`);
            return res.data;
        }
}
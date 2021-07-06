import axios from 'axios'
const url = "/api/post";

export default class API{
    //para obtener todas las versiones
    static async fetchAllVersions(){
        const res = await axios.get(url);
        return res.data;
    }
    //para obtener una version por id
    static async fetchByID(id){
        const res = await axios.get(`${url}/${id}`);
        return res.data;
    }
     //para insertar una noticia en la BD
     static async createVersion(post){
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
import axios from 'axios'
const url = "/api/post";

export default class API{
    //para obtener todas las noticias
    static async getAllPost(){
        const res = await axios.get(url);
        return res.data;
    }
    //para obtener una noticia por id
    static async getPostByID(id){
        const res = await axios.get(`${url}/${id}`);
        return res.data;
    }
     //para insertar una noticia en la BD
     static async addPost(post){
        const res = await axios.post(url, post);
        return res.data;
    }   
    //para actualizar una noticia en la BD
     static async updatePost(post){
        const res = await axios.patch(`${url}/${id}`, post);
        return res.data;
    }
     //para eliminar una noticia
     static async deletePost(){
        const res = await axios.delete(`${url}/${id}`);
        return res.data;
    }
}
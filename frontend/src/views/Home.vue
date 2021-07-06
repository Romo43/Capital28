<template>
<v-container>
  <h1>Versiones</h1>
  <v-row>
    <v-col sm="4" class="pa-3" v-for="post in posts" :key="post._id">
      <v-card class="pa-1">
        <v-img height="250"></v-img> 
          <v-btn class="ml-4 mt-3" small outlined color="indigo">
            {{ post.version }}
          </v-btn>
          <v-card-title class="headline">
            {{post.status}}
          </v-card-title>  
               <v-card-text class="py-8">
                 {{post.publishedAt}}            
               </v-card-text>
      </v-card>
    </v-col>
  </v-row>
</v-container>
</template>

<script>
import API from '../api';
  export default {
    name: 'Home',
    data(){
      return{
      posts:[],
      };
    },
    async created(){
      this.posts = await API.fetchAllVersions();
    }
  }
</script>

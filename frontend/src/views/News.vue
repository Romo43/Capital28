<template>
    <v-container>
        <h1>{{News.currentVersion}}</h1>
  <v-row v-if="News.news != null">
    <v-col sm="4" class="pa-3" v-for="(value,index) in News.news" :key="value" >
      <v-card class="pa-1" :key="index">
        <v-img height="250"></v-img> 
          <v-btn class="ml-4 mt-3" small outlined color="indigo" >
            {{ value.title }}
          </v-btn>
          <v-card-title class="headline">
           {{ value.description }}
          </v-card-title>  
              <v-card-text class="py-8">
                <!-- {{News.publishedAt}}             -->
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
      News:[],
      };
      
    },
    async created(){
      this.News = await API.findApp(this.$route.params.id);
      this.News = response;
      for (const property in News) {
      console.log(`${property}: ${object[property]}`);
      }
    }
  }
</script>
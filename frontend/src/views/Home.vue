<template>
  <v-container>
    <v-alert border="left" close-text="Close Alert" color="gren accent-4" dark dismissible v-if="this.$route.params.message">
      {{this.$route.params.message}}
    </v-alert>
    <v-row>
    </v-row>
    <v-row>
      <v-col
        sm="4"
        class="pa-3"
        v-for="news in News"
        :key="news._id"
      >
        <v-card class="pa-1" :to="{ name: 'news', params: {id: news._id}}">
          <v-img height="200" :src="`${news.URLtoMedia}`"></v-img>
          <v-col sm="12" class="d-flex justify-end">
           
            <v-btn class="ml-4 mt3" small outlined color="indigo">{{news.app}}</v-btn>
          </v-col>
          <v-card-title class="headline">
            {{news.title}} {{news.app}}
          </v-card-title>
          <v-card-text class="py-8">
            {{ news.description.substring(0, 100) + "..." }}</v-card-text
          >
        </v-card>
      </v-col>
    </v-row>
  </v-container>
</template>
<script>
import API from "../api";
export default {
  name: "Home",
  data() {
    return {
      News: [],
    };
  },
  async created() {
    this.News = await API.allNews();
    this.News = response;
  },
};
</script> 
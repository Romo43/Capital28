 <template>
  <v-container>
    <v-row no-gutters>
      <v-col sm="10" class="pa-4 mx_auto">
        <v-card class="pa-2">
          <v-img :src="`/${news.media}`"></v-img>
          <v-card-actions class="pb_0">
            <v-row class="mt-1 mx-1">
              <v-col sm="2">
                <v-btn small outlined color="primary">{{news.app}}</v-btn>
              </v-col>
              <v-col sm="10" class="d-flex justify-end">
                <v-btn color="success" text :to="{name: 'edit-news', params:{ id: news._id}}">Edit</v-btn>
                <v-btn color="red" text @click="removeNews(news._id)">Delete</v-btn>
              </v-col>
            </v-row>
          </v-card-actions>
          <v-card-subtitle class="headline"><h3>{{news.title}}</h3></v-card-subtitle>
          <v-card-text class="grey--text"><p>{{news.description}}</p><p>{{news.publishedAt}}</p></v-card-text>
        </v-card>
      </v-col>
    </v-row>
  </v-container>
</template>
<script>
import API from '../api'
export default {
  data(){
    return{
      news:[],
    };
  },
  async created(){
    const response = await API.findNews(this.$route.params.id);
    this.news = response;
  },
  methods:{
    async removeNews(id){
      const response = await API.deleteNews(id);
      this.$router.push({name: 'Home', params:{ message: response.message}});
    }
  }
}
</script>

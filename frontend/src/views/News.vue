 <template>
  <v-container>
    <v-alert border="left" close-text="Close Alert" color="gren accent-4" dark dismissable v-if="this.$route.params.message">
      {{this.$route.params.message}}
    </v-alert>
    <v-row>
      <h1>{{ News.currentVersion }}</h1>
    </v-row>
    <v-row v-if="News.news != null">
      <v-col
        sm="4"
        class="pa-3"
        v-for="(value, index) in News.news"
        :key="value"
      >
        <v-card class="pa-1" :key="index">
          <v-img height="200" :src="`/${News.URLtoMedia}`"></v-img>
          <v-col sm="12" class="d-flex justify-end">
            <v-btn class="mx-2" fab dark small color="blue">
              <v-icon dark> mdi-pencil </v-icon>
            </v-btn>
            <v-btn class="mx-2" fab dark small color="red">
              <v-icon dark> mdi-delete </v-icon>
            </v-btn>
          </v-col>
          <v-card-title class="headline">
            {{ value.title }}
          </v-card-title>
          <v-card-text class="py-8">
            {{ value.description.substring(0, 100) + "..." }}</v-card-text
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
    this.News = await API.findApp(this.$route.params.id);
    this.News = response;
    for (const property in News) {
      console.log(`${property}: ${object[property]}`);
    }
  },
};
</script> 
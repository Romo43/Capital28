<template>
  <v-container>
    <v-row no-gutters>
      <v-col sm="10" class="mx-auto">
        <v-card class="pa-5">
          <v-card-title>Edit this News</v-card-title>
          <v-divider></v-divider>
          <v-form
            ref="form"
            @submit.prevent="updateForm"
            class="pa-5"
            enctype="multipart/form-data"
          >
            <v-text-field
              label="Title"
              v-model="news.title"
              prepend-icon="mdi-note"
              :rules="rules"
            ></v-text-field>
            <v-text-field
              label="App"
              v-model="news.app"
              prepend-icon="mdi-note"
              :rules="rules"
            ></v-text-field>

            <v-textarea
              label="Description"
              v-model="news.description"
              propend-icon="mdi-note-plus"
              :rules="rules"
            ></v-textarea>

            <v-text-field
              label="version"
              v-model="news.version"
              prepend-icon="mdi-note"
              :rules="rules"
            ></v-text-field>

            <v-text-field
              label="URLToMedia"
              v-model="news.URLtoMedia"
              prepend-icon="mdi-note"
              :rules="rules"
            ></v-text-field>
            <v-text-field
              label="publishedAt"
              v-model="news.publishedAt"
              prepend-icon="mdi-note"
              :rules="rules"
            ></v-text-field>
            <v-img :src="`/${news.URLToMedia}`" width="120"></v-img>

            <v-btn type="submit" class="mt-3" dark color="success">Update new</v-btn>
          </v-form>
        </v-card>
      </v-col>
    </v-row>
  </v-container>
</template>
<script>
import API from "../api";
export default {
  data() {
    return {
      rules: [(value) => !!value || "This field is required!"],
      news: {
        app: '',
        title: '',
        version: 0,
        description: '',
        URLtoMedia: '',
        publishedAt: '',
      },
      URLtoMedia: '',
    };
  },
  async created(){
      const response = await  API.findNews(this.$route.params.id);
      this.news = response;
  },
  methods: {
    async updatetForm() {
      const formData = new FormData();
      formData.append("title", this.news.title);
      formData.append("app", this.news.app);
      formData.append("URLtoMedia", this.URLtoMedia);
      formData.append("version", this.news.version);
      formData.append("description", this.news.description);
      formData.append("publishedAt", this.news.publishedAt);
      formData.append("old_image", this.news.URLtoMedia);
      if (this.$refs.form.validate()) {
        const response = await API.updateNews(this.$route.params.id, formData);
        for (var pair of formData.entries()) {
    console.log(pair[0]+ ', ' + pair[1]); 
}
        this.$router.push({name: "Home", params: { message: response.message } })
      }
    },
  },
};
</script>

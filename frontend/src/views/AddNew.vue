<template>
  <v-container>
    <v-row no-gutters>
      <v-col sm="10" class="mx-auto">
        <v-card class="pa-5">
          <v-card-title>Add New</v-card-title>
          <v-divider></v-divider>
          <v-form
            ref="form"
            @submit.prevent="submitForm"
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
              label="publishedAt"
              v-model="news.publishedAt"
              prepend-icon="mdi-note"
              :rules="rules"
            ></v-text-field>
            <v-file-input
            @change="selectFile"
            :rules="rules"
            show-size
            counter
            multiple
            label="Select image"></v-file-input>

            <v-btn type="submit" class="mt-3" dark color="blue">Add new</v-btn>
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
        app: "",
        title: "",
        version: 0,
        description: "",
        media: "",
        publishedAt: "",
      },
      media: "",
    };
  },
  methods: {
    selectFile(file){
      this.media = file[0];
    },
    async submitForm() {
      const formData = new FormData();
      formData.append("media", this.media);
      formData.append("title", this.news.title);
      formData.append("app", this.news.app);
      formData.append("version", this.news.version);
      formData.append("description", this.news.description);
      formData.append("publishedAt", this.news.publishedAt);
      if (this.$refs.form.validate()) {
        const response = await API.createNews(formData);
        this.$router.push({name: 'Home', params: { message: response.message } })
      }
    },
  },
};
</script>

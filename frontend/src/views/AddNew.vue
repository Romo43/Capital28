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
              v-model="news.title"
              label="Title"
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
              v-model="news.version"
              label="version"
              prepend-icon="mdi-note"
              :rules="rules"
            ></v-text-field>

              <v-text-field
              v-model="news.URLtoMedia"
              label="URLToMedia"
              prepend-icon="mdi-note"
              :rules="rules"
            ></v-text-field>
              <v-text-field
              v-model="news.URL"
              label="URL"
              prepend-icon="mdi-note"
              :rules="rules"
            ></v-text-field>
              <v-text-field
              v-model="news.publishedAt"
              label="publishedAt"
              prepend-icon="mdi-note"
              :rules="rules"
            ></v-text-field>
              <v-text-field
              v-model="news.roles"
              label="roles"
              prepend-icon="mdi-note"
              :rules="rules"
            ></v-text-field>

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
        title: "sadasd",
        version: 1.2,
        description: "asdasdsadasdsa",
        URLtoMedia: "asdasdsad",
        URL: "asdasdsadsad",
        publishedAt: "December 17, 1995 03:24:00",
        roles: ["String"],
      },
      image: "",
    };
  },
  method: {
    async submitForm() {
      const formData = new formData();
      formData.append("title", this.new.title);
      formData.append("URLtoMedia", this.URLtoMedia);
      formData.append("version", this.new.version);
      formData.append("description", this.new.description);
      formData.append("URL", this.new.URL);
      formData.append("publishedAt", this.new.publishedAt);
      formData.append("roles", this.new.roles);
      if (this.$refs.form.validate()) {
        const response = await API.createNews(formData);
        console.warn(formData);
        this.$router.push({name: "Home", params: { message: response.message } })
      }
    },
  },
};
</script>

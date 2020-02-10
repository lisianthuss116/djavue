<template>
  <div class="home container mx-auto">
    <div class="flex flex-wrap">
      <Alert
        bgcolor="green-200"
        border="border"
        bordercolor="green-300"
        color="green-700"
        v-show="alert"
        @success="alert = true"
      >Successfully posted a new post.</Alert>
      <Post :article="article" v-for="article in articles" :key="article.id" />
    </div>
  </div>
</template>

<script>
import axios from "axios";
import Alert from "@/components/Alert";
import Post from "@/components/Post";

export default {
  name: "home",
  components: {
    Alert,
    Post
  },
  data() {
    return {
      alert: false,
      endpoint: "/api/v1/articles/",
      articles: null
    };
  },
  created() {
    this.fetchArticles();
  },
  methods: {
    async fetchArticles() {
      try {
        let { data } = await axios.get(this.endpoint);

        this.articles = data;
      } catch (error) {
        console.log(error);
      }
    }
  }
};
</script>

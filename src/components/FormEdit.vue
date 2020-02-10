<template>
  <form class="w-3/4 mt-8" @submit.prevent="editArticle">
    <div class="md:flex md:items-center mb-6">
      <div class="md:w-1/4">
        <label
          class="block text-gray-600 font-bold md:text-right mb-1 md:mb-0 pr-4"
          for="inline-full-name"
        >Title</label>
      </div>
      <div class="md:w-3/4">
        <input
          class="bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-green-500"
          id="inline-full-name"
          type="text"
          v-model="title"
        />
      </div>
    </div>
    <div class="md:flex md:items-center mb-6">
      <div class="md:w-1/4">
        <label
          class="block text-gray-600 font-bold md:text-right mb-1 md:mb-0 pr-4"
          for="inline-username"
        >Content</label>
      </div>
      <div class="md:w-3/4">
        <textarea
          class="bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-green-500"
          cols="30"
          rows="10"
          v-model="content"
        ></textarea>
      </div>
    </div>
    <div class="md:flex md:items-center">
      <div class="md:w-1/3"></div>
      <div class="md:w-full">
        <button
          name="submit"
          class="shadow bg-green-500 hover:bg-green-400 focus:shadow-outline focus:outline-none text-white font-bold py-2 px-4 rounded"
          type="submit"
        >Submit</button>
      </div>
    </div>
  </form>
</template>

<script>
import axios from "axios";
export default {
  data() {
    return {
      endpoint: "/api/v1/articles/",
      id: this.$route.params["id"],
      title: "",
      content: ""
    };
  },
  created() {
    this.fetchArticle();
  },
  methods: {
    async fetchArticle() {
      let response = await axios.get(this.endpoint + this.id);

      this.title = response.data.title;
      this.content = response.data.content;
    },
    async editArticle() {
      console.log(this.endpoint + this.id);
      let response = await axios.put(this.endpoint + this.id + '/', {
        title: this.title,
        content: this.content
      });

      this.$router.push(`/post/${this.id}`);
    }
  }
};
</script>
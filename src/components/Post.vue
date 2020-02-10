<template>
  <div
    :class="grid"
    class="article_post w-full md:w-1/2 p-6 m-2 mb-8 bg-white rounded-lg"
  >
    <h1 class="text-4xl font-bold">
      <router-link :to="'/post/' + article.id">{{ article.title }}</router-link>
    </h1>
    <p
      class="text-gray-500"
      v-if="article.content.length > 124"
    >{{ article.content.substring(0, 124) }}...</p>
    <p class="text-gray-500" v-else>{{ article.content }}</p>
    <div class="flex justify-between items-baseline pt-12">
      <span class>
        <p class="text-gray-600">By {{ article.user }}</p>
      </span>
      <div class="block text-right">
        <Tooltip
          :msg="isBookmarked ? 'Added to bookmark!': 'Add to bookmark'"
          v-show="showTooltip"
        />
        <button
          @click="isBookmarked = !isBookmarked"
          @mouseover="showTooltip = !showTooltip"
          @mouseout="showTooltip = false"
          class="bookmark-btn p-2 rounded-full hover:bg-teal-100 focus:outline-none"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            :fill="isBookmarked ? '#4FD1C5' : 'none'"
            stroke="#4FD1C5"
            stroke-width="2"
            stroke-linecap="round"
            stroke-linejoin="round"
            class="feather feather-bookmark"
          >
            <path d="M19 21l-7-5-7 5V5a2 2 0 0 1 2-2h10a2 2 0 0 1 2 2z" />
          </svg>
        </button>
      </div>
    </div>
  </div>
</template>

<script>
import Tooltip from "./Tooltip";

export default {
  props: ["grid", "article"],
  components: {
    Tooltip
  },
  data() {
    return {
      isBookmarked: false,
      showTooltip: false
    };
  }
};
</script>

<style lang="scss" scoped>
.article_post {
  -webkit-box-shadow: 0px 0px 18px 0px rgba(49, 151, 149, 0.19);
  -moz-box-shadow: 0px 0px 18px 0px rgba(49, 151, 149, 0.19);
  box-shadow: 0px 0px 18px 0px rgba(49, 151, 149, 0.19);
}
.bookmark-btn {
  transition: 0.35s;
}
</style>
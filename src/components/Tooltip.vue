<template>
  <div class="absolute -mt-8">
    <div class="bg-teal-400 text-white text-xs rounded py-1 px-4 right-0 bottom-full">
      {{ msg }}
      <svg
        class="absolute text-teal-400 h-6 left-0 ml-3 top-full"
        x="0px"
        y="0px"
        viewBox="0 0 255 255"
        xml:space="preserve"
      >
        <polygon class="fill-current" points="0,0 127.5,127.5 255,0" />
      </svg>
    </div>
  </div>
</template>

<script>
export default {
  props: ["msg"]
};
</script>

<style scoped>
.bottom-full {
  bottom: 100%;
}
</style>
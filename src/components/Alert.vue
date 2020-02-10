<template>
  <div
    :class="`bg-${bgcolor} ${border} border-${bordercolor} text-${color}`"
    class="px-4 py-3 rounded relative"
    role="alert"
  >
    <strong class="font-bold">{{ title }}</strong>
    <span class="block sm:inline">
        <slot></slot>
    </span>
    <span class="absolute top-0 bottom-0 right-0 px-4 py-3">
      <img src="@/assets/icons/x.svg" alt />
    </span>
  </div>
</template>

<script>
export default {
  props: ["title", "bgcolor", "border", "bordercolor", "color"]
};
</script>

<style>
</style>
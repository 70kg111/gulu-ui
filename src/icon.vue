<template>
  <svg class="g-icon">
    <!-- 下面的最终效果是 <use xlink:href="#i-settings" />，这里的icon与下面props传入的值对应 -->
    <use :xlink:href="`#i-${name}`" />
  </svg>
</template>

<script>
export default {
  props: ["name"]
};
</script>

<style lang="scss">
.g-icon {
  width: 1em;
  height: 1em;
  margin-right: 0.4em;
}
</style>

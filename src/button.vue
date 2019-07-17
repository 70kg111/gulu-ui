<template>
  <button class="g-button">提交</button>
</template>


<script>
export default {
  name: "Button"
};
</script>


<style lang="scss">
/*按钮样式*/
.g-button {
  font-size: var(--font-size);
  height: var(--button-height);
  padding: 0 1em;
  font: inherit;
  border-radius: var(--border-radius);
  border: 1px solid var(--border-color);
  background: var(--button-bg);

  /*&符号表示当前的选择器，scss语法*/
  &:hover {
    border: 1px solid var(--border-color-hover);
  }
  &:active {
    background: var(--button-active-bg);
  }
  /*取消鼠标放上去的时候蓝色的框*/
  &:focus {
    outline: none;
  }
}
</style>

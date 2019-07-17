<template>
  <div>
    <!-- 按钮中的提交两个字是传入进去的，所以不直接写，在index.html中的内容会显示到slot标签中，vue的特性 -->
    <button class="g-button">
      <!-- 这里引入icon组件，v-if判断用户是否传入了svg，后面的:name="icon"是因为index.html页面里传过的settting等就是这里props接收的值icon -->
      <!-- 然后再传到icon组件中的`#i-${name}`中，就相当于是#i-setting，就显示出了setting的图标 -->
      <g-icon v-if="icon" :name="icon"></g-icon>
      <slot></slot>
    </button>
  </div>
</template>


<script>
export default {
  props: ["icon"]
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
  //   万金油居中代码
  display: inline-flex;
  justify-content: center;
  align-items: center;

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

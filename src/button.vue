<template>
  <div>
    <!-- 按钮中的提交两个字是传入进去的，所以不直接写，在index.html中的内容会显示到slot标签中，vue的特性 -->
    <button class="g-button">
      <!-- 判断一下，如果用户不传参的话就不显示这个svg -->
      <svg v-if="icon" class="icon">
        <!-- 下面的最终效果是 <use xlink:href="#i-settings" />，这里的icon与下面props传入的值对应 -->
        <use :xlink:href="`#i-${icon}`" />
      </svg>
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

<template>
  <div>
    <!-- 按钮中的提交两个字是传入进去的，所以不直接写，在index.html中的内容会显示到slot标签中，vue的特性 -->
    <!-- 当前这个按钮被点击后触发一个click事件 -->
    <button class="g-button" @click="$emit('click')">
      <!-- 这里引入icon组件，v-if判断用户是否传入了svg，后面的:name="icon"是因为index.html页面里传过的settting等就是这里props接收的值icon -->
      <!-- 然后再传到icon组件中的`#i-${name}`中，就相当于是#i-setting，就显示出了setting的图标 -->
      <g-icon v-if="icon && !loading" :name="icon"></g-icon>
      <g-icon name="loading" v-if="loading" class="jiazai"></g-icon>
      <slot></slot>
    </button>
  </div>
</template>


<script>
export default {
  props: {
    icon: {},
    loading: {
      type: Boolean,
      default: false
    }
  }
};
</script>


<style lang="scss">
/*按钮样式*/
.g-button {
  //   万金油居中代码
  display: inline-flex;
  justify-content: center;
  align-items: center;

  font-size: var(--font-size);
  height: var(--button-height);
  padding: 0 1em;
  border-radius: var(--border-radius);
  border: 1px solid var(--border-color);
  background: var(--button-bg);
  vertical-align: middle;

  @keyframes spin {
    0% {
      transform: rotate(0deg);
    }
    100% {
      transform: rotate(360deg);
    }
  }
  .jiazai {
    animation: spin 2s infinite linear;
  }

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

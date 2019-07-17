//整个应用程序的入口

import Vue from 'vue'
import Button from './button'

Vue.component('g-button',Button)

new Vue({
    el:"#app",
    data:{
        words:'孙笑川'
    }
})
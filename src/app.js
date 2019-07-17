//整个应用程序的入口

import Vue from 'vue'
import Button from './button'
import Icon from './icon'

Vue.component('g-button',Button)
Vue.component('g-icon',Icon)

new Vue({
    el:"#app",
    data:{
        isloading:true
    }
})
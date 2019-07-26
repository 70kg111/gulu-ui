//整个应用程序的入口

import Vue from 'vue'
import Button from './button'
import Icon from './icon'
import ButtonGroup from "./button-group"


Vue.component('g-button',Button)
Vue.component('g-icon',Icon)
Vue.component('g-button-group',ButtonGroup)

new Vue({
    el:"#app",
    data:{
        isloading:true
    }
})



//单元测试

import chai from "chai"
//spies用于监听函数做单元测试
import spies from "chai-spies"
const expect = chai.expect
chai.use(spies)

//测试icon
{
    //创建一个函数
    const Constructor = Vue.extend(Button)
    //通过这个函数去构建一个button，这个button就是实例，放到页面去就是一个按钮
    const vm = new Constructor({
        propsData:{
            icon:'settings'
        }
    })
    //$mount的意思就是把这个按钮挂载到id="text"的标签上，也可以直接不传参数，会直接mount到内存里
    vm.$mount('#test')

    //开始测试
    let useElement = vm.$el.querySelector('use')
    let href = useElement.getAttribute('xlink:href')
    expect(href).to.eq('#i-settings')

    //清理内存，把button的元素干掉，然后把button自己也干掉
    vm.$el.remove()
    vm.$destroy()
}

//测试loading
{
    const Constructor = Vue.extend(Button)
    const vm = new Constructor({
        propsData:{
            icon:'settings',
            loading:true
        }
    })
    vm.$mount()

    let useElement = vm.$el.querySelector('use')
    let href = useElement.getAttribute('xlink:href')
    expect(href).to.eq('#i-loading')

    vm.$el.remove()
    vm.$destroy()
}

//测试click事件，要用到spy函数，这就是一个mock
{
    const Constructor = Vue.extend(Button)
    const vm = new Constructor({
        propsData:{
            icon:'settings',
            
        }
    })
    vm.$mount()
    //使用间谍函数
    let spy = chai.spy(function(){})
    //监听click事件
    vm.$on('click',spy)
    //这里的el本身就是一个button，所以不需要再去找了
    let button = vm.$el
    button.click()
    expect(spy).to.have.been.called()
}
import Vue from 'vue'
import ljButton from './button'
import Icon from './icon'
Vue.component('lj-button',ljButton)
Vue.component('lj-icon',Icon)
new Vue({
    el:'#app',
    data(){
        return{
            loading:false
        }
    }
})
//单元测试
import chai from 'chai'
const expect = chai.expect
{
    
    let constructor = Vue.extend(ljButton)
    console.log(constructor)
    let button = new constructor({
        propsData:{
            icons:'settings'
        }
    })
    button.$mount()
    let useElement = button.$el.querySelector('use')
    console.log(useElement)
    expect(useElement.getAttribute('xlink:href')).eq('#i-settings')
}
{
    let constructor = Vue.extend(ljButton)
    console.log(constructor)
    let button = new constructor({
        propsData:{
            icons:'settings',
            loading:true
        }
    })
    button.$mount() 
    let useElement = button.$el.querySelector('use')
    console.log(useElement)
    expect(useElement.getAttribute('xlink:href')).eq('#i-loading')  
}
{

    let constructor = Vue.extend(ljButton)
    console.log(constructor)
    let button = new constructor({
        propsData:{
            icons:'settings'
        }
    })
    button.$mount('#test') 
    let svg = button.$el.querySelector('svg')
    let {order} = window.getComputedStyle(svg)
    expect(order).eq('1')
    button.$el.remove()  
    button.$destroy()
}
{
    let div = document.createElement('div')
    document.body.appendChild(div)
    let constructor = Vue.extend(ljButton)
    console.log(constructor)
    let button = new constructor({
        propsData:{
            icons:'settings',
            iconPosition:'right'
        }
    })
    button.$mount(div) 
    let svg = button.$el.querySelector('svg')
    let {order} = window.getComputedStyle(svg)
    expect(order).eq('2')
    button.$el.remove()  
    button.$destroy() 
}
//mock
{
    let div = document.createElement('div')
    document.body.appendChild(div)
    let constructor = Vue.extend(ljButton)
    console.log(constructor)
    let button = new constructor({
        propsData:{
            icons:'settings',
            iconPosition:'right'
        }
    })
    button.$mount(div) 
    button.$on('click',function(){
        console.log(454545)
    })
    let btn_click=button.$el
    btn_click.click()
}
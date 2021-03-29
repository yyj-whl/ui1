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
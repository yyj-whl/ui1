<template>
    <button class='lj-button' :class="{[`icons-${iconPosition}`]:true}">
        <lj-icon class='loading' name='loading'></lj-icon>
        <lj-icon :name='icons' v-if="icons"></lj-icon>
        <!-- <svg class="icon" v-if="icons">
            <use :xlink:href='`#i-${icons}`'></use>
        </svg> -->
        <slot></slot>
    </button>
</template>
<script>
export default {
    name:'lj-button',
    props:{
        icons:{
            type:String,
            default:''
        },
        iconPosition:{
            type:String,
            default:'left',
            validator:(val)=>{
                // if(val!=='left'&&val!=='right'){
                //     return false
                // }else{
                //     return true
                // }
                return !(val!=='left'&&val!=='right')
            }
        }
    }
}
</script>
<style lang="scss">
    @keyframes spin {
        0%{transform: rotate(0deg)}
        100%{transform: rotate(360deg);}
    }
    .lj-button{
        font-size: var(--font-size);
        height: var(--button-height);
        background: var(--button-background);
        padding:0 1em;
        border: 1px solid var(--button-border-color);
        display: inline-flex;
        justify-content: center;
        align-items: center;
        vertical-align: middle;
        .icon{
            margin-right: .3em;
        }
        &.icons-right{
            .icon{
                order: 2;
                margin-left: .3em;
                margin-right: 0;
            }
        }
        .loading{
            animation: spin 2s infinite linear;
        }
    }
</style>
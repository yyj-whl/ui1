<template>
    <div>
        <button class='lj-button'>
            <svg class="icon">
                <use xlink:href='#i-settings'></use>
            </svg>
            <slot></slot>
        </button>
    </div>
</template>
<script>
export default {
    name:'lj-button',
    props:{
        icons:{
            type:String,
            default:''
        }
    }
}
</script>
<style lang="scss">
    .lj-button{
        font-size: var(--font-size);
        height: var(--button-height);
        background: var(--button-background);
        padding:0 1em;
        border: 1px solid var(--button-border-color);
    }
</style>
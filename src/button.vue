<template>
    <div>
        <button class='lj-button'>你好</button>
    </div>
</template>
<script>
export default {
    name:'lj-button'
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
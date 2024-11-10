<template>
     <div class="content">
       <div class="icon">
        <slot name="icon"></slot>
       </div>
       <div class="title">
        {{ props.title }}
       </div>
     </div>
</template>
    
<script setup >
    let props=defineProps(['title'])
    console.log(props.title);
    
</script>
    
<style lang="scss" scoped>
    .content{
        display: flex;
        margin-top: 10px;
        align-items: center;
       
        height: 25px;
        .icon{
            margin: 10px;
        }
        .title{
            margin: 10px 0px;
            color: rgb(42, 86, 149);
        }
        border-bottom: 1px dotted #000;

    }
</style>
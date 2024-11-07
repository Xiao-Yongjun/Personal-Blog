<template>
        <div class="column">
            <div class="title">
            {{ props.part.title}}
        </div>
        <div class="content">
            <div class="item" v-for="item in props.part.data" :key="item.url">
                <img :src="item.url" alt="">
            </div>
        </div>
        </div>
</template>
    
<script setup >
 let props=defineProps(['part'])   

 
</script>
    
<style lang="scss" scoped>
    .column{
        width: 100%;
        .title{
            line-height: 40px;
            height: 40px;
           
            font-size: 24px;
        }
        .content{
            margin-top: 10px;
            width: 100%;
            display: flex;
            .item{
                width: 200px;
                height: 150px;
                margin: 5px;
                border-radius: 4px;
                overflow: hidden;
                img{
                    width: 100%;
                    height: 100%;
                }
            }
        }
    }
</style>
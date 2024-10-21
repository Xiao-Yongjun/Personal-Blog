<template>
        <div class="column">
            <div class="title">
            这是标题
        </div>
        <div class="content">
            <div class="item" v-for="item in 4" :key="item">
                <img src="../../assets/Navigation-bar-icon/bg1.jpg" alt="">
            </div>
        </div>
        </div>
</template>
    
<script setup lang='ts'>
    
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
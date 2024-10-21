<template>
    <div class="specialColumn">
        <div class="topbg"></div>
        <div class="banner">
            <el-carousel>
      <el-carousel-item v-for="item in 4" :key="item">
        <img src="../../../assets//Navigation-bar-icon//banner.jpeg" alt="">
      </el-carousel-item>
    </el-carousel>
        </div>
       <div class="content">
        <titleBar :title=title>
    <template #icon>
        <div>
            <el-icon><Menu /></el-icon>
        </div>
    </template>
        </titleBar>
        <column>
            
        </column>
       </div>
    </div>
</template>
    
<script setup>
import { ref } from 'vue';
let title=ref('这是title')
    import titleBar from '../../../components/titleBar/index.vue'
    import column from '../../../components/column/index.vue'


</script>
    
<style scoped lang="scss">
    .specialColumn{
        .topbg{
        
            width: 100%;
            height: 80px;
        }
        .banner{
            width: 1200px;
        border-radius: 4px;
        overflow: hidden;
          
            height: 400px;
           
            margin: auto;
            margin-top: 6px;
            ::v-deep(.el-carousel){
                height: 100%;
                .el-carousel__container{
                    height: 100%;
                }
            }
           
        }
        .content{
            width: 1200px;
            margin: auto;
        }
    }
</style>
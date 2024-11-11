<template>
    <div class="specialColumn">
        <div class="topbg"></div>
        <div class="banner">
            <el-carousel>
                <el-carousel-item v-for="item in bannerList" :key="item">
                    <img :src="item.url" alt="bannertupian " style="width: 100%; height: 100%;">
                </el-carousel-item>
            </el-carousel>
        </div>
        <div class="content">
            <titleBar :title=title>
                <template #icon>
                    <div>
                        <el-icon>
                            <Menu />
                        </el-icon>
                    </div>
                </template>
            </titleBar>
            <column :part="alldata"></column>
            <column :part="alldata"></column>
            <column :part="alldata"></column>
           
            <titleBar :title=title>
                <template #icon>
                    <div>
                        <el-icon>
                            <Menu />
                        </el-icon>
                    </div>
                </template>
            </titleBar>
            <div class="title-card-box">
                <titleCard />
              
            </div>
            <div class="video-box">
                <columnItem v-for="item in 8" :key="item" />
            </div>
            <div class="Paginator">
                <el-pagination v-model:current-page="currentPage4" v-model:page-size="pageSize4"
                    :page-sizes="[100, 200, 300, 400]" :size="size" :disabled="disabled" :background="background"
                    layout="total, sizes, prev, pager, next, jumper" :total="400" @size-change="handleSizeChange"
                    @current-change="handleCurrentChange" />
            </div>
        </div>
        <Foot />
    </div>
</template>

<script setup>
import { ref,onMounted } from 'vue';
let title = ref('这是title')
import titleBar from '../../../components/titleBar/index.vue'
import column from '../../../components/column/index.vue'
import titleCard from '../../../components/titleCard/index.vue'
import columnItem from '../../../components/columnItem/index.vue'
import Foot from '../../../components/Foot/index.vue';
const alldata = {
  title: "这是标题",
  data: [
    { url: "https://gd-hbimg.huaban.com/6484a9b96de78f4bf3531e183a5b77d58d5fbf9dbb920d-IT5o5s" },
    { url: "https://gd-hbimg.huaban.com/1def769ba84236f2d40ec73cb7875396d33d7f6513d5b-DMZ9tq_fw1200" },
    { url: "https://gd-hbimg.huaban.com/3da401f807db791d102d18766b90d11bb8020c606202d-lf7soM_fw658webp" },
    { url: "https://gd-hbimg.huaban.com/0b8f5d9a5de86854a932ce259ca6e9f2a71362073ce49c-JSjSOM" }
  ]
};

import {getBanner} from '../../../apis/banner'
const bannerList=ref([])
const gogetbanner=async()=>{
let res=await getBanner()
console.log(res.data.data.map(item=>({url: item.plc.url})));
bannerList.value=res.data.data.map(item=>({url: item.plc.url}))

}
onMounted(()=>{
    gogetbanner()
})
</script>

<style scoped lang="scss">
.specialColumn {
    font-family: 'MyCustomFont', sans-serif;
    .topbg {

        width: 100%;
        height: 80px;
    }

    .banner {
        width: 1200px;
        border-radius: 4px;
        overflow: hidden;

     
        margin: auto;
        margin-top: 6px;
        ::v-deep(.el-carousel__item) {
    img {
        width: 100%;
         /* 保持原始宽高比 */
        display: block;
    }
}
        
    }

    .content {
        width: 1200px;
        margin: auto;

        .title-card-box {
            width: 100%;
            display: flex;
            flex-wrap: wrap;


        }

        .video-box {
            width: 100%;
            display: flex;
            flex-wrap: wrap;

        }

        .Paginator {
            width: 100%;
            height: 40px;
                margin-bottom: 100px;
            align-items: center;
            display: flex;
            justify-content: center;
            text-align: center;
        }
    }
}
</style>
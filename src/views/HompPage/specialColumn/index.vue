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
                        <el-icon>
                            <Menu />
                        </el-icon>
                    </div>
                </template>
            </titleBar>
            <column>

            </column>
            <column>

            </column>
            <column>

            </column>
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
                <titleCard />
                <titleCard />
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
import { ref } from 'vue';
let title = ref('这是title')
import titleBar from '../../../components/titleBar/index.vue'
import column from '../../../components/column/index.vue'
import titleCard from '../../../components/titleCard/index.vue'
import columnItem from '../../../components/columnItem/index.vue'
import Foot from '../../../components/Foot/index.vue';
</script>

<style scoped lang="scss">
.specialColumn {
    .topbg {

        width: 100%;
        height: 80px;
    }

    .banner {
        width: 1200px;
        border-radius: 4px;
        overflow: hidden;

        height: 400px;

        margin: auto;
        margin-top: 6px;

        ::v-deep(.el-carousel) {
            height: 100%;

            .el-carousel__container {
                height: 100%;
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
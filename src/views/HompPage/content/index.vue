<template>
    <div class="content">
        <div class="head-div">
            <el-input v-model="input4" style="width: 340px" placeholder="Type something">
                <template #prefix>
                    <el-icon class="el-input__icon">
                        <search />
                    </el-icon>
                </template>
            </el-input>
        </div>
        <div class="content-div">
            <div class="content-div-head">
                <div class="head-item" v-for="item in 4" :key="item">
                    <div class="pic">
                        <img src="../../../assets/Navigation-bar-icon/bg.jpg" alt="">
                    </div>
                    <div class="text">
                        <div class="topText">春天到了</div>
                        <div class="bottomText">万物复苏，我要牛逼死了</div>
                    </div>
                </div>
            </div>
            <div class="content-div-box">
                <titleBar :title=title>
                    <template #icon>
                        <div>
                            <el-icon>
                                <Menu />
                            </el-icon>
                        </div>
                    </template>
                </titleBar>
                <div class="div-box">
                    <div class="box-left">
                        <columnItem style="width: 100%;" />
                    </div>
                    <div class="box-right">
                        <columnItem />
                        <columnItem />
                    </div>

                </div>
                <titleBar :title=title>
                    <template #icon>
                        <div>
                            <el-icon>
                                <Menu />
                            </el-icon>
                        </div>
                    </template>
                </titleBar>
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

        </div>
    </div>
    <Foot />
</template>

<script setup>
import { ref } from 'vue';
import titleBar from '../../../components/titleBar/index.vue'
let title = ref('标题')
import columnItem from '../../../components/columnItem/index.vue'
import Foot from '../../../components/Foot/index.vue';
</script>

<style lang="scss" scoped>
.content {
    width: 100%;


    .head-div {
        width: 100%;
        height: 300px;
        background-image: url('../../../assets/Navigation-bar-icon/bg1.jpg');
        background-position: center;

        display: flex;
        justify-content: center;
        align-items: center;

        ::v-deep(.el-input) {

            border-radius: 10px;
            overflow: hidden;

            // 使用 ::v-deep 深入子组件
            .el-input__prefix {
                background-color: rgba(255, 255, 255, 0);

                .el-input__prefix-inner {
                    background-color: rgba(0, 0, 0, 0.3);
                    border-top-left-radius: 5px;
                    border-bottom-left-radius: 5px;
                    font-size: 20px;
                }
            }

            .el-input__wrapper {
                padding: 0;
                background-color: rgba(255, 255, 255, 0);
                border-top-right-radius: 10px;
                border-bottom-right-radius: 10px;

                .el-input__inner {
                    // 直接作用于 input 元素
                    background-color: rgba(0, 0, 0, 0.3);
                    width: 100%;

                    border-top-right-radius: 10px;
                    border-bottom-right-radius: 10px;
                    height: 30px;
                    text-align: center;
                    color: white; // 可以设置文字颜色


                    &::placeholder {
                        // 设置 placeholder 颜色
                        color: rgba(255, 255, 255, 0.5);
                    }
                }
            }

        }
    }

    .content-div {
        width: 100%;
        position: relative;
        background-color: rgba(224, 250, 245);

        padding-top: 100PX;

        .content-div-head {
            position: absolute;
            width: 900px;
            height: 70px;
            display: flex;
            top: -35px;
            left: 50%;
            right: 50%;

            transform: translateX(-50%);
            /* 添加这一行 */
            padding: none;

            .head-item {
                width: 250px;
                height: 50px;
                margin: 10px;
                display: flex;
                background-color: rgba(255, 255, 255, 0.5);
                border-radius: 5px;
                box-shadow: 5px 10px 20px rgba(25, 25, 25, 0.8);

                .pic {
                    width: 40px;
                    height: 40px;
                    overflow: hidden;
                    border-radius: 50%;
                    margin-left: 15px;
                    margin-top: 5px;

                    img {
                        width: 100%;
                        height: 100%;
                    }

                    left: 10px;
                    top: 0px;
                }

                .text {
                    width: 100%;
                    height: 50px;
                    display: flex;
                    flex-direction: column;
                    justify-content: space-around;
                    text-align: center;

                    .topText {
                        font-size: 14px;
                    }

                    .bottomText {
                        font-size: 14px;

                    }
                }
            }

            .head-item:hover {
                transform: scale(1.3);
                transition: transform 0.3s ease;
                /* 可选：平滑过渡效果 */
            }
        }

        .content-div-box {
            width: 1200px;
            margin: auto;

            .div-box {
                width: 100%;
                display: flex;
                justify-content: space-between;

                .box-left {
                    width: 49%;

                }

                .box-right {
                    width: 49%;
                    display: flex;
                }
            }

            .video-box {
                width: 100%;
                display: flex;
                justify-content: space-between;
                flex-wrap: wrap;
            }

            .Paginator {

                width: 100%;
                height: 40px;

                align-items: center;
                display: flex;
                justify-content: center;
                text-align: center;
            }

        }
    }
}
</style>
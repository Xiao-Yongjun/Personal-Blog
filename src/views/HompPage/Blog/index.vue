<template>
    <div class="blog">
        <div class="blog-head">
            <div class="head-content-div">
                <div class="title">
                    童话
                </div>
                <div class="motto">
                    <div class="motto-div">
                        人生多歧路，愿军少走点
                    </div>
                </div>
            </div>
        </div>
        <div class="blog-content">
            <el-row class="blog-content-column">
                <el-col :span="8">
                    <el-card class="self-introduction">
                        <div class="pic">
                            <img src="../../../assets/Navigation-bar-icon/bg4.png" alt="">
                        </div>
                        <div class="polize">polize</div>
                        <div class="item-content">
                            <div class="item" v-for="item in 3" :key="item">
                                <div class="title">标题</div>
                                <div class="count">11</div>
                            </div>
                        </div>
                        <div class="WechatMoments">
                            <el-icon>
                                <Burger />
                            </el-icon>
                            朋友圈
                        </div>
                    </el-card>
                    <!-- 搜索 -->
                    <el-card class="search">
                        <div class="search-text">搜索</div>
                        <div class="search-content">

                            <el-input v-model="input4" placeholder="输入搜索的东西">
                                <template #prefix>
                                    <el-icon class="el-input__icon">
                                        <search />
                                    </el-icon>
                                </template>
                            </el-input>
                        </div>
                    </el-card>

                    <!--  推荐文章 -->
                    <el-card class="recommend">
                        <div class="recommend-text">推荐文章</div>
                        <div class="recommend-content">
                            <div class="recommend-content-item" v-for="item in 3" :key="item">
                                <div class="content-item-head">
                                    <div class="plc"><img src="../../../assets/Navigation-bar-icon/bg.jpg" alt=""></div>
                                    <div class="text">这个是推荐的标题</div>
                                </div>
                                <div class="content-item-foot">
                                    <el-icon>
                                        <TakeawayBox />
                                    </el-icon>
                                    2022-12-12 18244
                                </div>
                            </div>
                        </div>
                    </el-card>

                    <!-- 推荐 -->
                    <div class="Scanning">

                        <el-card class="ScanningItem" v-for="item in 4" :key="item">
                            <div class="title">
                                速览
                            </div>
                            <div class="about">
                                生活倒影
                            </div>
                            <div class="slogn">
                                记录美好生活
                            </div>
                        </el-card>
                    </div>

                    <!--     树洞 -->
                    <div class="Treehole">
                        <div class="title-div">
                            <el-icon>
                                <Opportunity />
                            </el-icon>
                            <div class="title">树洞</div>

                        </div>
                        <div class="treehole-content">
                            <div class="item">
                                <div class="plc">
                                    <img src="../../../assets/Navigation-bar-icon/bg1.jpg" alt="">
                                </div>
                                <div class="title">
                                    这是标题
                                </div>
                            </div>
                        </div>
                    </div>
                </el-col>
                <el-col :span="16">
                    <div class="advertisement">
                        <el-icon>
                            <View />
                        </el-icon>
                        <div class="text">欢迎来到我的网站:www.xiao/yongjun </div>
                    </div>
                    <div v-for="item in 5" :key="item">
                        <titleBar :title=title>
                            <template #icon>
                                <div>
                                    <el-icon>
                                        <Menu />
                                    </el-icon>
                                </div>
                            </template>
                        </titleBar>
                        <div class="left_content">
                            <columnItem v-for="item in 6" :key="item" />
                        </div>
                    </div>

                </el-col>
            </el-row>
        </div>
    </div>
    <Foot />
</template>

<script setup>
// 这里可以添加你的脚本逻辑
import { ref } from 'vue';
let title = ref('标题')
import Foot from '../../../components/Foot/index.vue';
import titleBar from '../../../components/titleBar/index.vue'
import columnItem from '../../../components/columnItem/index.vue'
</script>

<style lang="scss" scoped>
@keyframes DisplayAnddisappear {
    0% {
        width: 1px;
        left: 50%;
        transform: translateX(-50%);
        box-shadow: 0 0 10px rgba(5, 0, 50, 0.5);
    }

    25% {
        width: 25%;
        left: 50%;
        transform: translateX(-50%);
        box-shadow: 0 0 20px rgba(50, 50, 125, 0.7);
    }

    50% {
        width: 100%;
        left: 50%;
        transform: translateX(-50%);
        box-shadow: 0 0 50px rgba(125, 50, 50, 0.8);
    }

    70% {
        width: 100%;
        left: 50%;
        transform: translateX(-50%);
        box-shadow: 0 0 30px rgba(55, 110, 30, 0.7);
    }

    90% {
        width: 50%;
        /* 增加一个过渡阶段，使宽度逐渐减小 */
        left: 50%;
        transform: translateX(-50%);
        box-shadow: 0 0 20px rgba(224, 10, 10, 0.7);
    }

    100% {
        width: 1px;
        left: 50%;
        transform: translateX(-50%);
        box-shadow: 0 0 10px rgba(55, 110, 30, 0.5);
    }
}

@keyframes changewidth {
    0% {
        width: 0%;
    }

    100% {
        width: 100%;
    }
}

@keyframes glow {
    0% {
        box-shadow: 0px 0px 15px rgba(255, 255, 255, 0.6);
    }

    50% {
        box-shadow: 0px 0px 10px rgba(255, 143, 143, 0.7);
    }

    100% {
        box-shadow: 0px 0px 15px rgba(255, 143, 143, 0.8);
    }
}

.blog {
    width: 100%;
    position: relative;
    font-family: 'MyCustomFont', sans-serif;

    .blog-head {
        width: 100%;
        background-image: url('../../../assets/Navigation-bar-icon/startbg2.jpg');
        background-position: center;
        background-size: cover;
        background-repeat: no-repeat;
        height: 450px;
        display: flex;
        justify-content: center;
        align-items: center;

        .head-content-div {
            width: 500px;
            height: 250px;


            .title {
                width: 100%;
                height: 50px;
                text-align: center;
                line-height: 50px;
                color: rgba(255, 255, 255, 1);
                font-size: 50px;
                font-family: 'Caveat', cursive;
                /* 使用 Caveat 字体 */
            }

            .motto {
                margin-top: 50px;
                width: 100%;
                height: 50px;
                text-align: center;
                line-height: 50px;
                color: rgba(255, 255, 255, 1);
                font-size: 30px;
                position: relative;
                overflow: hidden;

                .motto-div {
                    position: absolute;
                    top: 0;
                    left: 50%;
                    transform: translateX(-50%);
                    text-align: center;
                    line-height: 50px;
                    animation: DisplayAnddisappear 7s infinite;
                    overflow: hidden;
                    border: 1px solid rgba(255, 255, 255, 0.1);
                    border-radius: 10px;
                    box-sizing: border-box;
                    /* 确保边框包含在元素尺寸内 */
                    background-color: rgba(0, 0, 0, 0.5);
                    font-family: 'Caveat', cursive;
                    /* 使用 Caveat 字体 */
                }
            }
        }

    }

    .blog-content {
        width: 100%;

        top: 400px;
        background-color: rgba(245, 245, 245, 0.5);

        .blog-content-column {
            width: 1200px;
            margin: auto;

            .self-introduction {
                width: 90%;
                margin: auto;

                .pic {
                    width: 150px;
                    height: 150px;
                    overflow: hidden;
                    border-radius: 50%;
                    margin: auto;
                    animation: glow 2s infinite;

                    img {
                        width: 100%;
                        height: 100%;
                    }

                    &:hover {
                        transform: rotate(360deg);
                        /* 使用 rotate 函数 */
                        transition: transform 0.5s ease;
                        /* 添加过渡效果 */
                    }
                }

                .polize {
                    width: 100%;
                    height: 60px;
                    text-align: center;
                    line-height: 60px;
                    font-size: 35px;
                }

                .item-content {
                    width: 100%;
                    height: 60px;
                    display: flex;
                    justify-content: space-around;

                    .item {
                        width: 30%;
                        display: flex;
                        flex-direction: column;
                        height: 100%;

                        .title,
                        .count {
                            width: 100%;
                            height: 50%;
                            text-align: center;

                            line-height: 30px;
                        }
                    }
                }

                .WechatMoments {
                    width: 90%;
                    height: 40px;
                    margin: auto;
                    text-align: center;
                    line-height: 40px;

                    margin-top: 5px;
                    background-color: rgba(55, 110, 30, 1);
                    border-radius: 15px;
                    position: relative;
                    color: rgba(255, 255, 255, 1);
                }

                .WechatMoments::before {
                    position: absolute;
                    content: " ";
                    top: 0;
                    right: 0;
                    bottom: 0;
                    left: 0;
                    background-color: rgba(224, 10, 10, 0.7);
                    transition: width 3s; // 添加过渡效果
                    width: 0; // 初始宽度为 0
                    border-radius: 15px;

                }

                .WechatMoments:hover::before {
                    width: 100%; // 鼠标悬停时宽度变为 100%
                }
            }

            .search {
                width: 90%;
                height: 100px;
                margin: auto;
                display: flex;
                margin-top: 30px;
                justify-content: center;
                flex-direction: column;

                .search-text {
                    width: 100%;
                    height: 35px;

                    line-height: 35px;
                    font-size: 25px;
                    color: rgba(57, 197, 187);


                }

                .search-content {
                    width: 90%;
                    height: 60px;
                    margin: auto;

                    display: flex;
                    align-items: center;
                    justify-content: center;

                }
            }

            .recommend {
                margin: auto;
                width: 90%;
                margin-top: 15px;

                .recommend-text {
                    width: 100%;
                    height: 50px;
                    line-height: 50px;
                }

                .recommend-content {
                    width: 100%;

                    .recommend-content-item {
                        width: 100%;
                        margin-top: 10px;

                        .content-item-head {
                            width: 100%;
                            display: flex;

                            .plc {
                                width: 50%;
                                height: 100px;

                                img {
                                    width: 100%;
                                    height: 100%;
                                    border-radius: 10px;
                                }
                            }

                            .text {
                                width: 50%;
                                padding-left: 10px;
                                font-size: 20px;
                            }
                        }

                        .content-item-foot {
                            width: 100%;
                            height: 20px;
                            font-size: 12px;
                            line-height: 20px;
                            display: flex;
                            justify-content: left;
                            align-items: center;
                        }
                    }
                }
            }

            .Scanning {
                width: 100%;
                padding: 10px;

                .ScanningItem {
                    width: 100%;
                    color: rgba(255, 255, 255, 1);
                    background-image: linear-gradient(45deg,
                            rgba(12, 13, 89) 0%,
                            rgba(55, 100, 111) 10%,
                            rgba(12, 45, 78) 10%,
                            rgba(55, 100, 111) 20%);

                    .title {
                        width: 100%;
                        height: 40px;

                        line-height: 40px;
                        font-size: 25px;
                    }

                    .about {
                        width: 100%;
                        height: 30px;


                        line-height: 30px;
                        font-size: 20px;
                    }

                    .slogn {
                        width: 100%;
                        height: 20px;
                        line-height: 20px;
                        font-size: 20px;

                    }
                }
            }

            .Treehole {
                width: 100%;
                padding: 10px;
                background-image: url('../../../assets/Navigation-bar-icon/startbg2.jpg');
                background-position: center;
                border-radius: 10px;

                .title-div {
                    width: 100%;
                    display: flex;
                    height: 25px;

                }

                .treehole-content {
                    width: 100%;
                    height: 400px;
                

                    .item {
                        width: 90%;
                        height: 50px;
                        display: flex;
                        margin: auto;
                        margin-top: 10px;

                        .plc {
                            width: 50px;
                            height: 50px;


                            img {
                                width: 100%;
                                height: 100%;
                                border-radius: 50%;
                                overflow: hidden;
                            }
                        }

                        .title {
                            width: 50%;
                            height: 50px;
                            line-height: 50px;
                         
                        }
                    }
                }

            }

            .advertisement {
                width: 90%;
                height: 60px;
                display: flex;
                align-items: center;
                margin: auto;
                margin-top: 10px;
                border: 1px dashed rgba(1, 0, 0, 1);
                border-radius: 10px;
            }

            .left_content {
                width: 100%;
                display: grid;
                grid-template-columns: repeat(3, 1fr);
                /* 三列，每列等宽 */
                grid-template-rows: repeat(2, 1fr);
                /* 两行，每行等高 */

            }
        }

    }
}
</style>
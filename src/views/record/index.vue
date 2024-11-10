<template>
        <div class="record">
                <div class="head-div">
                        <div class="head">
                                <div class="head-title">
                                        <div class="title-item" style="font-size: 35px;">山有木兮木有枝，心悦君兮君不知</div>
                                        <div class="title-item">山有木兮木有枝，心悦君兮君不知</div>
                                        <div class="title-item">蔡徐坤</div>
                                </div>
                        </div>
                </div>
                <div class="record-div">
                        <div class="crumbs">

                                <div class="card-item" v-for="item in 6" :key="item">
                                        <el-button>提交</el-button>
                                </div>

                        </div>
                        <div class="record-content">
                                <div class="content-item" v-for="item in 6" :key="item">
                                        <div class="item-left">
                                                <div class="time">
                                                        发布事件：2022-16-18 18：00：55
                                                </div>
                                                <div class="title">
                                                        VUE学习|学习好才牛逼
                                                </div>
                                                <div class="operation">
                                                        <div class="item">
                                                                <img src="../../assets/Navigation-bar-icon/爱心.png"
                                                                        alt="">
                                                                <span>热度</span>
                                                        </div>
                                                        <div class="item">
                                                                <img src="../../assets/Navigation-bar-icon/爱心.png"
                                                                        alt="">
                                                                <span>热度</span>
                                                        </div>
                                                        <div class="item">
                                                                <img src="../../assets/Navigation-bar-icon/爱心.png"
                                                                        alt="">
                                                                <span>热度</span>
                                                        </div>
                                                </div>
                                                <div class="arile-title">
                                                        这个是文章标题
                                                </div>
                                                <div class="button">
                                                        <el-button>提交</el-button>
                                                        <el-button>提交</el-button>
                                                </div>
                                        </div>
                                        <div class="item-right">
                                                <img src="../../assets/Navigation-bar-icon/bg1.jpg" alt="">
                                        </div>
                                </div>
                        </div>
                </div>
        </div>
        <Foot/>
</template>

<script setup lang='ts'>
import Foot from '../../components/Foot/index.vue'
</script>

<style lang="scss" scoped>
.record {
        width: 100%;

        .head-div {
                width: 100%;
                height: 300px;
                background-image: url('../../assets/Navigation-bar-icon/startbg1.jpg');
                background-position: center;
                background-size: cover;

                .head {
                        width: 600px;
                        height: 300px;
                        margin: auto;
                        display: flex;
                        align-items: center;

                        .head-title {
                                width: 100%;
                                display: flex;
                                justify-content: space-around;
                                flex-direction: column;
                                align-items: center;


                                .title-item {
                                        width: 100%;
                                        height: 50px;
                                        line-height: 50px;
                                        text-align: center;
                                        color: rgba(500, 255, 255, 1);
                                        font-size: 25px;
                                }
                        }
                }
        }

        .record-div {
                width: 100%;

                .crumbs {
                        width: 800px;

                        margin: auto;
                        border-radius: 10px;
                        padding: 30px;
                        margin-top: 30px;
                        background-color: rgb(237, 236, 236);
                        box-shadow: 5px 5px 5px rgba(121, 111, 111, 1);
                        display: flex;
                        flex-wrap: wrap;
                        padding: 10px;

                        .card-item {
                                width: 80px;
                                height: 30px;
                                line-height: 30px;
                                text-align: center;
                                border-radius: 10px;
                                font-size: 12px;
                                color: rgb(135, 132, 132);

                                margin: 5px;
                        }
                }

                .record-content {
                        width: 800px;
                        margin: auto;

                        .content-item {
                                width: 100%;
                                margin-top: 20px;
                                padding: 10px;
                                height: 230px;
                                border-bottom: 1px dashed #000;
                                display: flex;
                                padding-left: 50px;
                                padding-right: 50px;
                                background-color: rgba(255, 254, 255);
                                box-shadow: 3px 3px 5px rgba(0, 0, 0, 0.5);

                                .item-left {
                                        width: 50%;

                                        .time {
                                                width: 100%;
                                                height: 30px;
                                                line-height: 30px;
                                                font-size: 13px;
                                        }

                                        .title {
                                                width: 100%;
                                                height: 30px;
                                                line-height: 30px;
                                                font-size: 23px;
                                        }

                                        .operation {
                                                width: 100%;
                                                height: 40px;
                                                line-height: 40px;
                                                font-size: 13px;
                                                display: flex;

                                                .item {

                                                        text-align: center;
                                                        display: flex;
                                                        align-items: center;

                                                }

                                        }

                                        .arile-title {
                                                width: 100%;
                                                height: 60px;
                                                line-height: 30px;
                                                font-size: 18px;

                                        }

                                        .button {
                                                width: 100%;
                                                height: 40px;
                                                display: flex;
                                                align-items: center;

                                        }
                                }

                                .item-right {
                                        width: 50%;
                                        overflow: hidden;

                                        img {
                                                width: 100%;
                                                height: 100%;
                                                
                                        &:hover {
                                                transform: scale(1.5);
                                                transition: transform 0.3s ease; // 可选：添加过渡效果
                                        }
                                        }


                                }
                        }

                }

        }
}
</style>
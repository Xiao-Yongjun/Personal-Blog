<template>
        <div class="home">
                <div class="home_head">
                        <div class="head-content">
                                <div class="content-item">
                                        <div class="content-item-div">
                                                <div class="plc">
                                                        <img src="../../assets/Navigation-bar-icon/bg.jpg" alt="">
                                                </div>
                                                <div class="name">张三</div>
                                        </div>
                                        <div class="content-item-div">
                                                <div class="plc">
                                                        <img src="../../assets/Navigation-bar-icon/爱心 (1).png" alt=""
                                                                style="animation: glow 3s infinite;">
                                                </div>

                                        </div>
                                        <div class="content-item-div">
                                                <div class="plc">
                                                        <img src="../../assets/Navigation-bar-icon/bg.jpg" alt="">
                                                </div>
                                                <div class="name">张三</div>
                                        </div>
                                </div>
                        </div>
                </div>
                <div class="home-content">
                        <div class="content-div">
                                <div class="title">
                                        这是我们一起走过的第
                                </div>
                                <div class="countdown">
                                        <div class="strong"> {{ result.years }}</div>
                                        年 <div class="strong"> {{ result.months }}</div>月 <div class="strong"> {{
                                                result.days }}</div>
                                        日
                                        <div class="strong"> {{ result.hours }}</div>小时 <div class="strong"> {{
                                                result.minutes }}</div>分
                                        <div class="strong"> {{ result.seconds }}</div>秒
                                </div>
                                <div class="years-down">
                                        距离过年还有: <div class="strong"> {{ newyearsTime.years }}</div>
                                        年 <div class="strong"> {{ newyearsTime.months }}</div>月 <div class="strong"> {{
                                                newyearsTime.days }}</div>日 <div class="strong"> {{ newyearsTime.hours
                                                }}</div>小时
                                        <div class="strong"> {{ newyearsTime.minutes }}</div>分<div class="strong"> {{
                                                newyearsTime.seconds }}</div>秒
                                </div>
                                <div class="Fastcartransmissionmessage">
                                        <div class="title-card">飞车传信</div>
                                        <div class="card">
                                                <img src="../../assets/Navigation-bar-icon/car.png" alt="">
                                        </div>
                                </div>
                                <div class="Selectcontent">
                                        <div class="choiceitem-div">
                                                <div class="choiceItem" v-for="item in 3" :key="item">
                                                        <div class="item-left">
                                                                <img src="../../assets/Navigation-bar-icon/bg.jpg"
                                                                        alt="">
                                                        </div>
                                                        <div class="item-right">
                                                                <div class="title">相册</div>
                                                                <div class="slogn">记录美好的生活</div>
                                                        </div>
                                                </div>

                                        </div>
                                        <div class="choiceItemContent" v-if="false">
                                                <el-timeline style="max-width: 600px">
                                                        <el-timeline-item center timestamp="2018/4/12" placement="top">
                                                                <el-card>
                                                                        <h4>Update Github template</h4>
                                                                        <p>Tom committed 2018/4/12 20:46</p>
                                                                </el-card>
                                                        </el-timeline-item>
                                                        <el-timeline-item timestamp="2018/4/3" placement="top">
                                                                <el-card>
                                                                        <h4>Update Github template</h4>
                                                                        <p>Tom committed 2018/4/3 20:46</p>
                                                                </el-card>
                                                        </el-timeline-item>
                                                        <el-timeline-item center timestamp="2018/4/2" placement="top">
                                                                Event start
                                                        </el-timeline-item>
                                                        <el-timeline-item timestamp="2018/4/2" placement="top">
                                                                Event end
                                                        </el-timeline-item>
                                                </el-timeline>
                                        </div>
                                        <div class="choiceItemContent" v-if="false">

                                                <div class="tags">
                                                        <div class="tags_item" v-for="item in 6" :key="item">
                                                                四姑娘山
                                                        </div>
                                                </div>
                                                <div class="tagsname">相册</div>
                                                <div class="tags-content">
                                                        <div class="tags-content-item" v-for="item in 6" :key="item">
                                                                <div class="plc">
                                                                        <img src="../../assets/Navigation-bar-icon/banner.jpeg"
                                                                                alt="">
                                                                </div>
                                                                <div class="name">汗血宝马</div>
                                                                <div class="date">Date:2022-12-13</div>
                                                        </div>
                                                        <template>
                                                                <el-empty description="description" />
                                                        </template>


                                                </div>
                                        </div>
                                        <div class="choiceItemContent">
                                                <Messagebox /><!-- 留言 -->
                                                <div class="comments">

                                                        <div class="commentsItem" v-for="item in 6" :key="item">
                                                                <div class="item-left">
                                                                        <img src="../../assets/Navigation-bar-icon/bg.jpg"
                                                                                alt="">
                                                                </div>
                                                                <div class="item-right">
                                                                        <div class="right-top">
                                                                                <div class="name">张三</div>
                                                                                <div class="date">2022-13-59</div>
                                                                        </div>
                                                                        <div class="right-bottom">
                                                                                这是品论
                                                                        </div>
                                                                </div>
                                                        </div>
                                                </div>
                                        </div>
                                </div>
                        </div>
                </div>
        </div>
        <Foot />
</template>

<script setup>
import { getTimeDifference } from '../../utils/time'
import Messagebox from '../../components/Messagebox/index.vue'
import { ref } from 'vue';
const result = ref('');
const newyearsTime = ref('');
setInterval(() => {
        result.value = getTimeDifference("2016-01-01T00:00:00")
        newyearsTime.value = getTimeDifference("2025-02-10T00:00:00")
}, 1000)
import { MoreFilled } from '@element-plus/icons-vue'
const activities = [
        {
                content: 'Custom icon',
                timestamp: '2018-04-12 20:46',
                size: 'large',
                type: 'primary',
                icon: MoreFilled,
        },
        {
                content: 'Custom color',
                timestamp: '2018-04-03 20:46',
                color: '#0bbd87',
        },
        {
                content: 'Custom size',
                timestamp: '2018-04-03 20:46',
                size: 'large',
        },
        {
                content: 'Custom hollow',
                timestamp: '2018-04-03 20:46',
                type: 'primary',
                hollow: true,
        },
        {
                content: 'Default node',
                timestamp: '2018-04-03 20:46',
        },
]
import Foot from '../../components/Foot/index.vue'
</script>

<style scoped lang="scss">
@keyframes glow {
        0% {
                box-shadow: 0 0 20px rgba(255, 126, 95, 0.5);
        }

        50% {
                box-shadow: 0 0 40px rgba(255, 95, 164, 0.8);
        }

        100% {
                box-shadow: 0 0 20px rgba(255, 126, 95, 0.5);
        }
}

@keyframes changeposition {
        0% {
                left: 0;
                opacity: 1;
        }

        100% {
                left: 100px;
                opacity: 0.1;
        }
}

.home {
        width: 100%;

        .home_head {
                width: 100%;
                height: 500px;

                background-image: url('../../assets/Navigation-bar-icon/bg.jpg');
                background-position: center;
                display: flex;
                justify-content: center;
                align-items: center;

                .head-content {
                        width: 1000px;
                        height: 350px;

                        background-color: rgba(0, 0, 0, 0.2);
                        border-radius: 10px;


                        .content-item {
                                display: grid;
                                grid-template-columns: repeat(3, 1fr);
                                padding-top: 30px;

                                .content-item-div {


                                        .plc {
                                                display: flex;
                                                justify-content: center;
                                                align-items: center;
                                                height: 220px;
                                                width: 100%;

                                                img {
                                                        width: 200px;
                                                        height: 200px;
                                                        border-radius: 50%;
                                                }
                                        }

                                        .name {
                                                width: 100%;
                                                height: 50px;
                                                text-align: center;
                                                font-size: 20px;
                                                color: rgba(255, 255, 255, 1);
                                        }
                                }
                        }

                }
        }

        .home-content {

                width: 100%;

                background-image: url('../../assets/Navigation-bar-icon/bg3.jpg');

                /* 网格大小 */
                .content-div {
                        display: flex;
                        margin: auto;
                        justify-content: center;
                        flex-direction: column;
                        width: 1000px;


                        .title {
                                width: 100%;
                                height: 56px;
                                text-align: center;
                                line-height: 56px;
                                font-size: 25px;
                                background: linear-gradient(90deg, #e31c1c, #ff7e5f);
                                /* 渐变背景 */
                                -webkit-background-clip: text;
                                /* WebKit浏览器的文本裁剪 */
                                background-clip: text;
                                /* 标准的文本裁剪 */
                                color: transparent;
                                /* 文本颜色设为透明，以便渐变背景显示 */
                        }

                        .countdown {
                                width: 100%;
                                height: 48x;
                                text-align: center;
                                line-height: 48px;
                                font-size: 20px;
                                display: flex;
                                justify-content: center;
                                align-items: center;

                                .strong {

                                        font-size: 50px;
                                        margin: 10px;
                                }
                        }

                        .years-down {
                                width: 100%;
                                height: 50px;
                                text-align: center;
                                display: flex;
                                justify-content: center;
                                align-items: center;

                                line-height: 50px;

                                .strong {

                                        font-size: 40px;
                                        margin: 10px;
                                }
                        }

                        .Fastcartransmissionmessage {
                                width: 400px;
                                height: 200px;
                                border-radius: 10px;
                                margin: auto;
                                margin-top: 30px;
                                margin-bottom: 40px;
                                background-image: url('../../assets/Navigation-bar-icon/bg1.jpg');
                                background-position: center;
                                display: flex;

                                .title-card {
                                        width: 50%;
                                        height: 100%;
                                        line-height: 200px;
                                        font-size: 40px;
                                        color: aliceblue;
                                }

                                .card {
                                        width: 50%;
                                        position: relative;
                                        top: 80px;
                                        animation: changeposition 3s infinite;
                                }
                        }

                        .Selectcontent {
                                width: 100%;

                                .choiceitem-div {
                                        width: 100%;
                                        display: grid;
                                        grid-template-columns: repeat(3, 1fr);
                                        gap: 10px;

                                        .choiceItem {
                                                height: 100px;
                                                background-color: rgba(255, 255, 255, 1);
                                                box-shadow: 0px 0px 10px rgba(255, 126, 95, 0.5);
                                                border-radius: 10px;
                                                display: flex;

                                                .item-left {
                                                        width: 50%;
                                                        height: 100px;
                                                        text-align: center;

                                                        img {
                                                                width: 100px;
                                                                height: 100%;
                                                                border-radius: 50%;
                                                                overflow: hidden;
                                                        }
                                                }
                                        }
                                }

                                .choiceItemContent {
                                        margin-top: 30px;
                                        width: 100%;

                                        .tagsname {
                                                width: 100%;
                                                height: 50px;
                                                line-height: 50px;
                                                text-align: center;
                                                font-size: 30px;
                                        }

                                        .tags {
                                                width: 100%;
                                                height: 60px;
                                                display: flex;
                                                align-items: center;

                                                .tags_item {
                                                        padding-left: 5px;
                                                        padding-right: 5px;
                                                        height: 30px;
                                                        text-align: center;
                                                        line-height: 30px;
                                                        background-color: rgb(203, 31, 31);
                                                        border-radius: 10px;
                                                        box-shadow: 5px 5px 10px rgba(255, 126, 95, 0.5);
                                                        color: rgba(255, 255, 255, 1);
                                                        margin: 6px;
                                                }
                                        }

                                        .tags-content {
                                                width: 100%;
                                                display: grid;
                                                grid-template-columns: repeat(3, 1fr);
                                                gap: 10px;

                                                .tags-content-item {

                                                        height: 200px;
                                                        background-color: rgba(255, 255, 255, 1);
                                                        border-radius: 10px;
                                                        overflow: hidden;
                                                        box-shadow: 0px 0px 10px rgba(255, 255, 255, 1);

                                                        .plc {
                                                                width: 100%;
                                                                height: 150px;
                                                                overflow: hidden;
                                                                transition: transform 0.3s ease;

                                                                /* 平滑过渡效果 */
                                                                img {
                                                                        width: 100%;
                                                                        height: 150px;

                                                                        &:hover {
                                                                                transform: scale(1.2);
                                                                        }

                                                                }

                                                        }

                                                        .name {
                                                                width: 100%;
                                                                height: 30px;
                                                                line-height: 30px;
                                                                font-size: 22px;

                                                                .date {
                                                                        width: 100%;
                                                                        height: 30px;
                                                                        line-height: 30px;
                                                                        font-size: 15px;
                                                                }
                                                        }

                                                }

                                        }


                                        .comments {
                                                width: 100%;


                                                .commentsItem {
                                                        display: flex;
                                                        border-bottom: 1px dashed black;
                                                        height: 120px;
                                                        width: 100%;



                                                        .item-left {
                                                                width: 10%;
                                                                height: 50px;
                                                                display: flex;
                                                                justify-content: center;
                                                                align-items: center;
                                                                bottom: 1px solid black;

                                                                img {
                                                                        width: 80px;
                                                                        height: 50px;
                                                                }
                                                        }

                                                        .item-right {
                                                                width: 90%;


                                                                .right-top {
                                                                        width: 100%;

                                                                        .name {
                                                                                color: rgba(255, 0, 0, 0.8);
                                                                                font-size: 20px;
                                                                                height: 25px;
                                                                        }

                                                                        .date {
                                                                                font-size: 15px;
                                                                                height: 20px;
                                                                        }
                                                                }

                                                                .right-bottom {
                                                                        width: 100%;
                                                                        height: 50px;

                                                                        margin: auto;
                                                                        background-color: rgba(0, 0, 0, 0.2);
                                                                        border-radius: 10px;
                                                                        text-align: center;
                                                                        line-height: 50px;
                                                                        color: rgba(255, 255, 255, 1);
                                                                }
                                                        }
                                                }


                                        }
                                }

                        }
                }

        }

}
</style>
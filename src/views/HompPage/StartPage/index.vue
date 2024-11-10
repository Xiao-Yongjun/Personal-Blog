<template>
    <div class="startpage" :style="{ backgroundImage: `url(${backgroundImage})` }">
        <div class="time">
            <div class="hour">
                {{ time.hours }}
            </div>
            <div class="spot">
                :
            </div>
            <div class="minutes">
                {{ time.minutes }}
            </div>
            <div class="timetable">
                <sub>{{ (time.hours < 12) ? 'AM' : 'PM' }}</sub>
            </div>
        </div>

        <div class="yearmonthday">
            {{ time.year }}年
            {{ time.month }}月
            {{ time.day }}日
        </div>

        <div class="search">
            <el-input @click="openbox" placeholder="搜点小东西吧" :prefix-icon="Search" />
        </div>
        <transition :name="open ? 'slide-up' : 'slide-down'" appear>
            <div class="shade" v-if="open">
                <div class="box">
                    <div class="closebox" @click="closebox" >返回</div>
                    <div class="search">
                        <div class="text">搜索</div>
                        <el-input placeholder="输入搜索内容"></el-input>
                    </div>
                    <div class="searchhistory">
                        <div class="left">
                            搜索历史
                        </div>
                        <div class="right">
                            <div class="item" v-for="item in 10" :key="item">美女
                                <div class="del">❌</div>
                            </div>
                        </div>
                    </div>
                    <div class="content">
                        <div class="item" v-for="item in 25" :key="item">
                            <img src="../../../assets/Navigation-bar-icon/bg4.png" alt="" class="plc">
                            <div class="title">健康生活指南</div>
                        </div>
                    </div>
                </div>

            </div>
        </transition>
    </div>
</template>
<script setup>
import { ref, computed, onMounted } from 'vue';
import { formatDateTime } from '../../../utils/time';
import { Search } from '@element-plus/icons-vue';

let time = ref(formatDateTime(Date.now()));
const open = ref(false);

const openbox = () => {
    open.value = true;
};

const closebox = () => {
    open.value = false;
};

const startbg = ref([
    { url: '/src/assets/Navigation-bar-icon/startbg1.jpg' },
    { url: '/src/assets/Navigation-bar-icon/startbg2.jpg' },
    { url: '/src/assets/Navigation-bar-icon/startbg3.jpg' },
]);

const backgroundImage = computed(() => {
    const randomIndex = Math.floor(Math.random() * startbg.value.length);
    return startbg.value[randomIndex].url;
});
</script>


<style lang="scss" scoped>
.slide-up-enter-active,
.slide-up-leave-active,
.slide-down-enter-active,
.slide-down-leave-active {
    transition: all 1s ease-out;
}

.slide-up-enter-from,
.slide-up-leave-to,
.slide-down-enter-from,
.slide-down-leave-to {
    transform: translateY(100%);
}

@keyframes fadeInOut {

    0%,
    100% {
        opacity: 1;
    }

    /* 开始和结束时完全可见 */
    50% {
        opacity: 0;
    }

    /* 在中间时完全不可见 */
}

@keyframes slideUp {
    from {
        transform: translateY(100%);
    }

    to {
        transform: translateY(0);
    }
}

@keyframes slideDown {
    from {
        transform: translateY(0);
    }

    to {
        transform: translateY(100%);
    }
}

@keyframes glow {
  0%, 100% {
    box-shadow: 0 0 10px rgba(255, 255, 255, 0.5);
  }
  50% {
    box-shadow: 0 0 10px rgb(247, 167, 167);
  }
}
.startpage {
    width: 100%;
    height: 100vh;
    background-size: cover;
    background-image: url('../../../assets/Navigation-bar-icon/startbg3.jpg');
    background-position: center;
    padding-top: 80px;
    position: relative;
    font-family: 'MyCustomFont', sans-serif;
    .shade {
        position: fixed;
        top: 0;
        width: 100%;
        height: 100%;
        background-color: rgba(0, 0, 0, 0.1);
        z-index: 3301;
        padding-top: 100px;


        .box {
            width: 800px;
            height: 300px;
            margin: auto;

            .closebox {
                width: 100%;
                height: 30px;
                text-align: center;
                align-items: center;
                background-color: rgba(0, 0, 0, 0.3);
                color: rgba(255, 255, 255, 0.5);
                line-height: 30px;
                font-size: 15px;
                border-radius: 20px;
                animation: fadeInOut 2s infinite, glow 3s infinite;;
            }

            .search {
                width: 60%;
                margin: auto;

                height: 30px;
                margin-top: 60px;
                display: flex;

                .text {
                    width: 60px;
                    background-color: #fff;
                    text-align: center;
                    font-size: 13px;
                    height: 30px;
                    line-height: 30px;
                }
            }

            .searchhistory {
                display: flex;
                width: 60%;
                margin: auto;
                margin-top: 5px;

                .left {
                    width: 20%;
                    text-align: center;
                    height: 30px;
                    color: rgba(0, 0, 0, 1);
                    background-color: #fff8f8;
                    line-height: 30px;
                    border-radius: 3px;
                }

                .right {
                    display: flex;
                    flex-wrap: wrap;
                    width: 80%;

                    .item {
                        width: 50px;
                        height: 20px;
                        margin: 5px;
                        background-color: rgba(0, 0, 0, 0.3);
                        border-radius: 5px;
                        text-align: center;
                        line-height: 20px;
                        font-size: 12px;
                        position: relative;
                        color: rgba(0, 0, 0, 1);

                        .del {
                            position: absolute;
                            right: -4px;
                            top: -5px;
                            font-size: 8px;
                        }
                    }
                }
            }

            .content {
                width: 900px;
                border-radius: 8px;
                margin: auto;
                background-color: rgba(255, 255, 255, 0.4);
                padding-top: 5px;
                display: flex;
                flex-wrap: wrap;
              
                .item {
                    width: 70px;
                    margin: 10px;
                    height: 100px;
                    border-radius: 3px;
                    overflow: hidden;

                    .plc {
                        width: 100%;
                        height: 80px;
                    }

                    .title {
                        width: 100%;
                        font-size: 10px;
                        background: rgba(255, 255, 255, 0.5);
                        color: #fff;
                    }
                }
            }
        }
    }

    .time {
        display: flex;
        width: 400px;
        height: 200px;
        margin: auto;
        padding-top: 100px;
        transition: transform 0.3s ease;
        /* 添加过渡效果 */
        justify-content: center;
        align-items: center;

        .hour {
            font-size: 75px;
            color: white;
        }

        .minutes {
            font-size: 75px;
            color: white;

        }

        .spot {
            color: white;
            animation: fadeInOut 1s infinite;
            /* 应用动画 */
            font-size: 40px;
        }

        .timetable {
            font-size: 30px;
            color: aliceblue;
        }
    }

    .time:hover {
        transform: scale(1.2);
        /* 鼠标悬停时放大1.2倍 */
    }

    .yearmonthday {
        display: flex;
        width: 400px;
        height: 30px;
        margin: auto;
        align-items: center;
        justify-content: center;
        font-size: 20px;
        color: rgb(148, 125, 226);

        font-weight: 900;
    }

    .yearmonthday:hover {
        transform: scale(1.1);
        /* 鼠标悬停时放大1.2倍 */
    }

    .search {
        width: 600px;
        margin: auto;
        margin-top: 40px;

        ::v-deep(.el-input) {

            // 使用 ::v-deep 深入子组件
            .el-input__prefix {
                .el-input__prefix-inner {
                    background-color: rgba(0, 0, 0, 0.3);
                    font-size: 20px;
                }
            }

            .el-input__wrapper {
                padding: 0;
                background-color: rgba(255, 255, 255, 0);

                .el-input__inner {
                    // 直接作用于 input 元素
                    background-color: rgba(0, 0, 0, 0.3);
                    width: 100%;


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
}
</style>·
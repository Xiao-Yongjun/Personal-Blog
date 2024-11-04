<template>
        <div class="bulletchat">
                <!-- 弹幕展示区 -->
                <div class="bulletchat-display">
                        <div class="bulletchat-message" v-for="(item, index) in bulletchatList" :key="index" :style="{
                                animationDuration: `${Math.random() * 5 + 5}s`,
                                backgroundColor: `rgba(${Math.floor(Math.random() * 256)}, ${Math.floor(Math.random() * 256)}, ${Math.floor(Math.random() * 256)}, 0.7)`,
                                top: `${calculatePosition(index)}px`
                        }">
                                {{ item.title }}
                        </div>
                </div>

                <!-- 输入框 -->
                <div class="input-box">
                        <div class="title">张三</div>
                        <el-input placeholder="输入点什么" class="custom-input" v-model="newMessage"
                                @keyup.enter="addMessage"></el-input>
                </div>
        </div>
</template>
<script setup lang='ts'>
import { ref, computed } from 'vue';

// 用户输入的消息
const bulletchatList = ref([
        { title: '2222' },
        { title: '王五5' },
        { title: '李四' },
        { title: '张三' },
]);

// 新消息
const newMessage = ref('');

// 添加新消息到弹幕列表
const addMessage = () => {
        if (newMessage.value.trim()) {
                bulletchatList.value.push({ title: newMessage.value });
                newMessage.value = ''; // 清空输入框
        }
};

// 计算每个消息的位置
const calculatePosition = (index: number) => {
        return 50 + index * 30; // 基准位置为 50%，每个消息间隔 30px
};
</script>
<style lang="scss" scoped>
@keyframes moveLeft {
        0% {
                left: 100%;
        }

        100% {
                left: -100%;
        }
}

.bulletchat {
        width: 100%;
        height: 100vh;
        background-image: url('../../assets/Navigation-bar-icon/bg.jpg');
        background-size: cover;
        background-position: center;
        position: relative;
        padding: 20px;

        .bulletchat-display {
                width: 100%;
                position: absolute;
                height: calc(100vh - 60px);
                top: 0;
                left: 0;
                overflow: hidden;

                .bulletchat-message {
                        position: absolute;
                        transform: translateY(-50%);
                        white-space: nowrap;
                        color: #fff;
                        padding: 8px 12px;
                        border-radius: 15px;
                        animation: moveLeft linear forwards;
                }
        }

        .input-box {
                width: 300px;
                height: 100px;
                border: 1px solid rgba(255, 255, 255, 0.8);
                border-radius: 10px;
                position: absolute;
                box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
                display: flex;
                flex-direction: column;
                justify-content: center;
                align-items: center;
                padding: 20px;
                box-sizing: border-box;
                left: 50%;
                bottom: 20px;
                transform: translateX(-50%);

                .title {
                        font-size: 18px;
                        font-weight: bold;
                        margin-bottom: 10px;
                        color: #fff;
                }

                .custom-input {
                        width: 100%;
                        height: 40px;
                        border: 1px solid rgba(255, 255, 255, 0.8);
                        border-radius: 5px;
                        padding: 10px;
                        box-sizing: border-box;
                        font-size: 16px;
                        color: #fff;
                        background-color: rgba(255, 255, 255, 0.8);
                        outline: none;
                        transition: border-color 0.3s ease;

                        &:focus {
                                border-color: #409eff;
                        }

                        &::placeholder {
                                color: rgba(255, 255, 255, 0.8);
                        }
                }
        }
}
</style>
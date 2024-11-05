<template>
        <div class="bulletchat">
                <!-- 弹幕展示区 -->
                <div class="bulletchat-display">
                        <div class="bulletchat-message" v-for="(item, index) in bulletchatList" :key="index" :style="{
                                animationDuration: `${Math.random() * 5 + 5}s`,
                                backgroundColor: `rgba(${Math.floor(Math.random() * 256)}, ${Math.floor(Math.random() * 256)}, ${Math.floor(Math.random() * 256)}, 0.7)`,
                                top: `${calculatePosition()}px`
                        }">
                                <img :src="item.avatarUrl" alt="avatar" class="avatar" />
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
<script setup>
import { ref, computed } from 'vue';

// 用户输入的消息
const bulletchatList = ref([
        { title: '2222', avatarUrl: 'https://gd-hbimg.huaban.com/f5db4d4c158891d6528908eb18f04463533a6cb815a5a-wbQMDN_fw240webp' },
        { title: '王五5', avatarUrl: 'https://gd-hbimg.huaban.com/f5db4d4c158891d6528908eb18f04463533a6cb815a5a-wbQMDN_fw240webp' },
        { title: '李四', avatarUrl: 'https://gd-hbimg.huaban.com/f5db4d4c158891d6528908eb18f04463533a6cb815a5a-wbQMDN_fw240webp' },
        { title: '张三', avatarUrl: 'https://gd-hbimg.huaban.com/f5db4d4c158891d6528908eb18f04463533a6cb815a5a-wbQMDN_fw240webp' },
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
const calculatePosition = () => {
        const windowHeight = window.innerHeight;
        const randomPosition = Math.random() * (windowHeight - 60); // 减去输入框的高度
        return randomPosition;
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
        background-image: url('../../assets/Navigation-bar-icon/弹幕背景.jpg');
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
                        height: 25px;
                        display: flex;
                        align-items: center;
                        justify-content: space-around;

                        .avatar {
                                width: 20px;
                                height: 20px;
                                border-radius: 50%;
                        }
                }
        }

        .input-box {
                width: 400px;
                height: 150px;

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
                top: 50%;
                transform: translate(-50%, -50%);



                .title {
                        font-size: 18px;
                        font-weight: bold;
                        margin-bottom: 10px;
                        color: #fff;
                }

                .custom-input {
                        width: 100%;
                        height: 50px;
                        border: 1px solid rgba(36, 34, 34, 0.8);
                        border-radius: 5px;
                        padding: 10px;
                        box-sizing: border-box;
                        font-size: 16px;
                        color: #fff;

                        outline: none;
                        transition: border-color 0.3s ease;


                        &:focus {
                                border-color: #409eff;
                        }

                        &::placeholder {
                                color: rgba(255, 255, 255, 0.8);
                        }
                }

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
</style>
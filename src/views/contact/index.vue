<template>
    <div class="contact">
        <div class="card">
            <div v-for="(item, index) in items" :key="index" class="item-div"
                :class="{ active: selectedIndex === index }" @click="selectItem(index)"
                >
                <h1>{{ item.title }}</h1>
                <div class="pic" v-if="selectedIndex === index">
                    <img :src="item.pic" alt="这是图片">
                </div>
            </div>
        </div>
    </div>
</template>

<script setup>
import { ref } from 'vue';

// 数据列表
const items = ref([
    {
        title: 'qq',
        pic: 'https://gd-hbimg.huaban.com/e56e7e1fdf35d74fc44f6d5c382a00f3a25675017711-KV5iyF_fw240webp'
    },
    {
        title: 'weixin',
        pic: 'https://gd-hbimg.huaban.com/f430c525ee30bb18bb59c66194233aec27c9a7ec1d00d-JM6CyV_fw658webp'
    },
    {
        title: 'qq',
        pic: '../../assets/Navigation-bar-icon/bg4.png'
    },
]);

// 当前选中的索引
const selectedIndex = ref(0);

// 选择项的方法
const selectItem = (index) => {
    selectedIndex.value = index;
};
</script>

<style scoped lang="scss">
.contact {
    font-family: 'MyCustomFont', sans-serif;
    width: 100%;
    height: 100vh;
    font-family: 'Arial', sans-serif;
    display: flex;
    justify-content: center;
    align-items: center;
    background-image: url('../../assets/Navigation-bar-icon/startbg1.jpg');
    background-size: cover;
    background-position: center;
    background-color: #f0f0f0; // 背景颜色，防止图片加载失败
    color: #333; // 文字颜色

    .card {
        width: 800px;
        height: 400px;
        border-radius: 10px;
        background-color: rgba(255, 255, 255, 0.3); // 更柔和的背景色，提高可读性
        box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1); // 添加阴影，使卡片看起来更立体
        display: flex;
        justify-content: center;
        align-items: center;
        overflow: hidden; // 防止内容溢出

        .item-div {
            width: 120px;
            height: 340px;
            border: 1px solid #ddd; // 更淡的边框颜色
            margin: 10px;
            border-radius: 20px;
            transition: all 0.3s ease;
            cursor: pointer; // 鼠标悬停时显示手指图标
            background-color: rgba(255,0,0,0.3); // 默认背景色
            box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1); // 默认阴影
            text-align: center;
            display: flex;
            align-items: center;

            &.active {
                width: 360px;
                color: #f0f0f0;
                background-color: rgba(255, 0, 0, 0.4); // 激活状态背景色
                box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2); // 激活状态阴影
            }

            h1 {
                width:120px;
                height: 30px;
                line-height: 30px;
                text-align: center;
                font-size: 18px; // 增大字体大小
                font-weight: bold; // 加粗字体
                color: #333; // 文字颜色
             
            }

            .pic {
                width: 250;
                height: 250px;
            

                img {
                    width: 100%;
                    height: 100%;
                    object-fit: cover; // 图片填充容器，保持比例
                    transition: transform 0.3s ease; // 图片缩放过渡效果
                }
            }

            &:hover .pic img {
                transform: scale(1.1); // 鼠标悬停时放大图片
            }
        }
    }
}
</style>
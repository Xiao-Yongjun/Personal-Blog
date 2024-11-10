<template>
    <div class="contact">
        <div class="card">
            <div v-for="(item, index) in items" :key="index" class="item-div"
                :class="{ active: selectedIndex === index }" @click="selectItem(index)">
                {{ item }}
            </div>
        </div>
    </div>
</template>

<script setup>
import { ref } from 'vue';

// 数据列表
const items = ref(['Item 1', 'Item 2', 'Item 3']);

// 当前选中的索引
const selectedIndex = ref(0);

// 选择项的方法
const selectItem = (index) => {
    selectedIndex.value = index;
};
</script>

<style scoped lang="scss">
.contact {
    width: 100%;
    height: 100vh;
    font-family: 'Arial', sans-serif;
    display: flex;
    justify-content: center;
    align-items: center;
    background-image: url('../../assets/Navigation-bar-icon/startbg1.jpg');
    background-size: cover;
    background-position: center;

    .card {
        width: 800px;
        height: 400px;
        border-radius: 10px;
        background-color: rgba(255, 0, 0, 0.2);
        display: flex;
        justify-content: center;
        align-items: center;

        .item-div {
            width: 120px;
            height: 340px;
            border: 1px solid green;
            margin: 10px;
            border-radius: 20px;
            transition: all 0.3s ease;

            &.active {
                width: 360px;
                background-color: rgba(0, 255, 0, 0.5); // 可以自定义激活状态的样式
            }
        }
    }
}
</style>
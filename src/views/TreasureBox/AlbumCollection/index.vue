<template>
    <div class="AlbumCollection">
        <treauseCard />
        <div class="content-div">
            <div class="tags">
                <el-button v-for="(item, index) in items" :key="index" :style="{ backgroundColor: colors[index] }">
                    {{ item }}
                </el-button>
            </div>
            <div class="content-title">这是标题</div>
            <div class="content">
                <div class="content-item" v-for="item in 7" :key="item">
                    <img src="../../../assets/Navigation-bar-icon/弹幕背景.jpg" alt="">
                </div>
            </div>
        </div>
        <Foot />
    </div>

</template>

<script setup>
import treauseCard from '../../../components/treauseCard/index.vue'
import Foot from '../../../components/Foot/index.vue'
const items = ref(['北京', '上海', '成都']);
const colors = ref([]);
import { onMounted, ref } from 'vue';
// 生成随机颜色
const randomColor = () => {
    const r = Math.floor(Math.random() * 256);
    const g = Math.floor(Math.random() * 256);
    const b = Math.floor(Math.random() * 256);
    const a = Math.random().toFixed(2); // 透明度，保留两位小数
    return `rgba(${r}, ${g}, ${b}, ${a})`;
};
// 初始化颜色
const generateColors = () => {
    colors.value = items.value.map(() => randomColor());
};

// 页面加载时生成颜色
onMounted(() => {
    generateColors();
});

</script>

<style scoped lang="scss">
.AlbumCollection {
    width: 100%;


    .content-div {
        width: 1000px;
        margin: auto;

        .tags {
            width: 100%;
            height: 50px;
            display: flex;

            display: flex;
            align-items: center;
            margin-top: 10px;
        }

        .content-title {
            width: 100%;
            height: 50px;
            text-align: center;
            line-height: 50px;
            font-weight: 900;
            font-size: 25px;
        }

        .content {
            display: grid;
            grid-template-columns: repeat(5, 1fr);
            gap: 10px;

            .content-item {
                height: 200px;
                border: 1px solid green;
                overflow: hidden;
                border-radius: 10px;

                img {
                    width: 100%;
                    height: 100%;
                    transition: transform 0.3s ease; // 添加过渡效果，使放大效果更平滑

                    &:hover {
                        transform: scale(1.1);
                    }
                }
            }
        }
    }
}
</style>
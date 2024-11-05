<template>
    <div class="AlbumCollection">
        <treauseCard />
        <div class="content-div">
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

</script>

<style scoped lang="scss">
.AlbumCollection {
    width: 100%;
 

    .content-div {
        width: 900px;
        margin: auto;

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
            grid-template-columns: repeat(3, 1fr);
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
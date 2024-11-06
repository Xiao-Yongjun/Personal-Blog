<template>
    <div class="music">
        <treauseCard />
        <div class="column">
            <div class="column-item" v-for="(item, index) in 3" :key="index">
                <div class="item-title">
                    1号展厅：及你太美
                </div>
                <div class="item-content">
                    <div class="content-title">
                        music
                    </div>
                    <div class="item-content-div">
                        <div class="item" @click="togglePlay(index)" v-for="item in 3" :key="item">
                            <audio :data-index="index" class="audio" loop>
                                <source src="../../../assets/Navigation-bar-icon/music.mp3" type="audio/mpeg">
                                <source src="../../../assets/Navigation-bar-icon/music.ogg" type="audio/ogg">
                            </audio>
                            <div class="plc">
                                <img src="../../../assets/Navigation-bar-icon/bg1.jpg" alt="">
                            </div>
                            <div class="name">及你太美</div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <Foot />
    </div>
</template>

<script setup>
import treauseCard from '../../../components/treauseCard/index.vue'
import { ref, onMounted } from 'vue';
import Foot from '../../../components/Foot/index.vue'
// 创建一个响应式对象来保存所有的音频元素引用
const audioRefs = ref({});

function togglePlay(index) {
    // 获取正确的音频元素引用
    const audioElement = audioRefs.value[`audio-${index}`];
    if (audioElement) {
        if (audioElement.paused) {
            audioElement.play();
        } else {
            audioElement.pause();
        }
    }
}

onMounted(() => {
    // 在组件挂载完成后，初始化音频元素引用
    for (let i = 0; i < 3; i++) {
        audioRefs.value[`audio-${i}`] = document.querySelector(`audio[data-index="${i}"]`);
    }
});
</script>

<style scoped lang="scss">
.music {
    width: 100%;
    padding-top: 80px;

    .column {
        width: 900px;
        margin: auto;

        .column-item {
            width: 100%;
            padding-bottom: 20px;
            border-bottom: 3px dashed rgba(19, 19, 19, 0.8);

            .item-title {
                width: 100%;
                height: 50px;
                line-height: 50px;
                font-weight: 900;
                font-size: 25px;

            }

            .item-content {
                width: 100%;
                background-color: rgb(158, 199, 244, 0.5);

                .content-title {
                    width: 100%;
                    height: 35px;
                    line-height: 35px;
                    color: rgba(164, 184, 220, 0.8);
                    padding-left: 50px;
                    background-color: rgba(164, 184, 220, 0.8);
                    font-size: 20px;
                }

                .item-content-div {
                    display: grid;
                    gap: 10px;
                    padding: 10px;
                    grid-template-columns: repeat(6, 1fr);

                    .item {
                        height: 150px;


                        .plc {
                            width: 100px;
                            height: 100px;
                            border-radius: 50%;
                            margin: auto;
                            overflow: hidden;

                            img {
                                width: 100%;
                                height: 100%;
                                transition: transform 2s;

                                &:hover {
                                    transform: rotate(360deg);
                                }
                            }

                        }

                        .name {
                            width: 100%;
                            height: 30px;
                            font-weight: 500;
                            font-size: 18px;
                            line-height: 30px;
                            text-align: center;
                        }
                    }
                }
            }
        }
    }

}
</style>
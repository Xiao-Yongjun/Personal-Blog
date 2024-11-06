<template>
    <div class="treasureBox">
        <treasureCard />
        <div class="card-box">
            <div class="item" v-for="item in 3" :key="item">
                <div class="item-title">
                    编程好帮手
                </div>
                <div class="item-content">
                    <div class="item-box" v-for="item in 5" :key="item">
                        <div class="plc">
                            <img src="../../../assets/Navigation-bar-icon/bg1.jpg" alt="">
                        </div>
                        <div class="box-right">
                            <div class="name">变美网站</div>
                            <div class="about">好看极了</div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <Foot />
    </div>
</template>

<script setup>
import treasureCard from '../../../components/treauseCard/index.vue'
import Foot from '../../../components/Foot/index.vue'
</script>

<style scoped lang="scss">
.treasureBox {
    width: 100%;
    padding-top: 80px;
background-color: rgba(247,249,254,1);
    .card-box {
        width: 1000px;
        margin: auto;

        .item {
            width: 100%;

            .item-title {
                width: 100%;
                height: 30px;
                font-size: 20px;
                color: black;
                text-align: center;
                line-height: 30px;
            }

            .item-content {
                width: 100%;
                display: grid;
                gap: 10px;
                grid-template-columns: repeat(4, 1fr);

                .item-box {
                    height: 100px;
                    background-color: rgba(255, 255, 255);
                    box-shadow: 1px 1px 1px 1px rgba(255, 0, 0, 0.5);
                    border-radius: 5px;
                    display: flex;
                    transition: background-color 0.5s, box-shadow 0.5s;

                    .plc {
                        width: 50%;
                        height: 100%;
                        display: flex;
                        justify-content: center;
                        align-items: center;
                        transition: width 0.5s, height 0.5s, opacity 0.5s;

                        img {
                            width: 85px; // 统一宽度和高度
                            height: 85px; // 统一宽度和高度
                            object-fit: cover; // 保持图片的原始比例
                            border-radius: 50%;
                            transition: width 0.5s, height 0.5s, opacity 0.5s ;
                        }
                    }

                    .box-right {
                        width: 50%;
                        display: flex;
                        flex-direction: column;
                        justify-content: center;
                        transition: width 0.5s;

                        .name {
                            width: 100%;

                            font-weight: 700;
                            transition: font-size 0.5s, color 0.5s;
                        }

                        .about {
                            width: 100%;

                            font-size: 15px;

                            transition: color 0.5s;
                        }
                    }

                    &:hover {
                        background-color: rgb(197, 225, 254);
                        box-shadow: 1px 1px 1px 1px rgba(2, 154, 255, 0.5);

                        .plc {
                            width: 0;
                            height: 0;
                            opacity: 0;

                            img {
                                width: 0;
                            height: 0;
                            opacity: 0;
                            }
                        }

                        .box-right {
                            width: 100%;

                            .name {

                                color: rgb(245, 245, 245);

                                height: 30px;
                                line-height: 30px;

                            }

                            .about {
                                color: rgba(245, 255, 255);

                            }
                        }
                    }
                }
            }
        }
    }
}
</style>
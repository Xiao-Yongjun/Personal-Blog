<template>
        <div class="FriendshipLink">
                <treasureCard />
                <div class="content-div">
                        <div class="item-div" v-for="item in 3" :key="item">
                                <div class="item-div-title">
                                        <img src="../../../assets/Navigation-bar-icon/爱心.png" alt=""> 本站信息
                                </div>
                                <div class="item-div-content">
                                        <div class="list">

                                                本站链接：http://www/niub.com
                                        </div>
                                        <div class="list">
                                                本站链接：http://www/niub.com
                                        </div>
                                        <div class="list">
                                                本站链接：http://www/niub.com
                                        </div>
                                        <div class="list">
                                                本站链接：http://www/niub.com
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
.FriendshipLink {
        width: 100%;
        padding-top: 80px;
       
        .content-div {
                width: 900px;
                margin: auto;
                box-shadow: 0px 0px 5px rgb(244, 244, 244);
                padding-bottom: 50px;
                .item-div {
                        width: 850px;
                        margin: auto;
                 
                        background-color: rgba(254, 254, 255);

                        .item-div-title {
                                width: 100%;
                                height: 40px;
                                line-height: 40px;
                                font-size: 20px;
                                font-weight: 900;

                        }

                        .item-div-content {
                                width: 100%;

                                background-color: rgba(255, 230, 250);
                                border-radius: 10px;
                                border-left: 5px solid rgb(255, 5, 5);

                                .list {
                                        font-size: 15px;
                                        font-weight: 500;
                                        height: 30px;
                                        line-height: 30px;

                                }
                        }
                }
        }
}
</style>
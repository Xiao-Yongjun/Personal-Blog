<template>
        <div class="home">
                <div class="home_head">
                        <div class="head-content">
                                <div class="content-item">
                                        <div class="content-item-div">
                                                <div class="plc">
                                                        <img src="../../assets/Navigation-bar-icon/bg.jpg" alt="">
                                                </div>
                                                <div class="name">张三</div>
                                        </div>
                                </div>
                        </div>
                </div>
        </div>
</template>

<script setup>

</script>

<style scoped lang="scss">
.home {
        width: 100%;

        .home_head {
                width: 100%;
                height: 500px;
                border: 1px solid #000;
                background-image: url('../../assets/Navigation-bar-icon/bg.jpg');
                background-position: center;
                display: flex;
                justify-content: center;
                align-items: center;

                .head-content {
                        width: 1000px;
                        height: 350px;

                        background-color: rgba(0, 0, 0, 0.4);
                        border-radius: 10px;
                      

                        .content-item-div {
                                display: grid;
                                grid-template-columns: repeat(3, 1fr);
                                .content-item {
                                        
                                        display: flex;
                                        justify-content: center;
                                        align-items: center;
                                        img {
                                                width: 100%;
                                                height: 50px;
                                        }
                                }
                        }

                }
        }

}
</style>
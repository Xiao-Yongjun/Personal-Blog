<template>
    <div class="content">
        <div class="head-div">
            <el-input v-model="input4" style="width: 340px" placeholder="Type something">
                <template #prefix>
                    <el-icon class="el-input__icon">
                        <search />
                    </el-icon>
                </template>
            </el-input>
        </div>
        <div class="content-div">
            <div class="content-div-head">
                    <div class="head-item" v-for="item in 4" :key="item">
                        <div class="pic">
                            <img src="../../../assets/Navigation-bar-icon/bg.jpg" alt="">
                        </div>
                        <div class="text">
                            <div class="topText">春天到了</div>
                            <div class="bottomText">万物复苏，我要牛逼死了</div>
                        </div>
                    </div>
            </div>
        </div>
    </div>
</template>

<script setup>

</script>

<style lang="scss" scoped>
.content {
    width: 100%;


    .head-div {
        width: 100%;
        height: 300px;
        background-image: url('../../../assets/Navigation-bar-icon/bg1.jpg');
        background-position: center;

        display: flex;
        justify-content: center;
        align-items: center;

        ::v-deep(.el-input) {

            border-radius: 10px;
            overflow: hidden;

            // 使用 ::v-deep 深入子组件
            .el-input__prefix {
                background-color: rgba(255, 255, 255, 0);

                .el-input__prefix-inner {
                    background-color: rgba(0, 0, 0, 0.3);
                    border-top-left-radius: 5px;
                    border-bottom-left-radius: 5px;
                    font-size: 20px;
                }
            }

            .el-input__wrapper {
                padding: 0;
                background-color: rgba(255, 255, 255, 0);
                border-top-right-radius: 10px;
                border-bottom-right-radius: 10px;

                .el-input__inner {
                    // 直接作用于 input 元素
                    background-color: rgba(0, 0, 0, 0.3);
                    width: 100%;

                    border-top-right-radius: 10px;
                    border-bottom-right-radius: 10px;
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

    .content-div {
        width: 100%;
        position: relative;

        .content-div-head {
            position: absolute;
            width: 900px;
            height: 70px;
            display: flex;
            top: -35px;
            left: 50%;
            right: 50%;
            border: 1px solid green;
            transform: translateX(-50%); /* 添加这一行 */
            padding: none;
            .head-item{
                width: 250px;
                height: 50px;
                margin: 10px;
                display: flex;
                border: 1px solid pink;
                box-shadow: 5px 10px 20px rgba(25, 25, 25, 0.8);
                .pic{
                    width: 40px;
                    height: 40px;
                    overflow: hidden;
                    border-radius: 50%;
                    margin-left: 15px;
                    margin-top: 5px;
                    img{
                        width: 100%;
                        height: 100%;
                    }
           
                    left: 10px;
                    top: 0px;
                }
                .text{
                    width: 100%;
                    height: 50px;
                    display: flex;
                    flex-direction: column;
                    justify-content: space-around;
                    text-align: center;
                    .topText{
                        font-size: 14px;
                    }
                    .bottomText{
                        font-size: 14px;
                       
                    }
                }
            }
        }
    }
}
</style>
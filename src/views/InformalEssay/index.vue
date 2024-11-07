<template>
        <div class="informal">
                <div class="informal_head">
                        <div class="title">
                                <img src="../../assets/Navigation-bar-icon/爱心.png" alt="">
                                <span>这是随笔</span>
                        </div>
                        <div class="slogn">
                                随心所欲，发表意见
                        </div>
                </div>
                <div class="informal_content-div">
                        <div class="informal_content">
                                <div class="content-item" v-for="item in 6" :key="item">
                                        <div class="item-top">
                                                <div class="content-left">
                                                        <img src="../../assets/Navigation-bar-icon/bg1.jpg" alt="">
                                                </div>
                                                <div class="content-right">
                                                        <div class="right-top">
                                                                <img src="../../assets/Navigation-bar-icon/留言板.png"
                                                                        alt="">
                                                                这是名字
                                                        </div>
                                                        <div class="right-center">
                                                                这个是我的标题哈哈哈哈
                                                        </div>
                                                        <div class="right-right">
                                                                <div class="date">2022-12-02</div>
                                                                <div class="pic">
                                                                        <img src="../../assets/Navigation-bar-icon/留言板.png"
                                                                                alt="">
                                                                        <div class="count">1</div>
                                                                </div>
                                                        </div>
                                                </div>
                                        </div>
                                        <Messagebox />
                                </div>
                        </div>
                </div>
        </div>
        <Foot />
</template>

<script setup>
import Messagebox from '../../components/Messagebox/index.vue'
import Foot from '../../components/Foot/index.vue'
</script>

<style lang="scss" scoped>
.informal {
        width: 100%;
        
        /* 添加外边距 */
        box-sizing: border-box;
        background-color: rgba(0, 0, 0, 0.1);

        .informal_head {
                height: 300px;
                width: 100%;
                display: flex;
                justify-content: center;
                align-items: center;
                flex-direction: column;
                background-image: url('../../assets/Navigation-bar-icon/bg3.jpg');
                background-position: center;
                background-size: cover;
                /* 背景图适应容器 */
                color: white;
                /* 文本颜色调整为白色，以适应深色背景 */

                .title,
                .slogn {
                        width: 600px;
                        height: 40px;
                        line-height: 40px;
                        text-align: center;
                        background-color: rgba(0, 0, 0, 0.5);
                        /* 半透明背景色 */
                        padding: 10px;
                        border-radius: 5px;
                        margin: 10px 0;
                        /* 上下边距 */
                }
        }

        .informal_content-div {
                width: 100%;
                padding: 20px 0;
                /* 上下边距 */

                .informal_content {
                        width: 900px;
                        margin: auto;
                        background-color: #f9f9f9;
                        /* 更浅的背景色 */
                        border-radius: 10px;
                        /* 圆角 */
                        box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
                        /* 阴影效果 */
                        overflow: hidden;
                        /* 溢出隐藏，用于圆角配合 */

                        .content-item {
                                width: 100%;

                                padding: 20px;
                                /* 内边距 */
                                border-bottom: 1px solid #ddd;
                                /* 分割线 */

                                &:last-child {
                                        border-bottom: none;
                                        /* 最后一个项目没有下边框 */
                                }

                                .item-top {
                                        width: 100%;
                                        display: flex;

                                        .content-left {
                                                width: 80px;
                                                height: 80px;
                                                margin-right: 20px;
                                                /* 右边距 */

                                                img {
                                                        width: 100%;
                                                        height: 100%;
                                                        border-radius: 50%;
                                                        /* 圆形图片 */
                                                }
                                        }

                                        .content-right {
                                                flex-grow: 1;
                                                /* 自动扩展填充剩余空间 */

                                                .right-top {
                                                        font-weight: bold;
                                                        /* 加粗 */
                                                        display: flex;
                                                        align-items: center;

                                                        img {
                                                                width: 20px;
                                                                height: 20px;
                                                                margin-right: 10px;
                                                                /* 图片与文本间隔 */
                                                        }
                                                }

                                                .right-center {
                                                        margin-top: 10px;
                                                        /* 顶部边距 */
                                                        font-size: 16px;
                                                        /* 字体大小 */
                                                }

                                                .right-right {
                                                        margin-top: 10px;
                                                        /* 顶部边距 */
                                                        font-size: 14px;
                                                        /* 字体大小 */
                                                        color: #666;
                                                        /* 较暗的文字颜色 */
                                                        display: flex;
                                                        justify-content: space-between;

                                                        .date,
                                                        .pic {
                                                                display: flex;
                                                                align-items: center;
                                                        }

                                                        .pic img {
                                                                width: 16px;
                                                                height: 16px;
                                                                margin-right: 5px;
                                                                /* 图片与数字间隔 */
                                                        }
                                                }
                                        }
                                }
                        }
                }
        }
}
</style>
<template>
    <div class="Messagebox">
        <div class="text">留言</div>
        <div class="textarea">
            <el-input v-model="textarea" style="height: 100%; height: 100%;" :rows="2" type="textarea"
                placeholder="输入内容" />
        </div>
        <div class="text-bottom">
            <div class="bottom-left">
                <img src="../../assets/Navigation-bar-icon/留言板.png" alt="">
                <img src="../../assets/Navigation-bar-icon/menu-心情随笔.png" alt="">
            </div>
            <div class="bottom-right">
                <el-button type="success" round>提交</el-button>
            </div>
        </div>
    </div>
</template>

<script setup lang='ts'>

</script>

<style scoped lang="scss">
.Messagebox {
    width: 100%;

    margin: 0 auto;
    /* 居中对齐 */
    background-color: #fff;
    /* 白色背景 */
    border-radius: 10px;
    /* 圆角 */
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
    /* 阴影效果 */
    overflow: hidden;
    /* 溢出隐藏，用于圆角配合 */

    .text {
        width: 100%;
        height: 40px;
        line-height: 40px;
        font-size: 25px;
        color: #ff7e5f;
        /* 粉红色文字 */
        text-align: center;
        /* 文字居中 */
        background-color: #f9f9f9;
        /* 浅灰色背景 */
        border-bottom: 1px solid #ddd;
        /* 下边框 */
    }

    .textarea {
        width: 100%;
        height: 100px;
        padding: 10px;
        /* 内边距 */
        box-sizing: border-box;
        /* 盒模型 */
        border: none;
        /* 移除默认边框 */
        border-radius: 10px;
        /* 圆角 */
        background-color: #f9f9f9;
        /* 浅灰色背景 */
        overflow-y: auto;
        /* 自动滚动条 */

        &::-webkit-scrollbar {
            /* 隐藏滚动条（Webkit） */
            display: none;
        }

        -ms-overflow-style: none;
        /* 隐藏滚动条（IE 10+） */
        scrollbar-width: none;
        /* 隐藏滚动条（Firefox） */
    }

    .text-bottom {
        display: flex;
        justify-content: space-between;
        height: 40px;
        align-items: center;
        padding: 0 10px;
        /* 左右内边距 */

        .bottom-left {
            display: flex;
            align-items: center;

            img {
                width: 24px;
                height: 24px;
                margin-right: 10px;
                /* 图片间隔 */
            }
        }

        .bottom-right {
            .el-button {
                padding: 8px 20px;
                /* 按钮内边距 */
                font-size: 16px;
                /* 字体大小 */
                border-radius: 20px;
                /* 圆角 */
                background-color: #ff7e5f;
                /* 粉红色背景 */
                color: #fff;
                /* 白色文字 */
                border: none;
                /* 移除默认边框 */
                transition: background-color 0.3s;
                /* 平滑过渡效果 */

                &:hover {
                    background-color: #ff5a36;
                    /* 鼠标悬停时的背景颜色 */
                }
            }
        }
    }
}
</style>
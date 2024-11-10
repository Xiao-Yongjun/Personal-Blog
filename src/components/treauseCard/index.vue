<template>
    <div class="card">
        <div class="card_content">
<div class="title">相册</div>
<div class="slogn">这是我色相册啊</div>
        </div>
    </div>
</template>

<script setup>

</script>

<style scoped lang="scss">
.card {
    width: 100%;
    height: 200px;
    font-family: 'MyCustomFont', sans-serif;
    position: relative;

    .card_content {
        width: 930px;
        height: 180px;
       
        position: absolute;
        left: 50%;
        top: 45%; // 添加这行，设置初始的 top 值
        transform: translate(-50%, -50%);
        background-image: url('../../assets/Navigation-bar-icon/wonderland.jpg');
        border-radius: 10px;
        animation: changePosition 1s forwards; // 使用 forwards 确保动画结束后保持最后一个关键帧的状态
        box-shadow: 0px 0px 5px 2px rgba(12, 14, 15, 0.6); // 初始阴影
        color: rgba(255,255,255,1);
        .title{
            width: 100%;
            height: 60px;
            line-height: 60px;
            padding-left: 30px;
        }
        .slogn{
            width: 100%;
            height: 80px;
            line-height: 80px;
            font-size: 22px;
            padding-left: 30px;
        }
    }
}

@keyframes changePosition {
    from {
        top: 40%;
        box-shadow: 0px 0px 5px 2px rgba(12, 14, 15, 0.6); // 调整初始阴影
    }
    to {
        top: 50%;
        box-shadow: 0px 0px 10px 4px rgba(0, 0, 0, 0.6); // 调整最终阴影
    }
}
</style>
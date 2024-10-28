<template>
    <div class="foot">
      <div class="footcontent">
        <h3>云想衣裳花想容，春风拂面露华蓉</h3>
        <h4>北美网站由孝勇俊制作,有事过来，没有的话走开</h4>
      </div>
    </div>
  </template>
  
  <script setup>
  </script>
  
  <style scoped lang="scss">
  @keyframes changebg {
    0% {
      background-image: linear-gradient(45deg, rgba(16, 19, 235, 0.6), rgba(89, 39, 119, 0.8));
    }
    25% {
      background-image: linear-gradient(45deg, rgba(61, 44, 207, 0.6), rgba(152, 110, 161, 0.8));
    }
    50% {
      background-image: linear-gradient(45deg, rgba(106, 69, 235, 0.6), rgba(215, 181, 203, 0.8));
    }
    75% {
      background-image: linear-gradient(45deg, rgba(161, 58, 143, 0.6), rgba(186, 94, 131, 0.8));
    }
    100% {
      background-image: linear-gradient(45deg, rgba(216, 41, 41, 0.6), rgba(144, 43, 109, 0.8));
    }
  }
  
  .foot {
    width: 100%;
    margin-top: 15px;
    height: 60px; // 增加高度以便更好地显示内容
    display: flex;
    align-items: center; // 垂直居中
    justify-content: center; // 水平居中
    animation: changebg 10s infinite; // 增加动画持续时间
    .footcontent {
      width: 600px;
      height: 100%; // 使内容区域高度与父容器一致
      display: flex;
      flex-direction: column;
      justify-content: center; // 垂直居中
      align-items: center; // 水平居中
      h3 {
        margin-bottom: 8px;
        color: #fff; // 文字颜色
      }
      h4 {
        color: rgba(0,0,0,1); // 文字颜色
      }
    }
  }
  </style>
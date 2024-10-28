<template>
    <div class="title-card">
      <img src="../../assets/Navigation-bar-icon/bg.jpg" alt="" class="smallpic">
      <div class="title">标题</div>
    </div>
  </template>
  
  <script setup>
  </script>
  
  <style lang="scss" scoped>
  .title-card {
    width: 200px;
    height: 40px;
    margin: 10px;
    background-color: #f9f9f9; // 使用稍微柔和的背景色
    border: 1px solid #e0e0e0; // 使用更淡的边框颜色
    display: flex;
    align-items: center; // 保持垂直居中对齐
    box-shadow: 0 2px 5px rgba(0, 0, 0, 0.1); // 减轻阴影效果，使其看起来更轻盈
    border-radius: 5px;
    flex-wrap: nowrap; // 确保子元素不会换行
    padding: 10px; // 调整内边距，使内容与边框之间有一定的距离
  
    .title {
      margin-left: 10px; // 给文字添加一些左边距，使布局更美观
      font-size: 14px; // 增大字体大小，提高可读性
      color: #333; // 使用更深的文字颜色，提高对比度
      white-space: nowrap; // 防止文字换行
      line-height: 1; // 确保单行文本垂直居中
      // 移除背景色，使其更加简洁
    }
  
    .smallpic {
      width: 30px;
      height: 30px;
      object-fit: cover; // 确保图片填充整个区域，同时保持比例
      border-radius: 50%; // 使图片呈现圆形
      background-color: pink; // 保留背景色，以防图片加载失败
    }
  }
  </style>
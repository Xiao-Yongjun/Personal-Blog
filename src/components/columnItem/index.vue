<template>
    <div class="column">
      <div class="column-pic-div">
        <div class="pic">
          <img src="../../assets/Navigation-bar-icon/bg.jpg" alt="">
        </div>
      </div>
      <div class="column-content">
        <div class="title">这是标题</div>
        <div class="content">
          <div class="author">张三</div>
          <div class="time">2022-12-12</div>
        </div>
      </div>
    </div>
  </template>
  
  <script setup lang='ts'>
  </script>
  
  <style lang="scss" scoped>
  .column {
    width: 270px;
    height: 250px;
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
    margin: 15px;
    background-color: #fff;
    border-radius: 10px;
    overflow: hidden;
    transition: box-shadow 0.3s ease;
  
    &:hover {
      box-shadow: 0 8px 16px rgba(0, 0, 0, 0.2);
    }
  
    .column-pic-div {
      width: 100%;
      height: 200px;
      .pic {
        width: 100%;
        height: 100%;
        overflow: hidden;
        img {
          width: 100%;
          height: 100%;
          transition: transform 0.3s ease;
          border-radius: 10px 10px 0 0;
        }
        &:hover img {
          transform: scale(1.2);
        }
      }
    }
  
    .column-content {
      padding: 10px;
      .title {
        font-size: 18px;
        font-weight: bold;
        margin-bottom: 5px;
        color: #333;
      }
      .content {
        display: flex;
        justify-content: space-between;
        font-size: 12px;
        color: #666;
        .author {
          padding-left: 5px;
        }
        .time {
          text-align: right;
        }
      }
    }
  }
  </style>
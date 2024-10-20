<script setup>
import { useRoute,useRouter } from 'vue-router';
let $router=useRouter()
</script>

<template>
<div class="navitor">
  <el-row style="width: 100%;">
    <el-col :span="12">
       <div class="logo">
        <img src="../src/assets/Navigation-bar-icon/博客.png" alt="">
       </div>
    </el-col>
    <el-col :span="12" style="padding-left: 85px;"><div class="grid-content ep-bg-purple-light" />
        <div class="right-navator">
          <div class="item" @click="$router.push({path:'/homepage/startpage'})">
                <img src="../src/assets/Navigation-bar-icon/首页.png" alt="" class="img">
                <div class="text">首页</div>
              <div class="progress-border"></div>
          </div>
          <div class="item" @click="$router.push({path:'/home'})">
                <img src="../src/assets/Navigation-bar-icon/爱心.png" alt="" class="img">
                <div class="text">家</div>
              <div class="progress-border"></div>
          </div>
          <div class="item" @click="$router.push({path:'/informalessay'})">
                <img src="../src/assets/Navigation-bar-icon/menu-心情随笔.png" alt="" class="img">
                <div class="text">随笔</div>
              <div class="progress-border"></div>
          </div>
          <div class="item" @click="$router.push({path:'/record'})">
                <img src="../src/assets/Navigation-bar-icon/记录.png" alt="" class="img">
                <div class="text">记录</div>
              <div class="progress-border"></div>
          </div>
          <div class="item" @click="$router.push({path:'/album'})">
                <img src="../src/assets/Navigation-bar-icon/相册.png" alt="" class="img">
                <div class="text">相册</div>
              <div class="progress-border"></div>
          </div>
          <div class="item" @click="$router.push({path:'/treasureBox'})">
                <img src="../src/assets/Navigation-bar-icon/百宝箱-copy.png" alt="" class="img">
                <div class="text">百宝箱</div>
              <div class="progress-border"></div>
          </div>
          <div class="item" @click="$router.push({path:'/message'})">
                <img src="../src/assets/Navigation-bar-icon/留言板.png" alt="" class="img">
                <div class="text">留言</div>
              <div class="progress-border"></div>
          </div>
          <div class="item" @click="$router.push({path:'/contact'})">
                <img src="../src/assets/Navigation-bar-icon/联系我-2.png" alt="" class="img">
                <div class="text">联系我</div>
              <div class="progress-border"></div>
          </div>
          <div class="login">
                登录
          </div>
        </div>
    </el-col>
  </el-row>
</div>
  <router-view/>
</template>

<style scoped lang="scss">
.navitor{
  
   position: fixed; 
    top: 0; // 距离顶部的距离
    z-index: 1000; // 确保导航栏在其他元素之上
    background-color: rgba(255, 255, 255,0);
    transition: background-color 0.3s ease, backdrop-filter 0.3s ease; // 添加过渡效果
    width: 100%;
      .logo{
        width: 100%;
        height: 80px;
        display: flex;
        align-items: center;
      
        padding-left: 40px;
      }
      .right-navator{
        width: 100%;
        height: 80px;
        display: flex;
        align-items: center;
        .login{
          background-color:pink;
          color: rgb(255, 255, 255);
          width: 50px;
          height: 50px;
          line-height: 50px;
          border-radius: 50%;
          text-align: center;
          align-items: center;
          font-size: 16px;
        }
        .item{
          
          display: flex;
          position: relative;
          cursor: pointer;
            height: 80px;
            align-items: center;
            .progress-border {
            position: absolute;
            bottom: 0;
            left: 0;
            width: 0;
            height: 7px;
           
            background-color: yellow; // 可以根据需要更改颜色
            transition: width 0.3s ease-in-out;
            border-radius: 3px; // 设置过渡效果
      }
      &:hover .text{
          color: rgb(158, 199, 109);
      }
      &:hover .progress-border {
        width: 100%; // 鼠标悬停时宽度变为100%
      }
          
              .img{
                  margin: 5px;
              }
              .text{
                margin: 5px;
                margin-right: 10px;
                color: rgba(255, 255, 255,1);
              }
          
         
        }
      }
    
}
.navitor:hover {
    background-color: rgba(0, 0, 0, 0.2); /* 半透明的黑色 */
    
}
</style>

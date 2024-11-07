<template>
 <Header/>
  <router-view />
</template>

<script setup>
import { ref, onMounted, onUnmounted } from 'vue';
import { useRoute, useRouter } from 'vue-router';
import Header from './components/Header/index.vue'
const $router = useRouter();
const isHidden = ref(false);
let lastScrollY = 0;

const handleScroll = () => {
  const currentScrollY = window.scrollY;
  if (currentScrollY > lastScrollY) {
    // 向下滚动
    isHidden.value = true;
  } else {
    // 向上滚动
    isHidden.value = false;
  }
  lastScrollY = currentScrollY;
};

onMounted(() => {
  window.addEventListener('scroll', handleScroll);
});

onUnmounted(() => {
  window.removeEventListener('scroll', handleScroll);
});
</script>

<style scoped lang="scss">
.navitor {
  position: fixed;
  top: 0;
  z-index: 1000;
  background-color: rgba(0, 0, 0, 0.1);
  transition: background-color 0.3s ease, backdrop-filter 0.3s ease;
  width: 100%;

  .logo {
    width: 100%;
    height: 60px;
    display: flex;
    align-items: center;
    padding-left: 40px;
  }

  .right-navator {
    width: 100%;
    height: 60px;
    display: flex;
    align-items: center;

    .login {
      background-color: pink;
      color: rgb(255, 255, 255);
      width: 50px;
      height: 50px;
      line-height: 50px;
      border-radius: 50%;
      text-align: center;
      align-items: center;
      font-size: 16px;
    }

    .item {
      display: flex;
      position: relative;
      cursor: pointer;
      height: 50px;
      align-items: center;

      .progress-border {
        position: absolute;
        bottom: 0;
        left: 0;
        width: 0;
        height: 7px;
        background-color: yellow;
        transition: width 0.3s ease-in-out;
        border-radius: 3px;
      }

      &:hover .text {
        color: rgb(158, 199, 109);
      }

      &:hover .progress-border {
        width: 100%;
      }

      .img {
        margin: 5px;
      }

      .text {
        margin: 5px;
        margin-right: 10px;
        color: rgba(255, 255, 255, 1);
      }
    }
  }

  &.hidden {
    transform: translateY(-100%);
    transition: transform 0.3s ease;
  }

  &:hover {
    background-color: rgba(0, 0, 0, 0.5);
  }
}
</style>
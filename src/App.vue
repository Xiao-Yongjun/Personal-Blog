<template>
  <Header />
  <router-view />
  <img src="./assets/Navigation-bar-icon/goback.gif" alt="返回顶部" class="goback" @click="goToTop" v-show="showGoBack">
</template>

<script setup>
import { ref, onMounted, onUnmounted } from 'vue';
import { useRoute, useRouter } from 'vue-router';
import Header from './components/Header/index.vue';

const showGoBack = ref(false);

const handleScroll = () => {
  if (window.scrollY > 100) {
    showGoBack.value = true;
  } else {
    showGoBack.value = false;
  }
};

const goToTop = () => {
  window.scrollTo({
    top: 0,
    behavior: 'smooth'
  });
};

onMounted(() => {
  window.addEventListener('scroll', handleScroll);
});

onUnmounted(() => {
  window.removeEventListener('scroll', handleScroll);
});
</script>

<style lang="scss" scoped>
.goback {
  position: fixed;
  bottom: 80px;
  right:100px;
  width: 80px;
  height: 80px;
  cursor: pointer;
  opacity: 0.8;
  transition: opacity 0.3s ease;

  &:hover {
    opacity: 1;
  }
}
</style>
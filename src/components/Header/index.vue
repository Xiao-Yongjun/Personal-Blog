<template>
    <div class="navitor" :class="{ 'hidden': isHidden }">
        <el-row style="width: 100%;">
            <el-col :span="12">
                <div class="logo">
                    <img src="../src/assets/Navigation-bar-icon/我的博客 (1).png" alt="">
                </div>
            </el-col>
            <el-col :span="12" style="padding-left: 85px;">
                <div class="grid-content ep-bg-purple-light" />
                <div class="right-navator">
                    <div class="item" @click="$router.push({ path: '/homepage/startpage' })">
                        <img src="../../assets/Navigation-bar-icon/首页.png" alt="" class="img">
                        <div class="text">
                            <el-dropdown>
                                <span class="el-dropdown-link">
                                    首页
                                </span>
                                <template #dropdown>
                                    <el-dropdown-menu>
                                        <el-dropdown-item
                                            @click="$router.push({ path: '/homepage/startpage' })">开始页面</el-dropdown-item>
                                        <el-dropdown-item
                                            @click="$router.push({ path: '/homepage/specialColumn' })">专栏</el-dropdown-item>
                                        <el-dropdown-item
                                            @click="$router.push({ path: '/homepage/content' })">内容</el-dropdown-item>
                                        <el-dropdown-item
                                            @click="$router.push({ path: '/homepage/blog' })">博客</el-dropdown-item>
                                    </el-dropdown-menu>
                                </template>
                            </el-dropdown>
                        </div>
                        <div class="progress-border"></div>
                    </div>
                    <div class="item" @click="$router.push({ path: '/home' })">
                        <img src="../../assets/Navigation-bar-icon/爱心.png" alt="" class="img">
                        <div class="text">
                            <span class="el-dropdown-link">
                                家
                            </span>
                        </div>
                        <div class="progress-border"></div>
                    </div>
                    <div class="item" @click="$router.push({ path: '/informalessay' })">
                        <img src="../../assets/Navigation-bar-icon/menu-心情随笔.png" alt="" class="img">
                        <div class="text">
                            <span class="el-dropdown-link">
                                随笔
                            </span>
                        </div>
                        <div class="progress-border"></div>
                    </div>
                    <div class="item" @click="$router.push({ path: '/record' })">
                        <img src="../../src/assets/Navigation-bar-icon/记录.png" alt="" class="img">
                        <div class="text">
                            <span class="el-dropdown-link">
                                记录
                            </span>
                        </div>
                        <div class="progress-border"></div>
                    </div>
                    <div class="item" @click="$router.push({ path: '/album' })">
                        <img src="../../assets/Navigation-bar-icon/相册.png" alt="" class="img">
                        <div class="text">
                            <span class="el-dropdown-link">
                                相册
                            </span>
                        </div>
                        <div class="progress-border"></div>
                    </div>
                    <div class="item" @click="$router.push({ path: '/treasureBox/AlbumCollection' })">
                        <img src="../../assets/Navigation-bar-icon/百宝箱-copy.png" alt="" class="img">
                        <div class="text">
                            <el-dropdown>
                                <span class="el-dropdown-link">
                                    百宝箱
                                </span>
                                <template #dropdown>
                                    <el-dropdown-menu>
                                        <el-dropdown-item
                                            @click="$router.push({ path: '/treasureBox/AlbumCollection' })">相册</el-dropdown-item>
                                        <el-dropdown-item
                                            @click="$router.push({ path: '/treasureBox/music' })">音乐</el-dropdown-item>
                                        <el-dropdown-item
                                            @click="$router.push({ path: '/treasureBox/favorites' })">收藏夹</el-dropdown-item>
                                        <el-dropdown-item
                                            @click="$router.push({ path: '/treasureBox/friendshipLink' })">友情链接</el-dropdown-item>
                                    </el-dropdown-menu>
                                </template>
                            </el-dropdown>
                        </div>
                        <div class="progress-border"></div>
                    </div>
                    <div class="item" @click="$router.push({ path: '/message' })">
                        <img src="../../assets/Navigation-bar-icon/留言板.png" alt="" class="img">
                        <div class="text">
                            <span class="el-dropdown-link">
                                留言
                            </span>
                        </div>
                        <div class="progress-border"></div>
                    </div>
                    <div class="item" @click="$router.push({ path: '/contact' })">
                        <img src="../../assets/Navigation-bar-icon/联系我-2.png" alt="" class="img">
                        <div class="text">
                            <span class="el-dropdown-link">
                                联系我
                            </span>
                        </div>
                        <div class="progress-border"></div>
                    </div>
                    <div class="login" @click="$router.push({ path: '/Login' })">
                        登录
                    </div>
                </div>
            </el-col>
        </el-row>
    </div>

</template>

<script setup>
import { ref, onMounted, onUnmounted } from 'vue';
import { useRoute, useRouter } from 'vue-router';

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
@keyframes glow {
  0% {
    box-shadow: 0 0 20px rgba(255, 204, 0, 0.5);
  }
  50% {
    box-shadow: 0 0 40px rgba(255, 204, 0, 1);
  }
  100% {
    box-shadow: 0 0 20px rgba(255, 204, 0, 0.5);
  }
}
.navitor {
    position: fixed;
    font-family: 'MyCustomFont', sans-serif;
    top: 0;
    z-index: 1000;
    background-color: rgba(0, 0, 0, 0.1);
    transition: background-color 0.3s ease, backdrop-filter 0.3s ease;
    width: 100%;

    &.hidden {
        transform: translateY(-100%);
        transition: transform 0.3s cubic-bezier(0.23, 1, 0.32, 1); // 更平滑的动画曲线
    }

    &:hover {
        background-color: rgba(0, 0, 0, 0.7); // 更深的背景色，增强对比度
    }

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
            animation: glow 3s infinite;
        }

        .item {
            display: flex;
            position: relative;
            cursor: pointer;
            height: 50px;
            align-items: center;

            &:hover .text {
                color: rgb(158, 199, 109);
            }

            &:hover .progress-border {
                width: 100%;
            }

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

                font-size: 12px;

                .el-dropdown-link {
                    color: rgba(255,255,255,0.8);
                }

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
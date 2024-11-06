<template>
    <div class="login">
        <div class="login-box-div">
            <transition name="fade">
                <div class="register-box" v-if="state">
                    <div class="register-button">
                        <div class="title">没有账号？</div>
                        <div class="goregister">去注册</div>
                        <div class="button">
                            <el-button @click="state = !state">去注册</el-button>
                        </div>
                    </div>
                    <div class="register-blank">
                        <div class="title">
                            登录
                        </div>
                        <div class="form">
                            <el-form :model="form" label-width="auto">
                                <el-form-item label="用户名">
                                    <el-input placeholder="请输入用户名" v-model="form.username" />
                                </el-form-item>
                                <el-form-item label="密码">
                                    <el-input placeholder="请输入密码" type="password" v-model="form.password" />
                                </el-form-item>
                                <el-form-item label="确认密码">
                                    <el-input placeholder="请再次输入密码" type="password" v-model="form.confirmPassword" />
                                </el-form-item>
                                <el-form-item label="验证码">
                                    <el-input placeholder="请输入验证码" v-model="form.captcha" style=" float: left;" />
                                    <el-button type="primary" @click="getVerificationCode"
                                        style=" margin-top: 10px;">获取验证码</el-button>
                                </el-form-item>
                                <el-form-item>
                                    <div class="button-container">
                                        <el-button type="primary" @click="onSubmit">Create</el-button>
                                        <el-button>Cancel</el-button>
                                    </div>
                                </el-form-item>
                            </el-form>
                        </div>


                    </div>
                </div>
                <div class="login-box" v-else>

                    <div class="login-blank">
                        <div class="title">
                            登录
                        </div>
                        <div class="form">
                            <el-form :model="form" label-width="auto">
                                <el-form-item label="用户名">
                                    <el-input placeholder="请输入用户名" v-model="form.username" />
                                </el-form-item>
                                <el-form-item label="密码">
                                    <el-input placeholder="请输入密码" type="password" v-model="form.password" />
                                </el-form-item>

                                <el-form-item>
                                    <div class="button-container">
                                        <el-button type="primary" @click="onSubmit">登录</el-button>
                                        <el-button>取消</el-button>
                                    </div>
                                </el-form-item>
                            </el-form>
                        </div>

                    </div>
                    <div class="login-button">
                        <div class="title">有账号？</div>
                        <div class="goregister">去登录</div>
                        <div class="button">
                            <el-button @click="state = !state">登录</el-button>
                        </div>
                    </div>
                </div>
            </transition>
        </div>
    </div>

</template>

<script setup>
import { reactive, ref } from 'vue';
const state = ref('true')
import { ElMessage } from 'element-plus';

const form = reactive({
    username: '',
    password: '',
    confirmPassword: '',
    captcha: ''
});

const getVerificationCode = () => {
    // 模拟获取验证码的逻辑
    if (form.username) {
        form.captcha = Math.random().toString(36).substring(2, 8); // 生成随机验证码
        ElMessage.success('验证码已发送，请查收！');
    } else {
        ElMessage.error('请输入用户名');
    }
};
const onSubmit = () => {
    console.log('submit!')
}
</script>

<style scoped lang="scss">
.fade-enter-active,
.fade-leave-active {
    transition: opacity 0.5s;
}

.fade-enter,
.fade-leave-to

/* .fade-leave-active in <2.1.8 */
    {
    opacity: 0;
}

.login {
    width: 100%;
    height: 100vh;
    background-image: url('../../assets/Navigation-bar-icon/login.jpg');
    background-size: cover;
    background-position: center;
    display: flex;
    justify-content: center;
    align-items: center;

    .login-box-div {
        width: 700px;
        height: 400px;
       
        position: relative;
        border-radius: 10px;
        overflow: hidden;

        .register-box {
            position: absolute;
            top: 0;
            left: 0;
            width: 700px;
            height: 400px;
            display: flex;


            .register-button {
                width: 350px;
                height: 400px;
                background-color: rgba(232, 73, 70);
                color: rgba(255, 255, 255, 0.9);
                display: flex;
                flex-direction: column;
                justify-content: center;

                .title {
                    width: 100%;
                    height: 50px;
                    line-height: 50px;
                    text-align: center;
                    font-size: 30px;
                    color: rgba(255, 255, 255, 0.9);
                }

                .goregister {
                    width: 100%;
                    height: 30px;
                    line-height: 30px;
                    text-align: center;

                }

                .button {
                    width: 100%;
                    height: 50px;
                    line-height: 50px;
                    text-align: center;
                }
            }

            .register-blank {
                width: 350px;
                height: 400px;
                background-color: rgba(255, 255, 255, 0.8);
                display: flex;
                flex-direction: column;
                justify-content: center;
                padding-top: 30px;

                .title {
                    width: 100%;
                    height: 40px;
                    line-height: 40px;
                    text-align: center;
                    font-size: 20px;

                }

                .form {
                    width: 300px;
                    padding-top: 10px;
                    margin: auto;


                    .button-container {
                        display: flex;
                        width: 100%;
                        justify-content: center;
                        align-items: center;
                    }
                }
            }
        }

        .login-box {
            position: absolute;
            top: 0;
            left: 0;
            width: 700px;
            height: 400px;
            display: flex;

            .login-button {
                width: 350px;
                height: 400px;
                background-color: rgba(232, 73, 70);
                color: rgba(255, 255, 255, 0.9);
                display: flex;
                flex-direction: column;
                justify-content: center;

                .title {
                    width: 100%;
                    height: 50px;
                    line-height: 50px;
                    text-align: center;
                    font-size: 30px;
                    color: rgba(255, 255, 255, 0.9);
                }

                .goregister {
                    width: 100%;
                    height: 30px;
                    line-height: 30px;
                    text-align: center;

                }

                .button {
                    width: 100%;
                    height: 50px;
                    line-height: 50px;
                    text-align: center;
                }
            }

            .login-blank {
                width: 350px;
                height: 400px;
                background-color: rgba(255, 255, 255, 0.8);
                display: flex;
                flex-direction: column;
                justify-content: center;
                align-items: center;
                padding-top: 40px;

                .title {
                    width: 100%;
                    height: 40px;
                    line-height: 40px;
                    text-align: center;
                    font-size: 20px;

                }

                .form {
                    width: 300px;

                    margin: auto;


                    .button-container {
                        display: flex;
                        width: 100%;
                        justify-content: center;
                        align-items: center;
                    }
                }

            }

        }

    }
}
</style>
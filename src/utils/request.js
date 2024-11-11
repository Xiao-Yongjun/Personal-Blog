import axios from 'axios';
/* import useUserStore from '@/store/modules/user'; */

// 创建 Axios 实例
const request = axios.create({
  baseURL: 'https://fc-mp-41c5b005-6dd2-4571-b8ed-83c286b3c773.next.bspapp.com',
  timeout: 5000
});
/* 
// 请求拦截器
request.interceptors.request.use(
  config => {
    const userStore = useUserStore();
    const token = userStore.token; // 假设你的 store 中有一个 token 属性
    if (token) {
      config.headers['Authorization'] = `Bearer ${token}`;
    }
    return config;
  },
  error => {
    return Promise.reject(error);
  }
);

// 响应拦截器
request.interceptors.response.use(
  response => {
    const res = response.data;
    if (res.code !== 200) {
      // 处理错误码
      console.error(`请求失败，错误码：${res.code}，错误信息：${res.message}`);
      return Promise.reject(res.message);
    }
    return res.data;
  },
  error => {
    if (error.response) {
      // 服务器返回了错误响应
      console.error(`请求失败，状态码：${error.response.status}，错误信息：${error.response.data.message}`);
    } else if (error.request) {
      // 请求已发出但没有收到响应
      console.error(`请求失败，请求未收到响应：${error.message}`);
    } else {
      // 发生了一些问题，触发了错误
      console.error(`请求失败，错误信息：${error.message}`);
    }
    return Promise.reject(error);
  }
); */

export default request;
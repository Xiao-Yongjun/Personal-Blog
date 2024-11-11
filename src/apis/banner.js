

import request from '../utils/request';

// 获取 banner 数据
export const getBanner = () => {
  return request({
    url: '/banner/get',
    method: 'GET'
  });
};



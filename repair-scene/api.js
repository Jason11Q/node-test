import axios from 'axios';
import commonFunctions from './commonFunction.js';

//全局等待实例
let _headerSceneID;
let token = '';

/* 
    默认初始化Vue
  */

const initAxios = function (baseURL) {
  let axiosInstance = axios.create({
    baseURL: baseURL,
  });
  //添加请求拦截器
  axiosInstance.interceptors.request.use(
    (config) => {
      if (token) {
        config.headers.Authorization = `Bearer ${token}`;
      }
      // 如果有sceneID，在请求头中带上sceneID
      if (_headerSceneID) {
        config.headers.CurrentClientRenderingSceneID = _headerSceneID;
      }

      return config;
    },
    (error) => {
      return Promise.reject(error);
    }
  );

  //添加响应拦截器
  axiosInstance.interceptors.response.use(
    (response) => {
      return response;
    },
    (error) => {
      if (error.response) {
        if (error.response.status == 401 || error.response.status == 444) {
          console.error('401/444', '请求失败', '权限不足');
          return { data: { success: false } };
        } else if (error.response.status == 403) {
          console.error(403, '请求失败', '权限不足');
          return { data: { success: false } };
        } else if (error.response.status == 500) {
          console.error(500, '请求失败', '请求错误');
          return { data: { success: false } };
        }
      } else {
        // Cancel是axios终止请求返回的实例对象名称
        if (error.constructor.name == 'Cancel') {
          return { data: { success: false } };
        } else {
          console.error(0, '请求失败', '请求失败');
          return { data: { success: false } };
        }
      }
    }
  );

  return axiosInstance;
};

const transfromData = function (res) {
  let msg = commonFunctions.errorStateCode(res);

  if (msg) {
    console.info(msg);
    return;
  } else {
    return res.data;
  }
};
export default {
  initAxios,
  transfromData,
  axios,
};

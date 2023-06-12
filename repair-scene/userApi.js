// import Axios from 'axios';
import api from './api';

const SCENE_API_CONFIG = {
  MODE: 'production',
  VERSION: 'v1',
};
const USER_API_SERVER_URL = 'http://www.tuguan.net/api/user';

let user_prefix = `/${SCENE_API_CONFIG.VERSION}`;

if (SCENE_API_CONFIG.MODE == 'production') {
  user_prefix = `/api/user${user_prefix}`;
}

let axiosUser = api.initAxios(USER_API_SERVER_URL);

export default class UserApi {
  /**
   * 登录接口
   * @param {Object} obj
   */
  static async login(obj) {
    let res = await axiosUser.post(`${user_prefix}/login`, obj);
    return api.transfromData(res);
  }

  /**
   *  根据用户名获取用户的基本信息
   */
  static async getUserInfo(userName) {
    let res = await axiosUser.get(`${user_prefix}/userinfo/${userName}`);
    return api.transfromData(res);
  }

  /*
    获取场景访问token
  */
  static getScenePublishSetting(sceneID) {
    return `${USER_API_SERVER_URL}${user_prefix}/visitorScene/${sceneID}`;
  }

  /*
    获取vip状态
  */
  static async getVipStatus() {
    let res = await axiosUser.get(`${user_prefix}/my/vipStatus`);
    return res.data;
  }
  /*
    获取vip等级
  */
  static async getVipLevel() {
    let res = await axiosUser.get(`${user_prefix}/vip/my/info`);
    return res.data;
  }
}

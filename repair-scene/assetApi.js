import api from './api';

const SCENE_API_CONFIG = {
  MODE: 'production',
  VERSION: 'v1',
};

const SCENE_EDITOR_API_SERVER_URL = 'http://www.tuguan.net/api/sceneEditor';

let scene_prefix = `/${SCENE_API_CONFIG.VERSION}`;
if (SCENE_API_CONFIG.MODE == 'production') {
  scene_prefix = `/api/scene${scene_prefix}`;
}
var axiosSceneAsset = api.initAxios(SCENE_EDITOR_API_SERVER_URL);

export default class AssetApi {
  /**
   * 获取当前资产类型的根资产组
   * @param { 资产类型 } assetCategory
   * @param { 场景ID } sceneID
   * @description assetCategory( Asset_Scene, Asset_Tenant, Asset_Favorites, Asset_Community )
   */
  static async getRootAssetGroup(assetCategory, sceneID, type = 'ComMon') {
    let res = await axiosSceneAsset.post(`${scene_prefix}/assetLibrary/${assetCategory}/rootAssetGroup/${type}`, sceneID);
    return api.transfromData(res);
  }

  /**
   * 获取资产组内的资产组和资产
   * @param { 资产类型 } assetCategory
   * @param { 资产组ID } assetGroupID
   * @param { 场景ID } sceneID
   * @description assetCategory( Asset_Scene, Asset_Tenant, Asset_Favorites, Asset_Community )
   */
  static async getAssetGroupsAndAssets(assetCategory, assetGroupID, sceneID) {
    let res = await axiosSceneAsset.post(`${scene_prefix}/assetLibrary/${assetCategory}/assetGroups/${assetGroupID}/assetGroupsAndAssets`, sceneID);
    return api.transfromData(res);
  }

  /**
   * 加载style
   * @param { 资产类别 } assetCategory
   * @param { 资产ID } assetID
   */
  static async getLoadAssetStyle(url) {
    // let res = await axiosSceneAsset.get(url.replace('[[origin]]', window.SCENE_EDITOR_API_SERVER_URL));
    let res = await axiosSceneAsset.get(url.replace('[[origin]]', ''));
    return api.transfromData(res);
  }

  static getAssetServerPath(link) {
    if (link && link.indexOf('http') === 0) {
      return link;
    } else {
      if (link) {
        return `${window.SCENE_EDITOR_API_SERVER_URL}${scene_prefix}${link[0] == '/' ? '' : '/'}${link}`;
      } else {
        return link;
      }
    }
  }

  /**
   *获取资产拼接路径
   */
  static getAssetOriginPath(link) {
    if (link && (link.indexOf('http') === 0 || link.indexOf('[[origin]]') === 0)) {
      return `${link}`;
    } else {
      if (link) {
        return `[[origin]]${scene_prefix}${link[0] == '/' ? '' : '/'}${link}`;
      } else {
        return link;
      }
    }
  }
  /**
   * 获取资产地址
   * @param {String} assetCategory - [ Asset_Scene, Asset_Tenant, Asset_Favorites, Asset_Community ] 资产类型，[场景资产，租户资产，系统资产，社区资产]
   * @param {String} assetID - 资产id
   * @param {String} expandName - 资产后缀名
   * @param {String} fileName - 资产名称
   * @returns {Boolean} - 资产相对路径
   */
  static getAssetPath(assetCategory, assetID, expandName, fileName) {
    return `[[origin]]${scene_prefix}/assetLibrary/${assetCategory}/asset/${assetID}/${expandName}/${fileName}`;
  }

  /**
   * 获取ba64
   * @param { 地址 } path
   */
  static async getBase64(path) {
    let url;
    if (path.indexOf('http') === 0) {
      url = path;
    } else {
      url = `${scene_prefix}/${path}`;
    }
    let res = await axiosSceneAsset({
      method: 'get',
      url,
      responseType: 'arraybuffer',
    });
    return res;
  }

  /**
   * 获取资产地址
   * @param {String} assetCategory - [ Asset_Scene, Asset_Tenant, Asset_Favorites, Asset_Community ] 资产类型，[场景资产，租户资产，系统资产，社区资产]
   * @param {String} assetID - 资产id
   * @param {String} expandName - 资产后缀名
   * @param {String} fileName - 资产名称
   * @returns {Boolean} - 资产相对路径
   */
  static(assetCategory, assetID, expandName, fileName) {
    return `[[origin]]${scene_prefix}/assetLibrary/${assetCategory}/asset/${assetID}/${expandName}/${fileName}`;
  }

  /**
   * 获取资产setting
   *  @param {String} assetID 资产id
   */
  static async getAssetSetting(assetCategory, assetID) {
    let res = await axiosSceneAsset.get(`${scene_prefix}/assetLibrary/${assetCategory}/assets/${assetID}/getSettings`);
    return api.transfromData(res);
  }
}

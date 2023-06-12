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
var axiosSceneEditor = api.initAxios(SCENE_EDITOR_API_SERVER_URL);

export default class SceneApi {
  /**
   *保存三维场景节点设置
   */
  static async saveSceneSetting(sceneId, obj, factor = 50) {
    let res = await axiosSceneEditor({
      url: `${scene_prefix}/scenes/${sceneId}/sceneSetting`,
      method: 'put',
      data: obj,
      onUploadProgress: (progress) => {
        console.info(`已上传 ${((progress.loaded / progress.total) * 100).toFixed(2)}%`);
      },
    });

    return api.transfromData(res);
  }

  /**
   * 获取三维场景节点设置
   * @param { String } sceneId - 场景ID
   * @param { String } behaviorTypes - 调用接口场景 Get|Editor|Preview 默认值为Get
   */
  static async getSceneSetting(sceneId, behaviorTypes = 'Get', onProgress) {
    let resSize = await axiosSceneEditor({
      url: `${scene_prefix}/scenes/${sceneId}/sceneSetting?behaviorTypes=${behaviorTypes}`,
      method: 'head',
      noLoading: true,
    });
    // 新建场景初次打开没有content-length属性
    let size = resSize.headers['content-length'] || 0;
    const cancelToken = api.axios.CancelToken;
    const source = cancelToken.source();
    let res = await axiosSceneEditor({
      url: `${scene_prefix}/scenes/${sceneId}/sceneSetting?behaviorTypes=${behaviorTypes}`,
      method: 'get',
      cancelToken: source.token,
      onDownloadProgress: (progress) => {
        if (onProgress) {
          let newProgress = {
            loaded: progress.loaded,
            total: size,
          };
          onProgress(newProgress);
        } else {
          console.info(`已下载 ${((progress.loaded / size) * 100).toFixed(2)}`);
        }
      },
      noLoading: true,
    });

    return api.transfromData(res);
  }

  /**
   *获取已发布场景设置信息
   */
  static async getScenePublishInfo(sceneID) {
    let res = await axiosSceneEditor.get(`${scene_prefix}/scenes/${sceneID}/scenePublishInfo`);
    return api.transfromData(res);
  }
  /**
   *获取场景的信息
   *   @param {String} sceneID  当前编辑场景ID
   */
  static async getSceneInfo(sceneID) {
    let res = await axiosSceneEditor.get(`${scene_prefix}/scenes/${sceneID}/sceneInfo`);
    return api.transfromData(res);
  }

  /**
   * 获取静态文件接口拼接路径/缩略图等
   * @param { 接口路径 } linkUrl
   */
  static getPublicDataUrl(linkUrl) {
    return `${SCENE_EDITOR_API_SERVER_URL}${scene_prefix}${linkUrl[0] == '/' ? '' : '/'}${linkUrl}`;
  }

  /**
   * 获取当前场景的根资产组
   * @param { 场景ID } sceneID
   */
  static async getRootAssetGroup(sceneID) {
    let res = await axiosSceneEditor.get(`${scene_prefix}/scenes/${sceneID}/rootAssetGroup`);
    return api.transfromData(res);
  }
  /**
   * 获取资产组内的资产组和资产
   * @param { 场景ID } sceneID
   * @param { 资产组ID } assetGroupID
   */
  static async getAssetGroupsAndAssets(sceneID, assetGroupID) {
    let res = await axiosSceneEditor.get(`${scene_prefix}/scenes/${sceneID}/assetGroups/${assetGroupID}/assetGroupsAndAssets`);
    return api.transfromData(res);
  }
  /**
   * 加载style
   * @param { 资产ID } assetID
   */
  static async getLoadStyle(assetID) {
    let res = await axiosSceneEditor.get(`${scene_prefix}/assets/${assetID}/loadStyle`);
    return api.transfromData(res);
  }

  /**
   * 获取材质库根材质组
   * @param { 场景ID } sceneID
   */
  static async getRootMaterialGroup(sceneID) {
    let res = await axiosSceneEditor.get(`${scene_prefix}/scenes/${sceneID}/rootMaterialGroup`);
    return api.transfromData(res);
  }
  /**
   * 获取材质组内的材质组和材质
   * @param { 材质组ID } materialGroupID
   */
  static async getMaterialGroupsAndMaterials(materialGroupID) {
    let res = await axiosSceneEditor.get(`${scene_prefix}/materialGroups/${materialGroupID}/materialGroupsAndMaterials`);
    return api.transfromData(res);
  }
  /**
   * 获取本场景的根材质组
   * @param { 场景ID } sceneID
   */
  static async getTheSceneRootMaterialGroup(materialCategory, sceneID = null) {
    let res = await axiosSceneEditor.post(`${scene_prefix}/materialLibrary/${materialCategory}/rootMaterialGroup`, { sceneID });
    return api.transfromData(res);
  }
  /**
   * 获取本场景材质组内的材质组和材质
   * @param { 材质组ID } materialGroupID
   */
  static async getTheSceneMaterialGroupsAndMaterials(materialCategory, materialGroupID, sceneID = null) {
    let res = await axiosSceneEditor.post(`${scene_prefix}/materialLibrary/${materialCategory}/materialGroups/${materialGroupID}/materialGroupsAndMaterials`, {
      sceneID,
    });
    return api.transfromData(res);
  }
}

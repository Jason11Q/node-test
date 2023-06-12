import UserApi from './userApi';
import SceneApi from './sceneApi';
import AssetApi from './assetApi';

const login = async () => {

    let user = {
        userName:"test",
        password:''
    }

    let res = await UserApi.login(user);
    let token = res.accessToken;
    global.token  = token;
};

const getAssets = async ()=>{
    // 获取资产列表
}

const getSceneSetting = async ()=>{
    // 获取场景setting。转为字符串变量为后面全局匹配替换准备
}

const replaceSetting = async ()=>{
    // 替换setting中匹配资产，全局批量替换
    // 替换完成后存储为新的json文件
    // 无匹配项单独提示，需要处理资产
}

// 人工干预 applySettings = 
// e = ;
// 场景加载完成后保存
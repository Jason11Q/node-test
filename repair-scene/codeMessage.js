const CodeMessage = {
  //api接口共同的返回信息
  apiCommonInfo: {
    BadRequest: '请求出现语法错误！',
    NotFound: '无法找到指定位置的资源！',
    InternalServerError: '服务器遇到了意料不到的情况，不能完成客户请求！',
    Unauthorized: '未授权！',
    UniversalInvalidParameter: '参数不合法！',
    UniversalSensitiveWordsParameter: '参数包含敏感信息！',
    NameSemsotiveWordsParameter: '名称包含敏感内容！',
    EnglishNameSemsotiveWordsParameter: '英文名称包含敏感内容！',
    defaultInfo: '请求失败！',
    success: '请求执行成功。',
    Authorized: '授权版',
    Trial: '试用版',
    Authorization: '去授权',
    RenewLicense: '更新授权',
    ExpirationDate: '到期日期',
    Remaining: '剩余',
    DaysExpiration: '天到期',
  },

  //api 用户相关 接口返回状态
  apiUser: {
    UserValidCodeError: '用户验证码错误！',
    UserNameExist: '用户名重复！',
    UserLoginSuccess: '用户登录成功！',
    UserInvalidPassword: '用户名或密码错误！',
    UserNeedValid: '用户需验证！',
    UserLockedOut: '锁定！',
    UserTokenFaild: 'Token 错误！',
    UserNeedRefreshToken: '用户需要刷新 Token！',
  },
  //api 子用户相关 接口返回状态
  apiSubUser: {
    SubUserNotFound: '用户都不存在！',
    SubUserIsAlreadyAnAdministrator: '子用户已经是管理员了，无需重复设置！',
    SubUserIsAlreadyNonAdmin: '子用户已经不是管理员了，无需重复设置！',
  },
  //api 功能激活相关 接口返回状态
  apiStudioActivation: {
    StudioActivationAlreadyActivated: '已经开通编辑器，无需重复开通！',
    StudioActivationNeedUpgradeIdentity: '当前用户是第三方用户，需要先升级为无身份用户！',
    StudioActivationSubUserUnable: '子用户无法开通编辑器！',
    TenantActivationAlreadyActivated: '已经开通租户，无需重复开通！',
    TenantActivationNeedUpgradeIdentity: '当前用户是第三方用户，需要先升级为无身份用户！',
    TenantActivationSubUserUnable: '子用户无法开通租户！',
  },
  //api 项目相关 接口返回状态
  apiProjectGroup: {
    RootProjectGroupThirdPartyUserNotAllowed: '第三方用户不允许获取根项目组！',
    RootProjectGroupNoIdentityUserNotAllowed: '无身份用户不允许获取根项目组！',
    RootProjectGroupUnknownTenant: '由于未知原因，导致没有找到用户的租户！',
    ProjectNotFound: '项目-不存在！',
  },
  //api 中间库相关 接口返回状态
  apiMiddleDb: {
    MiddleDbNotFound: '中间库-不存在！',
    MiddleDbIsAlreadyExists: '中间库-已经存在，无需重复创建！',
    MiddleDbCreationFailed: '中间库-创建失败！',
    MiddleDbDeleteFailed: '中间库-删除失败！',
    MiddleDbTableNotFound: '中间库-中间表-不存在！',
    MiddleDbTableDeleteFailed: '中间库-中间表-删除失败！',
    MiddleDbTableInsertDataFailed: '中间库-中间表-插入数据失败！',
  },
  //api 数据相关 接口返回状态
  apiDataSource: {
    DataSourceNotFound: '数据源编辑-数据源未找到！',
    DataSourceDataSourceGroupNotFound: '数据源编辑-数据源组-不存在！',
    DataSourceLinkDataSourceNotFound: '数据源编辑-链接数据源-未找到！',
    DataSourceUploadDataSourceFileTypeEmpty: '数据源编辑-上传数据源-上传文件的类型为空！',
    DataSourceUploadDataSourceFileTypeNotSupport: '数据源编辑-上传数据源-上传文件的类型不支持！',
    DataSourceUploadDataSourceNoFile: '数据源编辑-上传数据源-没有上传文件！',
    DataSourceUploadDataSourceNotFound: '数据源编辑-上传数据源-未找到！',
    DataSourceCategoryNotSupport: '数据源编辑-数据源类型不支持！',
    DataSourceDbConnectionBuildError: '数据源编辑-数据源连接解析出错！',
    DataSourceUnknownError: '数据源编辑-位置错误！',
  },
};

export default CodeMessage;

import CodeMessage from './codeMessage';

// 常用函数
const errorStateCode = function (da) {
  if (!da) return;
  let status = da.status;
  let message = null;
  let success = null;
  let statusCode = null;
  if (da.data) {
    success = da.data.success;
    statusCode = da.data.statusCode;
  }
  switch (status) {
    case 200:
      if (!success) {
        switch (statusCode) {
          case 0:
            message = CodeMessage['apiUser.UserValidCodeError'];
            break;
          case 1:
            message = CodeMessage['apiUser.UserNameExist'];
            break;
          case 2:
            message = CodeMessage['apiUser.UserLoginSuccess'];
            break;
          case 3:
            message = CodeMessage['apiUser.UserInvalidPassword'];
            break;
          case 4:
            message = CodeMessage['apiUser.UserNeedValid'];
            break;
          case 5:
            message = CodeMessage['apiUser.UserLockedOut'];
            break;
          case 6:
            message = CodeMessage['apiUser.UserTokenFaild'];
            break;
          case 444:
            message = CodeMessage['apiUser.UserNeedRefreshToken'];
            break;
          case 100:
            message = CodeMessage['apiSubUser.SubUserNotFound'];
            break;
          case 101:
            message = CodeMessage['apiSubUser.SubUserIsAlreadyAnAdministrator'];
            break;
          case 102:
            message = CodeMessage['apiSubUser.SubUserIsAlreadyNonAdmin'];
            break;
          case 900:
            message = CodeMessage['apiStudioActivation.StudioActivationAlreadyActivated'];
            break;
          case 901:
            message = CodeMessage['apiStudioActivation.StudioActivationNeedUpgradeIdentity'];
            break;
          case 902:
            message = CodeMessage['apiStudioActivation.StudioActivationSubUserUnable'];
            break;
          case 903:
            message = CodeMessage['apiStudioActivation.TenantActivationAlreadyActivated'];
            break;
          case 904:
            message = CodeMessage['apiStudioActivation.TenantActivationNeedUpgradeIdentity'];
            break;
          case 905:
            message = CodeMessage['apiStudioActivation.TenantActivationSubUserUnable'];
            break;
          case 1000:
            message = CodeMessage['apiProjectGroup.RootProjectGroupThirdPartyUserNotAllowed'];
            break;
          case 1001:
            message = CodeMessage['apiProjectGroup.RootProjectGroupNoIdentityUserNotAllowed'];
            break;
          case 1002:
            message = CodeMessage['apiProjectGroup.RootProjectGroupUnknownTenant'];
            break;
          case 1003:
            message = CodeMessage['apiProjectGroup.ProjectNotFound'];
            break;
          case 4001:
            message = CodeMessage['apiMiddleDb.MiddleDbNotFound'];
            break;
          case 4002:
            message = CodeMessage['apiMiddleDb.MiddleDbIsAlreadyExists'];
            break;
          case 4003:
            message = CodeMessage['apiMiddleDb.MiddleDbCreationFailed'];
            break;
          case 4004:
            message = CodeMessage['apiMiddleDb.MiddleDbDeleteFailed'];
            break;
          case 4005:
            message = CodeMessage['apiMiddleDb.MiddleDbTableNotFound'];
            break;
          case 4006:
            message = CodeMessage['apiMiddleDb.MiddleDbTableDeleteFailed'];
            break;
          case 4007:
            message = CodeMessage['apiMiddleDb.MiddleDbTableInsertDataFailed'];
            break;
          case 5001:
            message = CodeMessage['apiDataSource.DataSourceNotFound'];
            break;
          case 5002:
            message = CodeMessage['apiDataSource.DataSourceDataSourceGroupNotFound'];
            break;
          case 5003:
            message = CodeMessage['apiDataSource.DataSourceLinkDataSourceNotFound'];
            break;
          case 5004:
            message = CodeMessage['apiDataSource.DataSourceUploadDataSourceFileTypeEmpty'];
            break;
          case 5005:
            message = CodeMessage['apiDataSource.DataSourceUploadDataSourceFileTypeNotSupport'];
            break;
          case 5006:
            message = CodeMessage['apiDataSource.DataSourceUploadDataSourceNoFile'];
            break;
          case 5007:
            message = CodeMessage['apiDataSource.DataSourceUploadDataSourceNotFound'];
            break;
          case 5008:
            message = CodeMessage['apiDataSource.DataSourceCategoryNotSupport'];
            break;
          case 5009:
            message = CodeMessage['apiDataSource.DataSourceDbConnectionBuildError'];
            break;
          case 5010:
            message = CodeMessage['apiDataSource.DataSourceUnknownError'];
            break;
          case 9001:
            message = CodeMessage['apiCommonInfo.UniversalInvalidParameter'];
            break;
          case 9004:
            message = CodeMessage['apiCommonInfo.UniversalSensitiveWordsParameter'];
            break;
          case 9005:
            message = CodeMessage['apiCommonInfo.NameSemsotiveWordsParameter'];
            break;
          case 9006:
            message = CodeMessage['apiCommonInfo.EnglishNameSemsotiveWordsParameter'];
            break;
        }
      }
      break;
    case 400:
      message = CodeMessage['apiCommonInfo.BadRequest'];
      break;
    case 401:
    case 403:
    case 444:
      message = CodeMessage['apiCommonInfo.Unauthorized'];
      break;
    case 404:
      message = CodeMessage['apiCommonInfo.NotFound'];
      break;
    case 500:
      message = CodeMessage['apiCommonInfo.InternalServerError'];
      break;
    default:
      break;
  }

  return message;
};

export default {
  errorStateCode,
};

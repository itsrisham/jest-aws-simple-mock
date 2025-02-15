
/**
* @description mocks_v3:mockAppConfig module is mocks for AWS-SDK V3
* 
* This mock module has generated from mock_generator.
* Generator Version: {v0.1.0}
* Author: hugtechio
*/


function attachMock(moduleName:string, method:string, name:string, promise:Promise<any>, once:boolean=true, mock?:jest.SpyInstance): jest.SpyInstance {
  const mod = require(moduleName)
  const awsSdkObject = mod[name]
  // @ts-ignore
  const tmp = (mock) ? mock : jest.spyOn(awsSdkObject.prototype, method)
  return (once) ? tmp.mockImplementationOnce(() => promise) : tmp.mockImplementation(() => promise)
}

  export const mockAppConfig = {
  createApplication: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-appconfig', 'createApplication', 'AppConfig', Promise.resolve(result), true, mock)
  },
  createApplicationAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-appconfig', 'createApplication', 'AppConfig', Promise.resolve(result), false, mock)
  },
  createApplicationThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-appconfig', 'createApplication', 'AppConfig', Promise.reject(result), true, mock)
  },
  createConfigurationProfile: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-appconfig', 'createConfigurationProfile', 'AppConfig', Promise.resolve(result), true, mock)
  },
  createConfigurationProfileAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-appconfig', 'createConfigurationProfile', 'AppConfig', Promise.resolve(result), false, mock)
  },
  createConfigurationProfileThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-appconfig', 'createConfigurationProfile', 'AppConfig', Promise.reject(result), true, mock)
  },
  createDeploymentStrategy: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-appconfig', 'createDeploymentStrategy', 'AppConfig', Promise.resolve(result), true, mock)
  },
  createDeploymentStrategyAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-appconfig', 'createDeploymentStrategy', 'AppConfig', Promise.resolve(result), false, mock)
  },
  createDeploymentStrategyThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-appconfig', 'createDeploymentStrategy', 'AppConfig', Promise.reject(result), true, mock)
  },
  createEnvironment: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-appconfig', 'createEnvironment', 'AppConfig', Promise.resolve(result), true, mock)
  },
  createEnvironmentAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-appconfig', 'createEnvironment', 'AppConfig', Promise.resolve(result), false, mock)
  },
  createEnvironmentThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-appconfig', 'createEnvironment', 'AppConfig', Promise.reject(result), true, mock)
  },
  createHostedConfigurationVersion: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-appconfig', 'createHostedConfigurationVersion', 'AppConfig', Promise.resolve(result), true, mock)
  },
  createHostedConfigurationVersionAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-appconfig', 'createHostedConfigurationVersion', 'AppConfig', Promise.resolve(result), false, mock)
  },
  createHostedConfigurationVersionThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-appconfig', 'createHostedConfigurationVersion', 'AppConfig', Promise.reject(result), true, mock)
  },
  deleteApplication: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-appconfig', 'deleteApplication', 'AppConfig', Promise.resolve(result), true, mock)
  },
  deleteApplicationAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-appconfig', 'deleteApplication', 'AppConfig', Promise.resolve(result), false, mock)
  },
  deleteApplicationThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-appconfig', 'deleteApplication', 'AppConfig', Promise.reject(result), true, mock)
  },
  deleteConfigurationProfile: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-appconfig', 'deleteConfigurationProfile', 'AppConfig', Promise.resolve(result), true, mock)
  },
  deleteConfigurationProfileAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-appconfig', 'deleteConfigurationProfile', 'AppConfig', Promise.resolve(result), false, mock)
  },
  deleteConfigurationProfileThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-appconfig', 'deleteConfigurationProfile', 'AppConfig', Promise.reject(result), true, mock)
  },
  deleteDeploymentStrategy: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-appconfig', 'deleteDeploymentStrategy', 'AppConfig', Promise.resolve(result), true, mock)
  },
  deleteDeploymentStrategyAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-appconfig', 'deleteDeploymentStrategy', 'AppConfig', Promise.resolve(result), false, mock)
  },
  deleteDeploymentStrategyThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-appconfig', 'deleteDeploymentStrategy', 'AppConfig', Promise.reject(result), true, mock)
  },
  deleteEnvironment: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-appconfig', 'deleteEnvironment', 'AppConfig', Promise.resolve(result), true, mock)
  },
  deleteEnvironmentAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-appconfig', 'deleteEnvironment', 'AppConfig', Promise.resolve(result), false, mock)
  },
  deleteEnvironmentThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-appconfig', 'deleteEnvironment', 'AppConfig', Promise.reject(result), true, mock)
  },
  deleteHostedConfigurationVersion: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-appconfig', 'deleteHostedConfigurationVersion', 'AppConfig', Promise.resolve(result), true, mock)
  },
  deleteHostedConfigurationVersionAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-appconfig', 'deleteHostedConfigurationVersion', 'AppConfig', Promise.resolve(result), false, mock)
  },
  deleteHostedConfigurationVersionThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-appconfig', 'deleteHostedConfigurationVersion', 'AppConfig', Promise.reject(result), true, mock)
  },
  destroy: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-appconfig', 'destroy', 'AppConfig', Promise.resolve(result), true, mock)
  },
  destroyAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-appconfig', 'destroy', 'AppConfig', Promise.resolve(result), false, mock)
  },
  destroyThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-appconfig', 'destroy', 'AppConfig', Promise.reject(result), true, mock)
  },
  getApplication: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-appconfig', 'getApplication', 'AppConfig', Promise.resolve(result), true, mock)
  },
  getApplicationAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-appconfig', 'getApplication', 'AppConfig', Promise.resolve(result), false, mock)
  },
  getApplicationThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-appconfig', 'getApplication', 'AppConfig', Promise.reject(result), true, mock)
  },
  getConfiguration: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-appconfig', 'getConfiguration', 'AppConfig', Promise.resolve(result), true, mock)
  },
  getConfigurationAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-appconfig', 'getConfiguration', 'AppConfig', Promise.resolve(result), false, mock)
  },
  getConfigurationThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-appconfig', 'getConfiguration', 'AppConfig', Promise.reject(result), true, mock)
  },
  getConfigurationProfile: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-appconfig', 'getConfigurationProfile', 'AppConfig', Promise.resolve(result), true, mock)
  },
  getConfigurationProfileAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-appconfig', 'getConfigurationProfile', 'AppConfig', Promise.resolve(result), false, mock)
  },
  getConfigurationProfileThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-appconfig', 'getConfigurationProfile', 'AppConfig', Promise.reject(result), true, mock)
  },
  getDeployment: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-appconfig', 'getDeployment', 'AppConfig', Promise.resolve(result), true, mock)
  },
  getDeploymentAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-appconfig', 'getDeployment', 'AppConfig', Promise.resolve(result), false, mock)
  },
  getDeploymentThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-appconfig', 'getDeployment', 'AppConfig', Promise.reject(result), true, mock)
  },
  getDeploymentStrategy: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-appconfig', 'getDeploymentStrategy', 'AppConfig', Promise.resolve(result), true, mock)
  },
  getDeploymentStrategyAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-appconfig', 'getDeploymentStrategy', 'AppConfig', Promise.resolve(result), false, mock)
  },
  getDeploymentStrategyThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-appconfig', 'getDeploymentStrategy', 'AppConfig', Promise.reject(result), true, mock)
  },
  getEnvironment: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-appconfig', 'getEnvironment', 'AppConfig', Promise.resolve(result), true, mock)
  },
  getEnvironmentAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-appconfig', 'getEnvironment', 'AppConfig', Promise.resolve(result), false, mock)
  },
  getEnvironmentThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-appconfig', 'getEnvironment', 'AppConfig', Promise.reject(result), true, mock)
  },
  getHostedConfigurationVersion: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-appconfig', 'getHostedConfigurationVersion', 'AppConfig', Promise.resolve(result), true, mock)
  },
  getHostedConfigurationVersionAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-appconfig', 'getHostedConfigurationVersion', 'AppConfig', Promise.resolve(result), false, mock)
  },
  getHostedConfigurationVersionThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-appconfig', 'getHostedConfigurationVersion', 'AppConfig', Promise.reject(result), true, mock)
  },
  listApplications: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-appconfig', 'listApplications', 'AppConfig', Promise.resolve(result), true, mock)
  },
  listApplicationsAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-appconfig', 'listApplications', 'AppConfig', Promise.resolve(result), false, mock)
  },
  listApplicationsThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-appconfig', 'listApplications', 'AppConfig', Promise.reject(result), true, mock)
  },
  listConfigurationProfiles: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-appconfig', 'listConfigurationProfiles', 'AppConfig', Promise.resolve(result), true, mock)
  },
  listConfigurationProfilesAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-appconfig', 'listConfigurationProfiles', 'AppConfig', Promise.resolve(result), false, mock)
  },
  listConfigurationProfilesThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-appconfig', 'listConfigurationProfiles', 'AppConfig', Promise.reject(result), true, mock)
  },
  listDeploymentStrategies: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-appconfig', 'listDeploymentStrategies', 'AppConfig', Promise.resolve(result), true, mock)
  },
  listDeploymentStrategiesAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-appconfig', 'listDeploymentStrategies', 'AppConfig', Promise.resolve(result), false, mock)
  },
  listDeploymentStrategiesThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-appconfig', 'listDeploymentStrategies', 'AppConfig', Promise.reject(result), true, mock)
  },
  listDeployments: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-appconfig', 'listDeployments', 'AppConfig', Promise.resolve(result), true, mock)
  },
  listDeploymentsAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-appconfig', 'listDeployments', 'AppConfig', Promise.resolve(result), false, mock)
  },
  listDeploymentsThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-appconfig', 'listDeployments', 'AppConfig', Promise.reject(result), true, mock)
  },
  listEnvironments: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-appconfig', 'listEnvironments', 'AppConfig', Promise.resolve(result), true, mock)
  },
  listEnvironmentsAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-appconfig', 'listEnvironments', 'AppConfig', Promise.resolve(result), false, mock)
  },
  listEnvironmentsThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-appconfig', 'listEnvironments', 'AppConfig', Promise.reject(result), true, mock)
  },
  listHostedConfigurationVersions: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-appconfig', 'listHostedConfigurationVersions', 'AppConfig', Promise.resolve(result), true, mock)
  },
  listHostedConfigurationVersionsAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-appconfig', 'listHostedConfigurationVersions', 'AppConfig', Promise.resolve(result), false, mock)
  },
  listHostedConfigurationVersionsThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-appconfig', 'listHostedConfigurationVersions', 'AppConfig', Promise.reject(result), true, mock)
  },
  listTagsForResource: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-appconfig', 'listTagsForResource', 'AppConfig', Promise.resolve(result), true, mock)
  },
  listTagsForResourceAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-appconfig', 'listTagsForResource', 'AppConfig', Promise.resolve(result), false, mock)
  },
  listTagsForResourceThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-appconfig', 'listTagsForResource', 'AppConfig', Promise.reject(result), true, mock)
  },
  startDeployment: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-appconfig', 'startDeployment', 'AppConfig', Promise.resolve(result), true, mock)
  },
  startDeploymentAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-appconfig', 'startDeployment', 'AppConfig', Promise.resolve(result), false, mock)
  },
  startDeploymentThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-appconfig', 'startDeployment', 'AppConfig', Promise.reject(result), true, mock)
  },
  stopDeployment: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-appconfig', 'stopDeployment', 'AppConfig', Promise.resolve(result), true, mock)
  },
  stopDeploymentAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-appconfig', 'stopDeployment', 'AppConfig', Promise.resolve(result), false, mock)
  },
  stopDeploymentThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-appconfig', 'stopDeployment', 'AppConfig', Promise.reject(result), true, mock)
  },
  tagResource: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-appconfig', 'tagResource', 'AppConfig', Promise.resolve(result), true, mock)
  },
  tagResourceAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-appconfig', 'tagResource', 'AppConfig', Promise.resolve(result), false, mock)
  },
  tagResourceThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-appconfig', 'tagResource', 'AppConfig', Promise.reject(result), true, mock)
  },
  untagResource: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-appconfig', 'untagResource', 'AppConfig', Promise.resolve(result), true, mock)
  },
  untagResourceAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-appconfig', 'untagResource', 'AppConfig', Promise.resolve(result), false, mock)
  },
  untagResourceThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-appconfig', 'untagResource', 'AppConfig', Promise.reject(result), true, mock)
  },
  updateApplication: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-appconfig', 'updateApplication', 'AppConfig', Promise.resolve(result), true, mock)
  },
  updateApplicationAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-appconfig', 'updateApplication', 'AppConfig', Promise.resolve(result), false, mock)
  },
  updateApplicationThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-appconfig', 'updateApplication', 'AppConfig', Promise.reject(result), true, mock)
  },
  updateConfigurationProfile: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-appconfig', 'updateConfigurationProfile', 'AppConfig', Promise.resolve(result), true, mock)
  },
  updateConfigurationProfileAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-appconfig', 'updateConfigurationProfile', 'AppConfig', Promise.resolve(result), false, mock)
  },
  updateConfigurationProfileThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-appconfig', 'updateConfigurationProfile', 'AppConfig', Promise.reject(result), true, mock)
  },
  updateDeploymentStrategy: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-appconfig', 'updateDeploymentStrategy', 'AppConfig', Promise.resolve(result), true, mock)
  },
  updateDeploymentStrategyAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-appconfig', 'updateDeploymentStrategy', 'AppConfig', Promise.resolve(result), false, mock)
  },
  updateDeploymentStrategyThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-appconfig', 'updateDeploymentStrategy', 'AppConfig', Promise.reject(result), true, mock)
  },
  updateEnvironment: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-appconfig', 'updateEnvironment', 'AppConfig', Promise.resolve(result), true, mock)
  },
  updateEnvironmentAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-appconfig', 'updateEnvironment', 'AppConfig', Promise.resolve(result), false, mock)
  },
  updateEnvironmentThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-appconfig', 'updateEnvironment', 'AppConfig', Promise.reject(result), true, mock)
  },
  validateConfiguration: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-appconfig', 'validateConfiguration', 'AppConfig', Promise.resolve(result), true, mock)
  },
  validateConfigurationAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-appconfig', 'validateConfiguration', 'AppConfig', Promise.resolve(result), false, mock)
  },
  validateConfigurationThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-appconfig', 'validateConfiguration', 'AppConfig', Promise.reject(result), true, mock)
  },
  send: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-appconfig', 'send', 'AppConfigClient', Promise.resolve(result), true, mock)
  },
  sendAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-appconfig', 'send', 'AppConfigClient', Promise.resolve(result), false, mock)
  },
  sendThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-appconfig', 'send', 'AppConfigClient', Promise.reject(result), true, mock)
  }
}
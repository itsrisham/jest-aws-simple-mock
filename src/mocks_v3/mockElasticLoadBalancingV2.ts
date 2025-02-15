
/**
* @description mocks_v3:mockElasticLoadBalancingV2 module is mocks for AWS-SDK V3
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

  export const mockElasticLoadBalancingV2 = {
  addListenerCertificates: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-elastic-load-balancing-v2', 'addListenerCertificates', 'ElasticLoadBalancingV2', Promise.resolve(result), true, mock)
  },
  addListenerCertificatesAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-elastic-load-balancing-v2', 'addListenerCertificates', 'ElasticLoadBalancingV2', Promise.resolve(result), false, mock)
  },
  addListenerCertificatesThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-elastic-load-balancing-v2', 'addListenerCertificates', 'ElasticLoadBalancingV2', Promise.reject(result), true, mock)
  },
  addTags: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-elastic-load-balancing-v2', 'addTags', 'ElasticLoadBalancingV2', Promise.resolve(result), true, mock)
  },
  addTagsAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-elastic-load-balancing-v2', 'addTags', 'ElasticLoadBalancingV2', Promise.resolve(result), false, mock)
  },
  addTagsThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-elastic-load-balancing-v2', 'addTags', 'ElasticLoadBalancingV2', Promise.reject(result), true, mock)
  },
  createListener: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-elastic-load-balancing-v2', 'createListener', 'ElasticLoadBalancingV2', Promise.resolve(result), true, mock)
  },
  createListenerAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-elastic-load-balancing-v2', 'createListener', 'ElasticLoadBalancingV2', Promise.resolve(result), false, mock)
  },
  createListenerThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-elastic-load-balancing-v2', 'createListener', 'ElasticLoadBalancingV2', Promise.reject(result), true, mock)
  },
  createLoadBalancer: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-elastic-load-balancing-v2', 'createLoadBalancer', 'ElasticLoadBalancingV2', Promise.resolve(result), true, mock)
  },
  createLoadBalancerAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-elastic-load-balancing-v2', 'createLoadBalancer', 'ElasticLoadBalancingV2', Promise.resolve(result), false, mock)
  },
  createLoadBalancerThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-elastic-load-balancing-v2', 'createLoadBalancer', 'ElasticLoadBalancingV2', Promise.reject(result), true, mock)
  },
  createRule: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-elastic-load-balancing-v2', 'createRule', 'ElasticLoadBalancingV2', Promise.resolve(result), true, mock)
  },
  createRuleAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-elastic-load-balancing-v2', 'createRule', 'ElasticLoadBalancingV2', Promise.resolve(result), false, mock)
  },
  createRuleThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-elastic-load-balancing-v2', 'createRule', 'ElasticLoadBalancingV2', Promise.reject(result), true, mock)
  },
  createTargetGroup: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-elastic-load-balancing-v2', 'createTargetGroup', 'ElasticLoadBalancingV2', Promise.resolve(result), true, mock)
  },
  createTargetGroupAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-elastic-load-balancing-v2', 'createTargetGroup', 'ElasticLoadBalancingV2', Promise.resolve(result), false, mock)
  },
  createTargetGroupThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-elastic-load-balancing-v2', 'createTargetGroup', 'ElasticLoadBalancingV2', Promise.reject(result), true, mock)
  },
  deleteListener: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-elastic-load-balancing-v2', 'deleteListener', 'ElasticLoadBalancingV2', Promise.resolve(result), true, mock)
  },
  deleteListenerAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-elastic-load-balancing-v2', 'deleteListener', 'ElasticLoadBalancingV2', Promise.resolve(result), false, mock)
  },
  deleteListenerThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-elastic-load-balancing-v2', 'deleteListener', 'ElasticLoadBalancingV2', Promise.reject(result), true, mock)
  },
  deleteLoadBalancer: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-elastic-load-balancing-v2', 'deleteLoadBalancer', 'ElasticLoadBalancingV2', Promise.resolve(result), true, mock)
  },
  deleteLoadBalancerAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-elastic-load-balancing-v2', 'deleteLoadBalancer', 'ElasticLoadBalancingV2', Promise.resolve(result), false, mock)
  },
  deleteLoadBalancerThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-elastic-load-balancing-v2', 'deleteLoadBalancer', 'ElasticLoadBalancingV2', Promise.reject(result), true, mock)
  },
  deleteRule: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-elastic-load-balancing-v2', 'deleteRule', 'ElasticLoadBalancingV2', Promise.resolve(result), true, mock)
  },
  deleteRuleAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-elastic-load-balancing-v2', 'deleteRule', 'ElasticLoadBalancingV2', Promise.resolve(result), false, mock)
  },
  deleteRuleThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-elastic-load-balancing-v2', 'deleteRule', 'ElasticLoadBalancingV2', Promise.reject(result), true, mock)
  },
  deleteTargetGroup: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-elastic-load-balancing-v2', 'deleteTargetGroup', 'ElasticLoadBalancingV2', Promise.resolve(result), true, mock)
  },
  deleteTargetGroupAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-elastic-load-balancing-v2', 'deleteTargetGroup', 'ElasticLoadBalancingV2', Promise.resolve(result), false, mock)
  },
  deleteTargetGroupThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-elastic-load-balancing-v2', 'deleteTargetGroup', 'ElasticLoadBalancingV2', Promise.reject(result), true, mock)
  },
  deregisterTargets: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-elastic-load-balancing-v2', 'deregisterTargets', 'ElasticLoadBalancingV2', Promise.resolve(result), true, mock)
  },
  deregisterTargetsAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-elastic-load-balancing-v2', 'deregisterTargets', 'ElasticLoadBalancingV2', Promise.resolve(result), false, mock)
  },
  deregisterTargetsThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-elastic-load-balancing-v2', 'deregisterTargets', 'ElasticLoadBalancingV2', Promise.reject(result), true, mock)
  },
  describeAccountLimits: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-elastic-load-balancing-v2', 'describeAccountLimits', 'ElasticLoadBalancingV2', Promise.resolve(result), true, mock)
  },
  describeAccountLimitsAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-elastic-load-balancing-v2', 'describeAccountLimits', 'ElasticLoadBalancingV2', Promise.resolve(result), false, mock)
  },
  describeAccountLimitsThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-elastic-load-balancing-v2', 'describeAccountLimits', 'ElasticLoadBalancingV2', Promise.reject(result), true, mock)
  },
  describeListenerCertificates: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-elastic-load-balancing-v2', 'describeListenerCertificates', 'ElasticLoadBalancingV2', Promise.resolve(result), true, mock)
  },
  describeListenerCertificatesAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-elastic-load-balancing-v2', 'describeListenerCertificates', 'ElasticLoadBalancingV2', Promise.resolve(result), false, mock)
  },
  describeListenerCertificatesThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-elastic-load-balancing-v2', 'describeListenerCertificates', 'ElasticLoadBalancingV2', Promise.reject(result), true, mock)
  },
  describeListeners: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-elastic-load-balancing-v2', 'describeListeners', 'ElasticLoadBalancingV2', Promise.resolve(result), true, mock)
  },
  describeListenersAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-elastic-load-balancing-v2', 'describeListeners', 'ElasticLoadBalancingV2', Promise.resolve(result), false, mock)
  },
  describeListenersThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-elastic-load-balancing-v2', 'describeListeners', 'ElasticLoadBalancingV2', Promise.reject(result), true, mock)
  },
  describeLoadBalancerAttributes: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-elastic-load-balancing-v2', 'describeLoadBalancerAttributes', 'ElasticLoadBalancingV2', Promise.resolve(result), true, mock)
  },
  describeLoadBalancerAttributesAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-elastic-load-balancing-v2', 'describeLoadBalancerAttributes', 'ElasticLoadBalancingV2', Promise.resolve(result), false, mock)
  },
  describeLoadBalancerAttributesThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-elastic-load-balancing-v2', 'describeLoadBalancerAttributes', 'ElasticLoadBalancingV2', Promise.reject(result), true, mock)
  },
  describeLoadBalancers: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-elastic-load-balancing-v2', 'describeLoadBalancers', 'ElasticLoadBalancingV2', Promise.resolve(result), true, mock)
  },
  describeLoadBalancersAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-elastic-load-balancing-v2', 'describeLoadBalancers', 'ElasticLoadBalancingV2', Promise.resolve(result), false, mock)
  },
  describeLoadBalancersThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-elastic-load-balancing-v2', 'describeLoadBalancers', 'ElasticLoadBalancingV2', Promise.reject(result), true, mock)
  },
  describeRules: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-elastic-load-balancing-v2', 'describeRules', 'ElasticLoadBalancingV2', Promise.resolve(result), true, mock)
  },
  describeRulesAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-elastic-load-balancing-v2', 'describeRules', 'ElasticLoadBalancingV2', Promise.resolve(result), false, mock)
  },
  describeRulesThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-elastic-load-balancing-v2', 'describeRules', 'ElasticLoadBalancingV2', Promise.reject(result), true, mock)
  },
  describeSSLPolicies: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-elastic-load-balancing-v2', 'describeSSLPolicies', 'ElasticLoadBalancingV2', Promise.resolve(result), true, mock)
  },
  describeSSLPoliciesAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-elastic-load-balancing-v2', 'describeSSLPolicies', 'ElasticLoadBalancingV2', Promise.resolve(result), false, mock)
  },
  describeSSLPoliciesThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-elastic-load-balancing-v2', 'describeSSLPolicies', 'ElasticLoadBalancingV2', Promise.reject(result), true, mock)
  },
  describeTags: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-elastic-load-balancing-v2', 'describeTags', 'ElasticLoadBalancingV2', Promise.resolve(result), true, mock)
  },
  describeTagsAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-elastic-load-balancing-v2', 'describeTags', 'ElasticLoadBalancingV2', Promise.resolve(result), false, mock)
  },
  describeTagsThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-elastic-load-balancing-v2', 'describeTags', 'ElasticLoadBalancingV2', Promise.reject(result), true, mock)
  },
  describeTargetGroupAttributes: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-elastic-load-balancing-v2', 'describeTargetGroupAttributes', 'ElasticLoadBalancingV2', Promise.resolve(result), true, mock)
  },
  describeTargetGroupAttributesAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-elastic-load-balancing-v2', 'describeTargetGroupAttributes', 'ElasticLoadBalancingV2', Promise.resolve(result), false, mock)
  },
  describeTargetGroupAttributesThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-elastic-load-balancing-v2', 'describeTargetGroupAttributes', 'ElasticLoadBalancingV2', Promise.reject(result), true, mock)
  },
  describeTargetGroups: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-elastic-load-balancing-v2', 'describeTargetGroups', 'ElasticLoadBalancingV2', Promise.resolve(result), true, mock)
  },
  describeTargetGroupsAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-elastic-load-balancing-v2', 'describeTargetGroups', 'ElasticLoadBalancingV2', Promise.resolve(result), false, mock)
  },
  describeTargetGroupsThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-elastic-load-balancing-v2', 'describeTargetGroups', 'ElasticLoadBalancingV2', Promise.reject(result), true, mock)
  },
  describeTargetHealth: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-elastic-load-balancing-v2', 'describeTargetHealth', 'ElasticLoadBalancingV2', Promise.resolve(result), true, mock)
  },
  describeTargetHealthAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-elastic-load-balancing-v2', 'describeTargetHealth', 'ElasticLoadBalancingV2', Promise.resolve(result), false, mock)
  },
  describeTargetHealthThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-elastic-load-balancing-v2', 'describeTargetHealth', 'ElasticLoadBalancingV2', Promise.reject(result), true, mock)
  },
  destroy: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-elastic-load-balancing-v2', 'destroy', 'ElasticLoadBalancingV2', Promise.resolve(result), true, mock)
  },
  destroyAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-elastic-load-balancing-v2', 'destroy', 'ElasticLoadBalancingV2', Promise.resolve(result), false, mock)
  },
  destroyThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-elastic-load-balancing-v2', 'destroy', 'ElasticLoadBalancingV2', Promise.reject(result), true, mock)
  },
  modifyListener: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-elastic-load-balancing-v2', 'modifyListener', 'ElasticLoadBalancingV2', Promise.resolve(result), true, mock)
  },
  modifyListenerAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-elastic-load-balancing-v2', 'modifyListener', 'ElasticLoadBalancingV2', Promise.resolve(result), false, mock)
  },
  modifyListenerThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-elastic-load-balancing-v2', 'modifyListener', 'ElasticLoadBalancingV2', Promise.reject(result), true, mock)
  },
  modifyLoadBalancerAttributes: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-elastic-load-balancing-v2', 'modifyLoadBalancerAttributes', 'ElasticLoadBalancingV2', Promise.resolve(result), true, mock)
  },
  modifyLoadBalancerAttributesAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-elastic-load-balancing-v2', 'modifyLoadBalancerAttributes', 'ElasticLoadBalancingV2', Promise.resolve(result), false, mock)
  },
  modifyLoadBalancerAttributesThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-elastic-load-balancing-v2', 'modifyLoadBalancerAttributes', 'ElasticLoadBalancingV2', Promise.reject(result), true, mock)
  },
  modifyRule: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-elastic-load-balancing-v2', 'modifyRule', 'ElasticLoadBalancingV2', Promise.resolve(result), true, mock)
  },
  modifyRuleAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-elastic-load-balancing-v2', 'modifyRule', 'ElasticLoadBalancingV2', Promise.resolve(result), false, mock)
  },
  modifyRuleThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-elastic-load-balancing-v2', 'modifyRule', 'ElasticLoadBalancingV2', Promise.reject(result), true, mock)
  },
  modifyTargetGroup: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-elastic-load-balancing-v2', 'modifyTargetGroup', 'ElasticLoadBalancingV2', Promise.resolve(result), true, mock)
  },
  modifyTargetGroupAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-elastic-load-balancing-v2', 'modifyTargetGroup', 'ElasticLoadBalancingV2', Promise.resolve(result), false, mock)
  },
  modifyTargetGroupThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-elastic-load-balancing-v2', 'modifyTargetGroup', 'ElasticLoadBalancingV2', Promise.reject(result), true, mock)
  },
  modifyTargetGroupAttributes: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-elastic-load-balancing-v2', 'modifyTargetGroupAttributes', 'ElasticLoadBalancingV2', Promise.resolve(result), true, mock)
  },
  modifyTargetGroupAttributesAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-elastic-load-balancing-v2', 'modifyTargetGroupAttributes', 'ElasticLoadBalancingV2', Promise.resolve(result), false, mock)
  },
  modifyTargetGroupAttributesThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-elastic-load-balancing-v2', 'modifyTargetGroupAttributes', 'ElasticLoadBalancingV2', Promise.reject(result), true, mock)
  },
  registerTargets: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-elastic-load-balancing-v2', 'registerTargets', 'ElasticLoadBalancingV2', Promise.resolve(result), true, mock)
  },
  registerTargetsAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-elastic-load-balancing-v2', 'registerTargets', 'ElasticLoadBalancingV2', Promise.resolve(result), false, mock)
  },
  registerTargetsThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-elastic-load-balancing-v2', 'registerTargets', 'ElasticLoadBalancingV2', Promise.reject(result), true, mock)
  },
  removeListenerCertificates: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-elastic-load-balancing-v2', 'removeListenerCertificates', 'ElasticLoadBalancingV2', Promise.resolve(result), true, mock)
  },
  removeListenerCertificatesAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-elastic-load-balancing-v2', 'removeListenerCertificates', 'ElasticLoadBalancingV2', Promise.resolve(result), false, mock)
  },
  removeListenerCertificatesThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-elastic-load-balancing-v2', 'removeListenerCertificates', 'ElasticLoadBalancingV2', Promise.reject(result), true, mock)
  },
  removeTags: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-elastic-load-balancing-v2', 'removeTags', 'ElasticLoadBalancingV2', Promise.resolve(result), true, mock)
  },
  removeTagsAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-elastic-load-balancing-v2', 'removeTags', 'ElasticLoadBalancingV2', Promise.resolve(result), false, mock)
  },
  removeTagsThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-elastic-load-balancing-v2', 'removeTags', 'ElasticLoadBalancingV2', Promise.reject(result), true, mock)
  },
  setIpAddressType: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-elastic-load-balancing-v2', 'setIpAddressType', 'ElasticLoadBalancingV2', Promise.resolve(result), true, mock)
  },
  setIpAddressTypeAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-elastic-load-balancing-v2', 'setIpAddressType', 'ElasticLoadBalancingV2', Promise.resolve(result), false, mock)
  },
  setIpAddressTypeThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-elastic-load-balancing-v2', 'setIpAddressType', 'ElasticLoadBalancingV2', Promise.reject(result), true, mock)
  },
  setRulePriorities: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-elastic-load-balancing-v2', 'setRulePriorities', 'ElasticLoadBalancingV2', Promise.resolve(result), true, mock)
  },
  setRulePrioritiesAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-elastic-load-balancing-v2', 'setRulePriorities', 'ElasticLoadBalancingV2', Promise.resolve(result), false, mock)
  },
  setRulePrioritiesThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-elastic-load-balancing-v2', 'setRulePriorities', 'ElasticLoadBalancingV2', Promise.reject(result), true, mock)
  },
  setSecurityGroups: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-elastic-load-balancing-v2', 'setSecurityGroups', 'ElasticLoadBalancingV2', Promise.resolve(result), true, mock)
  },
  setSecurityGroupsAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-elastic-load-balancing-v2', 'setSecurityGroups', 'ElasticLoadBalancingV2', Promise.resolve(result), false, mock)
  },
  setSecurityGroupsThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-elastic-load-balancing-v2', 'setSecurityGroups', 'ElasticLoadBalancingV2', Promise.reject(result), true, mock)
  },
  setSubnets: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-elastic-load-balancing-v2', 'setSubnets', 'ElasticLoadBalancingV2', Promise.resolve(result), true, mock)
  },
  setSubnetsAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-elastic-load-balancing-v2', 'setSubnets', 'ElasticLoadBalancingV2', Promise.resolve(result), false, mock)
  },
  setSubnetsThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-elastic-load-balancing-v2', 'setSubnets', 'ElasticLoadBalancingV2', Promise.reject(result), true, mock)
  },
  send: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-elastic-load-balancing-v2', 'send', 'ElasticLoadBalancingV2Client', Promise.resolve(result), true, mock)
  },
  sendAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-elastic-load-balancing-v2', 'send', 'ElasticLoadBalancingV2Client', Promise.resolve(result), false, mock)
  },
  sendThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-elastic-load-balancing-v2', 'send', 'ElasticLoadBalancingV2Client', Promise.reject(result), true, mock)
  }
}
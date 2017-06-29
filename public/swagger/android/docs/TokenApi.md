# TokenApi

All URIs are relative to *http://api.bestmeetup.com.br/v1*

Method | HTTP request | Description
------------- | ------------- | -------------
[**tokenRegisterGet**](TokenApi.md#tokenRegisterGet) | **GET** /token/register | Register Token of User
[**tokenUnregisterGet**](TokenApi.md#tokenUnregisterGet) | **GET** /token/unregister | Unregister Token of User


<a name="tokenRegisterGet"></a>
# **tokenRegisterGet**
> tokenRegisterGet(instanceId, token)

Register Token of User

Register Token of User

### Example
```java
// Import classes:
//import io.swagger.client.api.TokenApi;

TokenApi apiInstance = new TokenApi();
String instanceId = "instanceId_example"; // String | description
String token = "token_example"; // String | description
try {
    apiInstance.tokenRegisterGet(instanceId, token);
} catch (ApiException e) {
    System.err.println("Exception when calling TokenApi#tokenRegisterGet");
    e.printStackTrace();
}
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **instanceId** | **String**| description | [optional]
 **token** | **String**| description | [optional]

### Return type

null (empty response body)

### Authorization

[api_client](../README.md#api_client), [api_uid](../README.md#api_uid), [api_key](../README.md#api_key)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: Not defined

<a name="tokenUnregisterGet"></a>
# **tokenUnregisterGet**
> tokenUnregisterGet(instanceId, token)

Unregister Token of User

Unregister Token of User

### Example
```java
// Import classes:
//import io.swagger.client.api.TokenApi;

TokenApi apiInstance = new TokenApi();
String instanceId = "instanceId_example"; // String | description
String token = "token_example"; // String | description
try {
    apiInstance.tokenUnregisterGet(instanceId, token);
} catch (ApiException e) {
    System.err.println("Exception when calling TokenApi#tokenUnregisterGet");
    e.printStackTrace();
}
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **instanceId** | **String**| description | [optional]
 **token** | **String**| description | [optional]

### Return type

null (empty response body)

### Authorization

[api_client](../README.md#api_client), [api_uid](../README.md#api_uid), [api_key](../README.md#api_key)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: Not defined


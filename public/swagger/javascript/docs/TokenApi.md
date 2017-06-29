# SwaggerBestMeetup.TokenApi

All URIs are relative to *http://api.bestmeetup.com.br/v1*

Method | HTTP request | Description
------------- | ------------- | -------------
[**tokenRegisterGet**](TokenApi.md#tokenRegisterGet) | **GET** /token/register | Register Token of User
[**tokenUnregisterGet**](TokenApi.md#tokenUnregisterGet) | **GET** /token/unregister | Unregister Token of User


<a name="tokenRegisterGet"></a>
# **tokenRegisterGet**
> tokenRegisterGet(opts)

Register Token of User

Register Token of User

### Example
```javascript
var SwaggerBestMeetup = require('swagger_best_meetup');
var defaultClient = SwaggerBestMeetup.ApiClient.default;

// Configure API key authorization: api_client
var api_client = defaultClient.authentications['api_client'];
api_client.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//api_client.apiKeyPrefix = 'Token';

// Configure API key authorization: api_uid
var api_uid = defaultClient.authentications['api_uid'];
api_uid.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//api_uid.apiKeyPrefix = 'Token';

// Configure API key authorization: api_key
var api_key = defaultClient.authentications['api_key'];
api_key.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//api_key.apiKeyPrefix = 'Token';

var apiInstance = new SwaggerBestMeetup.TokenApi();

var opts = { 
  'instanceId': "instanceId_example", // String | description
  'token': "token_example" // String | description
};

var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully.');
  }
};
apiInstance.tokenRegisterGet(opts, callback);
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
> tokenUnregisterGet(opts)

Unregister Token of User

Unregister Token of User

### Example
```javascript
var SwaggerBestMeetup = require('swagger_best_meetup');
var defaultClient = SwaggerBestMeetup.ApiClient.default;

// Configure API key authorization: api_client
var api_client = defaultClient.authentications['api_client'];
api_client.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//api_client.apiKeyPrefix = 'Token';

// Configure API key authorization: api_uid
var api_uid = defaultClient.authentications['api_uid'];
api_uid.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//api_uid.apiKeyPrefix = 'Token';

// Configure API key authorization: api_key
var api_key = defaultClient.authentications['api_key'];
api_key.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//api_key.apiKeyPrefix = 'Token';

var apiInstance = new SwaggerBestMeetup.TokenApi();

var opts = { 
  'instanceId': "instanceId_example", // String | description
  'token': "token_example" // String | description
};

var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully.');
  }
};
apiInstance.tokenUnregisterGet(opts, callback);
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


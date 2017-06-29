# SwaggerBestMeetup.UsuarioApi

All URIs are relative to *http://api.bestmeetup.com.br/v1*

Method | HTTP request | Description
------------- | ------------- | -------------
[**authSignInPost**](UsuarioApi.md#authSignInPost) | **POST** /auth/sign_in | Login
[**authValidateTokenGet**](UsuarioApi.md#authValidateTokenGet) | **GET** /auth/validate_token | Validate Token


<a name="authSignInPost"></a>
# **authSignInPost**
> DeviseResponseUser authSignInPost(email, password)

Login

login

### Example
```javascript
var SwaggerBestMeetup = require('swagger_best_meetup');

var apiInstance = new SwaggerBestMeetup.UsuarioApi();

var email = "email_example"; // String | E-mail de login

var password = "password_example"; // String | Senha


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.authSignInPost(email, password, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **email** | **String**| E-mail de login | 
 **password** | **String**| Senha | 

### Return type

[**DeviseResponseUser**](DeviseResponseUser.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="authValidateTokenGet"></a>
# **authValidateTokenGet**
> DeviseResponseUser authValidateTokenGet()

Validate Token

Validate Token

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

var apiInstance = new SwaggerBestMeetup.UsuarioApi();

var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.authValidateTokenGet(callback);
```

### Parameters
This endpoint does not need any parameter.

### Return type

[**DeviseResponseUser**](DeviseResponseUser.md)

### Authorization

[api_client](../README.md#api_client), [api_uid](../README.md#api_uid), [api_key](../README.md#api_key)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: Not defined


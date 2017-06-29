# UsuarioApi

All URIs are relative to *http://api.bestmeetup.com.br/v1*

Method | HTTP request | Description
------------- | ------------- | -------------
[**authPost**](UsuarioApi.md#authPost) | **POST** /auth | Register User
[**authSignInPost**](UsuarioApi.md#authSignInPost) | **POST** /auth/sign_in | Login
[**authValidateTokenGet**](UsuarioApi.md#authValidateTokenGet) | **GET** /auth/validate_token | Validate Token


<a name="authPost"></a>
# **authPost**
> authPost(user)

Register User

Register User

### Example
```java
// Import classes:
//import io.swagger.client.api.UsuarioApi;

UsuarioApi apiInstance = new UsuarioApi();
User user = new User(); // User | user object
try {
    apiInstance.authPost(user);
} catch (ApiException e) {
    System.err.println("Exception when calling UsuarioApi#authPost");
    e.printStackTrace();
}
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **user** | [**User**](User.md)| user object |

### Return type

null (empty response body)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="authSignInPost"></a>
# **authSignInPost**
> DeviseResponseUser authSignInPost(email, password)

Login

login

### Example
```java
// Import classes:
//import io.swagger.client.api.UsuarioApi;

UsuarioApi apiInstance = new UsuarioApi();
String email = "email_example"; // String | E-mail de login
String password = "password_example"; // String | Senha
try {
    DeviseResponseUser result = apiInstance.authSignInPost(email, password);
    System.out.println(result);
} catch (ApiException e) {
    System.err.println("Exception when calling UsuarioApi#authSignInPost");
    e.printStackTrace();
}
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
```java
// Import classes:
//import io.swagger.client.api.UsuarioApi;

UsuarioApi apiInstance = new UsuarioApi();
try {
    DeviseResponseUser result = apiInstance.authValidateTokenGet();
    System.out.println(result);
} catch (ApiException e) {
    System.err.println("Exception when calling UsuarioApi#authValidateTokenGet");
    e.printStackTrace();
}
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


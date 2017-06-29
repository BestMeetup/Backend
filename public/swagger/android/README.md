# swagger-android-client

## Requirements

Building the API client library requires [Maven](https://maven.apache.org/) to be installed.

## Installation

To install the API client library to your local Maven repository, simply execute:

```shell
mvn install
```

To deploy it to a remote Maven repository instead, configure the settings of the repository and execute:

```shell
mvn deploy
```

Refer to the [official documentation](https://maven.apache.org/plugins/maven-deploy-plugin/usage.html) for more information.

### Maven users

Add this dependency to your project's POM:

```xml
<dependency>
    <groupId>io.swagger</groupId>
    <artifactId>swagger-android-client</artifactId>
    <version>1.0.0</version>
    <scope>compile</scope>
</dependency>
```

### Gradle users

Add this dependency to your project's build file:

```groovy
compile "io.swagger:swagger-android-client:1.0.0"
```

### Others

At first generate the JAR by executing:

    mvn package

Then manually install the following JARs:

* target/swagger-android-client-1.0.0.jar
* target/lib/*.jar

## Getting Started

Please follow the [installation](#installation) instruction and execute the following Java code:

```java

import io.swagger.client.api.TokenApi;

public class TokenApiExample {

    public static void main(String[] args) {
        TokenApi apiInstance = new TokenApi();
        String instanceId = "instanceId_example"; // String | description
        String token = "token_example"; // String | description
        try {
            apiInstance.tokenRegisterGet(instanceId, token);
        } catch (ApiException e) {
            System.err.println("Exception when calling TokenApi#tokenRegisterGet");
            e.printStackTrace();
        }
    }
}

```

## Documentation for API Endpoints

All URIs are relative to *http://api.bestmeetup.com.br/v1*

Class | Method | HTTP request | Description
------------ | ------------- | ------------- | -------------
*TokenApi* | [**tokenRegisterGet**](docs/TokenApi.md#tokenRegisterGet) | **GET** /token/register | Register Token of User
*TokenApi* | [**tokenUnregisterGet**](docs/TokenApi.md#tokenUnregisterGet) | **GET** /token/unregister | Unregister Token of User
*UsuarioApi* | [**authSignInPost**](docs/UsuarioApi.md#authSignInPost) | **POST** /auth/sign_in | Login
*UsuarioApi* | [**authValidateTokenGet**](docs/UsuarioApi.md#authValidateTokenGet) | **GET** /auth/validate_token | Validate Token


## Documentation for Models

 - [DeviseResponseUser](docs/DeviseResponseUser.md)
 - [User](docs/User.md)


## Documentation for Authorization

Authentication schemes defined for the API:
### api_client

- **Type**: API key
- **API key parameter name**: client
- **Location**: HTTP header

### api_key

- **Type**: API key
- **API key parameter name**: access-token
- **Location**: HTTP header

### api_uid

- **Type**: API key
- **API key parameter name**: uid
- **Location**: HTTP header


## Recommendation

It's recommended to create an instance of `ApiClient` per thread in a multithreaded environment to avoid any potential issues.

## Author




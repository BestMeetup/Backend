/**
 * Swagger BestMeetup
 * This is a Swagger BestMeetup server.
 *
 * OpenAPI spec version: 1.0.0
 * 
 *
 * NOTE: This class is auto generated by the swagger code generator program.
 * https://github.com/swagger-api/swagger-codegen.git
 * Do not edit the class manually.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

(function(factory) {
  if (typeof define === 'function' && define.amd) {
    // AMD. Register as an anonymous module.
    define(['ApiClient', 'model/DeviseResponseUser', 'model/User', 'api/TokenApi', 'api/UsuarioApi'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('./ApiClient'), require('./model/DeviseResponseUser'), require('./model/User'), require('./api/TokenApi'), require('./api/UsuarioApi'));
  }
}(function(ApiClient, DeviseResponseUser, User, TokenApi, UsuarioApi) {
  'use strict';

  /**
   * This_is_a_Swagger_BestMeetup_server_.<br>
   * The <code>index</code> module provides access to constructors for all the classes which comprise the public API.
   * <p>
   * An AMD (recommended!) or CommonJS application will generally do something equivalent to the following:
   * <pre>
   * var SwaggerBestMeetup = require('index'); // See note below*.
   * var xxxSvc = new SwaggerBestMeetup.XxxApi(); // Allocate the API class we're going to use.
   * var yyyModel = new SwaggerBestMeetup.Yyy(); // Construct a model instance.
   * yyyModel.someProperty = 'someValue';
   * ...
   * var zzz = xxxSvc.doSomething(yyyModel); // Invoke the service.
   * ...
   * </pre>
   * <em>*NOTE: For a top-level AMD script, use require(['index'], function(){...})
   * and put the application logic within the callback function.</em>
   * </p>
   * <p>
   * A non-AMD browser application (discouraged) might do something like this:
   * <pre>
   * var xxxSvc = new SwaggerBestMeetup.XxxApi(); // Allocate the API class we're going to use.
   * var yyy = new SwaggerBestMeetup.Yyy(); // Construct a model instance.
   * yyyModel.someProperty = 'someValue';
   * ...
   * var zzz = xxxSvc.doSomething(yyyModel); // Invoke the service.
   * ...
   * </pre>
   * </p>
   * @module index
   * @version 1.0.0
   */
  var exports = {
    /**
     * The ApiClient constructor.
     * @property {module:ApiClient}
     */
    ApiClient: ApiClient,
    /**
     * The DeviseResponseUser model constructor.
     * @property {module:model/DeviseResponseUser}
     */
    DeviseResponseUser: DeviseResponseUser,
    /**
     * The User model constructor.
     * @property {module:model/User}
     */
    User: User,
    /**
     * The TokenApi service constructor.
     * @property {module:api/TokenApi}
     */
    TokenApi: TokenApi,
    /**
     * The UsuarioApi service constructor.
     * @property {module:api/UsuarioApi}
     */
    UsuarioApi: UsuarioApi
  };

  return exports;
}));

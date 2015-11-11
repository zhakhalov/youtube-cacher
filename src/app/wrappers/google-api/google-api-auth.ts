/// <reference path="../../../../typings/tsd.d.ts" />

namespace ng.googleapi {

  export interface GoogleAuthorizationParams {
    /**
     * The application's client ID.
     */
    client_id?: string;
    /**
     * If true, then login uses "immediate mode", which means that the token is refreshed behind the scenes, and no UI is shown to the user.
     */
    immediate?: boolean;
    /**
     * The OAuth 2.0 response type property. Default: token
     */
    response_type?: string;
    /**
     * The auth scope or scopes to authorize. Auth scopes for individual APIs can be found in their documentation.
     */
    scope?: any;
    /**
     * The user to sign in as. -1 to toggle a multi-account chooser, 0 to default to the user's current account, and 1 to automatically sign in if the user is signed into Google Plus.
     */
    authuser?: number;
  }

  export class GoogleApiAuth {

    public static $inject:string[] = [
      '$q'
    ];

    private $q: angular.IQService;
    
    constructor(
      $q:angular.IQService
    ) {
      this.$q = $q;
    }

    /**
     * Initiates the OAuth 2.0 authorization process. The browser displays a popup window prompting the user authenticate and authorize. After the user authorizes, the popup closes and the callback function fires.
     * @param params A key/value map of parameters for the request. If the key is not one of the expected OAuth 2.0 parameters, it is added to the URI as a query parameter.
     * @param callback The function to call once the login process is complete. The function takes an OAuth 2.0 token object as its only parameter.
     */
    public authorize(params: GoogleAuthorizationParams): angular.IPromise<GoogleApiOAuth2TokenObject> {
      return this.$q(function(resolve: (token: GoogleApiOAuth2TokenObject) => any) {
        gapi.auth.authorize
      })
    }
  }
}
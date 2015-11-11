/// <reference path="../app.ts" />

namespace app.services {
  Application.context.service('coogleApiClient', function () {
    return gapi.client;
  })
}
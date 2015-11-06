/// <reference path="../app.ts" />
namespace app.controllers {
  
  interface IAppScope {
    
  }  
  
  export class ApplicationController {
    public static $inject: string[] = [
      '$scope',
      '$ionModal',
      '$timeout',
    ];
    
    $scope:IAppScope;
    $ionModal: ionic.modal.IonicModalService;
    $timeout: ng.ITimeoutService;
    
    constructor(
      $scope:IAppScope,
      $ionModal: ionic.modal.IonicModalService,
      $timeout: ng.ITimeoutService
    ) {
      this.$scope = $scope;
      this.$ionModal = $ionModal;
      this.$timeout = $timeout;
    }
  }
}

app.Application.context.controller('app.controllers.ApplicationController', app.controllers.ApplicationController);
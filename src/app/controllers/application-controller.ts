/// <reference path="../app.ts" />
namespace app.controllers {
  
  interface IAppScope extends angular.IScope {
    
  }  
  
  export class ApplicationController {
    public static $inject: string[] = [
      '$scope',
      '$ionModal',
      '$timeout',
    ];
    
    $scope:IAppScope;
    $ionModal: ionic.modal.IonicModalService;
    $timeout: angular.ITimeoutService;
    
    constructor(
      $scope:IAppScope,
      $ionModal: ionic.modal.IonicModalService,
      $timeout: angular.ITimeoutService
    ) {
      this.$scope = $scope;
      this.$ionModal = $ionModal;
      this.$timeout = $timeout;
    }
  }
}

app.Application.context.controller('app.controllers.ApplicationController', app.controllers.ApplicationController);
/// <reference path="../app.ts" />
/// <reference path="../models/login.model.ts" />

namespace app.controllers {

  interface IAppScope extends angular.IScope {
    loginData?: models.LoginModel;
  }

  export class ApplicationController {
    public static $inject: string[] = [
      '$scope',
      '$ionicModal',
      '$timeout',
      '$ionicLoading',
    ];

    $scope:IAppScope;
    $ionicModal: ionic.modal.IonicModalService;
    $timeout: angular.ITimeoutService;
    $ionicLoading: ionic.loading.IonicLoadingService;

    modal: ionic.modal.IonicModalController;

    constructor(
      $scope:IAppScope,
      $ionicModal: ionic.modal.IonicModalService,
      $timeout: angular.ITimeoutService,
      $ionicLoading: ionic.loading.IonicLoadingService
    ) {
      this.$scope = $scope;
      this.$ionicModal = $ionicModal;
      this.$timeout = $timeout;

      this.$ionicModal.fromTemplateUrl('templates/login.html', {
        scope: this.$scope
      })
        .then((modal: ionic.modal.IonicModalController) => {
          this.modal = modal;
        });
    }

    openLoginModal(): void {
      this.modal.show();
    }

    closeLoginModal(): void {
      this.modal.hide();
    }

    submitLoginData(loginData: models.LoginModel): void {
      this.$ionicLoading.show({ duration: 250 })

    }
  }
  Application.context.controller('app.controllers.ApplicationController', controllers.ApplicationController);
}




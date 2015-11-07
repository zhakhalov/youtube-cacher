/// <reference path="../app.ts" />
/// <reference path="../models/login-model.ts" />

namespace app.controllers {

  interface AppScope extends angular.IScope {
    loginData: app.models.LoginModel;
  }

  export class AppController {
    public static $inject: string[] = [
      '$scope',
      '$ionicModal',
      '$timeout',
    ];

    private $scope: AppScope;
    private $ionicModal: ionic.modal.IonicModalService;
    private $timeout: angular.ITimeoutService;
    private modal: ionic.modal.IonicModalController;

    constructor(
      $scope: AppScope,
      $ionicModal: ionic.modal.IonicModalService,
      $timeout: angular.ITimeoutService
    ) {
      this.$scope = $scope;
      this.$ionicModal = $ionicModal;
      this.$timeout = $timeout;

      this.$ionicModal.fromTemplateUrl('/templates/login.html', { scope: this.$scope })
        .then((modal: ionic.modal.IonicModalController) => {
          this.modal = modal;
        })
    }

    public openLogin() {
      this.modal.show();
    }

    public closeLogin() {
      this.modal.hide();
    }

    public submitLogin(loginModel: app.models.LoginModel) {
      this.$timeout(() => {
        this.closeLogin();
      }, 1000);
    }
  }
}

app.Application.context.controller('app.controllers.AppController', app.controllers.AppController);
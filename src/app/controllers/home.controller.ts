/// <reference path="../app.ts" />

namespace app.controllers {

  interface IHomeScope extends angular.IScope {
  }

  export class HomeController {
    public static $inject: string[] = [
      '$scope',
    ];

    $scope: IHomeScope;

    constructor(
      $scope: IHomeScope
    ) {
      this.$scope = $scope;
    }

    public click($event: ng.IAngularEvent): void {
      console.log($event);
    }

    public swipeLeft(): void {
      console.log('swipe left')
    }
  }
}

app.Application.context.controller('app.controllers.HomeController', app.controllers.HomeController);
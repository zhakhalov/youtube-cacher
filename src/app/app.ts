/// <reference path="../../typings/tsd.d.ts" />

namespace app {
  export class Application {
    public static $inject: string[] = [
      'ionic',
    ];
    public static context: ng.IModule = angular.module('app', Application.$inject);
  }
}
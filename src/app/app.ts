/// <reference path="../../typings/tsd.d.ts" />

namespace app {
  export class Application {
    public static $inject: string[] = [
      'ionic',
      'ionic-material',
      'angularLoad',
    ];
    private static __context: angular.IModule = angular.module('app', Application.$inject);
    public static get context(): angular.IModule { return Application.__context; }
  }
}
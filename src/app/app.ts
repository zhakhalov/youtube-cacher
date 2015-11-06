/// <reference path="../../typings/tsd.d.ts" />

namespace app {
  export class Application {
    public static $inject: string[] = [
      'ionic',
    ];
    private static __context: ng.IModule = angular.module('app', Application.$inject);
    public static get context(): ng.IModule { return Application.__context; }
  }
}
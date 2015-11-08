namespace app {
  export class Application {
    public static $inject: string[] = [
      'ionic',
    ];
    private static __context: angular.IModule = angular.module('app', Application.$inject);
    public static get context(): angular.IModule { return Application.__context; }
  }
}
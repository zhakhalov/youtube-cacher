/// <reference path="../app.ts" />
namespace app.controllers {
  
  interface IPlaylistScope extends angular.IScope {
    
  }  
  
  export class PlaylistController {
    public static $inject: string[] = [
      '$scope',
    ];
    
    $scope:IPlaylistScope;
    
    constructor(
      $scope:IPlaylistScope
    ) {
      this.$scope = $scope;
    }
  }
}

app.Application.context.controller('app.controllers.PlaylistController', app.controllers.PlaylistController);
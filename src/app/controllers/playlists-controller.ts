/// <reference path="../app.ts" />
namespace app.controllers {
  
  interface IPlaylistsScope {
    
  }  
  
  export class PlaylistsController {
    public static $inject: string[] = [
      '$scope',
    ];
    
    $scope:IPlaylistsScope;
    
    constructor(
      $scope:IPlaylistsScope
    ) {
      this.$scope = $scope;
    }
  }
}

app.Application.context.controller('app.controllers.PlaylistsController', app.controllers.PlaylistsController);
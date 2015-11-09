/// <reference path="../app.ts" />
namespace app.controllers {
  
  interface PlaylistsScope extends angular.IScope {
    playlists: models.PlaylistModel[];
  }  
  
  export class PlaylistsController {
    public static $inject: string[] = [
      '$scope',
    ];
    
    $scope:PlaylistsScope;
    
    constructor(
      $scope:PlaylistsScope
    ) {
      this.$scope = $scope;
      
      this.$scope.playlists = [
        { title: 'Reggae', id: 1 },
        { title: 'Chill', id: 2 },
        { title: 'Dubstep', id: 3 },
        { title: 'Indie', id: 4 },
        { title: 'Rap', id: 5 },
        { title: 'Cowbell', id: 6 }
      ];
    }
  }
}

app.Application.context.controller('app.controllers.PlaylistsController', app.controllers.PlaylistsController);
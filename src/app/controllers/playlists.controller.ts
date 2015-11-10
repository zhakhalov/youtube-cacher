/// <reference path="../app.ts" />
/// <reference path="../models/playlist.model.ts" />

namespace app.controllers {
  
  interface IPlaylistsScope extends angular.IScope {
    playlists?: models.PlaylistModel[];
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
      
      this.$scope.playlists = [
        { title: 'Reggae', id: 1 },
        { title: 'Chill', id: 2 },
        { title: 'Dubstep', id: 3 },
        { title: 'Indie', id: 4 },
        { title: 'Rap', id: 5 },
        { title: 'Cowbell', id: 6 }
      ]
    }
  }
  
  Application.context.controller('app.controllers.PlaylistsController', controllers.PlaylistsController);
}


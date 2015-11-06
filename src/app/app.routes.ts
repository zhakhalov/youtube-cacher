/// <reference path="app.ts" />
/// <reference path="controllers/application-controller.ts" />
/// <reference path="controllers/playlist-controller.ts" />
/// <reference path="controllers/playlists-controller.ts" />

namespace app {
  export class RouteConfig {
    public static $inject: string[] = [
      '$stateProvider',
      '$urlRouterProvider'
    ];
    
    $stateProvider: angular.ui.IStateProvider;
    $urlRouterProvider: angular.ui.IUrlRouterProvider 
    
    constructor($stateProvider: angular.ui.IStateProvider, $urlRouterProvider: angular.ui.IUrlRouterProvider) {
      this.$stateProvider = $stateProvider;
      this.$urlRouterProvider = $urlRouterProvider;
      
      this.configRoutes();
    }
    
    /**
     * Define route configurations.
     */
    private configRoutes() {
      this.$stateProvider
      .state('app', {
        url: '/app',
        abstract: true,
        templateUrl: 'templates/menu.html',
        controller: app.controllers.ApplicationController,
        controllerAs: 'ctrl'
      })    
      .state('app.search', {
        url: '/search',
        views: {
          'menuContent': {
            templateUrl: 'templates/search.html'
          }
        }
      })    
      .state('app.browse', {
        url: '/browse',
        views: {
          'menuContent': {
            templateUrl: 'templates/browse.html'
          }
        }
      })
      .state('app.playlists', {
        url: '/playlists',
        views: {
          'menuContent': {
            templateUrl: 'templates/playlists.html',
            controller: app.controllers.PlaylistsController,
            controllerAs: 'ctrl'
          }
        }
      })
      .state('app.single', {
        url: '/playlists/:playlistId',
        views: {
          'menuContent': {
            templateUrl: 'templates/playlist.html',
            controller: app.controllers.PlaylistController,
            controllerAs: 'ctrl'
          }
        }
      });
      
      // if none of the above states are matched, use this as the fallback
      this.$urlRouterProvider.otherwise('/app/playlists');
    }
  }
}

app.Application.context.config(app.RouteConfig);
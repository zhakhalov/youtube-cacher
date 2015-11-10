/// <reference path="../app.ts" />
/// <reference path="../controllers/app.controller.ts" />
/// <reference path="../controllers/home.controller.ts" />
/// <reference path="../controllers/playlist.controller.ts" />
/// <reference path="../controllers/playlists.controller.ts" />

namespace app.config {
  export class RouteConfig {
    public static $inject: string[] = [
      '$stateProvider',
      '$urlRouterProvider'
    ];
    
    constructor(
      $stateProvider: ng.ui.IStateProvider,
      $urlRouterProvider: ng.ui.IUrlRouterProvider
    ) {
      
      $stateProvider
      .state('app', {
        url: '/app',
        abstract: true,
        templateUrl: 'templates/menu.html',
        controller: app.controllers.AppController,
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
      })
      .state('app.home', {
        url: '/home',
        views: {
          'content': {
            templateUrl: 'templates/home.html',
            controller: app.controllers.HomeController,
            controllerAs: 'ctrl'
          }
        }
      });
      
      // if none of the above states are matched, use this as the fallback
      $urlRouterProvider.otherwise('/app/playlists');
    }
  }
}

app.Application.context.config(app.config.RouteConfig);
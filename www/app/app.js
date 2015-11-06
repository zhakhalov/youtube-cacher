/// <reference path="../../typings/tsd.d.ts" />
var app;
(function (app) {
    var Application = (function () {
        function Application() {
        }
        Object.defineProperty(Application, "context", {
            get: function () { return Application.__context; },
            enumerable: true,
            configurable: true
        });
        Application.$inject = [
            'ionic',
        ];
        Application.__context = angular.module('app', Application.$inject);
        return Application;
    })();
    app.Application = Application;
})(app || (app = {}));
/// <reference path="../app.ts" />
var app;
(function (app) {
    var controllers;
    (function (controllers) {
        var ApplicationController = (function () {
            function ApplicationController($scope, $ionModal, $timeout) {
                this.$scope = $scope;
                this.$ionModal = $ionModal;
                this.$timeout = $timeout;
            }
            ApplicationController.$inject = [
                '$scope',
                '$ionModal',
                '$timeout',
            ];
            return ApplicationController;
        })();
        controllers.ApplicationController = ApplicationController;
    })(controllers = app.controllers || (app.controllers = {}));
})(app || (app = {}));
app.Application.context.controller('app.controllers.ApplicationController', app.controllers.ApplicationController);
/// <reference path="../app.ts" />
var app;
(function (app) {
    var controllers;
    (function (controllers) {
        var PlaylistController = (function () {
            function PlaylistController($scope) {
                this.$scope = $scope;
            }
            PlaylistController.$inject = [
                '$scope',
            ];
            return PlaylistController;
        })();
        controllers.PlaylistController = PlaylistController;
    })(controllers = app.controllers || (app.controllers = {}));
})(app || (app = {}));
app.Application.context.controller('app.controllers.PlaylistController', app.controllers.PlaylistController);
/// <reference path="../app.ts" />
var app;
(function (app) {
    var controllers;
    (function (controllers) {
        var PlaylistsController = (function () {
            function PlaylistsController($scope) {
                this.$scope = $scope;
            }
            PlaylistsController.$inject = [
                '$scope',
            ];
            return PlaylistsController;
        })();
        controllers.PlaylistsController = PlaylistsController;
    })(controllers = app.controllers || (app.controllers = {}));
})(app || (app = {}));
app.Application.context.controller('app.controllers.PlaylistsController', app.controllers.PlaylistsController);
/// <reference path="app.ts" />
/// <reference path="controllers/application-controller.ts" />
/// <reference path="controllers/playlist-controller.ts" />
/// <reference path="controllers/playlists-controller.ts" />
var app;
(function (app) {
    var RouteConfig = (function () {
        function RouteConfig($stateProvider, $urlRouterProvider) {
            this.$stateProvider = $stateProvider;
            this.$urlRouterProvider = $urlRouterProvider;
            this.configRoutes();
        }
        RouteConfig.prototype.configRoutes = function () {
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
            this.$urlRouterProvider.otherwise('/app/playlists');
        };
        RouteConfig.$inject = [
            '$stateProvider',
            '$urlRouterProvider'
        ];
        return RouteConfig;
    })();
    app.RouteConfig = RouteConfig;
})(app || (app = {}));
app.Application.context.config(app.RouteConfig);
/// <reference path="app.ts" />
var app;
(function (app) {
    var Startup = (function () {
        function Startup($ionicPlatform) {
            this.$ionicPlatform = $ionicPlatform;
            this.$ionicPlatform.ready(this.configCordova);
        }
        Startup.prototype.configCordova = function () {
            if (window.cordova && window.cordova.plugins.Keyboard) {
                window.cordova.plugins.Keyboard.hideKeyboardAccessoryBar(true);
                window.cordova.plugins.Keyboard.disableScroll(true);
            }
            if (window.StatusBar) {
                window.StatusBar.styleDefault();
            }
        };
        Startup.$inject = [
            '$ionicPlatform'
        ];
        return Startup;
    })();
    app.Startup = Startup;
})(app || (app = {}));
app.Application.context.run(app.Startup);
//# sourceMappingURL=app.js.map
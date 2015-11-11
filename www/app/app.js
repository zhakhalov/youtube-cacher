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
            'ionic-material',
            'angularLoad',
        ];
        Application.__context = angular.module('app', Application.$inject);
        return Application;
    })();
    app.Application = Application;
})(app || (app = {}));
/// <reference path="app.ts" />
var app;
(function (app) {
    var Startup = (function () {
        function Startup($ionicPlatform, youtubePlaylistItems, angularLoad) {
            this.$ionicPlatform = $ionicPlatform;
            this.$ionicPlatform.ready(this.configCordova);
            this.youtubePlaylistItems = youtubePlaylistItems;
            this.youtubePlaylistItems.list({
                part: '',
                playlistId: 'PLCRghUq8yiQtGv9HP5GPqnVj8CwRVPyBZ',
            })
                .then(function (result) {
                console.log('success', result);
            }, function (result) {
                console.log('failure', result);
            });
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
            '$ionicPlatform',
            'youtubePlaylistItems',
            'angularLoad',
        ];
        return Startup;
    })();
    app.Startup = Startup;
})(app || (app = {}));
app.Application.context.run(app.Startup);
var app;
(function (app) {
    var config;
    (function (config) {
        var IonicConfig = (function () {
            function IonicConfig($ionicConfigProvider) {
                $ionicConfigProvider.backButton.previousTitleText(false);
                $ionicConfigProvider.backButton.text('');
                $ionicConfigProvider.backButton.icon('ion-android-arrow-back');
            }
            IonicConfig.$inject = [
                '$ionicConfigProvider',
            ];
            return IonicConfig;
        })();
        app.Application.context.config(IonicConfig);
    })(config = app.config || (app.config = {}));
})(app || (app = {}));
/// <reference path="../app.ts" />
var app;
(function (app) {
    var config;
    (function (config) {
        var RouteConfig = (function () {
            function RouteConfig($stateProvider, $urlRouterProvider) {
                $stateProvider
                    .state('app', {
                    url: '/app',
                    abstract: true,
                    templateUrl: 'templates/menu.html',
                    controller: 'app.controllers.ApplicationController as ctrl',
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
                            controller: 'app.controllers.PlaylistsController as ctrl',
                        }
                    }
                })
                    .state('app.single', {
                    url: '/playlists/:playlistId',
                    views: {
                        'menuContent': {
                            templateUrl: 'templates/playlist.html',
                            controller: 'app.controllers.PlaylistController as ctrl',
                        }
                    }
                });
                $urlRouterProvider.otherwise('/app/playlists');
            }
            RouteConfig.$inject = [
                '$stateProvider',
                '$urlRouterProvider'
            ];
            return RouteConfig;
        })();
        app.Application.context.config(RouteConfig);
    })(config = app.config || (app.config = {}));
})(app || (app = {}));
/// <reference path="../app.ts" />
/// <reference path="../models/login.model.ts" />
var app;
(function (app) {
    var controllers;
    (function (controllers) {
        var ApplicationController = (function () {
            function ApplicationController($scope, $ionicModal, $timeout, $ionicLoading) {
                var _this = this;
                this.$scope = $scope;
                this.$ionicModal = $ionicModal;
                this.$timeout = $timeout;
                this.$ionicModal.fromTemplateUrl('templates/login.html', {
                    scope: this.$scope
                })
                    .then(function (modal) {
                    _this.modal = modal;
                });
            }
            ApplicationController.prototype.openLoginModal = function () {
                this.modal.show();
            };
            ApplicationController.prototype.closeLoginModal = function () {
                this.modal.hide();
            };
            ApplicationController.prototype.submitLoginData = function (loginData) {
                this.$ionicLoading.show({ duration: 250 });
            };
            ApplicationController.$inject = [
                '$scope',
                '$ionicModal',
                '$timeout',
                '$ionicLoading',
            ];
            return ApplicationController;
        })();
        controllers.ApplicationController = ApplicationController;
        app.Application.context.controller('app.controllers.ApplicationController', controllers.ApplicationController);
    })(controllers = app.controllers || (app.controllers = {}));
})(app || (app = {}));
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
        app.Application.context.controller('app.controllers.PlaylistController', controllers.PlaylistController);
    })(controllers = app.controllers || (app.controllers = {}));
})(app || (app = {}));
/// <reference path="../app.ts" />
/// <reference path="../models/playlist.model.ts" />
var app;
(function (app) {
    var controllers;
    (function (controllers) {
        var PlaylistsController = (function () {
            function PlaylistsController($scope) {
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
            PlaylistsController.$inject = [
                '$scope',
            ];
            return PlaylistsController;
        })();
        controllers.PlaylistsController = PlaylistsController;
        app.Application.context.controller('app.controllers.PlaylistsController', controllers.PlaylistsController);
    })(controllers = app.controllers || (app.controllers = {}));
})(app || (app = {}));
/// <reference path="../../../typings/tsd.d.ts" />
/// <reference path="angular-load.ts" />
//# sourceMappingURL=app.js.map
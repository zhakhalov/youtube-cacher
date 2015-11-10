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
            'ngMaterial',
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
/// <reference path="../app.ts" />
var app;
(function (app) {
    var config;
    (function (config) {
        var IonicConfig = (function () {
            function IonicConfig($ionicConfigProvider) {
                $ionicConfigProvider.backButton.previousTitleText(false);
                $ionicConfigProvider.backButton.text('');
            }
            IonicConfig.$inject = [
                '$ionicConfigProvider'
            ];
            return IonicConfig;
        })();
        config.IonicConfig = IonicConfig;
    })(config = app.config || (app.config = {}));
})(app || (app = {}));
app.Application.context.config(app.config.IonicConfig);
var app;
(function (app) {
    var config;
    (function (config) {
        var MaterialDesignConfig = (function () {
            function MaterialDesignConfig($mdThemingProvider) {
                $mdThemingProvider.theme('default')
                    .primaryPalette('teal')
                    .accentPalette('blue-grey');
            }
            MaterialDesignConfig.$inject = [
                '$mdThemingProvider'
            ];
            return MaterialDesignConfig;
        })();
        config.MaterialDesignConfig = MaterialDesignConfig;
    })(config = app.config || (app.config = {}));
})(app || (app = {}));
app.Application.context.config(app.config.MaterialDesignConfig);
/// <reference path="../app.ts" />
/// <reference path="../models/login.model.ts" />
var app;
(function (app) {
    var controllers;
    (function (controllers) {
        var AppController = (function () {
            function AppController($scope, $ionicModal, $timeout) {
                var _this = this;
                this.$scope = $scope;
                this.$ionicModal = $ionicModal;
                this.$timeout = $timeout;
                this.$ionicModal.fromTemplateUrl('/templates/login.html', { scope: this.$scope })
                    .then(function (modal) {
                    _this.modal = modal;
                });
            }
            AppController.prototype.openLogin = function () {
                this.modal.show();
            };
            AppController.prototype.closeLogin = function () {
                this.modal.hide();
            };
            AppController.prototype.submitLogin = function (loginModel) {
                var _this = this;
                this.$timeout(function () {
                    _this.closeLogin();
                }, 1000);
            };
            AppController.$inject = [
                '$scope',
                '$ionicModal',
                '$timeout',
            ];
            return AppController;
        })();
        controllers.AppController = AppController;
    })(controllers = app.controllers || (app.controllers = {}));
})(app || (app = {}));
app.Application.context.controller('app.controllers.AppController', app.controllers.AppController);
/// <reference path="../app.ts" />
var app;
(function (app) {
    var controllers;
    (function (controllers) {
        var HomeController = (function () {
            function HomeController($scope) {
                this.$scope = $scope;
            }
            HomeController.prototype.click = function ($event) {
                console.log($event);
            };
            HomeController.prototype.swipeLeft = function () {
                console.log('swipe left');
            };
            HomeController.$inject = [
                '$scope',
            ];
            return HomeController;
        })();
        controllers.HomeController = HomeController;
    })(controllers = app.controllers || (app.controllers = {}));
})(app || (app = {}));
app.Application.context.controller('app.controllers.HomeController', app.controllers.HomeController);
/// <reference path="../app.ts" />
/// <reference path="../models/playlist.model.ts" />
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
    })(controllers = app.controllers || (app.controllers = {}));
})(app || (app = {}));
app.Application.context.controller('app.controllers.PlaylistsController', app.controllers.PlaylistsController);
/// <reference path="../app.ts" />
/// <reference path="../controllers/app.controller.ts" />
/// <reference path="../controllers/home.controller.ts" />
/// <reference path="../controllers/playlist.controller.ts" />
/// <reference path="../controllers/playlists.controller.ts" />
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
                $urlRouterProvider.otherwise('/app/playlists');
            }
            RouteConfig.$inject = [
                '$stateProvider',
                '$urlRouterProvider'
            ];
            return RouteConfig;
        })();
        config.RouteConfig = RouteConfig;
    })(config = app.config || (app.config = {}));
})(app || (app = {}));
app.Application.context.config(app.config.RouteConfig);
//# sourceMappingURL=app.js.map
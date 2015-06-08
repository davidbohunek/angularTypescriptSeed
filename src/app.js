/// <reference path='../typings/tsd' />
var app;
(function (app) {
    angular.module('app', [
        'ui.router'
    ])
        .config(function ($stateProvider, $urlRouterProvider) {
        $urlRouterProvider.otherwise("/login");
        $stateProvider
            .state('login', {
            url: "/login",
            templateUrl: "/pages/login/login.html",
            controller: 'LoginCtrl'
        })
            .state('app', {
            url: "/app",
            templateUrl: "/pages/app/app.html",
            controller: 'AppCtrl'
        })
            .state('app.home', {
            url: "/home",
            templateUrl: "/pages/app/home/home.html",
            controller: 'HomeCtrl'
        })
            .state('app.catalogue', {
            url: "/catalogue",
            templateUrl: "/pages/app/catalogue/catalogue.html",
            controller: 'CatalogueCtrl'
        })
            .state('admin', {
            url: "/admin",
            templateUrl: "/pages/admin/admin.html",
            controller: 'admin.AdminCtrl'
        })
            .state('admin.users', {
            url: "/users",
            templateUrl: "/pages/admin/users/users.html",
            controller: 'admin.UsersCtrl'
        });
    });
})(app || (app = {}));
//# sourceMappingURL=app.js.map
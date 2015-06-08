module app {

    export interface IAppScope {
        title: string
    };

    class AppController {
        public static $inject = [
            '$scope',
        ];

        constructor(private $scope: IAppScope) {
            this.$scope.title = "App root!";
        }
    }

    angular.module('app').controller('AppCtrl', AppController);
}

module app {

    export interface IHomeScope {
        title: string
    };

    class HomeController {
        public static $inject = [
            '$scope',
        ];

        constructor(private $scope: IHomeScope) {
            this.$scope.title = "Home sweet home!";
        }
    }

    angular.module('app').controller('HomeCtrl', HomeController);
}

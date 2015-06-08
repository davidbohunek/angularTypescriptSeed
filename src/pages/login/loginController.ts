module app {

    export interface ILoginScope {
        title: string
    };

    class LoginController {
        public static $inject = [
            '$scope',
        ];

        constructor(private $scope: ILoginScope) {
            this.$scope.title = "Hi there!";
        }
    }

    angular.module('app').controller('LoginCtrl', LoginController);
}

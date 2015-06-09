module app.admin {

    export interface IUsersScope {
        title: string
    };

    class UsersController {
        public static $inject = [
            '$scope',
        ];

        constructor(private $scope: IUsersScope) {
            this.$scope.title = "Edit users here!";
        }
    }

    angular.module('app').controller('admin.UsersCtrl', UsersController);
}

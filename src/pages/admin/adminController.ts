module app.admin {

    export interface IAdminScope {
        title: string
    };

    class AdminController {
        public static $inject = [
            '$scope',
        ];

        constructor(private $scope: IAdminScope) {
            this.$scope.title = "Admin root!";
        }
    }

    angular.module('app').controller('admin.AdminCtrl', AdminController);
}

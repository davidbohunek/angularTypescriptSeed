var app;
(function (app) {
    var admin;
    (function (admin) {
        ;
        var UsersController = (function () {
            function UsersController($scope) {
                this.$scope = $scope;
                this.$scope.title = "Edit users here!";
            }
            UsersController.$inject = [
                '$scope',
            ];
            return UsersController;
        })();
        angular.module('app').controller('admin.UsersCtrl', UsersController);
    })(admin = app.admin || (app.admin = {}));
})(app || (app = {}));
//# sourceMappingURL=usersController.js.map
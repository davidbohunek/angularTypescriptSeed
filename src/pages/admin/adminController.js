var app;
(function (app) {
    var admin;
    (function (admin) {
        ;
        var AdminController = (function () {
            function AdminController($scope) {
                this.$scope = $scope;
                this.$scope.title = "Admin root!";
            }
            AdminController.$inject = [
                '$scope',
            ];
            return AdminController;
        })();
        angular.module('app').controller('admin.AdminCtrl', AdminController);
    })(admin = app.admin || (app.admin = {}));
})(app || (app = {}));
//# sourceMappingURL=adminController.js.map
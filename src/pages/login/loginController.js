var app;
(function (app) {
    ;
    var LoginController = (function () {
        function LoginController($scope) {
            this.$scope = $scope;
            this.$scope.title = "Hi there!";
        }
        LoginController.$inject = [
            '$scope',
        ];
        return LoginController;
    })();
    angular.module('app').controller('LoginCtrl', LoginController);
})(app || (app = {}));
//# sourceMappingURL=loginController.js.map
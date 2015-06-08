var app;
(function (app) {
    ;
    var AppController = (function () {
        function AppController($scope) {
            this.$scope = $scope;
            this.$scope.title = "App root!";
        }
        AppController.$inject = [
            '$scope',
        ];
        return AppController;
    })();
    angular.module('app').controller('AppCtrl', AppController);
})(app || (app = {}));
//# sourceMappingURL=appController.js.map
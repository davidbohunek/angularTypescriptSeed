var app;
(function (app) {
    ;
    var HomeController = (function () {
        function HomeController($scope) {
            this.$scope = $scope;
            this.$scope.title = "Home sweet home!";
        }
        HomeController.$inject = [
            '$scope',
        ];
        return HomeController;
    })();
    angular.module('app').controller('HomeCtrl', HomeController);
})(app || (app = {}));
//# sourceMappingURL=HomeController.js.map
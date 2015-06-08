var app;
(function (app) {
    ;
    var CatalogueController = (function () {
        function CatalogueController($scope) {
            this.$scope = $scope;
            this.$scope.title = "Catalogue is here!";
        }
        CatalogueController.$inject = [
            '$scope',
        ];
        return CatalogueController;
    })();
    angular.module('app').controller('CatalogueCtrl', CatalogueController);
})(app || (app = {}));
//# sourceMappingURL=catalogueController.js.map
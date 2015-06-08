module app {

    export interface ICatalogueScope {
        title: string
    };

    class CatalogueController {
        public static $inject = [
            '$scope',
        ];

        constructor(private $scope: ICatalogueScope) {
            this.$scope.title = "Catalogue is here!";
        }
    }

    angular.module('app').controller('CatalogueCtrl', CatalogueController);
}

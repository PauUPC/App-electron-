var app = angular.module('tryton', ['ui.bootstrap', 'ngAnimate']);
//main controller
app.controller("mainController", function ($scope, $uibModal, productService, producte) {
    //test def list
    var prod = new producte("producte1", 1, 1, "tipus1", 1, 1, 1, 1);
    productService.addProducte(prod);
    prod = new producte("producte2", 2, 2, "tipus2", 1, 1, 1, 1);
    productService.addProducte(prod);
    prod = new producte("producte3", 3, 3, "tipus3", 1, 1, 1, 1);
    productService.addProducte(prod);
    prod = new producte("producte4", 4, 4, "tipus1", 1, 1, 1, 1);
    productService.addProducte(prod);
    prod = new producte("producte5", 5, 5, "tipus2", 1, 1, 1, 1);
    productService.addProducte(prod);
    prod = new producte("producte6", 6, 6, "tipus3", 1, 1, 1, 1);
    productService.addProducte(prod);
    //
    $scope.onClickNew = function () {
        $uibModal.open({
            templateUrl: 'modal.html'
            , controller: 'modalController'
            , controllerAs: '$ctrl'
        });
    };
});
//acordion controller
app.controller('accordionController', function ($scope, $uibModal, productService, sharedProduct) {
    $scope.oneAtATime = true;
    $scope.prods = productService.getProductes();
    $scope.delete = function (id) {
        productService.removeProducte(productService.IndexOf(id));
        $scope.$apply();
    };
    $scope.edit = function (id) {
        //set product shared id
        sharedProduct.setProducteID(id);
        $uibModal.open({
            templateUrl: 'modal.html'
            , controller: 'modalEditController'
            , controllerAs: '$ctrl'
        });
    };
});
//table controller
app.controller('tableController', function ($scope, $uibModal, productService, sharedProduct) {
    $scope.oneAtATime = true;
    $scope.prods = productService.getProductes();
    $scope.delete = function (id) {
        productService.removeProducte(productService.IndexOf(id));
        $scope.$apply();
    };
    $scope.edit = function (id) {
        //set product shared id
        sharedProduct.setProducteID(id);
        $uibModal.open({
            templateUrl: 'modal.html'
            , controller: 'modalEditController'
            , controllerAs: '$ctrl'
        });
    };
});
//modal input controller
app.controller("modalController", function ($uibModalInstance, productService, producte) {
    var $ctrl = this;
    $ctrl.closeModal = function () {
        $uibModalInstance.close();
    };
    $ctrl.saveModal = function () {
        var pr = new producte($ctrl.nom, $ctrl.pv, $ctrl.pc, $ctrl.tp, $ctrl.ct, $ctrl.um, $ctrl.cm, $ctrl.vd);
        productService.addProducte(pr);
        $uibModalInstance.close();
    };
});
//modal edit controller
app.controller("modalEditController", function ($scope, $uibModalInstance, productService, producte, sharedProduct) {
    var $ctrl = this;
    //get product from shared id
    var prodID = productService.IndexOf(sharedProduct.getProducteID());
    $scope.prod = productService.getProdcute(prodID);
    //init modal variables
    $ctrl.nom = $scope.prod.getNM();
    $ctrl.pc = $scope.prod.getPC();
    $ctrl.pv = $scope.prod.getPV();
    $ctrl.tp = $scope.prod.getTP();
    $ctrl.ct = $scope.prod.getCT();
    $ctrl.um = $scope.prod.getUM();
    $ctrl.vd = $scope.prod.getVD();
    $ctrl.cm = $scope.prod.getCM();
    //
    $ctrl.closeModal = function () {
        $uibModalInstance.close();
    };
    $ctrl.saveModal = function () {
        $scope.prod.setNM($ctrl.nom);
        $scope.prod.setPC($ctrl.pc);
        $scope.prod.setPV($ctrl.pv);
        $scope.prod.setTP($ctrl.tp);
        $scope.prod.setCT($ctrl.ct);
        $scope.prod.setUM($ctrl.um);
        $scope.prod.setVD($ctrl.vd);
        $scope.prod.setCM($ctrl.cm);
        productService.setProdcute($scope.prod, productService.IndexOf(prodID));
        $uibModalInstance.close();
    };
});
//confirm directive unused
app.directive('confirmationNeeded', function () {
    return {
        priority: 1
        , terminal: true
        , link: function (scope, element, attr) {
            var msg = attr.confirmationNeeded || "Are you sure?";
            var clickAction = attr.ngClick;
            element.bind('click', function () {
                if (window.confirm(msg)) {
                    scope.$eval(clickAction)
                }
            });
        }
    };
});
//resize src: http://plnkr.co/edit/DhwxNkDhmnIpdrKg29ax?p=preview
app.directive('browseContent', function ($window) {
    return {
        restrict: 'E'
        , template: '<div ng-include="templateUrl"></div>'
        , link: function (scope) {
            $window.onresize = function () {
                changeTemplate();
                scope.$apply();
            };
            changeTemplate();

            function changeTemplate() {
                var screenWidth = $window.innerWidth;
                if (screenWidth < 768) {
                    scope.templateUrl = 'acordeon.html';
                }
                else if (screenWidth >= 768) {
                    scope.templateUrl = 'table.html';
                }
            }
        }
    }
});
//
//
//

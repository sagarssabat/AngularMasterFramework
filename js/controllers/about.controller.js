(function () {
    'use strict';
    angular.module('myApp')
        .controller('abtCtrl', abtCtrl);

    abtCtrl.$inject = ['$scope'];

    function abtCtrl($scope) {
        $scope.message = "test done";
    }

})();
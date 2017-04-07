(function () {
    'use strict';
    angular.module('myApp')
        .controller('homeCtrl', homeCtrl);

    homeCtrl.$inject = ['$scope'];

    function homeCtrl($scope) {
        $scope.message = "test done from Home ";
        console.log("test deoe");
    }

})();
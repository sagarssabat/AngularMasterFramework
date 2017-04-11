(function () {
    'use strict';
    angular.module('myApp')
        .controller('abtCtrl', abtCtrl);

    abtCtrl.$inject = ['$scope'];

    function abtCtrl($scope) {
        $scope.message = "test done";

        // $scope.unplugData = {};
        // $scope.unplugDataSubmit = function (data) {
        //     console.log(data);
        //     NavigationService.unpluggedSubmit(data, function (data) {
        //         console.log(data);
        //     });
        //     $scope.unpluggedFormComplete = true;
        // };
        // $scope.aboutForm = {
        //     'fname': "Pratik"
        // }
    }
})();
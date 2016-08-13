angular.module('npsWise').controller('dashboardCtrl', function ($scope, dashboardService) {
    
    $scope.getNpsData = function () {
        dashboardService.getNpsData().then(function(response) {
            console.log(response);
        })
    }
    
    $scope.getNpsData();
    
})
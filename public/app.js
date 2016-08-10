angular.module('npsWise', ['ui.router']).config(function ($stateProvider, $urlRouterProvider) {
    
    $stateProvider.state('dashboard', {
        url: '/',
        templateUrl: 'dashboard/dashboard.html',
        controller: 'dashboardCtrl'
    });
    
    $urlRouterProvider.otherwise('/');
    
});
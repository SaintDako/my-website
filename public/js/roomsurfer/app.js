var roomsurferApp = angular.module('roomsurferApp', [
    'ngRoute',
    'roomsurferControllers',
    'roomsurferServices'
]);

roomsurferApp.config(['$routeProvider',
    function($routeProvider) {
    $routeProvider
        .when('/', {
            templateUrl: '../../views/rsIndex.html'
        })
        .when('/times/:room?', {
            templateUrl: '../../views/rsTimes.html',
            controller: 'timesCtrl'
        })
        .when('/rooms/:time?', {
            templateUrl: '../../views/rsRooms.html',
            controller: 'roomsCtrl'
        })
        .otherwise({
            redirectTo: '/'
        });
    }
]);
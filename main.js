var app = angular.module('Main', ['ngRoute']);

app.config(['$routeProvider', function($routeProvider){
    $routeProvider
    .when('/',{
        templateUrl: 'views/home.html',
        controller: 'MainContact'
    })
    .when('/contact',{
        templateUrl: 'views/contact.html',
        controller: 'ViewContact'
    })
}])

app.controller('MainContact',['$scope', '$location', '$log', function($scope, $location, $log){
    $scope.buttonOne = function() {
        $location.path('/contact');
        $log.debug('We are on contact view');
    }
}])

app.controller('ViewContact', ['$scope', '$location', '$log', function($scope, $location, $log){
    $scope.returnHome = function(){
        $location.path('/');
        $log.debug('We are on home view');
    }
}])
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

app.controller('MainContact',['$scope', '$location', function($scope, $location){
    $scope.buttonOne = function() {
        $location.path('/contact');
    }
}])

app.controller('ViewContact', ['$scope', '$location', function($scope, $location){
    $scope.returnHome = function(){
        $location.path('/');
    }
}])
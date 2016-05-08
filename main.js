var app = angular.module('Main', ['ngRoute']);

app.config(['$routeProvider', function($routeProvider){
    $routeProvider
    .when('/',{
        templateUrl: 'views/home.html',
        controller: 'MainContact'
    })
    .when('/contact/:id',{
        templateUrl: 'views/contact.html',
        controller: 'ViewContact'
    })
}])

app.service('myInfo', function(){
    
})

app.controller('MainContact',['$scope', '$location', '$log', 'myInfo', function($scope, $location, $log, myInfo){
    $scope.buttonOne = function() {
        $location.path('/contact');
        $log.debug('We are on contact view');
    }
    
        $scope.word = '';
        $scope.$watch('word', function(old, newer) {
            $log.info('Old:'+old);
            $log.info('New:'+newer);
        });
}])

app.controller('ViewContact', ['$scope', '$location', '$log', 'myInfo', function($scope, $location, $log, myInfo){
    $scope.returnHome = function(){
        $location.path('/');
        $log.debug('We are on home view');
    }
}])
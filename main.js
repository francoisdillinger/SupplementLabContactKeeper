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

app.service('myInfo', [function(){
    
     this.contactList = [];
 
}]);

app.controller('MainContact',['$scope', '$location', '$log', 'myInfo', function($scope, $location, $log, myInfo){
   
    $scope.contactList = myInfo.contactList;
    
    var clearInput = function(){
        $scope.name = '';
        $scope.num = '';
        $scope.email = '';
    };
    
    var anotherContact = function(){
        var contactInfo = {name: $scope.name, num: $scope.num, email: $scope.email};
        myInfo.contactList.unshift(contactInfo);
    }
    
    $scope.submit = function(name, num, email){
        if(name == undefined || name == '' ||
           num == undefined || num == '' ||
           email == undefined || email == ''){
            alert('Please fill in all fields.')
        }
        else{
            anotherContact()
            clearInput();
        }
    }
    $scope.details = function(){
         $location.path('/contact/{{contact.name}}');
    }
  
       
}])

app.controller('ViewContact', ['$scope', '$location', '$log', 'myInfo', '$routeParams', function($scope, $location, $log, myInfo, $routeParams){
    
    $scope.returnHome = function(){
        $location.path('/');
        $log.debug('We are on home view');
    } 
   
    var theName = $routeParams.id;
    var contactArray = myInfo.contactList;
    var person;
    
    for(var i = 0; i < contactArray.length; i++){
        var singleContact = contactArray[i];
        if(singleContact.name === theName){
            person = singleContact;
            break;
        }
    }
    $scope.contact = person;
     $log.debug(person);
}])
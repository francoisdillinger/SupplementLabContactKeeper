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
    //  var contact = {name : 'James'};
    
     
}]);

app.controller('MainContact',['$scope', '$location', '$log', 'myInfo', function($scope, $location, $log, myInfo){
   
    $scope.contactList = myInfo.contactList;
    var clearInput = function(){
        $scope.name = '';
        $scope.num = '';
        $scope.email = '';
    };
    
    var anotherContact = function(){
        // contact.name = $scope.name;
        // contact.num = $scope.num;
        // contact.email = $scope.email;
        
        var contactInfo = {name: $scope.name, num: $scope.num, email: $scope.email};
        console.log(contactInfo);
        myInfo.contactList.push(contactInfo);
    }
    
    $scope.submit = function(name, num, email){
        anotherContact()
        // console.log(name,num,email);
        console.log(myInfo.contactList);
        clearInput();
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
    
    // var contact = myInfo.contactList.name.theName;
    var contactArray = myInfo.contactList;
    // $scope.details = myInfo.contactList.anotherContact.contact;
    var person;
    for(var i = 0; i < contactArray.length; i++){
        var singleContact = contactArray[i];
        if(singleContact.name === theName){
            console.log(singleContact);
            // $scope.contactList = singleContact;
            person = singleContact;
            break;
        }
    }
    $scope.contact = person;
     console.log(person);
    // console.log(i);
    // $scope.contactList = myInfo.contactList[i];
}])
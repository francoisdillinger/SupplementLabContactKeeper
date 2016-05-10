// Naming the module
var app = angular.module('Main', ['ngRoute']);

// Configuring the routes
app.config(['$routeProvider', function($routeProvider){
    $routeProvider
    .when('/',{
        templateUrl: 'views/home.html',
        controller: 'MainContact'
    })
    // Using ':id' as a route parameter
    .when('/contact/:id',{
        templateUrl: 'views/contact.html',
        controller: 'ViewContact'
        // As a side note, when setting a controller for a particular view in routing DO NOT also 
        // add it to the HTML doc, it will digest the controller twice and repeat code over. This 
        // a pain, and a learning experience lol
    })
}])
// Declaring a custom service and the contact list array that will hold all the contacts
app.service('myInfo', [function(){
    
     this.contactList = [];
 
}]);
// Conroller for the Home view
app.controller('MainContact',['$scope', '$location', '$log', 'myInfo', function($scope, $location, $log, myInfo){
   
    $scope.contactList = myInfo.contactList;
    
    // Function that clears input values
    var clearInput = function(){
        $scope.name = '';
        $scope.num = '';
        $scope.email = '';
    };
    
    // Function that creates a new contact and pushes it the the beginning of the contact list
    var anotherContact = function(){
        var contactInfo = {name: $scope.name, num: $scope.num, email: $scope.email};
        myInfo.contactList.unshift(contactInfo);
    }
    
    // Function that checks to make sure inputs have valid data
    // If so it adds the new contact to the list in the service and clears inputs
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
}])

// Controller for the details view
app.controller('ViewContact', ['$scope', '$location', '$log', 'myInfo', '$routeParams', function($scope, $location, $log, myInfo, $routeParams){
    // Function returns you to the home page
    $scope.returnHome = function(){
        $location.path('/');
        $log.debug('We are on home view');
    } 
   
    // Variables used in the for loop
    var theName = $routeParams.id;
    var contactArray = myInfo.contactList;
    var person;
    
    // for loop that iterates over array, finds the one that matches the name value
    // and sets the value of 'person' variable to the matching object
    for(var i = 0; i < contactArray.length; i++){
        var singleContact = contactArray[i];
        if(singleContact.name === theName){
            person = singleContact;
            break;
        }
    }
    
    // Setting the value of the contact to the matching object from the array, 
    // showing all the details of the object, then logs it for debugging purposes
    $scope.contact = person;
     $log.debug(person);
}])
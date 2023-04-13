myApp = angular.module('myApp');

myApp.service('nameService', [ function (){

    var self = this;
    this.name = 'Hay Wire';
    this.nameLength = function (){
        return self.name.length;
    };
    
}]);
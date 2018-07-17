"use strict";

app.controller('MainController', ['$scope', 
    function ($scope){
        $scope.form = {
            carType: '',
            hasTurbo: true
        };

        $scope.disabledForm = {
            name: '',
            disabledName: false
        };

        $scope.submitForm = {
            id: '',
            hasId: false,
            error: undefined
        };
        $scope.submitFunc = function (){
            $scope.submitForm.error = undefined;

            if (!$scope.submitForm.hasId){
                $scope.submitForm.error = "error report !";
            }
            return;
        }
    }]);
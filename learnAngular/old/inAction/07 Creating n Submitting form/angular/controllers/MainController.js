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

        $scope.checkbox = {
            cb1: true,
            cb2: 'Y',
            cb3: 'Going'
        };

        $scope.dropdownArray = [
            {value: 1, name: 'This is a 1 (array)'},
            {value: 2, name: 'This is a 2 (array)'},
            {value: 3, name: 'This is a 3 (array)'},
            {value: 4, name: 'This is a 4 (array)'}
        ];

        $scope.default = {
            "manual": '2',
            "fromArray": $scope.dropdownArray[2],
            "singleValueFromArray": $scope.dropdownArray[1].value
        };
    }]);
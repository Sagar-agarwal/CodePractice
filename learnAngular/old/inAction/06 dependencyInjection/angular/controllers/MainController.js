

app.controller('MainController', ['$scope' , 'carFactory', 'supraService',
    function ($scope, carFactory, supraService){
        $scope.controllerName = 'MainController';
        $scope.car;
        $scope.message = supraService.getMessage() + ' - ' + supraService.hasTurbo;

        $scope.selectCar = function (){
            if ($scope.car){
                $scope.message = carFactory.getMessage($scope.car);
            }
        };

    }]);


app.controller("secController", ['$scope', 'carFactory', 'carService',
    function ($scope, carFactory, carService){
        $scope.controllerName = 'MainController';
        $scope.car;
        $scope.message = carService.getMessage();

        $scope.selectCar = function (){
            if ($scope.car){
                $scope.message = carFactory.getMessage($scope.car);
            }
        };

    }
]);
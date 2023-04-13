

app.controller('MainController', ['$scope' ,
    function ($scope){
        
        $scope.focusObj = {
            dropdown: 'not focused' ,
            input: 'not focused'
        };

        $scope.showAlert = function (origin){
            alert(origin + ' action was performed');
        };

        $scope.markFocus = function (obj){
            $scope.focusObj[obj] = 'marked focus';
        };

        $scope.mouse = {
            down: 0,
            up: 0,
            enter: 0,
            leave: 0,
            move: 0,
            over: 0
        };



    }]);
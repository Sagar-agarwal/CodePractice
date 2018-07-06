

app.factory('carFactory', [
    function (){
        var service = {};

        service.getMessage = function (car){
            var message = "No car selected";
            switch (car) {
                case "g37":
                    message = "this car is infinity";
                    break;
                case "jetta":
                    message = "This car is VW";
                    break;
                case "aston":
                    message = "this car is Martini";
                    break;
                case "A8":
                    message = "This car is Audi";
                    break;
                default:
                    message = "car not found";
                    break;
            };
            return message;
        };

    return service;
}]);




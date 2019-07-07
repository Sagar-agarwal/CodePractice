var carService = function (){

    carService.prototype.getMessage = function (){
        return "This message is from carService";
    }

};

app.service('carService', carService);


var supraService = function (){
    
    this.hasTurbo = "Yes, Of course !!!";

};

app.service('supraService', ['carService', supraService]);

supraService.prototype = Object.create(carService.prototype);



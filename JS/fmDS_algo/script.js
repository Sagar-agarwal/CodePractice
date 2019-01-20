function Building (floors){
    this.what = 'building';
    this.floors = floors;
    this.func = function (){
                    return 'this method';
                    };
};

Building.prototype = {
    countFloor: function (){
        return this.floors*5;
    },
};

var myHouse = new Building(3);
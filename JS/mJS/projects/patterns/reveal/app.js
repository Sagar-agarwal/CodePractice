/* 
// Module Pattern

const rev = (function (){
    let text = "hello world";

    let changeText = function (){
        var ele = document.querySelector('.class-h1');
        
        ele.textContent = text;
    };
    return {
        changeHeading: function(){
            changeText();
        }
    };
})();

rev.changeHeading();

*/

/*
// Revealing Pattern

const itemCtrl = (function () {
    var data = [];

    function add(item) {
        data.push(item);
    };

    function get(id) {
        return data.find(item => {
            return item.id === id;
        }
        );
    };

    return {
        add,
        get,
        data
    };
})();

*/

/*

// Singleton Pattern


var sp = (function (){
    var instance;

    var createInstance = function (){
        var obj = new Object({name: 'abc'});
        return obj;
    };


    return {
        getInstance: function (){
            if (!instance){
                return instance = createInstance();
            }
            else{
                return instance;
            }
        }
        
    };
})();

*/

function MemberFactory() {
    let member;

    this.createMember = function(name, type) {
        
        let memberType = type.toLowerCase();

        switch (memberType) {
            case 'basic':
                member = new BasicMembership(name);
                break;

            case 'standard':
                member = new StandardMembership(name);
                break;

            case 'gold':
                member = new GoldMembership(name);
                break;
            default:
                member = new BasicMembership(name);
                break;
        }
        
        member.type = type;
        member.name = name;
    };

    this.define = function (){
        console.log(`${this.name} / ${this.type} ${this.cost}`);
    };

    return member;
};


const BasicMembership = function (name){
    this.name = name;
    this.cost = '$10';
};

const StandardMembership = function (name){
    this.name = name;
    this.cost = '$10';
};

const GoldMembership = function (name){
    this.name = name;
    this.cost = '$10';
};




var mem = new MemberFactory();
var john = mem.createMember('John', 'Basic');
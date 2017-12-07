(function(global){
    "use strict";

    var Script = function () {
        return new Script.init();
    };

    Script.prototype = {
        
        someFunction : function (value) {
        // body...
        return console.log(value);
        },    
    };

    Script.init = function () {
        // body...
    };

    Script.prototype = Script.init.prototype = Script;   

    global.Script = global.$ = Script;

}(window));
function EasyHTTP (){
    this.http = new XMLHttpRequest();
};

EasyHTTP.prototype = {
    
    // HTTP GET
    get: function (url, callback){
        const self = this;

        this.http.open('GET', url, true);

        this.http.onload = function () {
            if (self.http.status == 200){
                callback(null, self.http.responseText);
            }
            else {
                callback('error: ' + self.http.status);
            }
        };

        this.http.send();
    },

    // HTTP POST
    post: function (url, data, callback) {
        const self = this;

        this.http.open('POST', url, true);
        this.http.setRequestHeader('Content-type', 'application/json');

        this.onload = function () {
            callback(null, self.http.responseText);
        };

        this.http.send(JSON.stringify(data));
    }
    
    // HTTP PUT
    
    // HTTP DELETE

};

const User = function(name) {
    this.name = name;
    this.chatroom = null;
};

User.prototype = {
    send: function(message, to) {
        this.chatroom.send(message, this, to);
    },

    receive: function(message, from) {
        console.log(`${from.name} to ${this.name}: ${message}`);
    }
};

const Chatroom = function() {
    let users = {};

    return {
        register: function(user) {
            users[user.name] = user;
            user.chatroom = this;
        },

        send: function(message, from, to) {
            if (to) {
                to.receive(message, from);
            } else {
                for (key in users) {
                    if (users[key] !== from) {
                        users[key].receive(message, from);
                    }
                }
            }
        }
    };
};

var jeff = new User("Jeff");
var brad = new User("Brad");
var sara = new User("Sara");

var chatroom = new Chatroom();
var chatroom2 = new Chatroom();
var chatroom3 = new Chatroom();

chatroom.register(jeff);
chatroom.register(brad);
chatroom.register(sara);

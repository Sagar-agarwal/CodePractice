function EventObserver() {
    this.observer = [];
}

EventObserver.prototype = {
    subscribe: function(fn) {
        this.observer.push(fn);

        console.log(`You are subscribed to ${fn.name}`);
    },

    unsubscribe: function(fn) {
        this.observer = this.observer.filter(function(item) {
            if (item !== fn) {
                return true;
            }
        });

        console.log(`You have unsubscribed to ${fn.name}`);
    },

    fire: function() {
        this.observer.forEach(function(item) {
            item.call();
        });
    }
};

var click = new EventObserver();
document.querySelector(".sub-ms").addEventListener("click", function() {
    click.subscribe(getCurrentMilliSeconds);
});

document.querySelector(".unsub-ms").addEventListener("click", function() {
    click.unsubscribe(getCurrentMilliSeconds);
});

document.querySelector(".fire").addEventListener("click", function() {
    click.fire(getCurrentMilliSeconds);
});

// Click function
const getCurrentMilliSeconds = function() {
    console.log(`Current MilliSeconds: ${new Date().getMilliseconds()}`);
};

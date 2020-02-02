// onLoad
$(function() {
    var budge = getData();
    if (budge) {
        $("#total").text(budge.amount);
        $("#limit").text(budge.limit);
    }

    $("#spend-amount").click(function() {
        var newAmount = $("#amount").val();
        $("#total").text();
        $("#amount").val("");
        // e.preventDefault();
    });
});

// Storage functions

setLimit = limit => {};

addAmount = amount => {
    var budge = getData();
    if (budge) {
        budge.amount = budge.amount + (amount - 0);
    } else {
        budge = {};
        budge.amount = amount - 0;
    }
    setData(budge);
    return JSON.stringify(budge.amount);
};

getData = () => {
    var budge = chrome.storage.sync.get(["budge"], budge => {
        if (budge) {
            return JSON.parse(budge);
        }
        return "undefined";
    });
};

setData = value => {
    var data = JSON.stringify(value);
    chrome.storage.sync.set(
        {
            budge: data
        },
        () => {}
    );
};

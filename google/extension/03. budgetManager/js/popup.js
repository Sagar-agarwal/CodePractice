// Declaring DOM Elements
var spendAmount = document.querySelector("#spend-amount");
var total = document.querySelector("#total");
var limit = document.querySelector("#limit");
var amount = document.querySelector("#amount");

// Attaching listeners
document.addEventListener(
    "DOMContentLoaded",
    (extensionLoaded = () => {
        var data = getData();
        setTotalAmount(data.totalAmount);
        setLimit(data.limit);
    })
);
spendAmount.addEventListener(
    "click",
    (spendAmountClicked = () => {
        var data = getData();

        var amount = document.querySelector("#amount");
        data.totalAmount = data.totalAmount + (amount.value - 0);
        setTotalAmount(data.totalAmount);
        setData(data);
        clearSpendField();
    })
);

// Utility functions

setTotalAmount = totalAmount => {
    total.innerText = totalAmount + " ";
};
setLimit = limitAmount => {
    limit.textContent = limitAmount;
};
clearSpendField = () => {
    amount.value = "";
};

// Storage API
storageKey = "budge";
setData = data => {
    chrome.storage.sync.set({ budge: JSON.stringify(data) });
};
getData = () => {
    data = checkIfDataExist(storageKey);
    if (data) {
        return JSON.parse(data);
    } else {
        data = {
            totalAmount: 0,
            limit: "NA",
            dataExists: true
        };
        return data;
    }
};

checkIfDataExist = key => {
    chrome.storage.sync.get([key], function(obj) {
        if (obj[key].dataExists) {
            return JSON.parse(data);
        } else return false;
    });
};

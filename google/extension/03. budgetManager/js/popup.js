// Declaring DOM Elements
var spendAmount = document.querySelector("#spend-amount");
var total = document.querySelector("#total");
var limit = document.querySelector("#limit");
var amount = document.querySelector("#amount");

/*
var data = getData();

// Attaching listeners
document.addEventListener(
    "DOMContentLoaded",
    (extensionLoaded = () => {
        setTotalAmount(data.totalAmount);
        setLimit(data.limit);
    })
);
spendAmount.addEventListener(
    "click",
    (spendAmountClicked = () => {
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
    chrome.storage.sync.set({ budge: data });
};

getData = () => {
    if (data) {
        return data;
    } else {
        checkIfDataExist(storageKey);
    }
};

checkIfDataExist = key => {
    chrome.storage.sync.get([key], function(obj) {
        console.log(obj[key]);
        if (obj[key]) {
            data = JSON.parse(obj[key]);
            console.log(data);
            return data;
        } else {
            return { totalAmount: 0, limit: 0 };
        }
    });
};
*/

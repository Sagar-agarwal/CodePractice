// Storage Controller
const StoreCtrl = (function() {
    const storeKey = "teraCalorie";
    return {
        deleteItemFromStore: function(item) {
            var storeItems = StoreCtrl.getAllItemsFromStore();

            storeItems = storeItems.filter(ele => ele.id != item.id);
            sessionStorage.setItem(storeKey, JSON.stringify(storeItems));
        },

        updateItemInStore: function(item) {
            var storeItems = StoreCtrl.getAllItemsFromStore();

            storeItems.forEach(function(ele) {
                if (ele.id === item.id) {
                    ele.name = item.name;
                    ele.calories = item.calories;
                }
            });
            sessionStorage.setItem(storeKey, JSON.stringify(storeItems));
        },

        addItemToStore: function(item) {
            var storeItems = StoreCtrl.getAllItemsFromStore();

            storeItems.push(item);
            sessionStorage.setItem(storeKey, JSON.stringify(storeItems));
        },

        clearStore: function() {
            sessionStorage.setItem(storeKey, JSON.stringify([]));
            UICtrl.refreshUI();
        },

        getAllItemsFromStore: function() {
            var storeItems = sessionStorage.getItem(storeKey);
            if (!storeItems || storeItems === "undefined") {
                storeItems = [];
                return storeItems;
            }
            storeItems = JSON.parse(storeItems);
            return storeItems;
        }
    };
})();

// Item Controller
const ItemCtrl = (function() {
    // Item Constructor
    const Item = function(id, name, calories) {
        this.id = id;
        this.name = name;
        this.calories = calories - 0;
    };

    // Data structure
    const data = {
        items: [],
        currentItem: null,
        totalCalories: 0
    };

    return {
        logData: function() {
            return data;
        },

        addItem: function(name, calories) {
            var ID = 0;
            var item = {};

            if (data.items.length > 0) {
                ID = data.items[data.items.length - 1].id + 1;
            }

            item = {
                name: name,
                calories: calories,
                id: ID
            };

            data.items.push(item);
            StoreCtrl.addItemToStore(item);
            return item;
        },

        getTotalCalories: function() {
            data.totalCalories = 0;
            data.items.forEach(function(item) {
                data.totalCalories = data.totalCalories + (item.calories - 0);
            });

            return data.totalCalories;
        },

        getItemByID: function(id) {
            var result = data.items.find(item => item.id === id);
            return result;
        },

        setCurrentItem: function(item) {
            data.currentItem = item;
        },

        getCurrentItem: function() {
            return data.currentItem;
        },

        updateExistingItem: function(item) {
            data.items.forEach(function(ele) {
                if (ele.id === item.id) {
                    ele.name = item.name;
                    ele.calories = item.calories;
                }
            });

            StoreCtrl.updateItemInStore(item);

            UICtrl.refreshUI();
        },

        deleteItem: function() {
            data.items = data.items.filter(item => item.id != data.currentItem.id);
            StoreCtrl.deleteItemFromStore(data.currentItem);
            data.currentItem = null;
            UICtrl.refreshUI();
        },

        initItemsOnLoad: function(items) {
            data.items = items;
        },

        getItems: function() {
            return StoreCtrl.getAllItemsFromStore();
        }
    };
})();

// UI Controller
const UICtrl = (function() {
    const UISelectors = {
        itemList: "#item-list",
        addBtn: ".add-btn",
        deleteBtn: ".delete-btn",
        updateBtn: ".update-btn",
        backBtn: ".back-btn",
        clearBtn: ".clear-btn",
        itemNameInput: "#item-name",
        itemCaloriesInput: "#item-calories",
        totalCalories: ".total-calories"
    };

    return {
        populateItemList: function(items) {
            let html = "";

            items.forEach(function(item) {
                html += `<li class="collection-item" id="item-${item.id}">
                <strong>${item.name}: </strong><em>${item.calories} calories</em>
                <a href="#" class="secondary-content"><i class="fa fa-pencil edit-list"></i></a>
            </li>`;
            });

            document.querySelector(UISelectors.itemList).innerHTML = html;
        },

        getUISelectors: function() {
            return UISelectors;
        },

        addListItem: function(item) {
            document.querySelector(UISelectors.itemList).style.display = "block";
            const li = document.createElement("li");
            li.className = "collection-item";
            li.id = `item-${item.id}`;
            li.innerHTML = `
                <strong>${item.name}: </strong><em>${item.calories} calories</em>
                <a href="#" class="secondary-content"><i class="fa fa-pencil edit-list"></i></a>
                `;

            document.querySelector(UISelectors.itemList).insertAdjacentElement("beforeend", li);
        },

        clearInputFields: function() {
            document.querySelector(UISelectors.itemNameInput).value = "";
            document.querySelector(UISelectors.itemCaloriesInput).value = "";
        },

        hideItemList: function() {
            document.querySelector(UISelectors.itemList).style.display = "none";
        },

        showTotalCalories: function(totalCalories) {
            document.querySelector(UISelectors.totalCalories).textContent = totalCalories;
        },

        clearEditState: function() {
            UICtrl.clearInputFields();

            document.querySelector(UISelectors.deleteBtn).style.display = "none";
            document.querySelector(UISelectors.updateBtn).style.display = "none";
            document.querySelector(UISelectors.backBtn).style.display = "none";
            document.querySelector(UISelectors.addBtn).style.display = "inline-block";
        },

        addItemToForm: function() {
            document.querySelector(UISelectors.itemNameInput).value = ItemCtrl.getCurrentItem().name;
            document.querySelector(UISelectors.itemCaloriesInput).value = ItemCtrl.getCurrentItem().calories;
            UICtrl.showEditState();
        },

        showEditState: function() {
            document.querySelector(UISelectors.deleteBtn).style.display = "inline-block";
            document.querySelector(UISelectors.updateBtn).style.display = "inline-block";
            document.querySelector(UISelectors.backBtn).style.display = "inline-block";
            document.querySelector(UISelectors.addBtn).style.display = "none";
        },

        refreshUI: function() {
            UICtrl.populateItemList(StoreCtrl.getAllItemsFromStore());
            var totalCalories = ItemCtrl.getTotalCalories();
            UICtrl.showTotalCalories(totalCalories);
            UICtrl.clearEditState();
        },

        getItemInput: function() {
            return {
                name: document.querySelector(UISelectors.itemNameInput).value,
                calories: document.querySelector(UISelectors.itemCaloriesInput).value
            };
        }
    };
})();

// App Controller
const App = (function(ItemCtrl, UICtrl) {
    const loadEventListeners = function() {
        const UISelectors = UICtrl.getUISelectors();

        document.querySelector(UISelectors.addBtn).addEventListener("click", itemAddSubmit);
        document.querySelector(UISelectors.itemList).addEventListener("click", itemUpdateSubmit);
        document.querySelector(UISelectors.backBtn).addEventListener("click", backToCreateState);
        document.querySelector(UISelectors.updateBtn).addEventListener("click", updatedItem);
        document.querySelector(UISelectors.deleteBtn).addEventListener("click", deleteItem);
        document.querySelector(UISelectors.clearBtn).addEventListener("click", clearAppDataAndState);
    };

    const clearAppDataAndState = function() {
        StoreCtrl.clearStore();
    };

    const itemAddSubmit = function(e) {
        const input = UICtrl.getItemInput();
        var newItem = ItemCtrl.addItem(input.name, input.calories);

        UICtrl.addListItem(newItem);
        UICtrl.clearInputFields();

        var totalCalories = ItemCtrl.getTotalCalories();
        UICtrl.showTotalCalories(totalCalories);

        e.preventDefault();
    };

    const itemUpdateSubmit = function(e) {
        if (e.target.classList.contains("edit-list")) {
            const listItemID = e.target.parentNode.parentNode.id;
            listItemIDArr = listItemID.split("-");

            const id = listItemIDArr[1] - 0;
            const itemToEdit = ItemCtrl.getItemByID(id);

            ItemCtrl.setCurrentItem(itemToEdit);
            UICtrl.addItemToForm();
        }
        e.preventDefault();
    };

    const backToCreateState = function(e) {
        UICtrl.clearEditState();
        ItemCtrl.setCurrentItem(null);
    };

    const updatedItem = function(e) {
        let updatedItem = UICtrl.getItemInput();
        updatedItem.id = ItemCtrl.getCurrentItem().id;

        ItemCtrl.updateExistingItem(updatedItem);
        e.preventDefault();
    };

    const deleteItem = function(e) {
        ItemCtrl.deleteItem();

        e.preventDefault();
    };

    return {
        init: function() {
            const items = StoreCtrl.getAllItemsFromStore();
            ItemCtrl.initItemsOnLoad(items);

            if (items.length === 0) {
                UICtrl.hideItemList();
            } else {
                UICtrl.populateItemList(items);
                var totalCalories = ItemCtrl.getTotalCalories();
                UICtrl.showTotalCalories(totalCalories);
            }

            UICtrl.clearEditState();
            loadEventListeners();
        }
    };
})(ItemCtrl, UICtrl);

App.init();

// Storage Controller

// Item Controller
const ItemCtrl = (function () {

    // Item Constructor
    const Item = function (id, name, calories) {
        this.id = id;
        this.name = name;
        this.calories = calories;
    };

    // Data structure
    const data = {
        items: [{
                id: 0,
                name: 'Steak dinner',
                calories: 1234
            },
            {
                id: 1,
                name: 'Oat meal',
                calories: 400
            },
            {
                id: 2,
                name: 'cookie',
                calories: 100
            }
        ],
        currentItem: null,
        totalCalories: 0
    };

    return {
        logData: function () {
            return data;
        }

    };

})();

// UI Controller
const UICtrl = (function () {
    return {};
})();

// App Controller
const App = (function (ItemCtrl, UICtrl) {

    return {
        init: function () {

        }
    };

})(ItemCtrl, UICtrl);

App.init();
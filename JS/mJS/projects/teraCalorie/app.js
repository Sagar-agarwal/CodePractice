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
        },
        getItems: function (){
            return data.items;
        }
    };

})();

// UI Controller
const UICtrl = (function () {
    const UISelectors = {
        itemList: '#item-list'
    };


    return {
        populateItemList: function (items){
            let html = '';

            items.forEach(function (item){
                html += `<li class="collection-item" id="item-${item.id}">
                <strong>${item.name}: </strong><em>${item.calories} calories</em>
                <a href="#" class="secondary-content"><i class="fa fa-pencil"></i></a>
            </li>`;
            });

            document.querySelector(UISelectors.itemList).innerHTML = html;
        }
    };
})();

// App Controller
const App = (function (ItemCtrl, UICtrl) {

    return {
        init: function () {
            const items = ItemCtrl.getItems();

            UICtrl.populateItemList(items);
        }
    };

})(ItemCtrl, UICtrl);

App.init();
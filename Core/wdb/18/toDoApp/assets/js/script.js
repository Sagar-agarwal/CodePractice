(function (){

    /*   DOM Queries   */

/*         Add ToDo Item TOP
        ***********************
*/
    /*  Add Item Input toggle - by ~ Plus,Minus  */
    // Hide Add ITem Input
    $('#plus-minus-icon').on('click', function (){
        $('#todo-add-input').fadeToggle(function (){
            $('#plus-minus-icon').toggleClass('fa-minus');
            $('#plus-minus-icon').toggleClass('fa-plus');
        });
        
    });

/*          Add ToDo Item
        *********************
*/

    /* Create todo item*/
    $('#todo-add-input').on('keypress', function (e){
        if (e.which === 13) {
            var newItem = $(this).val();
            $(this).val('');

            // create new item element
            var itemBegin = '<li class="todo-item"><span class="delete-item"><i class="fa fa-trash-o"></i></span>';
            var itemEnd = '</li>';
            $('ul#todo-list-ul').append(itemBegin + newItem + itemEnd);
        }
    });

    
/*          ToDo Item
        ******************
*/

    /*todo item clicked*/
    $('#todo-list-ul').on('click', 'li.todo-item', function(){
        $(this).toggleClass('item-clicked');
    });
    /*todo  delete icon clicked*/
    $('#todo-list-ul').on('click', 'span.delete-item', function (e){
        $(this).parent().fadeOut('400', function (){
            $(this).remove();
        });
        e.stopPropagation();
    });

}());
//submit function needed and update
    //what needs to happen, needs to be added to list(append)
$(function() {
    $('#js-shopping-list-form').submit(function(event) {
        event.preventDefault();
        const listItem = $('#shopping-list-entry').val();

        $('#shopping-list-entry').val('');

        $(".shopping-list").append(
            `<li>
                <span class="shopping-item">${listItem}</span>
                <div class="shopping-item-controls">
                    <button class="shopping-item-toggle">
                        <span class="button-label">check</span>
                    </button>
                    <button class="shopping-item-delete">
                        <span class="button-label">delete</span>
                    </button>
                </div>
            </li>`);
    });

    $('.shopping-list').on('click', '.shopping-item-toggle', function(event) {
        $(this).closest('li').find('.shopping-item').toggleClass('shopping-item__checked');
    });

    $('.shopping-list').on('click', '.shopping-item-delete', function (event) {
        $(this).closest('li').remove();
        });

});
//delete function to remove item from list (.remove?)
//if checked, put this class (.shopping-item__checked) 







//$('.shopping-list').empty(); //or .shopping-list-item?

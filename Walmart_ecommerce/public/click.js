$('#search').bind('click', function () {
    let searched_value = $('#find_items').val();
    $.ajax({
        url: '/api/search',
        type: 'POST',
        data: searched_value
    }).then(result => {
        console.log(result);
    }).catch(err => {
        console.log(err);
    })
});

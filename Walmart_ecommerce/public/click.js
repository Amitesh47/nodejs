
$('#search').bind('click', function () {
    let searched_value = $('#find_items').val();
    $.ajax({
        url: '/api/search',
        type: 'POST',
        data: {item:searched_value}
    }).then(result => {
        console.log(result.response);
        $('.row').html('');
        result.items.forEach((element,index) => {
            let short = element.shortDescription.substr(0,20);
            let card = `<div class="col-md-4  ">
            <div class="card text-white bg-secondary mb-3" style="max-width: 20rem;">
                <div class="card-header">
                    <button type="button" class="btn btn-warning" data-toggle="modal" data-target="#exampleModal">${element.name}</button>
                </div>
                <div class="card-body">
                    <img src=${element.thumbnailImage} alt="Smiley face" height="200" width="200">
                    <p id="less"> ${short}...</p>
                    <button type='button' class="btn btn-warning" data-toggle="modal" data-target="#exampleModal${index}">Show details</button>
                    
                </div>
            </div>
        </div>

        <div class="modal fade" id="exampleModal${index}" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
        <div class="modal-dialog" role="document">
            <div class="modal-content">
                <div class="modal-header">
                    <h5 class="modal-title" id="exampleModalLabel">${element.name}</h5>
                    <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                        <span aria-hidden="true">&times;</span>
                    </button>
                </div>
                <div class="modal-body">
                    ${element.shortDescription};
                </div>

            </div>
        </div>
    </div>`;

       // $('body').append(info);
       $('.row').append(card);
        });
        
    }).catch(err => {
        console.log(err);
    })


});

"use strict";
var j = jQuery.noConflict();

function unicID() {
    return Math.round(new Date().getTime() + (Math.random() * 100));
}

j(document).ready(function () {
    j('.btnaction').on('click', function name(params) {
        let boutonid2 = j(this).data('buttonid');
        console.log(boutonid2);
    });

    j('#launch').on('click', function () {
        let modalTitle = j(this).data('title');;
        j.ajax({
            type: "POST",
            url: 'lorem.html',
            //    data: "data",
            //    dataType: "dataType",
            //    success: function (response) {

            //    }
        }).fail(function (jqXHR, textStatus, errorThrown) {
            console.log(jqXHR);
            console.log(textStatus);
            console.log(errorThrown);
            console.log(jqXHR.status);
        }).done(function (data, textStatus, jqXHR) {
            console.log(data);
            console.log(textStatus);
            console.log(jqXHR);

            j('#myModalTitle').text(modalTitle);

            j('#mymodal .modal-body').html(data);
            j('#mymodal').modal('show');
        });
    });
});
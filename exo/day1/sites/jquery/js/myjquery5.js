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

    j('#launch').on('click', function() {
       j.ajax({
           type: "POST",
           url: 'lorem.html',
        //    data: "data",
        //    dataType: "dataType",
        //    success: function (response) {
               
        //    }
       }).fail(function(jqXHR, textStatus, errorThrown){
           console.log(jqXHR);
           console.log(textStatus);
           console.log(errorThrown);
           console.log(jqXHR.status);
       }); 
    });
});
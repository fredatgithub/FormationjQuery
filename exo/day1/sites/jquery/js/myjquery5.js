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

    // vidage des données de la fenetre
    j('#myModal').on('hide.bs.modal', function () {
        j('#mymodal .modal-body').empty();
        j('#myModalTitle').empty();
    });

    j('#launchPHP').on('click', function () {
        let myObj = {
            prenom: 'fred',
            nom: 'smith'
        };
        let modalTitle = j(this).data('title');;
        j.ajax({
            type: "POST",
            url: 'php/page.php',
            data: myObj,
            dataType: 'json'
            //    success: function (response) {

            //    }
        }).fail(function (jqXHR, textStatus, errorThrown) {
            console.log(jqXHR);
            console.log(textStatus);
            console.log(errorThrown);
            console.log(jqXHR.status);
        }).done(function (data, textStatus, jqXHR) {
            j('#mymodal').modal('show');
            setTimeout(function () {
                console.log(data);
                console.log(textStatus);
                console.log(jqXHR);

                j('#myModalTitle').text(modalTitle);
                let result = '';
                j.each(data, function (key, val) {
                    result += key + ' : ' + val + '<br />';
                });

                j('#mymodal .modal-body').html(result);

            }, 1000);
        });
    });

    j('#myModal').on('hide.bs.modal', function () {
        j('#myModalTitle').empty();
        j('#myModal .modal-body').html('<i class="fas fa-cog fa-spin fa-3x"></i>');
    });

    let user1 = {
        nom: 'Santa Klause'
    };

    let user2 = {
        nom: 'Casper'
    };


    j('.btnaction2').on('click', user1, greet);
    j('.btnaction2').on('click', user2, greet);

    j('#mySelect').select2({language: "fr"});

    //j('.gallery img').css('width', '200px').css('margin', '10px'); // mauvaise pratique

    j('.gallery').magnificPopup({
        delegate: 'a',
        type:'image',
        gallery:{
            enabled: true,
            navigateByImgClick: true
        }
    });
    
    new WOW().init();

    j().UItoTop({scrollSpeed: 500, easingType: 'easeInElastic'});


});

function greet(e) {
    console.log(e);
    alert('hello ' + e.data.nom);
};